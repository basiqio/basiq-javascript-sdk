# Basiq Javascript SDK 

Use our JavaScript SDK to integrate with the Basiq API 

## Installation
Install this package using `npm` 

```shell
npm install basiq-javascript-sdk
```

## Usage

1. Create an instance of the Basiq API object

```javascript
var BasiqApi = require('basiq_api');

var defaultClient = BasiqApi.ApiClient.instance;
```

2. Authenticate by setting your [access token](docs/TokenApi.md#postToken)

```javascript
var application = defaultClient.authentications['application'];
application.accessToken = "YOUR_ACCESS_TOKEN"
```

3. Create an instance of the API object you need and call the relevant method. 

Make sure to pass the relevant parameters and a callback to handle the response data.

[See the full breakdown of requests and methods.](#Documentation-for-API-Endpoints)

```javascript
var accountsApi = new BasiqApi.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('Call made successfully! Basiq returned: ' + data);
  }
};

api.getAccount(userId, accountId, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://au-api.basiq.io*

Class | Method | HTTP request | Description 
------------ | ---- | ------------- | -------------------------------
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

<img width="500"/>


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

