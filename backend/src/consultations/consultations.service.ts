import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConsultationDto, UpdateConsultationStatusDto } from './dto/consultation.dto';

@Injectable()
export class ConsultationsService {
    constructor(private prisma: PrismaService) { }

    async create(createDto: CreateConsultationDto) {
        return this.prisma.consultationRequest.create({
            data: createDto,
        });
    }

    async findAll() {
        return this.prisma.consultationRequest.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateStatus(id: string, updateDto: UpdateConsultationStatusDto) {
        return this.prisma.consultationRequest.update({
            where: { id },
            data: { status: updateDto.status },
        });
    }

    async remove(id: string) {
        return this.prisma.consultationRequest.delete({ where: { id } });
    }
}
