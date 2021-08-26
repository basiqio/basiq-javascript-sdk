# BasiqApi.JobsStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**JobsResult**](JobsResult.md) |  | 
**status** | **String** | Step status. <ul> <li> pending -  The job has been created and is waiting to be started.</li> <li> in-progress - The job has started and is currently processing.</li> <li> success - The job has successfully completed. </li> <li> failed - The job has failed.</li> </ul> | 
**title** | **String** | Name of the step the job needs to complete. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `inProgress` (value: `"in-progress"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)




<a name="TitleEnum"></a>
## Enum: TitleEnum


* `verifyCredentials` (value: `"verify-credentials"`)

* `retrieveAccounts` (value: `"retrieve-accounts"`)

* `retrieveTransactions` (value: `"retrieve-transactions"`)

* `retrieveStatements` (value: `"retrieve-statements"`)




