# BasiqApi.TransactionData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | The id of the account resource the transaction belongs to. | 
**amount** | **String** | Transaction amount. Outgoing funds are expressed as negative values. | 
**balance** | **String** | Value of the account balance at time the transaction was completed. | 
**_class** | **String** | Describes the class(type) of transaction. | 
**connection** | **String** | The id of the connection resource that was used to retrieve the transaction. | 
**description** | **String** | The transaction description as submitted by the institution.. | 
**direction** | **String** | Identifies if the transaction is of debit or credit type. | 
**enrich** | [**TransactionsEnrich**](TransactionsEnrich.md) |  | 
**id** | **String** | Uniquely identifies the transaction for this connection. Note that when a connection is refreshed pending transactions will receive new id's, whilst posted transactions will receive the same id's as before the refresh. | 
**institution** | **String** | The id of the institution resource the transaction originated from. | 
**links** | [**TransactionLinks**](TransactionLinks.md) |  | 
**postDate** | **String** | Date the transaction was posted as provided by the institution (this is the same date that appears on a bank statement). This value is null if the record is pending. e.g. \"2017-11-10T21:46:44Z\" or 2017-11-10T00:00:00Z. | 
**status** | **String** | Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit transaction that has not been fully processed yet (i.e. has not been posted). Find out more about pending transaction and how to deal with them within your app. Note that pending transactions are not available for all institutions. | 
**subClass** | [**SubClass**](SubClass.md) |  | 
**transactionDate** | **String** | Date that the user executed the transaction as provided by the istitution. Note that not all transactions provide this value (varies by institution) e.g. \"2017-11-10T00:00:00Z\" | 
**type** | **String** | Value is \"transaction\". | 


<a name="ClassEnum"></a>
## Enum: ClassEnum


* `bankFee` (value: `"bank-fee"`)

* `payment` (value: `"payment"`)

* `cashWithdrawal` (value: `"cash-withdrawal"`)

* `transfer` (value: `"transfer"`)

* `loanInterest` (value: `"loan-interest"`)

* `refund` (value: `"refund"`)

* `directCedit` (value: `"direct-cedit"`)

* `interest` (value: `"interest"`)

* `loanRepayment` (value: `"loan-repayment"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `debit` (value: `"debit"`)

* `credit` (value: `"credit"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `posted` (value: `"posted"`)




