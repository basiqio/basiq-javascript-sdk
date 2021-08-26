# BasiqApi.GetEnrichResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_class** | **String** | Transaction Classification | 
**data** | [**EnrichData**](EnrichData.md) |  | 
**direction** | **String** | Direction of transaction | 
**links** | [**ResourceLink**](ResourceLink.md) |  | 
**type** | **String** | Always \"enrich\" | 


<a name="ClassEnum"></a>
## Enum: ClassEnum


* `directCredit` (value: `"direct-credit"`)

* `refund` (value: `"refund"`)

* `interest` (value: `"interest"`)

* `payment` (value: `"payment"`)

* `cashWithdrawal` (value: `"cash-withdrawal"`)

* `bankFee` (value: `"bank-fee"`)

* `transfer` (value: `"transfer"`)

* `loanInterest` (value: `"loan-interest"`)

* `loanRepayment` (value: `"loan-repayment"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `unknown` (value: `"unknown"`)




