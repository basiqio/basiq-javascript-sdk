# BasiqApi.AffordabilityResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**[AffordabilityAssetsData]**](AffordabilityAssetsData.md) | Assets | 
**coverageDays** | **Number** | Number of days covered by the report | [optional] 
**external** | [**[ExternalLiabilityData]**](ExternalLiabilityData.md) | External | 
**fromMonth** | **String** | Start month for the period for which the Affordability summary is generated. The period of time relates to the account and transaction data used as input into the report. | 
**generatedDate** | **String** | Date the report was generated. | 
**id** | **String** | Uniquely identifies the affordability report. | 
**liabilities** | [**LiabilitiesData**](LiabilitiesData.md) |  | 
**links** | [**GetAffordabilityLinks**](GetAffordabilityLinks.md) |  | 
**summary** | [**AffordabilitySummary**](AffordabilitySummary.md) |  | 
**toMonth** | **String** | End month (usually the current month) for the period for which the Affordability summary is generated. | 
**type** | **String** | Always \"affordability\". | 


