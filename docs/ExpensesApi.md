# BasiqApi.ExpensesApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExpenses**](ExpensesApi.md#getExpenses) | **GET** /users/{userId}/expenses/{snapshotId} | Retrieves the details of an expenses summary. You need only supply the unique expenses identifier.
[**postExpenses**](ExpensesApi.md#postExpenses) | **POST** /users/{userId}/expenses | Use this to create a new expenses report.


<a name="getExpenses"></a>
# **getExpenses**
> ExpensesResponse getExpenses(userId, snapshotId)

Retrieves the details of an expenses summary. You need only supply the unique expenses identifier.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ExpensesApi();

var userId = "userId_example"; // String | The identifier of the user.

var snapshotId = "snapshotId_example"; // String | The identifier of the expenses report to be retrieved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExpenses(userId, snapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **snapshotId** | **String**| The identifier of the expenses report to be retrieved. | 

### Return type

[**ExpensesResponse**](ExpensesResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

<a name="postExpenses"></a>
# **postExpenses**
> ExpensesResponse postExpenses(userId, opts)

Use this to create a new expenses report.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ExpensesApi();

var userId = "userId_example"; // String | The identifier of the user.

var opts = { 
  'expensesPostRequest': new BasiqApi.ExpensesPostRequest() // ExpensesPostRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postExpenses(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **expensesPostRequest** | [**ExpensesPostRequest**](ExpensesPostRequest.md)|  | [optional] 

### Return type

[**ExpensesResponse**](ExpensesResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

