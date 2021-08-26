# BasiqApi.AffordabilityApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAffordability**](AffordabilityApi.md#getAffordability) | **GET** /users/{userId}/affordability/{snapshotId} | Retrieves the details of an affordability summary. You need only supply the unique affordability identifier.
[**getAffordabilitySnapshotTransactions**](AffordabilityApi.md#getAffordabilitySnapshotTransactions) | **GET** /users/{userId}/affordability/{snapshotId}/transactions | Returns a paginated list with a data property that contains an array of transactions from the affordability snapshot.
[**postAffordability**](AffordabilityApi.md#postAffordability) | **POST** /users/{userId}/affordability | Use this to create a new affordability report.


<a name="getAffordability"></a>
# **getAffordability**
> AffordabilityResponse getAffordability(userId, snapshotId)

Retrieves the details of an affordability summary. You need only supply the unique affordability identifier.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AffordabilityApi();

var userId = "userId_example"; // String | The identifier of the user.

var snapshotId = "snapshotId_example"; // String | The identifier of the affordability report to be retrieved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAffordability(userId, snapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **snapshotId** | **String**| The identifier of the affordability report to be retrieved. | 

### Return type

[**AffordabilityResponse**](AffordabilityResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf

<a name="getAffordabilitySnapshotTransactions"></a>
# **getAffordabilitySnapshotTransactions**
> AffordabilityTransactionsResponse getAffordabilitySnapshotTransactions(userId, snapshotId, opts)

Returns a paginated list with a data property that contains an array of transactions from the affordability snapshot.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AffordabilityApi();

var userId = "userId_example"; // String | The identifier of the user.

var snapshotId = "snapshotId_example"; // String | The identifier of the affordability report to be retrieved.

var opts = { 
  'limit': 56 // Number | This represents the maximum number of transactions that may be included in the response (maximum of 500). Note that by default 500 transactions are returned if this value is not specified.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAffordabilitySnapshotTransactions(userId, snapshotId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **snapshotId** | **String**| The identifier of the affordability report to be retrieved. | 
 **limit** | **Number**| This represents the maximum number of transactions that may be included in the response (maximum of 500). Note that by default 500 transactions are returned if this value is not specified. | [optional] 

### Return type

[**AffordabilityTransactionsResponse**](AffordabilityTransactionsResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/csv

<a name="postAffordability"></a>
# **postAffordability**
> AffordabilityResponse postAffordability(userId, opts)

Use this to create a new affordability report.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AffordabilityApi();

var userId = "userId_example"; // String | The identifier of the user.

var opts = { 
  'affordabilityPostRequest': new BasiqApi.AffordabilityPostRequest() // AffordabilityPostRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postAffordability(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **affordabilityPostRequest** | [**AffordabilityPostRequest**](AffordabilityPostRequest.md)|  | [optional] 

### Return type

[**AffordabilityResponse**](AffordabilityResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/pdf

