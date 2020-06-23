import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactions } from '../models/transactions.model';
import { Observable } from 'rxjs';
import { TransactionDetails } from '../models/trans-details.model';
import { Messages } from '../models/messages.model';
import { ZescoTransactionDetails } from '../models/zesco-transactions.model';

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://lipila-api.herokuapp.com";
// https://lipila-api.herokuapp.com/

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getAllTransactions(companyname: string){
    return this.http.get<Transactions[]>(`${BASE_URL}/transactions/all-transactions/${companyname}`);
  }

  getAllZescoTransactions(companyname: string){
    return this.http.get<Transactions[]>(`${BASE_URL}/transactions/zesco-transactions/${companyname}`);
  }

  getAllAirtelTransactions(companyname: string){
    return this.http.get<TransactionDetails[]>(`${BASE_URL}/transactions/airtel-transactions/${companyname}`);
  }

  getAllMTNTransactions(companyname: string){
    return this.http.get<TransactionDetails[]>(`${BASE_URL}/transactions/mtn-transactions/${companyname}`);
  }

  getAllZamtelTransactions(companyname: string){
    return this.http.get<TransactionDetails[]>(`${BASE_URL}/transactions/zamtel-transactions/${companyname}`);
  }

  // Change to payload
  getTransactionDetails(transactionID: any){
    return this.http.get<TransactionDetails[]>(`${BASE_URL}/transactions/get-airtime-transactions/${transactionID}`);
  }

  getZescoTransactionDetails(transactionID: any){
    return this.http.get<ZescoTransactionDetails[]>(`${BASE_URL}/transactions/get-zesco-transaction-details/${transactionID}`);
  }

  getAgentMessage(transactionID: any){
    return this.http.get<Messages[]>(`${BASE_URL}/transactions/get-message/${transactionID}`);
  }

  getAgentStatement(number: string){
    return this.http.get<Transactions[]>(`${BASE_URL}/transactions/get-statement/${number}`);
  }
}
