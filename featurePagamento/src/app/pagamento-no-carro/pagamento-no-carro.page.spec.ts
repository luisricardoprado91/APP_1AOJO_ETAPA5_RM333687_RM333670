import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentoNoCarroPage } from './pagamento-no-carro.page';

describe('PagamentoNoCarroPage', () => {
  let component: PagamentoNoCarroPage;
  let fixture: ComponentFixture<PagamentoNoCarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoNoCarroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoNoCarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
