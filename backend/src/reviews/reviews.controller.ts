import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() data: any) {
    return this.reviewsService.create(data);
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get('published')
  findPublished() {
    return this.reviewsService.findPublished();
  }

  @Get('seed')
  seed() {
    return this.reviewsService.seed();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.reviewsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
