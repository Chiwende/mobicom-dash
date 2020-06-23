import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transactions } from 'src/app/models/transactions.model';

@Component({
  selector: 'app-zesco-transactions',
  templateUrl: './zesco-transactions.component.html',
  styleUrls: ['./zesco-transactions.component.scss']
})
export class ZescoTransactionsComponent implements OnInit {


  searchValue = '';
  visible = false;
  agentMSISDN: number;
  amount: number;
  transactionID: number;
  dateCreated: Date;
  service: string;
  commission_earned: number;
  companyname = 'mobicom';
  customerMSISDN: number;


  listOfData: Transactions[] = [];

  isVisible = false;
  isConfirmLoading = false;

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    // this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }

  showModal(data): void {
    console.log(data)
    this.agentMSISDN = data.MSISDN;
    this.amount = data.amount;
    this.transactionID = data.id;
    this.dateCreated = data.dateCreated
    
    
    if(data.serviceID == 25){
      this.service = "ZESCO"
    }else if (data.serviceID == 27){
      this.service = "Airtel Airtime"
    } else if(data.serviceID == 28){
      this.service = "MTN Airtime"
    } else if(data.serviceID == 29){
      this.service = "Zamtel Airtime"
    }

    this.isVisible = true;

    this.transactonsService.getZescoTransactionDetails(data.id).subscribe((dat) => {
      console.log('zesco transa details' +dat)
      this.customerMSISDN = dat[0]['customer_msisdn']
      console.log("commission" + dat[0]['commission_amount'])
      this.commission_earned = dat[0]['commission_amount']
      this.customerMSISDN = 0
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


  constructor(
    private readonly transactonsService: TransactionsService
  ) { }

  ngOnInit(): void {
    this.transactonsService.getAllZescoTransactions(this.companyname).subscribe((data) => {
      console.log(data)
      this.listOfData = data;
    })
  }
}
