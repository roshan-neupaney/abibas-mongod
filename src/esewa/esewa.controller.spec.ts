import { Test, TestingModule } from '@nestjs/testing';
import { EsewaController } from './esewa.controller';
import { EsewaService } from './esewa.service';

describe('EsewaController', () => {
  let controller: EsewaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsewaController],
      providers: [EsewaService],
    }).compile();

    controller = module.get<EsewaController>(EsewaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
