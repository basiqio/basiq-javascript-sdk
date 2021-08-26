# BasiqApi.AccountsApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountsApi.md#getAccount) | **GET** /users/{userId}/accounts/{accountId} | Use this to retrieve the details of a specific account. This request will return back an account object with the latest data since the last refresh. If you require the latest account details you will need to call the connection refresh resource.
[**getAccounts**](AccountsApi.md#getAccounts) | **GET** /users/{userId}/accounts | Use this collection to retrieve a list of accounts. Each entry in the array is a separate account object.


<a name="getAccount"></a>
# **getAccount**
> AccountResponseResource getAccount(userId, accountId)

Use this to retrieve the details of a specific account. This request will return back an account object with the latest data since the last refresh. If you require the latest account details you will need to call the connection refresh resource.

Returns an account if a valid account ID was provided. Returns an error otherwise.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AccountsApi();

var userId = "userId_example"; // String | User identifier

var accountId = "accountId_example"; // String | Account identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccount(userId, accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier | 
 **accountId** | **String**| Account identifier | 

### Return type

[**AccountResponseResource**](AccountResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccounts"></a>
# **getAccounts**
> AccountsResponseResource getAccounts(userId)

Use this collection to retrieve a list of accounts. Each entry in the array is a separate account object.

Returns a list with a data property that contains an array of accounts. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty. Otherwise, this call returns an error in the event of1 a failure.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AccountsApi();

var userId = "userId_example"; // String | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccounts(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier | 

### Return type

[**AccountsResponseResource**](AccountsResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

