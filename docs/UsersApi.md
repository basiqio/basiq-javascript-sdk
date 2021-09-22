# BasiqApi.UsersApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | Use this to create a new user object.
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{userId} | Delete a user.
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userId} | Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.
[**updateUser**](UsersApi.md#updateUser) | **POST** /users/{userId} | Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


<a name="createUser"></a>
# **createUser**
> UserPostResponse createUser(user)

Use this to create a new user object.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.UsersApi();

var user = new BasiqApi.CreateUser(); // CreateUser | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**CreateUser**](CreateUser.md)|  | 

### Return type

[**UserPostResponse**](UserPostResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete a user.

Permanently deletes a user along with all of their associated connection details. All data associated with this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.UsersApi();

var userId = "userId_example"; // String | User identification.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identification. | 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUser"></a>
# **getUser**
> UserGetResponse getUser(userId)

Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.UsersApi();

var userId = "userId_example"; // String | The identifier of the user to be retrieved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user to be retrieved. | 

### Return type

[**UserGetResponse**](UserGetResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> UserPostResponse updateUser(userId, user)

Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.UsersApi();

var userId = "userId_example"; // String | The identifier of the user to be retrieved.

var user = new BasiqApi.UpdateUser(); // UpdateUser | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUser(userId, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user to be retrieved. | 
 **user** | [**UpdateUser**](UpdateUser.md)|  | 

### Return type

[**UserPostResponse**](UserPostResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

