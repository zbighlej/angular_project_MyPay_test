import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SystemRoutingModule} from "./system-routing.module";
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { RecordPageComponent } from './record-page/record-page.component';
import {SystemComponent} from "./system.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BillService} from "../shared/services/bill.service";
import { AddBillComponent } from './record-page/add-bill/add-bill.component';
import { BillMoneyComponent } from './bill-page/bill-money/bill-money.component';



@NgModule({
    imports: [CommonModule,
      SystemRoutingModule,
      ReactiveFormsModule,
      FormsModule],

    declarations: [BillPageComponent,
      HistoryPageComponent,
      RecordPageComponent,
      SystemComponent,
      AddBillComponent,
      BillMoneyComponent
    ],
  providers: [BillService]
})

export class SystemModule{

}
