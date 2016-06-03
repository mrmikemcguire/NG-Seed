import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NGSeedAppComponent } from '../app/ng-seed.component';

beforeEachProviders(() => [NGSeedAppComponent]);

describe('App: NGSeed', () => {
  it('should create the app',
      inject([NGSeedAppComponent], (app: NGSeedAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-seed works!\'',
      inject([NGSeedAppComponent], (app: NGSeedAppComponent) => {
    expect(app.title).toEqual('ng-seed works!');
  }));
});
