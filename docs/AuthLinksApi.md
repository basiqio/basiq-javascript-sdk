# BasiqApi.AuthLinksApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAuthLink**](AuthLinksApi.md#deleteAuthLink) | **DELETE** /users/{userId}/auth_link | Permanently deletes an auth_link resource. Once deleted the URL associated with the deleted object will no longer be valid.
[**getAuthLink**](AuthLinksApi.md#getAuthLink) | **GET** /users/{userId}/auth_link | Use this to retrieve the latest/last auth_link generated for the specified user..
[**postAuthLink**](AuthLinksApi.md#postAuthLink) | **POST** /users/{userId}/auth_link | An Auth Link object can be generated to securely capture data from a User. Using the URL allows data to be captured via the hosted Basiq Connect Consent workflow for a given User.


<a name="deleteAuthLink"></a>
# **deleteAuthLink**
> deleteAuthLink(userId)

Permanently deletes an auth_link resource. Once deleted the URL associated with the deleted object will no longer be valid.

<blockquote>Note that this action cannot be undone.</blockquote>  <blockquote>The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.</blockquote>  Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AuthLinksApi();

var userId = "userId_example"; // String | The identifier of the user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAuthLink(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAuthLink"></a>
# **getAuthLink**
> AuthLinksResponseResource getAuthLink(userId)

Use this to retrieve the latest/last auth_link generated for the specified user..

Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AuthLinksApi();

var userId = "userId_example"; // String | The identifier of the user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthLink(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 

### Return type

[**AuthLinksResponseResource**](AuthLinksResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postAuthLink"></a>
# **postAuthLink**
> AuthLinksPostResponseResource postAuthLink(userId, opts)

An Auth Link object can be generated to securely capture data from a User. Using the URL allows data to be captured via the hosted Basiq Connect Consent workflow for a given User.

Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will effectively delete previous auth-links for that User/applicant, rendering the previous URL(s) invalid. The 'mobile' attribute is optional. If it is specified this number will take preference over the User object mobile number for 2FA SMS verification.  Returns a created auth_link resource, if the operation succeeded. Returns an error if the post failed (e.g. not supplying required properties).

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.AuthLinksApi();

var userId = "userId_example"; // String | 

var opts = { 
  'authLinksPostData': new BasiqApi.AuthLinksPostData() // AuthLinksPostData | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postAuthLink(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **authLinksPostData** | [**AuthLinksPostData**](.md)|  | [optional] 

### Return type

[**AuthLinksPostResponseResource**](AuthLinksPostResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

