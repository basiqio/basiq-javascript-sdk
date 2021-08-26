# BasiqApi.TokenApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postToken**](TokenApi.md#postToken) | **POST** /token | 


<a name="postToken"></a>
# **postToken**
> TokenPostResponse postToken(basiqVersion, opts)



Use this endpoint to retrieve token that will be passed as authorization header for Basiq API

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BasiqApi.TokenApi();

var basiqVersion = "basiqVersion_example"; // String | 

var opts = { 
  'scope': "scope_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postToken(basiqVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basiqVersion** | **String**|  | 
 **scope** | **String**|  | [optional] 

### Return type

[**TokenPostResponse**](TokenPostResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

