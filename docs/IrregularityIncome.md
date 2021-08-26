# BasiqApi.IrregularityIncome

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gaps** | [**[Gap]**](Gap.md) | Array of dates for which the expected credit is not met | 
**stability** | **String** | Stability percentage indicator of how stable the income is. 100 = no gaps in the income series from the source. Calculated as (number of transactions that are included in the income report for this source) / (number of transactions that were expected to be included in the income report for this source). | 


