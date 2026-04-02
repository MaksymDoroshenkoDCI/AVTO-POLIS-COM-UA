import { Test, TestingModule } from '@nestjs/testing';
import { MtibuController } from './mtibu.controller';

describe('MtibuController', () => {
  let controller: MtibuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MtibuController],
    }).compile();

    controller = module.get<MtibuController>(MtibuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
