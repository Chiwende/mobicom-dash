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
  isSpinning = true;
  amount: number;
  transactionCount: Number;
  totalTransactions: Number;
  airtelamount: number;
  zescoTotal: number
  zamtelamount: number;
  transactionID: any;


  constructor(
    private readonly transactionsService: TransactionsService
  ) { }

  ngOnInit(): void {
      this.data();
    this.pieChart ={
      title: 'Revenue Breakdown',
      type: ChartType.PieChart,
      columns: ['Revenu Breakdown', 'Percentage'],
      data: [
        ['MTN', this.amount],
        ['Zamtel', this.zamtelamount],
        ['Airtel', this.airtelamount],
        ['Zesco', this.zescoTotal]
  
      ]
    }
    


  }
  data(){
    this.transactionsService.getMTNTransactionsSum().subscribe(data => {
      this.amount = data[0].amount;
      console.log('value', data[0])
      this.pieChart ={
        title: 'Revenue Breakdown',
        type: ChartType.PieChart,
        columns: ['Revenu Breakdown', 'Percentage'],
        data: [
          ['MTN', this.amount],
          ['Zamtel', this.zamtelamount],
          ['Airtel', this.airtelamount],
          ['Zesco', this.zescoTotal]
    
        ]
      }
    
    });
    this.transactionsService.getAirtelTransactionsSum().subscribe(data => {
      this.airtelamount = data[0].amount;
      console.log('airtel amount', this.airtelamount)
      this.isSpinning = false;
      this.pieChart ={
        title: 'Revenue Breakdown',
        type: ChartType.PieChart,
        columns: ['Revenu Breakdown', 'Percentage'],
        data: [
          ['MTN', this.amount],
          ['Zamtel', this.zamtelamount],
          ['Airtel', this.airtelamount],
          ['Zesco', this.zescoTotal]
    
        ]
      }
    
    });
    this.transactionsService.getZamtelTransactionsSum().subscribe(data => {
      this.zamtelamount = data[0].amount;
      console.log('value', data[0])
      this.isSpinning = false;
      this.pieChart ={
        title: 'Revenue Breakdown',
        type: ChartType.PieChart,
        columns: ['Revenu Breakdown', 'Percentage'],
        data: [
          ['MTN', this.amount],
          ['Zamtel', this.zamtelamount],
          ['Airtel', this.airtelamount],
          ['Zesco', this.zescoTotal]
    
        ]
      }

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
    this.transactionsService.getZescoTransactionSum().subscribe(data =>{
      this.zescoTotal = data[0].amount;
      console.log('value', data[0])
      this.isSpinning = false;
      this.pieChart ={
        title: 'Revenue Breakdown',
        type: ChartType.PieChart,
        columns: ['Revenu Breakdown', 'Percentage'],
        data: [
          ['MTN', this.amount],
          ['Zamtel', this.zamtelamount],
          ['Airtel', this.airtelamount],
          ['Zesco', this.zescoTotal]
    
        ]
      }
      
    })
    console.log('obj', this.pieChart)
  }
  
  public pieChart ={
    title: 'Revenue Breakdown',
    type: ChartType.PieChart,
    columns: ['Revenu Breakdown', 'Percentage'],
    data: [
      ['MTN', this.amount],
      ['Zamtel', this.zamtelamount],
      ['Airtel', this.airtelamount],
      ['Zesco', this.zescoTotal]

    ]
  }
  

}

