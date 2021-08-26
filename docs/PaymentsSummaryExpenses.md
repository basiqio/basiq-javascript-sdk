# BasiqApi.PaymentsSummaryExpenses

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avgMonthly** | **String** | Average monthly amount by category for defined period (up to 13 months). This number monthly is calculated as follows: (Total Expenses/Report Coverage Days)*30. This allows data with partial months to be calculated correctly. | 
**division** | **String** | Top level summary: category name. e.g. Medical care and heath expenses, Food and non-alcoholic beverages, Education | 
**percentageTotal** | **Number** | Average monthly amount expressed as a percentage of total expenses. | 
**subCategory** | [**[SubCategoryExpenses]**](SubCategoryExpenses.md) |  | 


