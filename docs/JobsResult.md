# BasiqApi.JobsResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | In case of failed job, displays error code. | [optional] 
**details** | **String** | In case of failed job, displays details of the error. | [optional] 
**title** | **String** | In case of failed job, displays error title. | [optional] 
**type** | **String** | In case of success, Always \"link\". | [optional] 
**url** | **String** | In case of success, URL of the updated (or created) resources. | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `userActionRequired` (value: `"user-action-required"`)

* `systemUnavailable` (value: `"system-unavailable"`)

* `maintenance` (value: `"maintenance"`)

* `connectorError` (value: `"connector-error"`)

* `institutionNotFound` (value: `"institution-not-found"`)

* `institutionNotAvailable` (value: `"institution-not-available"`)

* `institutionDisabled` (value: `"institution-disabled"`)

* `missingRequiredField` (value: `"missing-required-field"`)

* `missingRequiredFieldValue` (value: `"missing-required-field-value"`)

* `invalidFieldValue` (value: `"invalid-field-value"`)

* `invalidCsvRow` (value: `"invalid-csv-row"`)

* `rowCountExceeded` (value: `"row-count-exceeded"`)

* `accountDataDiffers` (value: `"account-data-differs"`)

* `emptyFile` (value: `"empty-file"`)

* `bankStatementInvalid` (value: `"bank-statement-invalid"`)

* `bankStatementNewProduct` (value: `"bank-statement-new-product"`)

* `bankStatementParsingError` (value: `"bank-statement-parsing-error"`)

* `bankStatementNotSupported` (value: `"bank-statement-not-supported"`)

* `txnAfterLastUpdatedDate` (value: `"txn-after-last-updated-date"`)

* `invalidConnection` (value: `"invalid-connection"`)

* `unknownError` (value: `"unknown-error"`)

* `jobTimedOut` (value: `"job-timed-out"`)




