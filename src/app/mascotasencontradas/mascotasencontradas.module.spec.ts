import { MascotasencontradasModule } from './mascotasencontradas.module';

describe('MascotasencontradasModule', () => {
  let mascotasencontradasModule: MascotasencontradasModule;

  beforeEach(() => {
    mascotasencontradasModule = new MascotasencontradasModule();
  });

  it('should create an instance', () => {
    expect(mascotasencontradasModule).toBeTruthy();
  });
});
