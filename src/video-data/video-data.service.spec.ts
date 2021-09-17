import { Test, TestingModule } from '@nestjs/testing';
import { VideoDataService } from './video-data.service';

describe('VideoDataService', () => {
  let service: VideoDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoDataService],
    }).compile();

    service = module.get<VideoDataService>(VideoDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
