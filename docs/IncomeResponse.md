# BasiqApi.IncomeResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverageDays** | **Number** | Number of days covered by the report | [optional] 
**fromMonth** | **String** | Start month for the period for which the Income summary is generated. The period of time relates to the account and transaction data used as input into the report. | 
**id** | **String** | The identifier of the income resource to be retrieved. | 
**irregular** | [**[IrregularSource]**](IrregularSource.md) | Required true | [optional] 
**links** | [**IncomeLinks**](IncomeLinks.md) |  | [optional] 
**otherCredit** | [**[OtherCreditSource]**](OtherCreditSource.md) | Required true | [optional] 
**regular** | [**[RegularSource]**](RegularSource.md) | Required true | [optional] 
**summary** | [**IncomeSummary**](IncomeSummary.md) |  | 
**toMonth** | **String** | End month (usually the current month) for the period for which the Income summary is generated. | 
**type** | **String** | Always \"income\". | 


