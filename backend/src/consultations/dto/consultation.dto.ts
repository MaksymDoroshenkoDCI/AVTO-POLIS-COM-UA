import { IsNotEmpty, IsOptional, IsEmail, IsString } from 'class-validator';

export class CreateConsultationDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    service?: string;

    @IsOptional()
    @IsString()
    message?: string;
}

export class UpdateConsultationStatusDto {
    @IsNotEmpty()
    @IsString()
    status: 'PENDING' | 'CONTACTED' | 'COMPLETED' | 'CANCELLED';
}
