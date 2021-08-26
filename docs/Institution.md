# BasiqApi.Institution

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **String** | Institution authorization identifier | 
**country** | **String** | Institution country name | 
**features** | [**Features**](Features.md) |  | 
**forgottenPasswordUrl** | **String** | URL to institution forgotten password page | [optional] 
**id** | **String** | Institution ID | 
**institutionType** | **String** | Institution type identifier | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**loginIdCaption** | **String** | Login ID field caption that should be shown on UI | 
**logo** | [**InstitutionLogoResource**](InstitutionLogoResource.md) |  | 
**name** | **String** | Institution name | 
**passwordCaption** | **String** | Password field caption that should be shown on UI | 
**secondaryLoginIdCaption** | **String** | Secondary loginID caption that should be shown on UI | [optional] 
**securityCodeCaption** | **String** | Security code caption that should be shown on UI | [optional] 
**serviceName** | **String** | Institution service name | 
**serviceType** | **String** | Institution service name | 
**shortName** | **String** | Institution short name | 
**stage** | **String** | Institution stage identifier | 
**stats** | [**InstitutionPerformanceStats**](InstitutionPerformanceStats.md) |  | 
**status** | [**FeatureCondition**](FeatureCondition.md) |  | 
**tier** | **String** | Institution tier identifier | 
**type** | **String** | Resource type identifier. It is always \"institution\" for this model. | 


<a name="AuthorizationEnum"></a>
## Enum: AuthorizationEnum


* `user` (value: `"user"`)

* `other` (value: `"other"`)




<a name="InstitutionTypeEnum"></a>
## Enum: InstitutionTypeEnum


* `bank` (value: `"Bank"`)

* `bankForeign` (value: `"Bank (Foreign)"`)

* `testBank` (value: `"Test Bank"`)

* `creditUnion` (value: `"Credit Union"`)

* `financialServices` (value: `"Financial Services"`)

* `superannuation` (value: `"Superannuation"`)

* `buildingSociety` (value: `"Building Society"`)




<a name="ServiceTypeEnum"></a>
## Enum: ServiceTypeEnum


* `personalBanking` (value: `"Personal Banking"`)

* `businessBanking` (value: `"Business Banking"`)

* `cardAccess` (value: `"Card Access"`)

* `test` (value: `"Test"`)

* `superannuation` (value: `"Superannuation"`)




<a name="StageEnum"></a>
## Enum: StageEnum


* `live` (value: `"live"`)

* `alpha` (value: `"alpha"`)

* `beta` (value: `"beta"`)




<a name="TierEnum"></a>
## Enum: TierEnum


* `_1` (value: `"1"`)

* `_2` (value: `"2"`)

* `_3` (value: `"3"`)

* `_4` (value: `"4"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `institution` (value: `"institution"`)




