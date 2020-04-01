import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditos-adicionar',
  templateUrl: './creditos-adicionar.page.html',
  styleUrls: ['./creditos-adicionar.page.scss'],
})
export class CreditosAdicionarPage implements OnInit {
barData = null;
createCode = null;
today = null;

constructor() { 
  
}
public create(){
this.createCode = this.barData;

}

  ngOnInit() {
  }

}
