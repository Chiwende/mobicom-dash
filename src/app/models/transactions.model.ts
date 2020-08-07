export interface Transactions {
    transaction_date: Date;
    agent_msisdn: any;
    transaction_id: any;
    customer_msisdn: any;
    // agent_msisdn: any;
    // transaction_id: any;
    // customer_msisdn: any;
    id: number,
    MSISDN: number;
    amount: number;
    serviceID: number;
    externalTransactionID: string;
    statusCode: number;
    companyname: string;
    // dateCreated: Date[];
    payment_channel : string;
}