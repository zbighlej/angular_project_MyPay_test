import {Component, OnInit} from '@angular/core';
import {Bill} from "../../../shared/models/bill.model";
import {BillService} from "../../../shared/services/bill.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'pay-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})

export class HistoryChartComponent implements OnInit {
  form: FormGroup;
arr = [];

//test arr
// data =[{
//   "name": "first",
//   "value": 100
//   },
//   {
//     "name": "second",
//     "value": 200
//   }];
  whater: number;
  gass: number;
  electricity: number;

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
        this.billService.getChartData(formData.month, formData.year)
          .subscribe((chart: Bill) => {
              this.whater = chart.whater;
              this.gass = chart.gass;
              this.electricity = chart.electricity;

             this.arr =[{
              "name": "whateritem",
              "value": this.whater
            },
              {
                "name": "gassitem",
                "value": this.gass
              },
              {
                "name": "electricityitem",
                "value": this.electricity
              }];

          });
  }

}
