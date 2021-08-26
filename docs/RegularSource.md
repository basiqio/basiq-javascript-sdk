# BasiqApi.RegularSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ageDays** | **Number** | Duration regular income (number days from first to last occurrence) returned as an integer with values zero or greater | 
**changeHistory** | [**[ChangeHistoryIncome]**](ChangeHistoryIncome.md) | Each amount classified as income (repeated for each income credit and ordered by most recent) | 
**current** | [**CurrentRegularSource**](CurrentRegularSource.md) |  | 
**frequency** | **String** | Enum detailing frequency regular income | 
**irregularity** | [**IrregularityIncome**](IrregularityIncome.md) |  | 
**previous3Months** | [**Previous3MonthsIncome**](Previous3MonthsIncome.md) |  | 
**source** | **String** | Source regular income (cleaned transaction description). | 


<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `biWeekly` (value: `"bi-weekly"`)

* `monthly` (value: `"monthly"`)

* `biMonthly` (value: `"bi-monthly"`)

* `quarterly` (value: `"quarterly"`)

* `halfYear` (value: `"half-year"`)

* `yearly` (value: `"yearly"`)




