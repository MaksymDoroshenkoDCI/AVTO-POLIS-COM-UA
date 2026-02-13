import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { CreateConsultationDto, UpdateConsultationStatusDto } from './dto/consultation.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('consultations')
export class ConsultationsController {
    constructor(private readonly consultationsService: ConsultationsService) { }

    @Post()
    create(@Body() createDto: CreateConsultationDto) {
        return this.consultationsService.create(createDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.consultationsService.findAll();
    }

    @Patch(':id/status')
    @UseGuards(JwtAuthGuard)
    updateStatus(@Param('id') id: string, @Body() updateDto: UpdateConsultationStatusDto) {
        return this.consultationsService.updateStatus(id, updateDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: string) {
        return this.consultationsService.remove(id);
    }
}
