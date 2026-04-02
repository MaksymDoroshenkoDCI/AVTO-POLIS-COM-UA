import { Module } from '@nestjs/common';
import { MtibuService } from './mtibu.service';
import { MtibuController } from './mtibu.controller';

@Module({
  providers: [MtibuService],
  controllers: [MtibuController]
})
export class MtibuModule {}
