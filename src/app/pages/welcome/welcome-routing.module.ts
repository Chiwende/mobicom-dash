import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { AccountsComponent } from 'src/app/accounts/accounts.component';
import { AgentsComponent } from 'src/app/agents/agents.component';
import { TransactionsComponent } from 'src/app/transactions/transactions.component';
import { AirtelTransactionsComponent } from 'src/app/airtel-transactions/airtel-transactions.component';
import { ZamtelTransactionsComponent } from 'src/app/zamtel-transactions/zamtel-transactions.component';
import { MtnTransactionsComponent } from 'src/app/mtn-transactions/mtn-transactions.component';
import { ZescoTransactionsComponent } from 'src/app/zesco-transactions/zesco-transactions.component';
import { AgentKycComponent } from 'src/app/agent-kyc/agent-kyc.component';

const routes: Routes = [
  //{ path: '', component: WelcomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
