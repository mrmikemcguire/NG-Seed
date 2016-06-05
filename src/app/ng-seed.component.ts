import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng-seed-app',
  templateUrl: 'ng-seed.component.html',
  styleUrls: ['ng-seed.component.css']
})
export class NGSeedAppComponent {
  title = 'These three lines use string interpolation';

  onTest() {
    return 1 === 1;
  }
  school = "Mullen";
}
