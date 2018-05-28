import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Bill} from "../models/bill.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {BillSend} from "../models/billsend.model";
import {Year} from "../models/year.model";


@Injectable()
export class BillService {
  constructor(private http: Http) {
  }


  getBillData(month: string, year: number): Observable<Bill> {
    return this.http.get(`http://localhost:3000/${month}${year}`)           /// bill?month=${month}&year=${year}
      .map((response: Response) => response.json());
    // .map((bill: Bill[]) => bill [0] ? bill[0] : undefined );
  }

  sendBillData(bill: BillSend): Observable<BillSend> {
    return this.http.post(`http://localhost:3000/${bill.month}${bill.year}`, bill);  //  bill` , bill
  }

  //  updateBillData(billUpdate) :Observable<BillUpdate>{
  //    return this.http.put(`http://localhost:3000/${billUpdate.month}${billUpdate.year}`, billUpdate);   //  ${billUpdate.month}year=${billUpdate.year}
  // }
// }


  getChartData(month: number, year: number): Observable<Year> {
    return this.http.get(`http://localhost:3000/${month}${year}`)
      .map((response: Response) => response.json());
  }


}
