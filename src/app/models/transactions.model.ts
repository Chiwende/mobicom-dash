export interface Transactions {
    id: number,
    MSISDN: number;
    amount: number;
    serviceID: number;
    externalTransactionID: string;
    statusCode: number;
    companyname: string;
    dateCreated: Date;
    payment_channel : string;
}