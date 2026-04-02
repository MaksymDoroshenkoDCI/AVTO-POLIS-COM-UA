import { Test, TestingModule } from '@nestjs/testing';
import { MtibuService } from './mtibu.service';

describe('MtibuService', () => {
  let service: MtibuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MtibuService],
    }).compile();

    service = module.get<MtibuService>(MtibuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
