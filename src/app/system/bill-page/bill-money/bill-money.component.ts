import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'pay-bill-money',
  templateUrl: './bill-money.component.html',
  styleUrls: ['./bill-money.component.scss']
})
export class BillMoneyComponent implements OnInit {

  @Input()billWhater: number;
  @Input()billGass: number;
  @Input()billElectricity: number;

  moneyResult: number;

  constructor() { }
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    let {whater, gass, electricity} = form.value;
   this.moneyResult = (whater*this.billWhater)+(gass*this.billGass)+(electricity*this.billElectricity);
  }

}
