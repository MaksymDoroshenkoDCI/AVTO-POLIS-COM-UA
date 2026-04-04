import { Controller, Get, Param } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get('info/:plate')
  getInfo(@Param('plate') plate: string) {
    return this.vehiclesService.getInfoByPlate(plate);
  }
}
