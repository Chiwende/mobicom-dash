import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agents } from '../models/agents.model';
import { Accounts } from '../models/accounts.model';
import { Customers } from '../models/customers.model';

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://lipila-api.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(private http:HttpClient) { }

  registerAgent(firstname: string, lastname: string, agent_number: number, assigned_number: number, companyname: string, location: string){
     const payload = {
      "first_name": firstname,
      "last_name": lastname,
      "MSISDN": agent_number,
      "organisation": companyname,
      "location": location,
      "assigned_msisdn": assigned_number
     }

     return this.http.post(`${BASE_URL}/agents/register-agent`, payload);
  }

  fetchAllAgents(organisation: string){
    return this.http.get<Agents[]>(`${BASE_URL}/agents/list-of-agents/${organisation}`);
  }

  fetchAllAgentAccounts(companyname: string){
    return this.http.get<Accounts[]>(`${BASE_URL}/agents/agent-accounts/${companyname}`);
  }

  suspendAgent(number: number){
    return this.http.get<Agents[]>(`${BASE_URL}/agents/list-of-agents/${number}`);
  }

  getAgentDetails(number: number){
    return this.http.get<Accounts[]>(`${BASE_URL}/agents/get-account-details/${number}`);
  }

  mobicomKYC(number: number){
    return this.http.get<Agents[]>(`${BASE_URL}/agents/get-mobicom-kyc/${number}`);
  }

  hobbitonKYC(number: number){
    return this.http.get<Customers[]>(`${BASE_URL}/agents/get-agent/${number}`);
  }

  fetchCustomerDetails(number: string){
    return this.http.get<Customers[]>(`${BASE_URL}/agents/get-customer-details/${number}`);
  }
}
