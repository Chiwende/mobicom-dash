import { Component, OnInit } from '@angular/core';
import { Customers } from '../models/customers.model';
import { AgentsService } from '../services/agents.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-agent-kyc',
  templateUrl: './agent-kyc.component.html',
  styleUrls: ['./agent-kyc.component.scss']
})
export class AgentKycComponent implements OnInit {
  listOfData: Customers[] = []
  dateFormat: string;
  companyname = 'mobicom';
  searchValue = '';
  visible = false;
  listOfDisplayData: Customers[] = [];
  numberSearch: number;
  displayListOfData: any[] = [];
  sortDate: Date[];

  constructor(
    private readonly agentsService: AgentsService,
    public datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.agentsService.fetchCustomerDetails(this.companyname).subscribe((data) => {
      console.log(data)
      this.listOfData = data;
      this.displayListOfData = this.listOfData;
    })

  }

  // reset(): void {
  //   this.searchValue = '';
  //   //this.search();
  // }

  searchNumber(value: string): void {
    console.log('Value ====>', value);
    if(value ==''|| !value){
      this.displayListOfData = this.listOfData;
    }else{
    this.displayListOfData = this.listOfData.filter(agents=>{
      return (
      agents.MSISDN.toString().includes(value)||
      agents.NRC.toString().includes(value)||
      agents.first_name.toString().includes(value)
    )
    })
    }
      console.log('displayListOfData', this.displayListOfData)
    }

  sortByDate(sortDate: Date){
  
    const fromDate = this.datePipe.transform(sortDate[0], "yyyy-MM-dd");
    const toDate = this.datePipe.transform(sortDate[1], "yyyy-MM-dd");
    
      if((fromDate === null)&& (toDate === null)){
        this.displayListOfData = this.listOfData;
      }
        console.log('fdate:', fromDate )
        console.log('tdate:', toDate )
        this.displayListOfData = this.listOfData.filter((transaction => {
          const compDate = this.datePipe.transform(transaction.dateCreated, "yyyy-MM-dd");
          console.log('td',compDate);
          return((fromDate <= compDate) && (compDate <= toDate))
          
          
        }))
        console.log(this.displayListOfData)
       
     }
    

}
