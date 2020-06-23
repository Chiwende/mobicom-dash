import { Component, OnInit } from '@angular/core';
import { Customers } from '../models/customers.model';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-agent-kyc',
  templateUrl: './agent-kyc.component.html',
  styleUrls: ['./agent-kyc.component.scss']
})
export class AgentKycComponent implements OnInit {
  listOfData: Customers[] = []
  companyname = 'mobicom';
  searchValue = '';
  visible = false;
  listOfDisplayData: Customers[] = []

  constructor(
    private readonly agentsService: AgentsService,
  ) { }

  ngOnInit(): void {
    this.agentsService.fetchCustomerDetails(this.companyname).subscribe((data) => {
      console.log(data)
      this.listOfData = data;
    })

    if (this.searchValue == '') {
      this.listOfData = this.listOfDisplayData
    } else {
      this.listOfDisplayData = [...this.listOfData];
    }
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: Customers) => item.MSISDN.indexOf(this.searchValue) !== -1);
  }

}
