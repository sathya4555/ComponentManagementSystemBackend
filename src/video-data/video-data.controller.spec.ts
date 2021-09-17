import { Test, TestingModule } from '@nestjs/testing';
import { VideoDataController } from './video-data.controller';

describe('VideoDataController', () => {
  let controller: VideoDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoDataController],
    }).compile();

    controller = module.get<VideoDataController>(VideoDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
