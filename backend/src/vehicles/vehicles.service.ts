import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VehiclesService {
  constructor(private configService: ConfigService) {}

  async getInfoByPlate(plate: string) {
    const formattedPlate = plate.toUpperCase().replace(/\s/g, '');
    const apiKey = this.configService.get<string>('OPENDATABOT_API_KEY');

    // Якщо ключ не встановлено, використовуємо мок-дані для розробки
    if (!apiKey) {
      console.warn('OPENDATABOT_API_KEY not set. Using fallback mock data.');
      return this.getMockData(formattedPlate);
    }

    try {
      // Запит до Opendatabot API через нативний fetch (безпечніше)
      const response = await fetch(`https://opendatabot.ua/api/v3/transport?number=${formattedPlate}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json'
        }
      });

      if (response.status === 404) {
        throw new NotFoundException(`Автомобіль з номером ${plate} не знайдено`);
      }

      if (!response.ok) {
        throw new Error(`Opendatabot API error: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new NotFoundException(`Автомобіль з номером ${plate} не знайдено в базі`);
      }

      const vehicle = data[0]; 

      return {
        success: true,
        data: {
          make: vehicle.brand,
          model: vehicle.model,
          year: vehicle.year,
          engineVolume: vehicle.capacity || 0,
          fuel: vehicle.fuel || 'UNKNOWN',
          type: vehicle.body || 'UNKNOWN',
          registrationCity: vehicle.address || 'UNKNOWN',
          vin: vehicle.vin || 'HIDDEN'
        }
      };
    } catch (error) {
      console.error('Vehicle Search Error:', error.message);
      
      // Як запасний варіант (fallback) при помилці API чи мережі — мок дані
      try {
        return this.getMockData(formattedPlate);
      } catch (e) {
        throw error; // Якщо і в моках немає, кидаємо оригінальну помилку
      }
    }
  }

  private getMockData(plate: string) {
    const db: Record<string, any> = {
      'KA0001AA': { make: 'TOYOTA', model: 'CAMRY', year: 2021, engineVolume: 2487, fuel: 'GASOLINE', type: 'SEDAN', registrationCity: 'КИЇВ' },
      'AA1111BB': { make: 'VOLKSWAGEN', model: 'GOLF', year: 2018, engineVolume: 1598, fuel: 'DIESEL', type: 'HATCHBACK', registrationCity: 'КИЇВ' },
      'BH7777OO': { make: 'TESLA', model: 'MODEL 3', year: 2022, engineVolume: 0, fuel: 'ELECTRIC', type: 'SEDAN', registrationCity: 'ОДЕСА' },
      'AE5555EX': { make: 'BMW', model: 'X5', year: 2020, engineVolume: 2998, fuel: 'PETROL', type: 'SUV', registrationCity: 'ДНІПРО' }
    };

    const vehicle = db[plate];
    if (!vehicle) throw new NotFoundException(`Номер ${plate} не знайдено`);
    return { success: true, data: vehicle };
  }
}
