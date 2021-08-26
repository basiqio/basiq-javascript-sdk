# BasiqApi.StatementsApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStatement**](StatementsApi.md#createStatement) | **POST** /users/{userId}/statements | A user can choose to share their financial data by uploading official pdf bank statements instead of creating a bank connection. Once the statement object is successfully created you can use it to obtain the user's latest financial data extracted from the bank statement i.e. accounts and transactions.


<a name="createStatement"></a>
# **createStatement**
> StatementUploadResource createStatement(userId, institutionId, statement)

A user can choose to share their financial data by uploading official pdf bank statements instead of creating a bank connection. Once the statement object is successfully created you can use it to obtain the user's latest financial data extracted from the bank statement i.e. accounts and transactions.

<blockquote>The endpoint also accepts csv files conforming to our file specification. Contact us directly for more details.</blockquote>  Create a new statement by uploading an official pdf bank statement or csv file statement. When a new statement request is made, the server will create a job that will process the following steps: <table> <thead><tr><td>#</td><td>Step</td><td>Description</td></tr></thead> <tbody> <tr><td>1</td><td>verify-credentials</td><td>The server will verify the file, validate the statement layout and attempt to parse the target statement</td></tr> <tr><td>2</td><td>retrieve-accounts</td><td>The server will retrieve the complete list of accounts and their details e.g. account number, name and balances</td></tr> <tr><td>3</td><td>retrieve-transactions</td><td>The server will fetch the associated transactions for each of the accounts</td></tr> </tbody> </table>  You can check the status of each step by querying the job resource (returned when the statement is created).

### Example
```javascript
var BasiqApi = require('basiq_api');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.StatementsApi();

var userId = "userId_example"; // String | 

var institutionId = "institutionId_example"; // String | The identifier of the institution to which the statement relates e.g. \"AU01001\". Note that sandbox institutions (i.e. AU00000 do not support the file upload option

var statement = "/path/to/file.txt"; // File | Official PDF bank statement for the specified institution to be uploaded. Csv files conforming to our file specification are also accepted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStatement(userId, institutionId, statement, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **institutionId** | **String**| The identifier of the institution to which the statement relates e.g. \"AU01001\". Note that sandbox institutions (i.e. AU00000 do not support the file upload option | 
 **statement** | **File**| Official PDF bank statement for the specified institution to be uploaded. Csv files conforming to our file specification are also accepted | 

### Return type

[**StatementUploadResource**](StatementUploadResource.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

