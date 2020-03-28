import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentoQRCodePage } from './pagamento-qrcode.page';

describe('PagamentoQRCodePage', () => {
  let component: PagamentoQRCodePage;
  let fixture: ComponentFixture<PagamentoQRCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoQRCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentoQRCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
