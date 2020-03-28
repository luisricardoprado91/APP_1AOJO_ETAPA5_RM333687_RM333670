import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescontosPage } from './descontos.page';

describe('DescontosPage', () => {
  let component: DescontosPage;
  let fixture: ComponentFixture<DescontosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescontosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
