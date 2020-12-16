import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidemenuPage } from './slidemenu.page';

describe('SlidemenuPage', () => {
  let component: SlidemenuPage;
  let fixture: ComponentFixture<SlidemenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidemenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
