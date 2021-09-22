# BasiqApi.JobsApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJobs**](JobsApi.md#getJobs) | **GET** /jobs/{jobId} | Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.
[**getUserJobs**](JobsApi.md#getUserJobs) | **GET** /users/{userId}/jobs | Retrieves the details of an existing jobs. You need only supply the unique user identifier.


<a name="getJobs"></a>
# **getJobs**
> JobData getJobs(jobId)

Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.

<b>Tracking the status of a job</b><br/> Every step of the job has a status property that depicts its current state.<br/> <b>Find out what steps have been completed</b><br/> Depending on the job being executed, some jobs will have multiple steps which need to be executed, for e.g. refreshing a connection requires the following steps to be completed: <ol><li>Establish successful authentication with institution</li> <li>Fetch latest list of accounts</li> <li>Fetch latest list of transactions</li></ol> You can keep track of the steps that have been completed by observing the results array property. As each step is successfully completed, its status will be updated and a result object with the link to the affected resource will be present. In the event that a step has failed, the result object will contain an embedded error object.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.JobsApi();

var jobId = "jobId_example"; // String | The identifier of the job to be retrieved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobs(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The identifier of the job to be retrieved. | 

### Return type

[**JobData**](JobData.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserJobs"></a>
# **getUserJobs**
> JobsResponseResource getUserJobs(userId, opts)

Retrieves the details of an existing jobs. You need only supply the unique user identifier.

<b>Tracking the status of a job</b><br/> Every step of the job has a status property that depicts its current state.<br/> <b>Find out what steps have been completed</b><br/> Depending on the job being executed, some jobs will have multiple steps which need to be executed, for e.g. refreshing a connection requires the following steps to be completed: <ol><li>Establish successful authentication with institution</li> <li>Fetch latest list of accounts</li> <li>Fetch latest list of transactions</li></ol> You can keep track of the steps that have been completed by observing the results array property. As each step is successfully completed, its status will be updated and a result object with the link to the affected resource will be present. In the event that a step has failed, the result object will contain an embedded error object.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.JobsApi();

var userId = "userId_example"; // String | User identifier

var opts = { 
  'filter': "filter_example" // String | Connection identification filter. e.g. connection.id.eq('ab63cd')
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserJobs(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier | 
 **filter** | **String**| Connection identification filter. e.g. connection.id.eq('ab63cd') | [optional] 

### Return type

[**JobsResponseResource**](JobsResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

