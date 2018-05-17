import { Component, OnInit, Input } from '@angular/core';
import {Year} from "../../../shared/models/year.model";
import {NgForm} from "@angular/forms";
import {BillSend} from "../../../shared/models/billsend.model";
import {BillService} from "../../../shared/services/bill.service";


@Component({
  selector: 'pay-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {


  constructor(private billService: BillService) { }
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    let { whater, gass, electricity, year, month} = form.value;
    if(whater < 0 || gass < 0 || electricity < 0){
      alert ("ERROR! MINUS!");
    }

    const bill = new BillSend(whater, gass, electricity, year, month);

    this.billService.sendBillData(bill)
      .subscribe((bill: BillSend) =>{
        form.reset();
      });
  }



}
