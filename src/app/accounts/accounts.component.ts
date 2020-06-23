import { Component, OnInit } from '@angular/core';
import { Accounts } from '../models/accounts.model';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  listOfData: Accounts[] = []
  companyname = "mobicom"

  constructor(
    private readonly agentsService: AgentsService,
  ) { }

  ngOnInit(): void {
    this.agentsService.fetchAllAgentAccounts(this.companyname).subscribe((data) => {
      console.log(data)
      this.listOfData = data;
    })
  }

}
