import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData, DatePipe } from '@angular/common';
import en from '@angular/common/locales/en';
import { AntdModule } from './modules/antd/antd.module';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AgentsComponent } from './agents/agents.component';
import { AirtelTransactionsComponent } from './airtel-transactions/airtel-transactions.component';
import { ZamtelTransactionsComponent } from './zamtel-transactions/zamtel-transactions.component';
import { MtnTransactionsComponent } from './mtn-transactions/mtn-transactions.component';
import { ZescoTransactionsComponent } from './zesco-transactions/zesco-transactions.component';
import { AgentKycComponent } from './agent-kyc/agent-kyc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { LayoutComponent } from './layout/layout.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
//import { LayoutModule } from '@angular/cdk/layout';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountsComponent,
    TransactionsComponent,
    AgentsComponent,
    AirtelTransactionsComponent,
    ZamtelTransactionsComponent,
    MtnTransactionsComponent,
    ZescoTransactionsComponent,
    AgentKycComponent,
    DashboardComponent,
    RegistrationFormComponent,
    LayoutComponent
    
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntdModule,
    MaterialModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    AngularFireAuthModule,
    //AngularFireAuth,
    AngularFireModule.initializeApp(environment.firebase),
    //LayoutModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
