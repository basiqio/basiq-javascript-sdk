# BasiqApi.ExpensesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankFees** | [**ClassResourceExpenses**](ClassResourceExpenses.md) |  | 
**cashWithdrawals** | [**ClassResourceExpenses**](ClassResourceExpenses.md) |  | 
**coverageDays** | **Number** | Number of days covered by the report | [optional] 
**externalTransfers** | [**ClassResourceExpenses**](ClassResourceExpenses.md) |  | 
**fromMonth** | **String** | First 'month' occurrence of expenses categorised going back as far as 13 months. | 
**id** | **String** | Uniquely identifies the expenses report. | 
**links** | [**ExpensesLinks**](ExpensesLinks.md) |  | [optional] 
**loanInterests** | [**ClassResourceExpenses**](ClassResourceExpenses.md) |  | 
**loanRepayments** | [**ClassResourceExpenses**](ClassResourceExpenses.md) |  | 
**payments** | [**[PaymentsSummaryExpenses]**](PaymentsSummaryExpenses.md) |  | 
**toMonth** | **String** | Latest 'month' occurrence of expenses categorised. | 
**type** | **String** | Value of this resource is \"expenses\". | 


