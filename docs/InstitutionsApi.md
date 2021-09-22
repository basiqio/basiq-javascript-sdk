# BasiqApi.InstitutionsApi

All URIs are relative to *https://au-api.basiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstitution**](InstitutionsApi.md#getInstitution) | **GET** /institutions/{institutionID} | Retrieves data for single institution.
[**getInstitutions**](InstitutionsApi.md#getInstitutions) | **GET** /institutions | Retrieves institutions list.
[**getPublicInstitutions**](InstitutionsApi.md#getPublicInstitutions) | **GET** /public/institutions | Retrieves publically availiable (no authentication required) institutions list.


<a name="getInstitution"></a>
# **getInstitution**
> Institution getInstitution(institutionID)

Retrieves data for single institution.

NOTE: This end point requires authentication.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.InstitutionsApi();

var institutionID = "institutionID_example"; // String | Institution ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitution(institutionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionID** | **String**| Institution ID | 

### Return type

[**Institution**](Institution.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInstitutions"></a>
# **getInstitutions**
> InstitutionsList getInstitutions(opts)

Retrieves institutions list.

NOTE: This end point requires authentication.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');
var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BasiqApi.InstitutionsApi();

var opts = { 
  'filter': "filter_example" // String | Filter parameter can be used to filter institution list by institution property. This parameter should contain comma separated list of filter statements.</br> Filter statement is composed from entity name (in this case it is always `institution`), property name (e.g. `stage`), filter operator (e.g. `eq`) and quoted string value in parentasis (e.g. `('live')`). </br> The Following list of regular expressions descirbes acceptable filter statements: </br> • `institution\\.country\\.(eq|ne)\\(('Australia'|'New Zealand')\\)` </br> • `institution\\.country\\.in\\(([\\w\\W]+)\\)` </br> • `institution\\.tier\\.(eq|ne)\\(('1'|'2'|'3'|'4')\\)` </br> • `institution\\.tier\\.in\\('[1-4]'(,'[1-4]')*\\)` </br> • `institution\\.authorization\\.(eq|ne)\\(('user'|'other')\\)` </br> • `institution\\.serviceType\\.(eq|ne)\\(('Personal Banking'|'Business Banking'|'Card Access'|'Test')\\)` </br> • `institution\\.institutionType\\.(eq|ne)\\(('Bank'|'Bank \\(Foreign\\)'|'Test Bank'|'Credit Union'|'Financial Services'|'Superannuation')\\)` </br> • `institution\\.stage\\.(eq|ne)\\(('live'|'beta'|'alpha')\\)` </br> Multiple filter definitions should be separated with comma (`,`). </br> For example, this is filter statement will keep only live tier 1 and tier 2 institutions: `filter=institution.stage.eq('live'),institution.tier.in('1','2')` </br>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitutions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter parameter can be used to filter institution list by institution property. This parameter should contain comma separated list of filter statements.</br> Filter statement is composed from entity name (in this case it is always `institution`), property name (e.g. `stage`), filter operator (e.g. `eq`) and quoted string value in parentasis (e.g. `('live')`). </br> The Following list of regular expressions descirbes acceptable filter statements: </br> • `institution\\.country\\.(eq|ne)\\(('Australia'|'New Zealand')\\)` </br> • `institution\\.country\\.in\\(([\\w\\W]+)\\)` </br> • `institution\\.tier\\.(eq|ne)\\(('1'|'2'|'3'|'4')\\)` </br> • `institution\\.tier\\.in\\('[1-4]'(,'[1-4]')*\\)` </br> • `institution\\.authorization\\.(eq|ne)\\(('user'|'other')\\)` </br> • `institution\\.serviceType\\.(eq|ne)\\(('Personal Banking'|'Business Banking'|'Card Access'|'Test')\\)` </br> • `institution\\.institutionType\\.(eq|ne)\\(('Bank'|'Bank \\(Foreign\\)'|'Test Bank'|'Credit Union'|'Financial Services'|'Superannuation')\\)` </br> • `institution\\.stage\\.(eq|ne)\\(('live'|'beta'|'alpha')\\)` </br> Multiple filter definitions should be separated with comma (`,`). </br> For example, this is filter statement will keep only live tier 1 and tier 2 institutions: `filter=institution.stage.eq('live'),institution.tier.in('1','2')` </br> | [optional] 

### Return type

[**InstitutionsList**](InstitutionsList.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPublicInstitutions"></a>
# **getPublicInstitutions**
> InstitutionsList getPublicInstitutions(opts)

Retrieves publically availiable (no authentication required) institutions list.

### Example
```javascript
var BasiqApi = require('@basiq/basiq-javascript-sdk');

var apiInstance = new BasiqApi.InstitutionsApi();

var opts = { 
  'filter': "filter_example" // String | Filter parameter can be used to filter institution list by institution property. This parameter should contain comma separated list of filter statements.</br> Filter statement is composed from entity name (in this case it is always `institution`), property name (e.g. `stage`), filter operator (e.g. `eq`) and quoted string value in parentasis (e.g. `('live')`). </br> The Following list of regular expressions descirbes acceptable filter statements: </br> • `institution\\.country\\.(eq|ne)\\(('Australia'|'New Zealand')\\)` </br> • `institution\\.country\\.in\\(([\\w\\W]+)\\)` </br> • `institution\\.tier\\.(eq|ne)\\(('1'|'2'|'3'|'4')\\)` </br> • `institution\\.tier\\.in\\('[1-4]'(,'[1-4]')*\\)` </br> • `institution\\.authorization\\.(eq|ne)\\(('user'|'other')\\)` </br> • `institution\\.serviceType\\.(eq|ne)\\(('Personal Banking'|'Business Banking'|'Card Access'|'Test')\\)` </br> • `institution\\.institutionType\\.(eq|ne)\\(('Bank'|'Bank \\(Foreign\\)'|'Test Bank'|'Credit Union'|'Financial Services'|'Superannuation')\\)` </br> • `institution\\.stage\\.(eq|ne)\\(('live'|'beta'|'alpha')\\)` </br> Multiple filter definitions should be separated with comma (`,`). </br> For example, this is filter statement will keep only live tier 1 and tier 2 institutions: `filter=institution.stage.eq('live'),institution.tier.in('1','2')` </br>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicInstitutions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter parameter can be used to filter institution list by institution property. This parameter should contain comma separated list of filter statements.</br> Filter statement is composed from entity name (in this case it is always `institution`), property name (e.g. `stage`), filter operator (e.g. `eq`) and quoted string value in parentasis (e.g. `('live')`). </br> The Following list of regular expressions descirbes acceptable filter statements: </br> • `institution\\.country\\.(eq|ne)\\(('Australia'|'New Zealand')\\)` </br> • `institution\\.country\\.in\\(([\\w\\W]+)\\)` </br> • `institution\\.tier\\.(eq|ne)\\(('1'|'2'|'3'|'4')\\)` </br> • `institution\\.tier\\.in\\('[1-4]'(,'[1-4]')*\\)` </br> • `institution\\.authorization\\.(eq|ne)\\(('user'|'other')\\)` </br> • `institution\\.serviceType\\.(eq|ne)\\(('Personal Banking'|'Business Banking'|'Card Access'|'Test')\\)` </br> • `institution\\.institutionType\\.(eq|ne)\\(('Bank'|'Bank \\(Foreign\\)'|'Test Bank'|'Credit Union'|'Financial Services'|'Superannuation')\\)` </br> • `institution\\.stage\\.(eq|ne)\\(('live'|'beta'|'alpha')\\)` </br> Multiple filter definitions should be separated with comma (`,`). </br> For example, this is filter statement will keep only live tier 1 and tier 2 institutions: `filter=institution.stage.eq('live'),institution.tier.in('1','2')` </br> | [optional] 

### Return type

[**InstitutionsList**](InstitutionsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

