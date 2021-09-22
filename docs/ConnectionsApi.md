# BasiqApi.ConnectionsApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteConnection**](ConnectionsApi.md#deleteConnection) | **DELETE** /users/{userId}/connections/{connectionId} | Permanently deletes a connection.
[**getConnection**](ConnectionsApi.md#getConnection) | **GET** /users/{userId}/connections/{connectionId} | Use this to retrieve details of a specific connection.
[**getConnections**](ConnectionsApi.md#getConnections) | **GET** /users/{userId}/connections | Use this to retrieve details of the connections.
[**postConnection**](ConnectionsApi.md#postConnection) | **POST** /users/{userId}/connections | Use this to create a new connection.
[**refreshConnection**](ConnectionsApi.md#refreshConnection) | **POST** /users/{userId}/connections/{connectionId}/refresh | Use this to retrieve the latest financial data.
[**refreshConnections**](ConnectionsApi.md#refreshConnections) | **POST** /users/{userId}/connections/refresh | Use this to refresh of all connections.
[**updateConnection**](ConnectionsApi.md#updateConnection) | **POST** /users/{userId}/connections/{connectionId} | Use this to update the details of a specific connection.


<a name="deleteConnection"></a>
# **deleteConnection**
> deleteConnection(userId, connectionId)

Permanently deletes a connection.

Once the connection has been deleted, all of the associated financial data e.g. accounts and transactions can still be accessed via the users end-point. Note that this action cannot be undone.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | The identifier of the user.

var connectionId = "connectionId_example"; // String | The identifier of the connection.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteConnection(userId, connectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **connectionId** | **String**| The identifier of the connection. | 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getConnection"></a>
# **getConnection**
> ConnectionGetResponseResource getConnection(userId, connectionId)

Use this to retrieve details of a specific connection.

This request will return back a connection object with most of the fields that were submitted when the connection was first created. The connection object will also return a list of URLs to the associated account, transaction and institution objects. The status property of the connection object identifies the state of the connection. Use this to work out if the connection is still valid, or whether to take further action (e.g. if the connection credentials are no longer valid you may ask the user to re-submit their details). <br/> Note that due to security the loginId, password, securityCode are never returned. Profile data represents the name, phone, email and address of the logged in user or data sharer. Only data made available by institution can be returned. An institution may offer the option for a customer to hide all personal data or add 2FA to access the data - in this case no data would be returned for all data points. Note, that when a Connection is deleted - the profile data will also be deleted. If a phone number or email address is masked by the institution - the string will be shown exactly as it is provided by the institution.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | The identifier of the user.

var connectionId = "connectionId_example"; // String | The identifier of the connection.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConnection(userId, connectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **connectionId** | **String**| The identifier of the connection. | 

### Return type

[**ConnectionGetResponseResource**](ConnectionGetResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getConnections"></a>
# **getConnections**
> ConnectionsGetResponseResource getConnections(userId, opts)

Use this to retrieve details of the connections.

Returns a list with a data property that contains an array of connections. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | User identifier.

var opts = { 
  'filter': "filter_example" // String | Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConnections(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier. | 
 **filter** | **String**| Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000') | [optional] 

### Return type

[**ConnectionsGetResponseResource**](ConnectionsGetResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postConnection"></a>
# **postConnection**
> ConnectionResponseResource postConnection(userId, opts)

Use this to create a new connection.

When a new connection request is made the server will create a job that will process the following steps: <table> <thead> <tr><td>#</td><td>Step</td><td>Description</td></tr> </thead> <tr> <td>1</td> <td> verify-credentials </td> <td> The server will attempt to authenticate with the target institution using the supplied credentials. </td> <tr> <td>2</td> <td> retrieve-accounts </td> <td> The server will retrieve the complete list of accounts and their details e.g. account number, name and balances. </td> <tr> <td>3</td> <td> retrieve-transactions </td> <td> The server will fetch the associated transactions for each of the accounts. </td> </tr> </table> <br/> Note that the time it takes to complete the processes above will vary depending on the volume of data along with the general latency between our servers and the financial institution. As a rough guide this entire process could take anywhere between 3 - 30 secs.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | The identifier of the user.

var opts = { 
  'userConnectionsPostData': new BasiqApi.UserConnectionsPostData() // UserConnectionsPostData | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postConnection(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **userConnectionsPostData** | [**UserConnectionsPostData**](UserConnectionsPostData.md)|  | [optional] 

### Return type

[**ConnectionResponseResource**](ConnectionResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshConnection"></a>
# **refreshConnection**
> ConnectionResponseResource refreshConnection(userId, connectionId)

Use this to retrieve the latest financial data.

Similar to when a connection is first created, the refresh resource will initiate the following series of steps to retrieve the latest financial data from the target institution: <table> <thead> <tr><td>#</td><td>Step</td><td>Description</td></tr> </thead> <tr><td>1</td><td>verify-credentials</td><td>The server will attempt to authenticate with the target institution using the supplied credentials.</td></tr> <tr><td>2</td><td>retrieve-accounts</td><td> The server will retrieve the complete list of accounts and their details e.g. account number, name and balances.</td></tr> <tr><td>3</td><td>retrieve-transactions</td><td>The server will fetch the associated transactions for each of the accounts.</td></tr> </table>

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | The identifier of the user.

var connectionId = "connectionId_example"; // String | The identifier of the connection.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshConnection(userId, connectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 
 **connectionId** | **String**| The identifier of the connection. | 

### Return type

[**ConnectionResponseResource**](ConnectionResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshConnections"></a>
# **refreshConnections**
> ConnectionsRefreshResource refreshConnections(userId)

Use this to refresh of all connections.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | The identifier of the user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshConnections(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The identifier of the user. | 

### Return type

[**ConnectionsRefreshResource**](ConnectionsRefreshResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateConnection"></a>
# **updateConnection**
> ConnectionResponseResource updateConnection(userId, connectionId, opts)

Use this to update the details of a specific connection.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.ConnectionsApi();

var userId = "userId_example"; // String | User identifier.

var connectionId = "connectionId_example"; // String | Connection identifier.

var opts = { 
  'userConnectionPostData': new BasiqApi.UserConnectionPostData() // UserConnectionPostData | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateConnection(userId, connectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier. | 
 **connectionId** | **String**| Connection identifier. | 
 **userConnectionPostData** | [**UserConnectionPostData**](UserConnectionPostData.md)|  | [optional] 

### Return type

[**ConnectionResponseResource**](ConnectionResponseResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

