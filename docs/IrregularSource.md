# BasiqApi.IrregularSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ageDays** | **Number** | Duration irregular income (number days from first to last occurrence) returned as an integer with values zero or greater. | 
**amountAvg** | **String** | Mean of irregular income amount - calculated across all occurrences identified. | 
**avgMonthlyOccurence** | **String** | Average (mean) number of times per calendar month the credits in the series occur. | 
**changeHistory** | [**[ChangeHistoryIncome]**](ChangeHistoryIncome.md) | Each amount classified as income (repeated for each income credit and ordered by most recent) | 
**current** | [**CurrentIrregularSource**](CurrentIrregularSource.md) |  | 
**frequency** | **String** | Frequency is \"irregular\" | 
**noOccurrences** | **Number** | Number of instances of credits in the series. | 
**source** | **String** | Source irregular income (cleaned transaction description). | 


