# BasiqApi.IncomeApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIncome**](IncomeApi.md#getIncome) | **GET** /users/{userId}/income/{snapshotId} | Retrieves the details of an income summary. You need only supply the unique income identifier.
[**postIncome**](IncomeApi.md#postIncome) | **POST** /users/{userId}/income | Use this to create a new income report.


<a name="getIncome"></a>
# **getIncome**
> IncomeResponse getIncome(userId, snapshotId)

Retrieves the details of an income summary. You need only supply the unique income identifier.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.IncomeApi();

var userId = "userId_example"; // String | The identifier of the user.

var snapshotId = "snapshotId_example"; // String | The identifier of the income report to be retrieved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIncome(userId, snapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **snapshotId** | **String**| The identifier of the income report to be retrieved. | 

### Return type

[**IncomeResponse**](IncomeResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postIncome"></a>
# **postIncome**
> IncomeResponse postIncome(userId, opts)

Use this to create a new income report.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.IncomeApi();

var userId = "userId_example"; // String | The identifier of the user.

var opts = { 
  'incomePostRequest': new BasiqApi.IncomePostRequest() // IncomePostRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postIncome(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **incomePostRequest** | [**IncomePostRequest**](IncomePostRequest.md)|  | [optional] 

### Return type

[**IncomeResponse**](IncomeResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

