import { Test, TestingModule } from '@nestjs/testing';
import { TodoapiService } from './todoapi.service';

describe('TodoapiService', () => {
  let service: TodoapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoapiService],
    }).compile();

    service = module.get<TodoapiService>(TodoapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
