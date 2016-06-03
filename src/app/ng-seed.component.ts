import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng-seed-app',
  templateUrl: 'ng-seed.component.html',
  styleUrls: ['ng-seed.component.css']
})
export class NGSeedAppComponent {
  title = 'Data Binding Works!';

  onTest() {
    return 1 === 1;
  }
  school = "Mullen";
}
