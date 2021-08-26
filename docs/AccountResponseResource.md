# BasiqApi.AccountResponseResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountHolder** | **String** | The name of the account holder as returned by the institution. No formatting is applied. Returns a string or null when not available. | 
**accountNo** | **String** | Full account number. | 
**availableFunds** | **String** | Funds that are available to an account holder for withdrawal or other use. This may include funds from an overdraft facility or line of credit. As well as funds classified as the available balance, such as from cleared and existing deposits. | 
**balance** | **String** | Amount of funds in the account right now - excluding any pending transactions. For a credit card this would be zero or the minus amount spent. | 
**_class** | [**AccountClass**](AccountClass.md) |  | 
**connection** | **String** | The id of the connection resource that was used to retrieve the account. | 
**currency** | **String** | The currency the funds are stored in, using ISO 4217 standard. | 
**id** | **String** | Uniquely identifies the account. | 
**institution** | **String** | The id of the institution resource the account originated from. | 
**lastUpdated** | **String** | Timestamp of last update, UTC, RFC 3339 format e.g. \"2017-09-28T13:39:33Z\" | 
**links** | [**AccountLinks**](AccountLinks.md) |  | 
**name** | **String** | Account name as defined by institution or user. | 
**status** | **String** | Indicates the account status. Always set to 'available'. Field kept for backward compatibility. Possible values include: <ul><li>available newest account data is available.</li></ul> | 
**transactionIntervals** | [**[AccountTransactionInterval]**](AccountTransactionInterval.md) | An array of date intervals indicating the coverage of the transaction data relating to the account. Will return a single element for accounts sourced from a single bank connection. Will return multiple elements in cases where there have been multiple PDF/CSV uploads for an account. | 
**type** | **String** | Always \"account\". | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `available` (value: `"available"`)

* `unavailable` (value: `"unavailable"`)




