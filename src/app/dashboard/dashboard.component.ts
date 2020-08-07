import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transactions } from '../models/transactions.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //transactonsService: any;
  isSpinning = true;
  amount: Number;
  transactionCount: Number;
  totalTransactions: Number;
  airtelamount: number;
  zamtelamount: number;
  zescoamount: number;
  transactionID: any;
  //value: number;

  constructor(
    private readonly transactionsService: TransactionsService
  ) { }

  ngOnInit(): void {
    this.transactionsService.getMTNTransactionsSum().subscribe(data => {
      this.amount = data[0].amount;
      console.log('value', data[0])
    
    });
    this.transactionsService.getAirtelTransactionsSum().subscribe(data => {
      this.airtelamount = data[0].amount;
      console.log('value', data[0])
      this.isSpinning = false;
    
    });
    this.transactionsService.getZamtelTransactionsSum().subscribe(data => {
      this.zamtelamount = data[0].amount;
      console.log('value', data[0])
      this.isSpinning = false;

    });
    this.transactionsService.getTransactionTotal().subscribe(data =>{
      this.totalTransactions = data[0].amount;
      console.log('value', data[0])
      this.isSpinning = false;
    })
    this.transactionsService.getTransactionCount().subscribe(data =>{
      this.transactionCount = data[0].amount;
      console.log('value', data[0])
      this.isSpinning = false;
    })


  }
  generatePieChart(){
    
  }
  
  public pieChart ={
    title: 'Revenue Breakdown',
    type: ChartType.PieChart,
    columns: ['Revenu Breakdown', 'Percentage'],
    data: [
      ['MTN', 30],
      ['Zamtel', 20],
      ['Airtel', 30],
      ['Zesco', 20]

    ]
  }

}

