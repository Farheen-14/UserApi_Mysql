import { Test, TestingModule } from '@nestjs/testing';
import { TodoapiController } from './todoapi.controller';
import { TodoapiService } from './todoapi.service';

describe('TodoapiController', () => {
  let controller: TodoapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoapiController],
      providers: [TodoapiService],
    }).compile();

    controller = module.get<TodoapiController>(TodoapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
