import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from 'src/app/accounts/accounts.component';
import { AgentsComponent } from 'src/app/agents/agents.component';
import { AirtelTransactionsComponent } from 'src/app/airtel-transactions/airtel-transactions.component';
import { ZamtelTransactionsComponent } from 'src/app/zamtel-transactions/zamtel-transactions.component';
import { MtnTransactionsComponent } from 'src/app/mtn-transactions/mtn-transactions.component';
import { ZescoTransactionsComponent } from 'src/app/zesco-transactions/zesco-transactions.component';
import { AgentKycComponent } from 'src/app/agent-kyc/agent-kyc.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/transactions' },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'agents', component: AgentsComponent },
  { path: 'transactions', component: TransactionsComponent},
  { path: 'airtel-transactions', component: AirtelTransactionsComponent},
  { path: 'zamtel-transactions', component: ZamtelTransactionsComponent},
  { path: 'mtn-transactions', component: MtnTransactionsComponent },
  { path: 'zesco-transactions', component: ZescoTransactionsComponent},
  { path: 'agents-kyc', component: AgentKycComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
