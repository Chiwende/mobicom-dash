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
import { DashboardComponent} from './dashboard/dashboard.component';
// import {WelcomeComponent}from 'src/app/pages/welcome/welcome.component';
import { from } from 'rxjs';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: "login", component: LoginComponent},
  { path: "registration", component: RegistrationFormComponent},
  { path: "navbar", component: LayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    
  { path: "transactions", pathMatch: "full", component: TransactionsComponent },
  { path: "dashboard", pathMatch: "full", component: DashboardComponent},
  { path: "accounts", pathMatch: "full", component: AccountsComponent},
  { path: "agents", pathMatch: "full", component: AgentsComponent },
  // { path: 'transactions', component: TransactionsComponent},
  { path: "airtel-transactions", pathMatch: "full", component: AirtelTransactionsComponent},
  { path: "zamtel-transactions", pathMatch: "full", component: ZamtelTransactionsComponent},
  { path: "mtn-transactions", pathMatch: "full", component: MtnTransactionsComponent },
  { path: "zesco-transactions", pathMatch: "full", component: ZescoTransactionsComponent},
  { path: "agents-kyc", pathMatch: "full", component: AgentKycComponent },
  ]},
  
  // {path: "navbar",
  //   loadChildren: () =>
  //   import("src/app/app.module").then(
  //     (m) => m.AppModule
  //   )  
  // }
  
  //{ path: 'Welcome', component: WelcomeComponent},
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
