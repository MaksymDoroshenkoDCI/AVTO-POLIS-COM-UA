import { Controller, Get, Param } from '@nestjs/common';
import { MtibuService } from './mtibu.service';

@Controller('mtibu')
export class MtibuController {
  constructor(private readonly mtibuService: MtibuService) {}

  @Get('check/:plate')
  async checkPolicy(@Param('plate') plate: string) {
    return this.mtibuService.checkPolicyByLicensePlate(plate);
  }
}
