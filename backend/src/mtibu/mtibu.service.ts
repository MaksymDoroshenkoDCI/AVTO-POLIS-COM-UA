import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class MtibuService {
  async checkPolicyByLicensePlate(licensePlate: string) {
    // Тут в майбутньому буде реальний HTTP запит до API МТСБУ
    // axios.get(`https://api.mtsbu.ua/...`, { params: { plate: licensePlate } })
    
    // Поки робимо мок (імітацію успішної відповіді):
    // Робимо невелику штучну затримку для реалізму
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Імітуємо, що номер "КА0000АА" не знайдено, щоб мати негативний сценарій
    if (licensePlate.toUpperCase() === 'КА0000АА') {
      throw new HttpException('Поліс не знайдено для даного авто', HttpStatus.NOT_FOUND);
    }

    return {
      success: true,
      data: {
        licensePlate: licensePlate.toUpperCase(),
        policyNumber: `EP-${Math.floor(Math.random() * 9000000) + 1000000}`,
        insurerName: 'СК "ТАС"',
        vin: 'WVGZZZ1KZ9W' + Math.floor(Math.random() * 900000),
        make: 'Volkswagen',
        model: 'Golf',
        year: 2015,
        startDate: new Date().toISOString(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        status: 'ACTIVE'
      }
    };
  }
}
