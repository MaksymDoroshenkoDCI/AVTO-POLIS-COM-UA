import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class VehiclesService {
  constructor(private configService: ConfigService) {}

  async getInfoByPlate(plate: string) {
    const formattedPlate = plate.toUpperCase().replace(/\s/g, '');
    const apiKey = this.configService.get<string>('OPENDATABOT_API_KEY');

    // Якщо ключ не встановлено, використовуємо мок-дані для розробки
    if (!apiKey) {
      console.warn('OPENDATABOT_API_KEY non set. Using fallback mock data.');
      return this.getMockData(formattedPlate);
    }

    try {
      // Запит до Opendatabot API
      const response = await axios.get(`https://opendatabot.ua/api/v3/transport?number=${formattedPlate}`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });

      if (!response.data || response.data.length === 0) {
        throw new NotFoundException(`Автомобіль з номером ${plate} не знайдено в базі`);
      }

      const vehicle = response.data[0]; // Беремо перший знайдений запис

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
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        throw new NotFoundException(`Автомобіль з номером ${plate} не знайдено`);
      }
      console.error('Opendatabot API Error:', error.message);
      
      // Як запасний варіант (fallback) при помилці API — мок дані, щоб сайт не "падав"
      return this.getMockData(formattedPlate);
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
