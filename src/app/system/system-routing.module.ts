import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";


import {BillPageComponent} from "./bill-page/bill-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {RecordPageComponent} from "./record-page/record-page.component";
import {AuthGuard} from "../shared/services/auth.guard";
import {NotFoundComponent} from "../shared/components/not-found/not-found.component";

const routes: Routes = [
  {path: 'system', component: SystemComponent,canActivate: [AuthGuard], children: [
    {path: 'bill', component: BillPageComponent},
    {path: 'history', component: HistoryPageComponent},
    {path: 'record', component: RecordPageComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
