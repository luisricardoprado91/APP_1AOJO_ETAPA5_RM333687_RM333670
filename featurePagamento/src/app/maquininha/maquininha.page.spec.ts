import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaquininhaPage } from './maquininha.page';

describe('MaquininhaPage', () => {
  let component: MaquininhaPage;
  let fixture: ComponentFixture<MaquininhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquininhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaquininhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
