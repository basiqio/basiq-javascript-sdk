# basiq_api

BasiqApi - JavaScript client for basiq_api
<h2> Introduction </h2> Basiq provides a collection of APIs to help you build powerful financial solutions for a wide range of use cases. The most common use cases are: <ul> <li><b>Personal Financial Management.</b> Enable your customers to aggregate all of their financial data in one place, identify expenses and gain valuable insight of their spending.</li> <li><b>Wealth Management.</b> Gain valuable insights and a clearer understanding of your customers’ financial positions to customize advice, recommendations, and product offerings. </li> <li><b>Risk Insights.</b> Gain real-time and comprehensive visibility of your customers' assets, income, non-credit payment patterns, and transactional details.</li> <li><b>Cashflow Analysis.</b> Provide tools that analyze cash flow and forecast future expenses and income.</li> <li><b>Account Summary.</b> Display the big picture with financial account data listed alongside balance information.</li> <li><b>Account Verification.</b> Instantly verify account ownership and balances in real time to improve the user experience and mitigate fraud and risk.</li> <li><b>Data Enhancement.</b> Gain greater financial insights around consumer spending patterns and trends with categorised and enriched transaction data. </li> </ul> Basiq APIs are currently only available in Australia and New Zealand. We are working to make them available in other countries - so check back soon. Use this link to see a complete list of <a href= 'http://docs.basiq.io/the-basiq-platform/supported-financial-institutions'>supported financial institutions.</a> <hr/> <h2> Basiq API Services </h2>  Basiq provides three core API services which you can use to develop innovative financial solutions: <ul> <li><b>Connect</b> provides the ability to easily acquire financial data such as account details and balances and related transactions from various financial institutions.</li> <li><b>Enrich</b> classifies all banking, credit and debit card transactions into categories based on specific merchant, merchant type and geographical location data.</li> <li><b>Affordability</b> provides a complete 360 degree view of your customers financial health - by breaking down their finances into assets, liabilities, income and expenses. You can use Income and Expenses endpoints separately or as part of the full Affordability API solution.</li> </ul>  Base URL is → https://au-api.basiq.io - you can use our sandbox environment for free right now - just grab an API key! Enrich URL is → https://au-api.basiq.io/enrich - contact us to have your API key activated to try out this API. Affordability URL is → https://au-api.basiq.io/affordability - you can use our sandbox environment for free - contact us to have your API key activated. <hr/> <h2> Getting Started </h2> <b>Start Developing </b>  Before you can start using any of the available Basiq APIs there are a few things you will need to do first. <ol> <li> <a href='https://dashboard.basiq.io/login'>Sign-up</a> to the Basiq API service </li> <li> Grab your API key for your application (via the <a href= 'https://dashboard.basiq.io/'>Developer Dashboard</a>) </li> </ol> Once you have successfully obtained an API key, you can start using any of the available Basiq APIs.  This <a href='http://docs.basiq.io/getting-started/get-started-with-basiq'>user guide</a> gets you up and running with the Basiq API in the time it takes to make a cup of tea. It includes a <a href='https://documenter.getpostman.com/view/9721346/SztEaSr2?version=latest'>Postman collection</a> to help you get a fast feel for the API. Please note that all of the Basiq's Core API and Affordability APIs are accessible using the sandbox data (see testing for details). We encourage you to play with the sandbox data. Once you are ready you will need to supply payment details in order to use the full set of Basiq API services. <hr/> <h2> Authentication </h2> When working with Basiq APIs your application will need to complete the authentication process first before you can access any of the available resources.  The authentication process is fairly straight forward, and simply requires you to exchange your API key for a token. Once you obtain the token, you can call any of the available API services by simply including the token in the Authorization header of each request. Your API keys carry many privileges, so be sure to keep them secret! Do not share your API keys in publicly accessible areas such GitHub, client-side code, etc. <h3> Prerequisites </h3> Prior to authenticating your application you will need to complete the following steps: <ol> <li> <a href='https://dashboard.basiq.io/login'>Sign-up</a> to the Basiq API service </li> <li> Grab your API key for your application (via the <a href= 'https://dashboard.basiq.io/'>Developer Dashboard</a>) </li> </ol>  <h3> Steps to authenticate </h3> <ol> <li> Call /token passing in the API key in the Authorization header of the request and Basiq API version you intent to use </li> <li> The server will validate the key and if everything is successful will issue an access token along with the following properties:</li> </ol> <table style=\"width: 50%\"> <tr> <td><b>Property </b><td> <td><b>Description</b> <td><tr> <tr> <td>access_token - <i>string, readonly</t><td> <td>The generated access token.<td><tr> <tr> <td>expires_in - <i>number, readonly</i><td> <td>The number of seconds left before the token becomes invalid.<td><tr> <tr> <td>token_type - <i>string, readonly</i><td> <td>This value will always be <b>Bearer</b>.<td><tr> </table> This access token is the key to making successful requests to the Basiq API. From here on you will need to include this access token in the header when requesting any of the secured resources as follows:  <b>Authorization: Bearer [access_token]</b> Note that tokens have a short lifespan and as such should not be stored permanently. Once a token has expired your application will need to reauthenticate. <hr/> <h2> Testing </h2> There’s nothing worse than developing against an API with crappy test data. We get that! This is why we have put a lot of effort into ensuring that our test data mimics real production data that your app will consume. <h3> Connect API </h3> The test data that we provide for the Connect API service (below) has been designed to mimic a real life user. This means that just a like a real user would spend and receive funds throughout the day - our test accounts have been designed to do the same thing. Therefore you should expect to see new transaction records being created throughout the day, and the account balances adjusted accordingly.  This should give you a good feel for the type of data that you should expect to see for your own customers. The transaction data is completely random, and even we are sometimes surprised by transactions that appear :-) You can use our sandbox environment for free right now - just grab an API key to get started (via the <a href='https://dashboard.basiq.io/'>Developer Dashboard</a>). Ensure that you pass the institution code AU00000 when using the test accounts. <table style=\"width: 50%\"> <tr> <td> <b>loginId</b> </td><td> <b>password</b> </td</tr> <tr> <td> Wentworth-Smith </td><td> whislter </td</tr> <tr> <td> gavinBelson </td><td> hooli2016 </td</tr> <tr> <td> jared </td><td> django </td</tr> <tr> <td> richard </td><td> tabsnotspaces </td</tr> </table> <h3> Enrich API </h3> The Enrich API returns merchant metadata regarding name, location and category.  This service can be tested using bank transaction data that you provide. You can use real bank transaction data and the Enrich API will return enriched records for those transactions. Note that the same endpoint is utilised for both testing and production users, however a limit of 100 queries is set for testing users. Contact us (via the \"help\" icon at the bottom of the page) to have your Enrich access enabled.  You will need to ensure that the search query is <b>url encoded</b> before calling the resource and must contain at least 3 characters.  Example queries: q=garfish%20MANLY%20NS&country=AU&institution=AU06703&accountType=transaction&amount=-12.95 q=garfish%20MANLY%20NS&institution= AU13601  <table> <tr> <td> Example Queries: </td> </tr> <tr> <td> <ol> <li> GARFISH MANLY NS </li> <li> 12 VOLT DIRECT PTY L LONSDALE AU </li> <li> HARVEY NORMAN AV/IT BALGOWLAH AU </li> <li> CALTEX ALDINGA BEACH ALDINGA BEACHAU </li> <li> KMART 1055 WARRIEWOOD AU </li> <li> KAKADU LODGE & CARAV JABIRU AU </li> <ol> </td> </tr> </table>  <h3> Affordability API </h3> The test data that we provide for the Affordability API service has been designed to mimic a real life user. This means that just a like a real user would spend and receive funds throughout the day - our test accounts have been designed to do the same thing. Therefore you should expect to see new transaction records being created throughout the day, and the account balances adjusted accordingly. You can use our sandbox environment for free - contact us (via the \"help\" icon at the bottom of the page) to have your API key activated for Affordability. Ensure that you pass the institution code AU00000 when using the test accounts. <table style=\"width: 50%\"> <tr> <td> <b>loginId</b> </td><td> <b>password</b> </td</tr> <tr> <td> Wentworth-Smith </td><td> whislter </td</tr> </table>  Once you have created a test connection you can access the Affordability, Income and Expense endpoints for this user. The Affordability endpoint returns links to Income and Expense resources or you can use these endpoints independently without Affordability. <hr/> <h2> Collections </h2> Collection resources provide access to information about a list of objects of the same type. For example, you can use a collection resource to access information about a list of users. Collection resources are paged and may be sorted and filtered (depending on availability) - and will always return an object of type list. <h3> Filters </h3> Some collections support the ability to filter the results. Filtering a collection resource is conducted via the filter query parameter using the following notation:  <b>?filter=[property].[ condition ]([ value ]) </b> All filter values should be URL encoded: ?filter=URLEncode(*)  <h3>Accessing Properties</h3> Properties are accessed using the following notation <b>object.property</b>. <h3> Supported Conditions </h3> <table> <tr>  <th>eq</th> <td> Equals <b>?filter=account.id.eq('s55bf3')</b></td> </tr> <tr>  <th>bt</th> <td> Between two values - used for date range filtering. <b> ?filter=transaction.postDate.bt('2017-09-28','2018-01-30'). Values are inclusive.</b> </td> </tr> <tr>  <th>gt</th> <td> Greater than <b>?filter=transaction.postDate.gt('2018-01-28')</b></td> </tr> <tr>  <th>gteq</th> <td> Greater than or equal to <b>?filter=transaction.postDate.gteq('2018-01-28')</b> </td> </tr> <tr>  <th>lt</th> <td> Less than <b> ?filter=transaction.postDate.lt('2018-01-28') </b></td> </tr> <tr>  <th>lteq</th> <td> Less than or equal to <b> ?filter=transaction.postDate.lteq('2018-01-28') </b> </td> </tr> <tr>  <th>ne</th> <td>Not equals (only currently for <b>Institutions </b>endpoint) <b> ?filter=institution.institutionType.ne('Test Bank') </b> </td> </tr> </table> Where available, you can apply multiple filters to a collection by separating them with a comma.  Multiple filters are treated as an and (&) operation example:  <b> ?filter=transaction.postDate.bt('2018-01-28','2018-02-27'),account.id.eq('aef3g') </b>  Note the examples above have not url encoded the filters. You will need to ensure that the filter values are url encoded before calling the resource. <hr/> <h2> Errors </h2> The Connect API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, user's credentials are invalid, etc.), and codes in the 5xx range indicate an error with the Connect API's servers (these are rare). In addition to returning an appropriate HTTP code the body will also include a JSON formatted error object that provides more details about the specifics of the error. The error object will return the error as an array to indicate multiple errors (where present). <table> <tr> <td colspan='2'><b>Attributes</b><td> </tr> <tr> <td> <b>correlationId</b> <td>a unique identifier for this particular occurrence of the problem.</td> </tr> <tr> <td> <b>code</b> <td>an application-specific error code, expressed as a string value.</td> </tr> <tr> <td> <b>title</b> <td>a short, human-readable summary of the problem.</td> </tr> <tr> <td> <b>detail</b> <td>a human-readable explanation specific to this occurrence of the problem.</td> </tr> <tr> <td> <b>source</b> <td>an object containing references to the source of the error, optionally including any of the following members: <ul> <li> <b>pointer</b> the location to the object or attribute that the error relates to </li> <li> <b>parameter</b> the location to the object or attribute that the error relates to </li> </ul> </td> </tr> </table> <h3> Error Codes </h3> Below you will find details for our various response codes. <table> <tbody> <tr> <th>Code</th> <th>Description</th> </tr> <tr> <td> <p>invalid-credentials</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Cannot login to target institution using supplied credentials. Please check credentials and try again.</p> </td> </tr> <tr> <td> <p>internal-server-error</p> </td> <td> <p><strong>Server Error </strong><br /> Internal server error<br /> All endpoints</p> </td> </tr> <tr> <td> <p>access-denied</p> </td> <td> <p><strong>Access denied</strong><br /> Token has expired</p> </td> </tr> <tr> <td> <p>invalid-authorization-token</p> </td> <td> <p><strong>Unauthorized </strong><br /> Invalid authorization token. Check details message.</p> </td> </tr> <tr> <td> <p>parameter-not-supplied</p> </td> <td> <p><strong>Missing Attribute </strong><br /> Required parameter not supplied. Check details and source message.<br /> e.g. One of 'email' or 'mobile' is required.</p> </td> </tr> <tr> <td> <p>parameter-not-valid</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Parameter value is not valid. Check details and source message.<br /> e.g.<br /> Provided mobile is in bad format.<br /> User ID value is not valid</p> </td> </tr> <tr> <td> <p>resource-not-found</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Requested resource is not found. Check details message.</p> </td> </tr> <tr> <td> <p>resource-already-exists</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Resource already exists. Check details message.</p> </td> </tr> <tr> <td> <p>invalid-content</p> </td> <td> <p><strong>Invalid Attribute</strong><br /> Invalid request content. Check details message.<br /> e.g. empty request body</p> </td> </tr> <tr> <td> <p>unsupported-content-type</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Requested content type is not supported.</p> </td> </tr> <tr> <td> <p>unsupported-accept</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Accept type is not supported.</p> </td> </tr> <tr> <td> <p>service-unavailable</p> </td> <td> <p><strong>Service Unavailable </strong><br /> Service is currently unavailable. Please try again later. </p> </td> </tr> <tr> <td> <p>too-many-requests</p> </td> <td> <p><strong>Service Unavailable </strong><br /> Request rate limit per connection reached. Follow detail message for futher instructions.</p> </td> </tr> <tr> <td> <p>method-not-allowed</p> </td> <td> <p><strong>Not Allowed </strong><br /> Requested method is not allowed.</p> </td> </tr> <tr> <td> <p>unauthorized-access</p> </td> <td> <p><strong>Unauthorized </strong><br /> Unauthorized access.</p> </td> </tr> <tr> <td> <p>invalid-authorization-request</p> </td> <td> <p><strong>Unauthorized </strong><br /> Invalid authorization request. Check details message.</p> </td> </tr> <tr> <td> <p>no-production-access</p> </td> <td> <p><strong>Unauthorized </strong><br /> Partner has permission to access Sandbox data only. For accessing live Institution data, please contact us via Intercom or email.</p> </td> </tr> <tr> <td> <p>account-not-accessible-requires-user-action</p> </td> <td> <p><strong>Not Accessible </strong><br /> An action is required from end-user before account details can be returned.</p> </td> </tr> <tr> <td> <p>maintenance-error</p> </td> <td> <p><strong>Not Accessible </strong><br /> Requested resource is currently unavailable due to maintenance on Institution's side.</p> </td> </tr> <tr> <td> <p>temporary-unavailable</p> </td> <td> <p><strong>Not Accessible </strong><br /> Requested resource is currently unavailable due to temporary issue on Institution's side.</p> </td> </tr> <tr> <td> <p>forbidden-access</p> </td> <td> <p><strong>Forbidden access</strong><br /> Access to this resource is forbidden</p> </td> </tr> <tr> <td> <p>institution-not-supported</p> </td> <td> <p><strong>Institution is not supported</strong><br /> e.g. Institution AU00000 is not supported on this endpoint</p> </td> </tr> <tr> <td> <p>bank-statement-new-product</p> </td> <td> <p><strong>PDF Bank statement new product</strong><br /> New product requires config</p> </td> </tr> <tr> <td> <p>bank-statement-parsing-error</p> </td> <td> <p><strong>PDF Bank statement parsing error</strong><br /> Unable to parse statement</p> </td> </tr> <tr> <td> <p>bank-statement-not-supported</p> </td> <td> <p><strong>PDF bank statement not supported</strong><br /> Statement not supported</p> </td> </tr> <tr> <td> <p>missing-required-field</p> </td> <td> <p><strong>CSV missing required field</strong><br /> CSV header does not contain required field</p> </td> </tr> <tr> <td> <p>missing-required-field-value</p> </td> <td> <p><strong>CSV missing required field value</strong><br /> CSV row does not contain value for required field</p> </td> </tr> <tr> <td> <p>invalid-field-value</p> </td> <td> <p><strong>CSV invalid field value</strong><br /> Field value is not valid</p> </td> </tr> <tr> <td> <p>account-data-differs</p> </td> <td> <p><strong>CSV account data differs</strong><br /> Data for single account differs across rows</p> </td> </tr> <tr> <td> <p>empty-file</p> </td> <td> <p><strong>CSV empty file</strong><br /> CSV file has no data rows</p> </td> </tr> <tr> <td> <p>row-count-exceeded</p> </td> <td> <p><strong>CSV row count exceeded</strong><br /> CSV row count is above limit</p> </td> </tr> <tr> <td> <p>invalid-request-content</p> </td> <td> <p><strong>PDF/CSV invalid request content (file type)</strong><br /> Statement is not valid</p> </td> </tr> <tr> <td> <p>request-not-valid</p> </td> <td> <p><strong>PDF/CSV Invalid request</strong><br /> Request too long</p> </td> </tr> </tbody> </table>  <hr/> <h2> Versioning </h2> Your API version controls the API behaviour you see e.g. what properties you see in responses, what parameters you’re permitted to send in requests etc. In order to gain access to the API, you need to pass the appropriate version in HTTP header basiq-version, when exchanging your API key for a token. You don't need to pass basiq-version header in any subsequent requests.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install basiq_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your basiq_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('basiq_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/basiq_api
then install it via:

