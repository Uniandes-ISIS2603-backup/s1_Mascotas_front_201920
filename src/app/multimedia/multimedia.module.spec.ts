import { MultimediaModule } from './multimedia.module';

describe('MultimediaModule', () => {
  let multimediaModule: MultimediaModule;

  beforeEach(() => {
    multimediaModule = new MultimediaModule();
  });

  it('should create an instance', () => {
    expect(multimediaModule).toBeTruthy();
  });
});
