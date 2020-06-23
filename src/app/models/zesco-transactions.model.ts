export interface ZescoTransactionDetails {
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