```shell
    npm install YOUR_USERNAME/basiq_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BasiqApi = require('basiq_api');

var defaultClient = BasiqApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = "YOUR ACCESS TOKEN"

var api = new BasiqApi.AccountsApi()

var userId = "userId_example"; // {String} User identifier

var accountId = "accountId_example"; // {String} Account identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccount(userId, accountId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://au-api.basiq.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BasiqApi.AccountsApi* | [**getAccount**](docs/AccountsApi.md#getAccount) | **GET** /users/{userId}/accounts/{accountId} | Use this to retrieve the details of a specific account. This request will return back an account object with the latest data since the last refresh. If you require the latest account details you will need to call the connection refresh resource.
*BasiqApi.AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /users/{userId}/accounts | Use this collection to retrieve a list of accounts. Each entry in the array is a separate account object.
*BasiqApi.AffordabilityApi* | [**getAffordability**](docs/AffordabilityApi.md#getAffordability) | **GET** /users/{userId}/affordability/{snapshotId} | Retrieves the details of an affordability summary. You need only supply the unique affordability identifier.
*BasiqApi.AffordabilityApi* | [**getAffordabilitySnapshotTransactions**](docs/AffordabilityApi.md#getAffordabilitySnapshotTransactions) | **GET** /users/{userId}/affordability/{snapshotId}/transactions | Returns a paginated list with a data property that contains an array of transactions from the affordability snapshot.
*BasiqApi.AffordabilityApi* | [**postAffordability**](docs/AffordabilityApi.md#postAffordability) | **POST** /users/{userId}/affordability | Use this to create a new affordability report.
*BasiqApi.AuthLinksApi* | [**deleteAuthLink**](docs/AuthLinksApi.md#deleteAuthLink) | **DELETE** /users/{userId}/auth_link | Permanently deletes an auth_link resource. Once deleted the URL associated with the deleted object will no longer be valid.
*BasiqApi.AuthLinksApi* | [**getAuthLink**](docs/AuthLinksApi.md#getAuthLink) | **GET** /users/{userId}/auth_link | Use this to retrieve the latest/last auth_link generated for the specified user..
*BasiqApi.AuthLinksApi* | [**postAuthLink**](docs/AuthLinksApi.md#postAuthLink) | **POST** /users/{userId}/auth_link | An Auth Link object can be generated to securely capture data from a User. Using the URL allows data to be captured via the hosted Basiq Connect Consent workflow for a given User.
*BasiqApi.ConnectionsApi* | [**deleteConnection**](docs/ConnectionsApi.md#deleteConnection) | **DELETE** /users/{userId}/connections/{connectionId} | Permanently deletes a connection.
*BasiqApi.ConnectionsApi* | [**getConnection**](docs/ConnectionsApi.md#getConnection) | **GET** /users/{userId}/connections/{connectionId} | Use this to retrieve details of a specific connection.
*BasiqApi.ConnectionsApi* | [**getConnections**](docs/ConnectionsApi.md#getConnections) | **GET** /users/{userId}/connections | Use this to retrieve details of the connections.
*BasiqApi.ConnectionsApi* | [**postConnection**](docs/ConnectionsApi.md#postConnection) | **POST** /users/{userId}/connections | Use this to create a new connection.
*BasiqApi.ConnectionsApi* | [**refreshConnection**](docs/ConnectionsApi.md#refreshConnection) | **POST** /users/{userId}/connections/{connectionId}/refresh | Use this to retrieve the latest financial data.
*BasiqApi.ConnectionsApi* | [**refreshConnections**](docs/ConnectionsApi.md#refreshConnections) | **POST** /users/{userId}/connections/refresh | Use this to refresh of all connections.
*BasiqApi.ConnectionsApi* | [**updateConnection**](docs/ConnectionsApi.md#updateConnection) | **POST** /users/{userId}/connections/{connectionId} | Use this to update the details of a specific connection.
*BasiqApi.EnrichApi* | [**getEnrich**](docs/EnrichApi.md#getEnrich) | **GET** /enrich | The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description.
*BasiqApi.ExpensesApi* | [**getExpenses**](docs/ExpensesApi.md#getExpenses) | **GET** /users/{userId}/expenses/{snapshotId} | Retrieves the details of an expenses summary. You need only supply the unique expenses identifier.
*BasiqApi.ExpensesApi* | [**postExpenses**](docs/ExpensesApi.md#postExpenses) | **POST** /users/{userId}/expenses | Use this to create a new expenses report.
*BasiqApi.IncomeApi* | [**getIncome**](docs/IncomeApi.md#getIncome) | **GET** /users/{userId}/income/{snapshotId} | Retrieves the details of an income summary. You need only supply the unique income identifier.
*BasiqApi.IncomeApi* | [**postIncome**](docs/IncomeApi.md#postIncome) | **POST** /users/{userId}/income | Use this to create a new income report.
*BasiqApi.InstitutionsApi* | [**getInstitution**](docs/InstitutionsApi.md#getInstitution) | **GET** /institutions/{institutionID} | Retrieves data for single institution.
*BasiqApi.InstitutionsApi* | [**getInstitutions**](docs/InstitutionsApi.md#getInstitutions) | **GET** /institutions | Retrieves institutions list.
*BasiqApi.InstitutionsApi* | [**getPublicInstitutions**](docs/InstitutionsApi.md#getPublicInstitutions) | **GET** /public/institutions | Retrieves publically availiable (no authentication required) institutions list.
*BasiqApi.JobsApi* | [**getJobs**](docs/JobsApi.md#getJobs) | **GET** /jobs/{jobId} | Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.
*BasiqApi.JobsApi* | [**getUserJobs**](docs/JobsApi.md#getUserJobs) | **GET** /users/{userId}/jobs | Retrieves the details of an existing jobs. You need only supply the unique user identifier.
*BasiqApi.StatementsApi* | [**createStatement**](docs/StatementsApi.md#createStatement) | **POST** /users/{userId}/statements | A user can choose to share their financial data by uploading official pdf bank statements instead of creating a bank connection. Once the statement object is successfully created you can use it to obtain the user's latest financial data extracted from the bank statement i.e. accounts and transactions.
*BasiqApi.TokenApi* | [**postToken**](docs/TokenApi.md#postToken) | **POST** /token | 
*BasiqApi.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /users/{userId}/transactions/{transactionId} | Retrieves the details of an existing transaction.
*BasiqApi.TransactionsApi* | [**getTransactions**](docs/TransactionsApi.md#getTransactions) | **GET** /users/{userId}/transactions | Use this collection to retrieve a paginated list of transactions.
*BasiqApi.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /users | Use this to create a new user object.
*BasiqApi.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{userId} | Delete a user.
*BasiqApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userId} | Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.
*BasiqApi.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **POST** /users/{userId} | Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


## Documentation for Models

 - [BasiqApi.AccountClass](docs/AccountClass.md)
 - [BasiqApi.AccountHolder](docs/AccountHolder.md)
 - [BasiqApi.AccountLinks](docs/AccountLinks.md)
 - [BasiqApi.AccountResponseResource](docs/AccountResponseResource.md)
 - [BasiqApi.AccountTransactionInterval](docs/AccountTransactionInterval.md)
 - [BasiqApi.AccountsContainer](docs/AccountsContainer.md)
 - [BasiqApi.AccountsData](docs/AccountsData.md)
 - [BasiqApi.AccountsFeatures](docs/AccountsFeatures.md)
 - [BasiqApi.AccountsResponseResource](docs/AccountsResponseResource.md)
 - [BasiqApi.AffordabilityAssetsData](docs/AffordabilityAssetsData.md)
 - [BasiqApi.AffordabilityPostRequest](docs/AffordabilityPostRequest.md)
 - [BasiqApi.AffordabilityRegularIncomeData](docs/AffordabilityRegularIncomeData.md)
 - [BasiqApi.AffordabilityResponse](docs/AffordabilityResponse.md)
 - [BasiqApi.AffordabilitySummary](docs/AffordabilitySummary.md)
 - [BasiqApi.AffordabilityTransactionLinks](docs/AffordabilityTransactionLinks.md)
 - [BasiqApi.AffordabilityTransactionsGetLinks](docs/AffordabilityTransactionsGetLinks.md)
 - [BasiqApi.AffordabilityTransactionsResponse](docs/AffordabilityTransactionsResponse.md)
 - [BasiqApi.Anzsic](docs/Anzsic.md)
 - [BasiqApi.AssetsPrevious6MonthsData](docs/AssetsPrevious6MonthsData.md)
 - [BasiqApi.AuthLinkLinks](docs/AuthLinkLinks.md)
 - [BasiqApi.AuthLinksPostResponseResource](docs/AuthLinksPostResponseResource.md)
 - [BasiqApi.AuthLinksResponseResource](docs/AuthLinksResponseResource.md)
 - [BasiqApi.AvgMonthlyData](docs/AvgMonthlyData.md)
 - [BasiqApi.BadRequestError](docs/BadRequestError.md)
 - [BasiqApi.CategoryDataExpenses](docs/CategoryDataExpenses.md)
 - [BasiqApi.ChangeHistoryAffordabilityData](docs/ChangeHistoryAffordabilityData.md)
 - [BasiqApi.ChangeHistoryExpensesClass](docs/ChangeHistoryExpensesClass.md)
 - [BasiqApi.ChangeHistoryExternal](docs/ChangeHistoryExternal.md)
 - [BasiqApi.ChangeHistoryIncome](docs/ChangeHistoryIncome.md)
 - [BasiqApi.ClassDetails](docs/ClassDetails.md)
 - [BasiqApi.ClassResourceExpenses](docs/ClassResourceExpenses.md)
 - [BasiqApi.Colors](docs/Colors.md)
 - [BasiqApi.ConnectionAccountLinks](docs/ConnectionAccountLinks.md)
 - [BasiqApi.ConnectionGetResponseResource](docs/ConnectionGetResponseResource.md)
 - [BasiqApi.ConnectionInstitution](docs/ConnectionInstitution.md)
 - [BasiqApi.ConnectionProfile](docs/ConnectionProfile.md)
 - [BasiqApi.ConnectionResponseResource](docs/ConnectionResponseResource.md)
 - [BasiqApi.ConnectionsData](docs/ConnectionsData.md)
 - [BasiqApi.ConnectionsGetResponseResource](docs/ConnectionsGetResponseResource.md)
 - [BasiqApi.ConnectionsRefreshResource](docs/ConnectionsRefreshResource.md)
 - [BasiqApi.CreateUser](docs/CreateUser.md)
 - [BasiqApi.CreditLiabilities](docs/CreditLiabilities.md)
 - [BasiqApi.CurrentIrregularSource](docs/CurrentIrregularSource.md)
 - [BasiqApi.CurrentOtherCreditSource](docs/CurrentOtherCreditSource.md)
 - [BasiqApi.CurrentRegularSource](docs/CurrentRegularSource.md)
 - [BasiqApi.DivisionDetails](docs/DivisionDetails.md)
 - [BasiqApi.EnrichCategory](docs/EnrichCategory.md)
 - [BasiqApi.EnrichData](docs/EnrichData.md)
 - [BasiqApi.EnrichGeometry](docs/EnrichGeometry.md)
 - [BasiqApi.EnrichLocation](docs/EnrichLocation.md)
 - [BasiqApi.EnrichMerchant](docs/EnrichMerchant.md)
 - [BasiqApi.EnrichPhoneNumber](docs/EnrichPhoneNumber.md)
 - [BasiqApi.ExpensesClass](docs/ExpensesClass.md)
 - [BasiqApi.ExpensesLinks](docs/ExpensesLinks.md)
 - [BasiqApi.ExpensesPostRequest](docs/ExpensesPostRequest.md)
 - [BasiqApi.ExpensesResponse](docs/ExpensesResponse.md)
 - [BasiqApi.ExternalLiabilityData](docs/ExternalLiabilityData.md)
 - [BasiqApi.ExternalPayment](docs/ExternalPayment.md)
 - [BasiqApi.FeatureCondition](docs/FeatureCondition.md)
 - [BasiqApi.Features](docs/Features.md)
 - [BasiqApi.ForbiddenAccessError](docs/ForbiddenAccessError.md)
 - [BasiqApi.Gap](docs/Gap.md)
 - [BasiqApi.GetAffordabilityLinks](docs/GetAffordabilityLinks.md)
 - [BasiqApi.GetConnectionLinks](docs/GetConnectionLinks.md)
 - [BasiqApi.GetConnectionsLinks](docs/GetConnectionsLinks.md)
 - [BasiqApi.GetEnrichResponse](docs/GetEnrichResponse.md)
 - [BasiqApi.GetUserAccount](docs/GetUserAccount.md)
 - [BasiqApi.GetUserAccountData](docs/GetUserAccountData.md)
 - [BasiqApi.GetUserConnection](docs/GetUserConnection.md)
 - [BasiqApi.GetUserConnectionData](docs/GetUserConnectionData.md)
 - [BasiqApi.GetUserLinks](docs/GetUserLinks.md)
 - [BasiqApi.GoneError](docs/GoneError.md)
 - [BasiqApi.GroupDetails](docs/GroupDetails.md)
 - [BasiqApi.IncomeLinks](docs/IncomeLinks.md)
 - [BasiqApi.IncomePostRequest](docs/IncomePostRequest.md)
 - [BasiqApi.IncomeResponse](docs/IncomeResponse.md)
 - [BasiqApi.IncomeSummary](docs/IncomeSummary.md)
 - [BasiqApi.Institution](docs/Institution.md)
 - [BasiqApi.InstitutionLogoResource](docs/InstitutionLogoResource.md)
 - [BasiqApi.InstitutionModel](docs/InstitutionModel.md)
 - [BasiqApi.InstitutionPerformanceStats](docs/InstitutionPerformanceStats.md)
 - [BasiqApi.InstitutionsList](docs/InstitutionsList.md)
 - [BasiqApi.InternalServerError](docs/InternalServerError.md)
 - [BasiqApi.IrregularSource](docs/IrregularSource.md)
 - [BasiqApi.IrregularityIncome](docs/IrregularityIncome.md)
 - [BasiqApi.JobData](docs/JobData.md)
 - [BasiqApi.JobsData](docs/JobsData.md)
 - [BasiqApi.JobsInstitution](docs/JobsInstitution.md)
 - [BasiqApi.JobsLinks](docs/JobsLinks.md)
 - [BasiqApi.JobsResponseResource](docs/JobsResponseResource.md)
 - [BasiqApi.JobsResult](docs/JobsResult.md)
 - [BasiqApi.JobsStep](docs/JobsStep.md)
 - [BasiqApi.LiabilitiesData](docs/LiabilitiesData.md)
 - [BasiqApi.LoanLiabilities](docs/LoanLiabilities.md)
 - [BasiqApi.LogoResourceLinks](docs/LogoResourceLinks.md)
 - [BasiqApi.Meta](docs/Meta.md)
 - [BasiqApi.NotFoundError](docs/NotFoundError.md)
 - [BasiqApi.OtherCreditSource](docs/OtherCreditSource.md)
 - [BasiqApi.PaymentsSummaryExpenses](docs/PaymentsSummaryExpenses.md)
 - [BasiqApi.PhysicalAddresses](docs/PhysicalAddresses.md)
 - [BasiqApi.Previous3MonthsIncome](docs/Previous3MonthsIncome.md)
 - [BasiqApi.Previous6MonthsCreditLiabilities](docs/Previous6MonthsCreditLiabilities.md)
 - [BasiqApi.Previous6MonthsLoan](docs/Previous6MonthsLoan.md)
 - [BasiqApi.PreviousMonthDataLiabilities](docs/PreviousMonthDataLiabilities.md)
 - [BasiqApi.PreviousMonthDataLoanLiabilities](docs/PreviousMonthDataLoanLiabilities.md)
 - [BasiqApi.ProfileFeatures](docs/ProfileFeatures.md)
 - [BasiqApi.RegularSource](docs/RegularSource.md)
 - [BasiqApi.ResourceLink](docs/ResourceLink.md)
 - [BasiqApi.ResourceLinks](docs/ResourceLinks.md)
 - [BasiqApi.ResponseFormat](docs/ResponseFormat.md)
 - [BasiqApi.Source](docs/Source.md)
 - [BasiqApi.SourceName](docs/SourceName.md)
 - [BasiqApi.StatementUploadResource](docs/StatementUploadResource.md)
 - [BasiqApi.StatusServiceUnavailableError](docs/StatusServiceUnavailableError.md)
 - [BasiqApi.SubCategoryExpenses](docs/SubCategoryExpenses.md)
 - [BasiqApi.SubClass](docs/SubClass.md)
 - [BasiqApi.SubdivisionDetails](docs/SubdivisionDetails.md)
 - [BasiqApi.TokenPostResponse](docs/TokenPostResponse.md)
 - [BasiqApi.TransactionData](docs/TransactionData.md)
 - [BasiqApi.TransactionDataAffordability](docs/TransactionDataAffordability.md)
 - [BasiqApi.TransactionLinks](docs/TransactionLinks.md)
 - [BasiqApi.TransactionsAnzsic](docs/TransactionsAnzsic.md)
 - [BasiqApi.TransactionsCategory](docs/TransactionsCategory.md)
 - [BasiqApi.TransactionsClass](docs/TransactionsClass.md)
 - [BasiqApi.TransactionsDivision](docs/TransactionsDivision.md)
 - [BasiqApi.TransactionsEnrich](docs/TransactionsEnrich.md)
 - [BasiqApi.TransactionsFeatures](docs/TransactionsFeatures.md)
 - [BasiqApi.TransactionsGeometry](docs/TransactionsGeometry.md)
 - [BasiqApi.TransactionsGetLinks](docs/TransactionsGetLinks.md)
 - [BasiqApi.TransactionsGetResource](docs/TransactionsGetResource.md)
 - [BasiqApi.TransactionsGroup](docs/TransactionsGroup.md)
 - [BasiqApi.TransactionsLocation](docs/TransactionsLocation.md)
 - [BasiqApi.TransactionsMerchant](docs/TransactionsMerchant.md)
 - [BasiqApi.TransactionsPhoneNumber](docs/TransactionsPhoneNumber.md)
 - [BasiqApi.TransactionsSubdivision](docs/TransactionsSubdivision.md)
 - [BasiqApi.UnauthorizedError](docs/UnauthorizedError.md)
 - [BasiqApi.UnsupportedMediaTypeError](docs/UnsupportedMediaTypeError.md)
 - [BasiqApi.UpdateUser](docs/UpdateUser.md)
 - [BasiqApi.UserConnectionPostData](docs/UserConnectionPostData.md)
 - [BasiqApi.UserConnectionsPostData](docs/UserConnectionsPostData.md)
 - [BasiqApi.UserGetResponse](docs/UserGetResponse.md)
 - [BasiqApi.UserPostResponse](docs/UserPostResponse.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - SERVER_ACCESS: Server access scope
  - CLIENT_ACCESS: Client access scope

