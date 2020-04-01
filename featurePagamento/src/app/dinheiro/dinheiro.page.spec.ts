import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DinheiroPage } from './dinheiro.page';

describe('DinheiroPage', () => {
  let component: DinheiroPage;
  let fixture: ComponentFixture<DinheiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinheiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DinheiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
