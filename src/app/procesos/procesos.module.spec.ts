import { ProcesosModule } from './procesos.module';

describe('ProcesosModule', () => {
  let procesosModule: ProcesosModule;

  beforeEach(() => {
    procesosModule = new ProcesosModule();
  });

  it('should create an instance', () => {
    expect(procesosModule).toBeTruthy();
  });
});
