# BasiqApi.EnrichApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEnrich**](EnrichApi.md#getEnrich) | **GET** /enrich | The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description.


<a name="getEnrich"></a>
# **getEnrich**
> GetEnrichResponse getEnrich(q, institution, opts)

The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.EnrichApi();

var q = "q_example"; // String | Transaction Description

var institution = "institution_example"; // String | Institution ID

var opts = { 
  'amount': 1.2, // Number | Amount
  'accountType': "accountType_example" // String | Account Type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEnrich(q, institution, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Transaction Description | 
 **institution** | **String**| Institution ID | 
 **amount** | **Number**| Amount | [optional] 
 **accountType** | **String**| Account Type | [optional] 

### Return type

[**GetEnrichResponse**](GetEnrichResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

