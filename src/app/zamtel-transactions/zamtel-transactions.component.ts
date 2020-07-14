import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { TransactionDetails } from 'src/app/models/trans-details.model';

@Component({
  selector: 'app-zamtel-transactions',
  templateUrl: './zamtel-transactions.component.html',
  styleUrls: ['./zamtel-transactions.component.scss']
})
export class ZamtelTransactionsComponent implements OnInit {
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
  numberSearch: number;

  listOfData: TransactionDetails[] = [];
  displayListOfData: TransactionDetails[] = [];

  isVisible = false;
  isConfirmLoading = false;

  reset(): void {
    this.searchValue = '';
    //this.search();
  }

  searchNumber(value: string): void {
    console.log('Value ====>', value);
    if(value ==''|| !value){
      this.displayListOfData = this.listOfData;
    }
      
  
    this.displayListOfData = this.listOfData.filter(transaction=>{
      return (
       transaction.agent_msisdn.toString().includes(value)||
      transaction.transaction_id.toString().includes(value)||
      transaction.customer_msisdn.toString().includes(value)
    )
    })
   
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
    this.transactonsService.getAllZamtelTransactions(this.companyname).subscribe((data) => {
      console.log(data)
      this.listOfData = data;
      this.displayListOfData = this.listOfData;
    })
  }

}
