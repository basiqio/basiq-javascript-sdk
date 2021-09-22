# BasiqApi.TransactionsApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /users/{userId}/transactions/{transactionId} | Retrieves the details of an existing transaction.
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /users/{userId}/transactions | Use this collection to retrieve a paginated list of transactions.


<a name="getTransaction"></a>
# **getTransaction**
> TransactionData getTransaction(userId, transactionId)

Retrieves the details of an existing transaction.

You need only supply the unique transaction identifier.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.TransactionsApi();

var userId = "userId_example"; // String | The identifier of the user.

var transactionId = "transactionId_example"; // String | The identifier of the transaction.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransaction(userId, transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **transactionId** | **String**| The identifier of the transaction. | 

### Return type

[**TransactionData**](TransactionData.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactions"></a>
# **getTransactions**
> TransactionsGetResource getTransactions(userId, opts)

Use this collection to retrieve a paginated list of transactions.

The transactions are returned sorted by account and then posted date descending order - with pending transactions appearing first. Transactions are paginated in chunks of 500. Absence of next link means that there are no more pages to retrieve.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.TransactionsApi();

var userId = "userId_example"; // String | User identifier.

var opts = { 
  'limit': 500, // Number | This represents the maximum number of items that may be included in the response (maximum of 500). Note that by default 500 items are returned if this value is not specified.
  'filter': "filter_example" // String | Transaction filters.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactions(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier. | 
 **limit** | **Number**| This represents the maximum number of items that may be included in the response (maximum of 500). Note that by default 500 items are returned if this value is not specified. | [optional] [default to 500]
 **filter** | **String**| Transaction filters. | [optional] 

### Return type

[**TransactionsGetResource**](TransactionsGetResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

