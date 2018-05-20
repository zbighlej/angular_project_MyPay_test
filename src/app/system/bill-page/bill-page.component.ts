import {Component, Injectable, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {BillService} from "../../shared/services/bill.service";
import {Bill} from "../../shared/models/bill.model";




@Component({
  selector: 'pay-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  form: FormGroup;
  whater: number;
  gass: number;
  electricity: number;
  sum: number;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'month': new FormControl(null, [Validators.required]),
      'year': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.billService.getBillData(formData.month, formData.year)
      .subscribe((bill: Bill) => {

        this.whater = bill.whater;
        this.gass = bill.gass;
        this.electricity = bill.electricity;
      });
  }
  onSum(){
      this.sum = this.whater + this.gass + this.electricity;
    }

  onReset(){
    this.whater =0;
    this.gass = 0;
    this.electricity = 0;
    this.sum = 0;
  }

}
