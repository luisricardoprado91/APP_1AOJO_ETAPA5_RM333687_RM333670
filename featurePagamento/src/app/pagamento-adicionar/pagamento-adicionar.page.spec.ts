import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentoAdicionarPage } from './pagamento-adicionar.page';

describe('PagamentoAdicionarPage', () => {
  let component: PagamentoAdicionarPage;
  let fixture: ComponentFixture<PagamentoAdicionarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoAdicionarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoAdicionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
