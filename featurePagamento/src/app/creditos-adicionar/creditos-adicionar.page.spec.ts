import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditosAdicionarPage } from './creditos-adicionar.page';

describe('CreditosAdicionarPage', () => {
  let component: CreditosAdicionarPage;
  let fixture: ComponentFixture<CreditosAdicionarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosAdicionarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditosAdicionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
