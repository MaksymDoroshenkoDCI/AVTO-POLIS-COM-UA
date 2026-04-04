import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class VehiclesService {
  async getInfoByPlate(plate: string) {
    // Імітація запиту до API МВС (Open Data)
    await new Promise((resolve) => setTimeout(resolve, 800));

    const db: Record<string, any> = {
      'KA0001AA': {
        make: 'TOYOTA',
        model: 'CAMRY',
        year: 2021,
        engineVolume: 2487,
        fuel: 'GASOLINE',
        type: 'SEDAN',
        registrationCity: 'КИЇВ'
      },
      'AA1111BB': {
        make: 'VOLKSWAGEN',
        model: 'GOLF',
        year: 2018,
        engineVolume: 1598,
        fuel: 'DIESEL',
        type: 'HATCHBACK',
        registrationCity: 'КИЇВ'
      },
      'BH7777OO': {
        make: 'TESLA',
        model: 'MODEL 3',
        year: 2022,
        engineVolume: 0,
        fuel: 'ELECTRIC',
        type: 'SEDAN',
        registrationCity: 'ОДЕСА'
      },
      'AE5555EX': {
         make: 'BMW',
         model: 'X5',
         year: 2020,
         engineVolume: 2998,
         fuel: 'PETROL',
         type: 'SUV',
         registrationCity: 'ДНІПРО'
      }
    };

    const vehicle = db[plate.toUpperCase().replace(/\s/g, '')];

    if (!vehicle) {
      throw new NotFoundException(`Автомобіль з номером ${plate} не знайдено в базі МВС`);
    }

    return {
      success: true,
      data: vehicle
    };
  }
}
