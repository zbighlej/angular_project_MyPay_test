import {Component, OnInit} from '@angular/core';
import {BillService} from "../../shared/services/bill.service";
import {BillGet} from "../../shared/models/billget.model";

@Component({
  selector: 'pay-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.scss']
})
export class RecordPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }

}
