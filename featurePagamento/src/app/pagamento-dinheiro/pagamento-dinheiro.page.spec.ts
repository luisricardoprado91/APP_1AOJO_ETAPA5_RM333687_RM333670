import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentoDinheiroPage } from './pagamento-dinheiro.page';

describe('PagamentoDinheiroPage', () => {
  let component: PagamentoDinheiroPage;
  let fixture: ComponentFixture<PagamentoDinheiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoDinheiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoDinheiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
