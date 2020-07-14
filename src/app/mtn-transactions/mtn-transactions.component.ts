import { Component, OnInit } from '@angular/core';
import { TransactionDetails } from 'src/app/models/trans-details.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DatePipe } from '@angular/common';
//import { DateRangeDTO } from 'src/app/models/dateRange.dto';
@Component({
  selector: 'app-mtn-transactions',
  templateUrl: './mtn-transactions.component.html',
  styleUrls: ['./mtn-transactions.component.scss']
})
export class MtnTransactionsComponent implements OnInit {

  searchValue = '';
  dateFormat: string;
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
  sortDate: Date[];


  listOfData: TransactionDetails[] = [];
  displayListOfData: any[] = [];

  isVisible = false;
  isConfirmLoading = false;
  TransactionsService: any;
  datepipe: any;

  reset(): void {
    this.searchValue = '';
    //this.searchNumber();
  }
  sortByDate(dateRange: Date[]){

    console.log('d ====>', dateRange);
    // const fromDate = this.datepipe.transform(dateRange[0], "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    // const toDate = this.datepipe.transform(dateRange[1], "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    if(dateRange==null||!dateRange){
      this.displayListOfData=this.listOfData
    }
    let displayListOfData: any[]=[];
    
    this.displayListOfData = this.listOfData.filter((transaction, index)=> {
      if (transaction.transaction_date >= dateRange.values[0] && transaction.transaction_date <= dateRange.values[1]) {
         
        this.displayListOfData.push(transaction);
      }
  })
      this.displayListOfData = displayListOfData;
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
    private readonly transactonsService: TransactionsService, public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.transactonsService.getAllMTNTransactions(this.companyname).subscribe((data) => {
      console.log(data)
      this.listOfData = data;
      this.displayListOfData = this.listOfData;
    })
  }

}
