import { Component, OnInit } from '@angular/core';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';
import { TransactionsService } from '../services/transactions.service';
import { Transactions } from '../models/transactions.model'
import { NumberValueAccessor } from '@angular/forms';
import { TransactionDetails } from '../models/trans-details.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(
    private readonly transactonsService: TransactionsService
  ) { }

  isZescoTransaction = false;
  listOfData: Transactions[] = [];
  agentMSISDN: number;
  customerMSISDN: Number;
  amount: number;
  commission_earned: number;
  floatBalance: number;
  transactionID: number;
  customerMessage: 'message could not be retrieved';
  agentMessage = 'message could not beretrieved';
  service: string;
  dateCreated: string;
  zescoToken: string;
  transDetails: TransactionDetails[] = [];
  isVisible = false;
  isConfirmLoading = false;
  companyname = "mobicom"

  showModal(data): void {
    console.log(data)
    this.agentMSISDN = data.MSISDN;
    this.amount = data.amount;
    this.transactionID = data.id;
    this.dateCreated = data.dateCreated

    if(data.serviceID == 25){
      this.service = "ZESCO"
      this.isZescoTransaction = true
    }else if (data.serviceID == 27){
      this.service = "Airtel Airtime"
      this.isZescoTransaction = false
    } else if(data.serviceID == 28){
      this.service = "MTN Airtime"
      this.isZescoTransaction = false
    } else if(data.serviceID == 29){
      this.service = "Zamtel Airtime"
      this.isZescoTransaction = false
    }

    console.log(this.service)
    this.isVisible = true;

    this.transactonsService.getTransactionDetails(data.id).subscribe((dat) => {
      console.log(dat)
      console.log(dat['customer_msisdn'])
      this.customerMSISDN = dat[0]['customer_msisdn']
      console.log("commission" + dat[0]['commission_amount'])
      this.commission_earned = dat[0]['commission_amount']
      
    })

    this.transactonsService.getAgentMessage(data.id).subscribe((dat) => {
      const messageBody = dat
    })
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.transactonsService.getAllTransactions(this.companyname).subscribe((data) => {
      this.listOfData = data;
    })
  }


}
