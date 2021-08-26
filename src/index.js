/*
 * Basiq API.
 * <h2> Introduction </h2> Basiq provides a collection of APIs to help you build powerful financial solutions for a wide range of use cases. The most common use cases are: <ul> <li><b>Personal Financial Management.</b> Enable your customers to aggregate all of their financial data in one place, identify expenses and gain valuable insight of their spending.</li> <li><b>Wealth Management.</b> Gain valuable insights and a clearer understanding of your customers’ financial positions to customize advice, recommendations, and product offerings. </li> <li><b>Risk Insights.</b> Gain real-time and comprehensive visibility of your customers' assets, income, non-credit payment patterns, and transactional details.</li> <li><b>Cashflow Analysis.</b> Provide tools that analyze cash flow and forecast future expenses and income.</li> <li><b>Account Summary.</b> Display the big picture with financial account data listed alongside balance information.</li> <li><b>Account Verification.</b> Instantly verify account ownership and balances in real time to improve the user experience and mitigate fraud and risk.</li> <li><b>Data Enhancement.</b> Gain greater financial insights around consumer spending patterns and trends with categorised and enriched transaction data. </li> </ul> Basiq APIs are currently only available in Australia and New Zealand. We are working to make them available in other countries - so check back soon. Use this link to see a complete list of <a href= 'http://docs.basiq.io/the-basiq-platform/supported-financial-institutions'>supported financial institutions.</a> <hr/> <h2> Basiq API Services </h2>  Basiq provides three core API services which you can use to develop innovative financial solutions: <ul> <li><b>Connect</b> provides the ability to easily acquire financial data such as account details and balances and related transactions from various financial institutions.</li> <li><b>Enrich</b> classifies all banking, credit and debit card transactions into categories based on specific merchant, merchant type and geographical location data.</li> <li><b>Affordability</b> provides a complete 360 degree view of your customers financial health - by breaking down their finances into assets, liabilities, income and expenses. You can use Income and Expenses endpoints separately or as part of the full Affordability API solution.</li> </ul>  Base URL is → https://au-api.basiq.io - you can use our sandbox environment for free right now - just grab an API key! Enrich URL is → https://au-api.basiq.io/enrich - contact us to have your API key activated to try out this API. Affordability URL is → https://au-api.basiq.io/affordability - you can use our sandbox environment for free - contact us to have your API key activated. <hr/> <h2> Getting Started </h2> <b>Start Developing </b>  Before you can start using any of the available Basiq APIs there are a few things you will need to do first. <ol> <li> <a href='https://dashboard.basiq.io/login'>Sign-up</a> to the Basiq API service </li> <li> Grab your API key for your application (via the <a href= 'https://dashboard.basiq.io/'>Developer Dashboard</a>) </li> </ol> Once you have successfully obtained an API key, you can start using any of the available Basiq APIs.  This <a href='http://docs.basiq.io/getting-started/get-started-with-basiq'>user guide</a> gets you up and running with the Basiq API in the time it takes to make a cup of tea. It includes a <a href='https://documenter.getpostman.com/view/9721346/SztEaSr2?version=latest'>Postman collection</a> to help you get a fast feel for the API. Please note that all of the Basiq's Core API and Affordability APIs are accessible using the sandbox data (see testing for details). We encourage you to play with the sandbox data. Once you are ready you will need to supply payment details in order to use the full set of Basiq API services. <hr/> <h2> Authentication </h2> When working with Basiq APIs your application will need to complete the authentication process first before you can access any of the available resources.  The authentication process is fairly straight forward, and simply requires you to exchange your API key for a token. Once you obtain the token, you can call any of the available API services by simply including the token in the Authorization header of each request. Your API keys carry many privileges, so be sure to keep them secret! Do not share your API keys in publicly accessible areas such GitHub, client-side code, etc. <h3> Prerequisites </h3> Prior to authenticating your application you will need to complete the following steps: <ol> <li> <a href='https://dashboard.basiq.io/login'>Sign-up</a> to the Basiq API service </li> <li> Grab your API key for your application (via the <a href= 'https://dashboard.basiq.io/'>Developer Dashboard</a>) </li> </ol>  <h3> Steps to authenticate </h3> <ol> <li> Call /token passing in the API key in the Authorization header of the request and Basiq API version you intent to use </li> <li> The server will validate the key and if everything is successful will issue an access token along with the following properties:</li> </ol> <table style=\"width: 50%\"> <tr> <td><b>Property </b><td> <td><b>Description</b> <td><tr> <tr> <td>access_token - <i>string, readonly</t><td> <td>The generated access token.<td><tr> <tr> <td>expires_in - <i>number, readonly</i><td> <td>The number of seconds left before the token becomes invalid.<td><tr> <tr> <td>token_type - <i>string, readonly</i><td> <td>This value will always be <b>Bearer</b>.<td><tr> </table> This access token is the key to making successful requests to the Basiq API. From here on you will need to include this access token in the header when requesting any of the secured resources as follows:  <b>Authorization: Bearer [access_token]</b> Note that tokens have a short lifespan and as such should not be stored permanently. Once a token has expired your application will need to reauthenticate. <hr/> <h2> Testing </h2> There’s nothing worse than developing against an API with crappy test data. We get that! This is why we have put a lot of effort into ensuring that our test data mimics real production data that your app will consume. <h3> Connect API </h3> The test data that we provide for the Connect API service (below) has been designed to mimic a real life user. This means that just a like a real user would spend and receive funds throughout the day - our test accounts have been designed to do the same thing. Therefore you should expect to see new transaction records being created throughout the day, and the account balances adjusted accordingly.  This should give you a good feel for the type of data that you should expect to see for your own customers. The transaction data is completely random, and even we are sometimes surprised by transactions that appear :-) You can use our sandbox environment for free right now - just grab an API key to get started (via the <a href='https://dashboard.basiq.io/'>Developer Dashboard</a>). Ensure that you pass the institution code AU00000 when using the test accounts. <table style=\"width: 50%\"> <tr> <td> <b>loginId</b> </td><td> <b>password</b> </td</tr> <tr> <td> Wentworth-Smith </td><td> whislter </td</tr> <tr> <td> gavinBelson </td><td> hooli2016 </td</tr> <tr> <td> jared </td><td> django </td</tr> <tr> <td> richard </td><td> tabsnotspaces </td</tr> </table> <h3> Enrich API </h3> The Enrich API returns merchant metadata regarding name, location and category.  This service can be tested using bank transaction data that you provide. You can use real bank transaction data and the Enrich API will return enriched records for those transactions. Note that the same endpoint is utilised for both testing and production users, however a limit of 100 queries is set for testing users. Contact us (via the \"help\" icon at the bottom of the page) to have your Enrich access enabled.  You will need to ensure that the search query is <b>url encoded</b> before calling the resource and must contain at least 3 characters.  Example queries: q=garfish%20MANLY%20NS&country=AU&institution=AU06703&accountType=transaction&amount=-12.95 q=garfish%20MANLY%20NS&institution= AU13601  <table> <tr> <td> Example Queries: </td> </tr> <tr> <td> <ol> <li> GARFISH MANLY NS </li> <li> 12 VOLT DIRECT PTY L LONSDALE AU </li> <li> HARVEY NORMAN AV/IT BALGOWLAH AU </li> <li> CALTEX ALDINGA BEACH ALDINGA BEACHAU </li> <li> KMART 1055 WARRIEWOOD AU </li> <li> KAKADU LODGE & CARAV JABIRU AU </li> <ol> </td> </tr> </table>  <h3> Affordability API </h3> The test data that we provide for the Affordability API service has been designed to mimic a real life user. This means that just a like a real user would spend and receive funds throughout the day - our test accounts have been designed to do the same thing. Therefore you should expect to see new transaction records being created throughout the day, and the account balances adjusted accordingly. You can use our sandbox environment for free - contact us (via the \"help\" icon at the bottom of the page) to have your API key activated for Affordability. Ensure that you pass the institution code AU00000 when using the test accounts. <table style=\"width: 50%\"> <tr> <td> <b>loginId</b> </td><td> <b>password</b> </td</tr> <tr> <td> Wentworth-Smith </td><td> whislter </td</tr> </table>  Once you have created a test connection you can access the Affordability, Income and Expense endpoints for this user. The Affordability endpoint returns links to Income and Expense resources or you can use these endpoints independently without Affordability. <hr/> <h2> Collections </h2> Collection resources provide access to information about a list of objects of the same type. For example, you can use a collection resource to access information about a list of users. Collection resources are paged and may be sorted and filtered (depending on availability) - and will always return an object of type list. <h3> Filters </h3> Some collections support the ability to filter the results. Filtering a collection resource is conducted via the filter query parameter using the following notation:  <b>?filter=[property].[ condition ]([ value ]) </b> All filter values should be URL encoded: ?filter=URLEncode(*)  <h3>Accessing Properties</h3> Properties are accessed using the following notation <b>object.property</b>. <h3> Supported Conditions </h3> <table> <tr>  <th>eq</th> <td> Equals <b>?filter=account.id.eq('s55bf3')</b></td> </tr> <tr>  <th>bt</th> <td> Between two values - used for date range filtering. <b> ?filter=transaction.postDate.bt('2017-09-28','2018-01-30'). Values are inclusive.</b> </td> </tr> <tr>  <th>gt</th> <td> Greater than <b>?filter=transaction.postDate.gt('2018-01-28')</b></td> </tr> <tr>  <th>gteq</th> <td> Greater than or equal to <b>?filter=transaction.postDate.gteq('2018-01-28')</b> </td> </tr> <tr>  <th>lt</th> <td> Less than <b> ?filter=transaction.postDate.lt('2018-01-28') </b></td> </tr> <tr>  <th>lteq</th> <td> Less than or equal to <b> ?filter=transaction.postDate.lteq('2018-01-28') </b> </td> </tr> <tr>  <th>ne</th> <td>Not equals (only currently for <b>Institutions </b>endpoint) <b> ?filter=institution.institutionType.ne('Test Bank') </b> </td> </tr> </table> Where available, you can apply multiple filters to a collection by separating them with a comma.  Multiple filters are treated as an and (&) operation example:  <b> ?filter=transaction.postDate.bt('2018-01-28','2018-02-27'),account.id.eq('aef3g') </b>  Note the examples above have not url encoded the filters. You will need to ensure that the filter values are url encoded before calling the resource. <hr/> <h2> Errors </h2> The Connect API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, user's credentials are invalid, etc.), and codes in the 5xx range indicate an error with the Connect API's servers (these are rare). In addition to returning an appropriate HTTP code the body will also include a JSON formatted error object that provides more details about the specifics of the error. The error object will return the error as an array to indicate multiple errors (where present). <table> <tr> <td colspan='2'><b>Attributes</b><td> </tr> <tr> <td> <b>correlationId</b> <td>a unique identifier for this particular occurrence of the problem.</td> </tr> <tr> <td> <b>code</b> <td>an application-specific error code, expressed as a string value.</td> </tr> <tr> <td> <b>title</b> <td>a short, human-readable summary of the problem.</td> </tr> <tr> <td> <b>detail</b> <td>a human-readable explanation specific to this occurrence of the problem.</td> </tr> <tr> <td> <b>source</b> <td>an object containing references to the source of the error, optionally including any of the following members: <ul> <li> <b>pointer</b> the location to the object or attribute that the error relates to </li> <li> <b>parameter</b> the location to the object or attribute that the error relates to </li> </ul> </td> </tr> </table> <h3> Error Codes </h3> Below you will find details for our various response codes. <table> <tbody> <tr> <th>Code</th> <th>Description</th> </tr> <tr> <td> <p>invalid-credentials</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Cannot login to target institution using supplied credentials. Please check credentials and try again.</p> </td> </tr> <tr> <td> <p>internal-server-error</p> </td> <td> <p><strong>Server Error </strong><br /> Internal server error<br /> All endpoints</p> </td> </tr> <tr> <td> <p>access-denied</p> </td> <td> <p><strong>Access denied</strong><br /> Token has expired</p> </td> </tr> <tr> <td> <p>invalid-authorization-token</p> </td> <td> <p><strong>Unauthorized </strong><br /> Invalid authorization token. Check details message.</p> </td> </tr> <tr> <td> <p>parameter-not-supplied</p> </td> <td> <p><strong>Missing Attribute </strong><br /> Required parameter not supplied. Check details and source message.<br /> e.g. One of 'email' or 'mobile' is required.</p> </td> </tr> <tr> <td> <p>parameter-not-valid</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Parameter value is not valid. Check details and source message.<br /> e.g.<br /> Provided mobile is in bad format.<br /> User ID value is not valid</p> </td> </tr> <tr> <td> <p>resource-not-found</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Requested resource is not found. Check details message.</p> </td> </tr> <tr> <td> <p>resource-already-exists</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Resource already exists. Check details message.</p> </td> </tr> <tr> <td> <p>invalid-content</p> </td> <td> <p><strong>Invalid Attribute</strong><br /> Invalid request content. Check details message.<br /> e.g. empty request body</p> </td> </tr> <tr> <td> <p>unsupported-content-type</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Requested content type is not supported.</p> </td> </tr> <tr> <td> <p>unsupported-accept</p> </td> <td> <p><strong>Invalid Attribute </strong><br /> Accept type is not supported.</p> </td> </tr> <tr> <td> <p>service-unavailable</p> </td> <td> <p><strong>Service Unavailable </strong><br /> Service is currently unavailable. Please try again later. </p> </td> </tr> <tr> <td> <p>too-many-requests</p> </td> <td> <p><strong>Service Unavailable </strong><br /> Request rate limit per connection reached. Follow detail message for futher instructions.</p> </td> </tr> <tr> <td> <p>method-not-allowed</p> </td> <td> <p><strong>Not Allowed </strong><br /> Requested method is not allowed.</p> </td> </tr> <tr> <td> <p>unauthorized-access</p> </td> <td> <p><strong>Unauthorized </strong><br /> Unauthorized access.</p> </td> </tr> <tr> <td> <p>invalid-authorization-request</p> </td> <td> <p><strong>Unauthorized </strong><br /> Invalid authorization request. Check details message.</p> </td> </tr> <tr> <td> <p>no-production-access</p> </td> <td> <p><strong>Unauthorized </strong><br /> Partner has permission to access Sandbox data only. For accessing live Institution data, please contact us via Intercom or email.</p> </td> </tr> <tr> <td> <p>account-not-accessible-requires-user-action</p> </td> <td> <p><strong>Not Accessible </strong><br /> An action is required from end-user before account details can be returned.</p> </td> </tr> <tr> <td> <p>maintenance-error</p> </td> <td> <p><strong>Not Accessible </strong><br /> Requested resource is currently unavailable due to maintenance on Institution's side.</p> </td> </tr> <tr> <td> <p>temporary-unavailable</p> </td> <td> <p><strong>Not Accessible </strong><br /> Requested resource is currently unavailable due to temporary issue on Institution's side.</p> </td> </tr> <tr> <td> <p>forbidden-access</p> </td> <td> <p><strong>Forbidden access</strong><br /> Access to this resource is forbidden</p> </td> </tr> <tr> <td> <p>institution-not-supported</p> </td> <td> <p><strong>Institution is not supported</strong><br /> e.g. Institution AU00000 is not supported on this endpoint</p> </td> </tr> <tr> <td> <p>bank-statement-new-product</p> </td> <td> <p><strong>PDF Bank statement new product</strong><br /> New product requires config</p> </td> </tr> <tr> <td> <p>bank-statement-parsing-error</p> </td> <td> <p><strong>PDF Bank statement parsing error</strong><br /> Unable to parse statement</p> </td> </tr> <tr> <td> <p>bank-statement-not-supported</p> </td> <td> <p><strong>PDF bank statement not supported</strong><br /> Statement not supported</p> </td> </tr> <tr> <td> <p>missing-required-field</p> </td> <td> <p><strong>CSV missing required field</strong><br /> CSV header does not contain required field</p> </td> </tr> <tr> <td> <p>missing-required-field-value</p> </td> <td> <p><strong>CSV missing required field value</strong><br /> CSV row does not contain value for required field</p> </td> </tr> <tr> <td> <p>invalid-field-value</p> </td> <td> <p><strong>CSV invalid field value</strong><br /> Field value is not valid</p> </td> </tr> <tr> <td> <p>account-data-differs</p> </td> <td> <p><strong>CSV account data differs</strong><br /> Data for single account differs across rows</p> </td> </tr> <tr> <td> <p>empty-file</p> </td> <td> <p><strong>CSV empty file</strong><br /> CSV file has no data rows</p> </td> </tr> <tr> <td> <p>row-count-exceeded</p> </td> <td> <p><strong>CSV row count exceeded</strong><br /> CSV row count is above limit</p> </td> </tr> <tr> <td> <p>invalid-request-content</p> </td> <td> <p><strong>PDF/CSV invalid request content (file type)</strong><br /> Statement is not valid</p> </td> </tr> <tr> <td> <p>request-not-valid</p> </td> <td> <p><strong>PDF/CSV Invalid request</strong><br /> Request too long</p> </td> </tr> </tbody> </table>  <hr/> <h2> Versioning </h2> Your API version controls the API behaviour you see e.g. what properties you see in responses, what parameters you’re permitted to send in requests etc. In order to gain access to the API, you need to pass the appropriate version in HTTP header basiq-version, when exchanging your API key for a token. You don't need to pass basiq-version header in any subsequent requests.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountClass', 'model/AccountHolder', 'model/AccountLinks', 'model/AccountResponseResource', 'model/AccountTransactionInterval', 'model/AccountsContainer', 'model/AccountsData', 'model/AccountsFeatures', 'model/AccountsResponseResource', 'model/AffordabilityAssetsData', 'model/AffordabilityPostRequest', 'model/AffordabilityRegularIncomeData', 'model/AffordabilityResponse', 'model/AffordabilitySummary', 'model/AffordabilityTransactionLinks', 'model/AffordabilityTransactionsGetLinks', 'model/AffordabilityTransactionsResponse', 'model/Anzsic', 'model/AssetsPrevious6MonthsData', 'model/AuthLinkLinks', 'model/AuthLinksPostResponseResource', 'model/AuthLinksResponseResource', 'model/AvgMonthlyData', 'model/BadRequestError', 'model/CategoryDataExpenses', 'model/ChangeHistoryAffordabilityData', 'model/ChangeHistoryExpensesClass', 'model/ChangeHistoryExternal', 'model/ChangeHistoryIncome', 'model/ClassDetails', 'model/ClassResourceExpenses', 'model/Colors', 'model/ConnectionAccountLinks', 'model/ConnectionGetResponseResource', 'model/ConnectionInstitution', 'model/ConnectionProfile', 'model/ConnectionResponseResource', 'model/ConnectionsData', 'model/ConnectionsGetResponseResource', 'model/ConnectionsRefreshResource', 'model/CreateUser', 'model/CreditLiabilities', 'model/CurrentIrregularSource', 'model/CurrentOtherCreditSource', 'model/CurrentRegularSource', 'model/DivisionDetails', 'model/EnrichCategory', 'model/EnrichData', 'model/EnrichGeometry', 'model/EnrichLocation', 'model/EnrichMerchant', 'model/EnrichPhoneNumber', 'model/ExpensesClass', 'model/ExpensesLinks', 'model/ExpensesPostRequest', 'model/ExpensesResponse', 'model/ExternalLiabilityData', 'model/ExternalPayment', 'model/FeatureCondition', 'model/Features', 'model/ForbiddenAccessError', 'model/Gap', 'model/GetAffordabilityLinks', 'model/GetConnectionLinks', 'model/GetConnectionsLinks', 'model/GetEnrichResponse', 'model/GetUserAccount', 'model/GetUserAccountData', 'model/GetUserConnection', 'model/GetUserConnectionData', 'model/GetUserLinks', 'model/GoneError', 'model/GroupDetails', 'model/IncomeLinks', 'model/IncomePostRequest', 'model/IncomeResponse', 'model/IncomeSummary', 'model/Institution', 'model/InstitutionLogoResource', 'model/InstitutionModel', 'model/InstitutionPerformanceStats', 'model/InstitutionsList', 'model/InternalServerError', 'model/IrregularSource', 'model/IrregularityIncome', 'model/JobData', 'model/JobsData', 'model/JobsInstitution', 'model/JobsLinks', 'model/JobsResponseResource', 'model/JobsResult', 'model/JobsStep', 'model/LiabilitiesData', 'model/LoanLiabilities', 'model/LogoResourceLinks', 'model/Meta', 'model/NotFoundError', 'model/OtherCreditSource', 'model/PaymentsSummaryExpenses', 'model/PhysicalAddresses', 'model/Previous3MonthsIncome', 'model/Previous6MonthsCreditLiabilities', 'model/Previous6MonthsLoan', 'model/PreviousMonthDataLiabilities', 'model/PreviousMonthDataLoanLiabilities', 'model/ProfileFeatures', 'model/RegularSource', 'model/ResourceLink', 'model/ResourceLinks', 'model/ResponseFormat', 'model/Source', 'model/SourceName', 'model/StatementUploadResource', 'model/StatusServiceUnavailableError', 'model/SubCategoryExpenses', 'model/SubClass', 'model/SubdivisionDetails', 'model/TokenPostResponse', 'model/TransactionData', 'model/TransactionDataAffordability', 'model/TransactionLinks', 'model/TransactionsAnzsic', 'model/TransactionsCategory', 'model/TransactionsClass', 'model/TransactionsDivision', 'model/TransactionsEnrich', 'model/TransactionsFeatures', 'model/TransactionsGeometry', 'model/TransactionsGetLinks', 'model/TransactionsGetResource', 'model/TransactionsGroup', 'model/TransactionsLocation', 'model/TransactionsMerchant', 'model/TransactionsPhoneNumber', 'model/TransactionsSubdivision', 'model/UnauthorizedError', 'model/UnsupportedMediaTypeError', 'model/UpdateUser', 'model/UserConnectionPostData', 'model/UserConnectionsPostData', 'model/UserGetResponse', 'model/UserPostResponse', 'api/AccountsApi', 'api/AffordabilityApi', 'api/AuthLinksApi', 'api/ConnectionsApi', 'api/EnrichApi', 'api/ExpensesApi', 'api/IncomeApi', 'api/InstitutionsApi', 'api/JobsApi', 'api/StatementsApi', 'api/TokenApi', 'api/TransactionsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountClass'), require('./model/AccountHolder'), require('./model/AccountLinks'), require('./model/AccountResponseResource'), require('./model/AccountTransactionInterval'), require('./model/AccountsContainer'), require('./model/AccountsData'), require('./model/AccountsFeatures'), require('./model/AccountsResponseResource'), require('./model/AffordabilityAssetsData'), require('./model/AffordabilityPostRequest'), require('./model/AffordabilityRegularIncomeData'), require('./model/AffordabilityResponse'), require('./model/AffordabilitySummary'), require('./model/AffordabilityTransactionLinks'), require('./model/AffordabilityTransactionsGetLinks'), require('./model/AffordabilityTransactionsResponse'), require('./model/Anzsic'), require('./model/AssetsPrevious6MonthsData'), require('./model/AuthLinkLinks'), require('./model/AuthLinksPostResponseResource'), require('./model/AuthLinksResponseResource'), require('./model/AvgMonthlyData'), require('./model/BadRequestError'), require('./model/CategoryDataExpenses'), require('./model/ChangeHistoryAffordabilityData'), require('./model/ChangeHistoryExpensesClass'), require('./model/ChangeHistoryExternal'), require('./model/ChangeHistoryIncome'), require('./model/ClassDetails'), require('./model/ClassResourceExpenses'), require('./model/Colors'), require('./model/ConnectionAccountLinks'), require('./model/ConnectionGetResponseResource'), require('./model/ConnectionInstitution'), require('./model/ConnectionProfile'), require('./model/ConnectionResponseResource'), require('./model/ConnectionsData'), require('./model/ConnectionsGetResponseResource'), require('./model/ConnectionsRefreshResource'), require('./model/CreateUser'), require('./model/CreditLiabilities'), require('./model/CurrentIrregularSource'), require('./model/CurrentOtherCreditSource'), require('./model/CurrentRegularSource'), require('./model/DivisionDetails'), require('./model/EnrichCategory'), require('./model/EnrichData'), require('./model/EnrichGeometry'), require('./model/EnrichLocation'), require('./model/EnrichMerchant'), require('./model/EnrichPhoneNumber'), require('./model/ExpensesClass'), require('./model/ExpensesLinks'), require('./model/ExpensesPostRequest'), require('./model/ExpensesResponse'), require('./model/ExternalLiabilityData'), require('./model/ExternalPayment'), require('./model/FeatureCondition'), require('./model/Features'), require('./model/ForbiddenAccessError'), require('./model/Gap'), require('./model/GetAffordabilityLinks'), require('./model/GetConnectionLinks'), require('./model/GetConnectionsLinks'), require('./model/GetEnrichResponse'), require('./model/GetUserAccount'), require('./model/GetUserAccountData'), require('./model/GetUserConnection'), require('./model/GetUserConnectionData'), require('./model/GetUserLinks'), require('./model/GoneError'), require('./model/GroupDetails'), require('./model/IncomeLinks'), require('./model/IncomePostRequest'), require('./model/IncomeResponse'), require('./model/IncomeSummary'), require('./model/Institution'), require('./model/InstitutionLogoResource'), require('./model/InstitutionModel'), require('./model/InstitutionPerformanceStats'), require('./model/InstitutionsList'), require('./model/InternalServerError'), require('./model/IrregularSource'), require('./model/IrregularityIncome'), require('./model/JobData'), require('./model/JobsData'), require('./model/JobsInstitution'), require('./model/JobsLinks'), require('./model/JobsResponseResource'), require('./model/JobsResult'), require('./model/JobsStep'), require('./model/LiabilitiesData'), require('./model/LoanLiabilities'), require('./model/LogoResourceLinks'), require('./model/Meta'), require('./model/NotFoundError'), require('./model/OtherCreditSource'), require('./model/PaymentsSummaryExpenses'), require('./model/PhysicalAddresses'), require('./model/Previous3MonthsIncome'), require('./model/Previous6MonthsCreditLiabilities'), require('./model/Previous6MonthsLoan'), require('./model/PreviousMonthDataLiabilities'), require('./model/PreviousMonthDataLoanLiabilities'), require('./model/ProfileFeatures'), require('./model/RegularSource'), require('./model/ResourceLink'), require('./model/ResourceLinks'), require('./model/ResponseFormat'), require('./model/Source'), require('./model/SourceName'), require('./model/StatementUploadResource'), require('./model/StatusServiceUnavailableError'), require('./model/SubCategoryExpenses'), require('./model/SubClass'), require('./model/SubdivisionDetails'), require('./model/TokenPostResponse'), require('./model/TransactionData'), require('./model/TransactionDataAffordability'), require('./model/TransactionLinks'), require('./model/TransactionsAnzsic'), require('./model/TransactionsCategory'), require('./model/TransactionsClass'), require('./model/TransactionsDivision'), require('./model/TransactionsEnrich'), require('./model/TransactionsFeatures'), require('./model/TransactionsGeometry'), require('./model/TransactionsGetLinks'), require('./model/TransactionsGetResource'), require('./model/TransactionsGroup'), require('./model/TransactionsLocation'), require('./model/TransactionsMerchant'), require('./model/TransactionsPhoneNumber'), require('./model/TransactionsSubdivision'), require('./model/UnauthorizedError'), require('./model/UnsupportedMediaTypeError'), require('./model/UpdateUser'), require('./model/UserConnectionPostData'), require('./model/UserConnectionsPostData'), require('./model/UserGetResponse'), require('./model/UserPostResponse'), require('./api/AccountsApi'), require('./api/AffordabilityApi'), require('./api/AuthLinksApi'), require('./api/ConnectionsApi'), require('./api/EnrichApi'), require('./api/ExpensesApi'), require('./api/IncomeApi'), require('./api/InstitutionsApi'), require('./api/JobsApi'), require('./api/StatementsApi'), require('./api/TokenApi'), require('./api/TransactionsApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, AccountClass, AccountHolder, AccountLinks, AccountResponseResource, AccountTransactionInterval, AccountsContainer, AccountsData, AccountsFeatures, AccountsResponseResource, AffordabilityAssetsData, AffordabilityPostRequest, AffordabilityRegularIncomeData, AffordabilityResponse, AffordabilitySummary, AffordabilityTransactionLinks, AffordabilityTransactionsGetLinks, AffordabilityTransactionsResponse, Anzsic, AssetsPrevious6MonthsData, AuthLinkLinks, AuthLinksPostResponseResource, AuthLinksResponseResource, AvgMonthlyData, BadRequestError, CategoryDataExpenses, ChangeHistoryAffordabilityData, ChangeHistoryExpensesClass, ChangeHistoryExternal, ChangeHistoryIncome, ClassDetails, ClassResourceExpenses, Colors, ConnectionAccountLinks, ConnectionGetResponseResource, ConnectionInstitution, ConnectionProfile, ConnectionResponseResource, ConnectionsData, ConnectionsGetResponseResource, ConnectionsRefreshResource, CreateUser, CreditLiabilities, CurrentIrregularSource, CurrentOtherCreditSource, CurrentRegularSource, DivisionDetails, EnrichCategory, EnrichData, EnrichGeometry, EnrichLocation, EnrichMerchant, EnrichPhoneNumber, ExpensesClass, ExpensesLinks, ExpensesPostRequest, ExpensesResponse, ExternalLiabilityData, ExternalPayment, FeatureCondition, Features, ForbiddenAccessError, Gap, GetAffordabilityLinks, GetConnectionLinks, GetConnectionsLinks, GetEnrichResponse, GetUserAccount, GetUserAccountData, GetUserConnection, GetUserConnectionData, GetUserLinks, GoneError, GroupDetails, IncomeLinks, IncomePostRequest, IncomeResponse, IncomeSummary, Institution, InstitutionLogoResource, InstitutionModel, InstitutionPerformanceStats, InstitutionsList, InternalServerError, IrregularSource, IrregularityIncome, JobData, JobsData, JobsInstitution, JobsLinks, JobsResponseResource, JobsResult, JobsStep, LiabilitiesData, LoanLiabilities, LogoResourceLinks, Meta, NotFoundError, OtherCreditSource, PaymentsSummaryExpenses, PhysicalAddresses, Previous3MonthsIncome, Previous6MonthsCreditLiabilities, Previous6MonthsLoan, PreviousMonthDataLiabilities, PreviousMonthDataLoanLiabilities, ProfileFeatures, RegularSource, ResourceLink, ResourceLinks, ResponseFormat, Source, SourceName, StatementUploadResource, StatusServiceUnavailableError, SubCategoryExpenses, SubClass, SubdivisionDetails, TokenPostResponse, TransactionData, TransactionDataAffordability, TransactionLinks, TransactionsAnzsic, TransactionsCategory, TransactionsClass, TransactionsDivision, TransactionsEnrich, TransactionsFeatures, TransactionsGeometry, TransactionsGetLinks, TransactionsGetResource, TransactionsGroup, TransactionsLocation, TransactionsMerchant, TransactionsPhoneNumber, TransactionsSubdivision, UnauthorizedError, UnsupportedMediaTypeError, UpdateUser, UserConnectionPostData, UserConnectionsPostData, UserGetResponse, UserPostResponse, AccountsApi, AffordabilityApi, AuthLinksApi, ConnectionsApi, EnrichApi, ExpensesApi, IncomeApi, InstitutionsApi, JobsApi, StatementsApi, TokenApi, TransactionsApi, UsersApi) {
  'use strict';

  /**
   * h2_Introduction_h2Basiq_provides_a_collection_of_APIs_to_help_you_build_powerful_financial_solutions_for_a_wide_range_of_use_cases__The_most_common_use_cases_areullibPersonal_Financial_Management_b_Enable_your_customers_to_aggregate_all_of_their_financial_data_in_one_place_identify_expenses_and_gain_valuable_insight_of_their_spending_lilibWealth_Management_b_Gain_valuable_insights_and_a_clearer_understanding_of_your_customers_financial_positions_to_customize_advice_recommendations_and_product_offerings__lilibRisk_Insights_b_Gain_real_time_and_comprehensive_visibility_of_your_customers_assets_income_non_credit_payment_patterns_and_transactional_details_lilibCashflow_Analysis_b_Provide_tools_that_analyze_cash_flow_and_forecast_future_expenses_and_income_lilibAccount_Summary_b_Display_the_big_picture_with_financial_account_data_listed_alongside_balance_information_lilibAccount_Verification_b_Instantly_verify_account_ownership_and_balances_in_real_time_to_improve_the_user_experience_and_mitigate_fraud_and_risk_lilibData_Enhancement_b_Gain_greater_financial_insights_around_consumer_spending_patterns_and_trends_with_categorised_and_enriched_transaction_data__liulBasiq_APIs_are_currently_only_available_in_Australia_and_New_Zealand__We_are_working_to_make_them_available_in_other_countries___so_check_back_soon__Use_this_link_to_see_a_complete_list_of_a_href_httpdocs_basiq_iothe_basiq_platformsupported_financial_institutionssupported_financial_institutions_ahrh2_Basiq_API_Services_h2Basiq_provides_three_core_API_services_which_you_can_use_to_develop_innovative_financial_solutionsullibConnectb_provides_the_ability_to_easily_acquire_financial_data_such_as_account_details_and_balances_and_related_transactions_from_various_financial_institutions_lilibEnrichb_classifies_all_banking_credit_and_debit_card_transactions_into_categories_based_on_specific_merchant_merchant_type_and_geographical_location_data_lilibAffordabilityb_provides_a_complete_360_degree_view_of_your_customers_financial_health___by_breaking_down_their_finances_into_assets_liabilities_income_and_expenses__You_can_use_Income_and_Expenses_endpoints_separately_or_as_part_of_the_full_Affordability_API_solution_liulBase_URL_is__httpsau_api_basiq_io___you_can_use_our_sandbox_environment_for_free_right_now___just_grab_an_API_keyEnrich_URL_is__httpsau_api_basiq_ioenrich___contact_us_to_have_your_API_key_activated_to_try_out_this_API_Affordability_URL_is__httpsau_api_basiq_ioaffordability___you_can_use_our_sandbox_environment_for_free___contact_us_to_have_your_API_key_activated_hrh2_Getting_Started_h2bStart_Developing_bBefore_you_can_start_using_any_of_the_available_Basiq_APIs_there_are_a_few_things_you_will_need_to_do_first_olli_a_hrefhttpsdashboard_basiq_iologinSign_upa_to_the_Basiq_API_service_lili_Grab_your_API_key_for_your_application__via_the_a_href_httpsdashboard_basiq_ioDeveloper_Dashboarda_liolOnce_you_have_successfully_obtained_an_API_key_you_can_start_using_any_of_the_available_Basiq_APIs_This_a_hrefhttpdocs_basiq_iogetting_startedget_started_with_basiquser_guidea_gets_you_up_and_running_with_the_Basiq_API_in_the_time_it_takes_to_make_a_cup_of_tea_It_includes_a_a_hrefhttpsdocumenter_getpostman_comview9721346SztEaSr2versionlatestPostman_collectiona_to_help_you_get_a_fast_feel_for_the_API_Please_note_that_all_of_the_Basiqs_Core_API_and_Affordability_APIs_are_accessible_using_the_sandbox_data__see_testing_for_details__We_encourage_you_to_play_with_the_sandbox_data__Once_you_are_ready_you_will_need_to_supply_payment_details_in_order_to_use_the_full_set_of_Basiq_API_services_hrh2_Authentication_h2When_working_with_Basiq_APIs_your_application_will_need_to_complete_the_authentication_process_first_before_you_can_access_any_of_the_available_resources_The_authentication_process_is_fairly_straight_forward_and_simply_requires_you_to_exchange_your_API_key_for_a_token__Once_you_obtain_the_token_you_can_call_any_of_the_available_API_services_by_simply_including_the_token_in_the_Authorization_header_of_each_request_Your_API_keys_carry_many_privileges_so_be_sure_to_keep_them_secret_Do_not_share_your_API_keys_in_publicly_accessible_areas_such_GitHub_client_side_code_etc_h3_Prerequisites_h3Prior_to_authenticating_your_application_you_will_need_to_complete_the_following_stepsolli_a_hrefhttpsdashboard_basiq_iologinSign_upa_to_the_Basiq_API_service_lili_Grab_your_API_key_for_your_application__via_the_a_href_httpsdashboard_basiq_ioDeveloper_Dashboarda_liolh3_Steps_to_authenticate_h3olli_Call_token_passing_in_the_API_key_in_the_Authorization_header_of_the_request_and_Basiq_API_version_you_intent_to_use_lili_The_server_will_validate_the_key_and_if_everything_is_successful_will_issue_an_access_token_along_with_the_following_propertieslioltable_stylewidth_50tr_tdbProperty_btd_tdbDescriptionb_tdtrtr_tdaccess_token___istring_readonlyttd_tdThe_generated_access_token_tdtrtr_tdexpires_in___inumber_readonlyitd_tdThe_number_of_seconds_left_before_the_token_becomes_invalid_tdtrtr_tdtoken_type___istring_readonlyitd_tdThis_value_will_always_be_bBearerb_tdtrtableThis_access_token_is_the_key_to_making_successful_requests_to_the_Basiq_API__From_here_on_you_will_need_to_include_this_access_token_in_the_header_when_requesting_any_of_the_secured_resources_as_followsbAuthorization_Bearer__access_tokenbNote_that_tokens_have_a_short_lifespan_and_as_such_should_not_be_stored_permanently__Once_a_token_has_expired_your_application_will_need_to_reauthenticate_hrh2_Testing_h2Theres_nothing_worse_than_developing_against_an_API_with_crappy_test_data__We_get_that_This_is_why_we_have_put_a_lot_of_effort_into_ensuring_that_our_test_data_mimics_real_production_data_that_your_app_will_consume_h3_Connect_API_h3The_test_data_that_we_provide_for_the_Connect_API_service__below_has_been_designed_to_mimic_a_real_life_user__This_means_that_just_a_like_a_real_user_would_spend_and_receive_funds_throughout_the_day___our_test_accounts_have_been_designed_to_do_the_same_thing__Therefore_you_should_expect_to_see_new_transaction_records_being_created_throughout_the_day_and_the_account_balances_adjusted_accordingly_This_should_give_you_a_good_feel_for_the_type_of_data_that_you_should_expect_to_see_for_your_own_customers__The_transaction_data_is_completely_random_and_even_we_are_sometimes_surprised_by_transactions_that_appear__You_can_use_our_sandbox_environment_for_free_right_now___just_grab_an_API_key_to_get_started__via_the_a_hrefhttpsdashboard_basiq_ioDeveloper_Dashboarda_Ensure_that_you_pass_the_institution_code_AU00000_when_using_the_test_accounts_table_stylewidth_50tr_td_bloginIdb_tdtd_bpasswordb_tdtrtr_td_Wentworth_Smith_tdtd_whislter_tdtrtr_td_gavinBelson_tdtd_hooli2016_tdtrtr_td_jared_tdtd_django_tdtrtr_td_richard_tdtd_tabsnotspaces_tdtrtableh3_Enrich_API_h3The_Enrich_API_returns_merchant_metadata_regarding_name_location_and_category_This_service_can_be_tested_using_bank_transaction_data_that_you_provide__You_can_use_real_bank_transaction_data_and_the_Enrich_API_will_return_enriched_records_for_those_transactions__Note_that_the_same_endpoint_is_utilised_for_both_testing_and_production_users_however_a_limit_of_100_queries_is_set_for_testing_users_Contact_us__via_the_help_icon_at_the_bottom_of_the_page_to_have_your_Enrich_access_enabled_You_will_need_to_ensure_that_the_search_query_is_burl_encodedb_before_calling_the_resource_and_must_contain_at_least_3_characters_Example_queriesqgarfish20MANLY20NScountryAUinstitutionAU06703accountTypetransactionamount_12_95qgarfish20MANLY20NSinstitution_AU13601tabletr_td_Example_Queries_td_trtrtdolli_GARFISH_MANLY_NS_lili_12_VOLT_DIRECT_PTY_L_LONSDALE_AU_lili_HARVEY_NORMAN_AVIT_BALGOWLAH_AU_lili_CALTEX_ALDINGA_BEACH_ALDINGA_BEACHAU_lili_KMART_1055_WARRIEWOOD_AU_lili_KAKADU_LODGE__CARAV_JABIRU_AU_lioltdtrtableh3_Affordability_API_h3The_test_data_that_we_provide_for_the_Affordability_API_service_has_been_designed_to_mimic_a_real_life_user__This_means_that_just_a_like_a_real_user_would_spend_and_receive_funds_throughout_the_day___our_test_accounts_have_been_designed_to_do_the_same_thing__Therefore_you_should_expect_to_see_new_transaction_records_being_created_throughout_the_day_and_the_account_balances_adjusted_accordingly_You_can_use_our_sandbox_environment_for_free___contact_us__via_the_help_icon_at_the_bottom_of_the_page_to_have_your_API_key_activated_for_Affordability_Ensure_that_you_pass_the_institution_code_AU00000_when_using_the_test_accounts_table_stylewidth_50tr_td_bloginIdb_tdtd_bpasswordb_tdtrtr_td_Wentworth_Smith_tdtd_whislter_tdtrtableOnce_you_have_created_a_test_connection_you_can_access_the_Affordability_Income_and_Expense_endpoints_for_this_user__The_Affordability_endpoint_returns_links_to_Income_and_Expense_resources_or_you_can_use_these_endpoints_independently_without_Affordability_hrh2_Collections_h2Collection_resources_provide_access_to_information_about_a_list_of_objects_of_the_same_type__For_example_you_can_use_a_collection_resource_to_access_information_about_a_list_of_users__Collection_resources_are_paged_and_may_be_sorted_and_filtered__depending_on_availability___and_will_always_return_an_object_of_type_list_h3_Filters_h3Some_collections_support_the_ability_to_filter_the_results__Filtering_a_collection_resource_is_conducted_via_the_filter_query_parameter_using_the_following_notationbfilter_property___condition____value__bAll_filter_values_should_be_URL_encoded_filterURLEncode_h3Accessing_Propertiesh3Properties_are_accessed_using_the_following_notation_bobject_propertyb_h3_Supported_Conditions_h3tabletr__theqth_td_Equals_bfilteraccount_id_eq_s55bf3btd_trtr__thbtth_td_Between_two_values___used_for_date_range_filtering__b_filtertransaction_postDate_bt_2017_09_282018_01_30__Values_are_inclusive_b_td_trtr__thgtth_td_Greater_than_bfiltertransaction_postDate_gt_2018_01_28btd_trtr__thgteqth_td_Greater_than_or_equal_to_bfiltertransaction_postDate_gteq_2018_01_28b_td_trtr__thltth_td_Less_than_b_filtertransaction_postDate_lt_2018_01_28_btd_trtr__thlteqth_td_Less_than_or_equal_to_b_filtertransaction_postDate_lteq_2018_01_28_b_td_trtr__thneth_tdNot_equals__only_currently_for_bInstitutions_bendpoint_b_filterinstitution_institutionType_ne_Test_Bank_b_td_trtableWhere_available_you_can_apply_multiple_filters_to_a_collection_by_separating_them_with_a_comma_Multiple_filters_are_treated_as_an_and___operation_exampleb_filtertransaction_postDate_bt_2018_01_282018_02_27account_id_eq_aef3g_bNote_the_examples_above_have_not_url_encoded_the_filters__You_will_need_to_ensure_that_the_filter_values_are_url_encoded_before_calling_the_resource_hrh2_Errors_h2The_Connect_API_uses_conventional_HTTP_response_codes_to_indicate_the_success_or_failure_of_an_API_request__In_general_codes_in_the_2xx_range_indicate_success_codes_in_the_4xx_range_indicate_an_error_that_failed_given_the_information_provided__e_g__a_required_parameter_was_omitted_users_credentials_are_invalid_etc__and_codes_in_the_5xx_range_indicate_an_error_with_the_Connect_APIs_servers__these_are_rare_In_addition_to_returning_an_appropriate_HTTP_code_the_body_will_also_include_a_JSON_formatted_error_object_that_provides_more_details_about_the_specifics_of_the_error__The_error_object_will_return_the_error_as_an_array_to_indicate_multiple_errors__where_present_tabletr_td_colspan2bAttributesbtd_trtr_td_bcorrelationIdb_tda_unique_identifier_for_this_particular_occurrence_of_the_problem_td_trtr_td_bcodeb_tdan_application_specific_error_code_expressed_as_a_string_value_td_trtr_td_btitleb_tda_short_human_readable_summary_of_the_problem_td_trtr_td_bdetailb_tda_human_readable_explanation_specific_to_this_occurrence_of_the_problem_td_trtr_td_bsourceb_tdan_object_containing_references_to_the_source_of_the_error_optionally_including_any_of_the_following_membersulli_bpointerb_the_location_to_the_object_or_attribute_that_the_error_relates_to_lili_bparameterb_the_location_to_the_object_or_attribute_that_the_error_relates_to_liultdtrtableh3_Error_Codes_h3Below_you_will_find_details_for_our_various_response_codes_tabletbodytrthCodeththDescriptionthtrtrtdpinvalid_credentialsptdtdpstrongInvalid_Attribute_strongbr__Cannot_login_to_target_institution_using_suppliedcredentials__Please_check_credentials_and_try_again_ptdtrtrtdpinternal_server_errorptdtdpstrongServer_Error_strongbr__Internal_server_errorbr__All_endpointsptdtrtrtdpaccess_deniedptdtdpstrongAccess_deniedstrongbr__Token_has_expiredptdtrtrtdpinvalid_authorization_tokenptdtdpstrongUnauthorized_strongbr__Invalid_authorization_token__Check_details_message_ptdtrtrtdpparameter_not_suppliedptdtdpstrongMissing_Attribute_strongbr__Required_parameter_not_supplied__Check_details_and_sourcemessage_br__e_g__One_of_email_or_mobile_is_required_ptdtrtrtdpparameter_not_validptdtdpstrongInvalid_Attribute_strongbr__Parameter_value_is_not_valid__Check_details_and_sourcemessage_br__e_g_br__Provided_mobile_is_in_bad_format_br__User_ID_value_is_not_validptdtrtrtdpresource_not_foundptdtdpstrongInvalid_Attribute_strongbr__Requested_resource_is_not_found__Check_details_message_ptdtrtrtdpresource_already_existsptdtdpstrongInvalid_Attribute_strongbr__Resource_already_exists__Check_details_message_ptdtrtrtdpinvalid_contentptdtdpstrongInvalid_Attributestrongbr__Invalid_request_content__Check_details_message_br__e_g_empty_request_bodyptdtrtrtdpunsupported_content_typeptdtdpstrongInvalid_Attribute_strongbr__Requested_content_type_is_not_supported_ptdtrtrtdpunsupported_acceptptdtdpstrongInvalid_Attribute_strongbr__Accept_type_is_not_supported_ptdtrtrtdpservice_unavailableptdtdpstrongService_Unavailable_strongbr__Service_is_currently_unavailable__Please_try_again_later_ptdtrtrtdptoo_many_requestsptdtdpstrongService_Unavailable_strongbr__Request_rate_limit_per_connection_reached__Follow_detailmessage_for_futher_instructions_ptdtrtrtdpmethod_not_allowedptdtdpstrongNot_Allowed_strongbr__Requested_method_is_not_allowed_ptdtrtrtdpunauthorized_accessptdtdpstrongUnauthorized_strongbr__Unauthorized_access_ptdtrtrtdpinvalid_authorization_requestptdtdpstrongUnauthorized_strongbr__Invalid_authorization_request__Check_details_message_ptdtrtrtdpno_production_accessptdtdpstrongUnauthorized_strongbr__Partner_has_permission_to_access_Sandbox_data_only__Foraccessing_live_Institution_data_please_contact_us_via_Intercom_or_email_ptdtrtrtdpaccount_not_accessible_requires_user_actionptdtdpstrongNot_Accessible_strongbr__An_action_is_required_from_end_user_before_account_details_canbe_returned_ptdtrtrtdpmaintenance_errorptdtdpstrongNot_Accessible_strongbr__Requested_resource_is_currently_unavailable_due_to_maintenanceon_Institutions_side_ptdtrtrtdptemporary_unavailableptdtdpstrongNot_Accessible_strongbr__Requested_resource_is_currently_unavailable_due_to_temporaryissue_on_Institutions_side_ptdtrtrtdpforbidden_accessptdtdpstrongForbidden_accessstrongbr__Access_to_this_resource_is_forbiddenptdtrtrtdpinstitution_not_supportedptdtdpstrongInstitution_is_not_supportedstrongbr__e_g__Institution_AU00000_is_not_supported_on_thisendpointptdtrtrtdpbank_statement_new_productptdtdpstrongPDF_Bank_statement_new_productstrongbr__New_product_requires_configptdtrtrtdpbank_statement_parsing_errorptdtdpstrongPDF_Bank_statement_parsing_errorstrongbr__Unable_to_parse_statementptdtrtrtdpbank_statement_not_supportedptdtdpstrongPDF_bank_statement_not_supportedstrongbr__Statement_not_supportedptdtrtrtdpmissing_required_fieldptdtdpstrongCSV_missing_required_fieldstrongbr__CSV_header_does_not_contain_required_fieldptdtrtrtdpmissing_required_field_valueptdtdpstrongCSV_missing_required_field_valuestrongbr__CSV_row_does_not_contain_value_for_requiredfieldptdtrtrtdpinvalid_field_valueptdtdpstrongCSV_invalid_field_valuestrongbr__Field_value_is_not_validptdtrtrtdpaccount_data_differsptdtdpstrongCSV_account_data_differsstrongbr__Data_for_single_account_differs_across_rowsptdtrtrtdpempty_fileptdtdpstrongCSV_empty_filestrongbr__CSV_file_has_no_data_rowsptdtrtrtdprow_count_exceededptdtdpstrongCSV_row_count_exceededstrongbr__CSV_row_count_is_above_limitptdtrtrtdpinvalid_request_contentptdtdpstrongPDFCSV_invalid_request_content__file_typestrongbr__Statement_is_not_validptdtrtrtdprequest_not_validptdtdpstrongPDFCSV_Invalid_requeststrongbr__Request_too_longptdtrtbodytablehrh2_Versioning_h2Your_API_version_controls_the_API_behaviour_you_see_e_g__what_properties_you_see_in_responses_what_parameters_youre_permitted_to_send_in_requests_etc_In_order_to_gain_access_to_the_API_you_need_to_pass_the_appropriate_version_in_HTTP_header_basiq_version_when_exchanging_your_API_key_for_a_token_You_dont_need_to_pass_basiq_version_header_in_any_subsequent_requests_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BasiqApi = require('index'); // See note below*.
   * var xxxSvc = new BasiqApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BasiqApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new BasiqApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BasiqApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountClass model constructor.
     * @property {module:model/AccountClass}
     */
    AccountClass: AccountClass,
    /**
     * The AccountHolder model constructor.
     * @property {module:model/AccountHolder}
     */
    AccountHolder: AccountHolder,
    /**
     * The AccountLinks model constructor.
     * @property {module:model/AccountLinks}
     */
    AccountLinks: AccountLinks,
    /**
     * The AccountResponseResource model constructor.
     * @property {module:model/AccountResponseResource}
     */
    AccountResponseResource: AccountResponseResource,
    /**
     * The AccountTransactionInterval model constructor.
     * @property {module:model/AccountTransactionInterval}
     */
    AccountTransactionInterval: AccountTransactionInterval,
    /**
     * The AccountsContainer model constructor.
     * @property {module:model/AccountsContainer}
     */
    AccountsContainer: AccountsContainer,
    /**
     * The AccountsData model constructor.
     * @property {module:model/AccountsData}
     */
    AccountsData: AccountsData,
    /**
     * The AccountsFeatures model constructor.
     * @property {module:model/AccountsFeatures}
     */
    AccountsFeatures: AccountsFeatures,
    /**
     * The AccountsResponseResource model constructor.
     * @property {module:model/AccountsResponseResource}
     */
    AccountsResponseResource: AccountsResponseResource,
    /**
     * The AffordabilityAssetsData model constructor.
     * @property {module:model/AffordabilityAssetsData}
     */
    AffordabilityAssetsData: AffordabilityAssetsData,
    /**
     * The AffordabilityPostRequest model constructor.
     * @property {module:model/AffordabilityPostRequest}
     */
    AffordabilityPostRequest: AffordabilityPostRequest,
    /**
     * The AffordabilityRegularIncomeData model constructor.
     * @property {module:model/AffordabilityRegularIncomeData}
     */
    AffordabilityRegularIncomeData: AffordabilityRegularIncomeData,
    /**
     * The AffordabilityResponse model constructor.
     * @property {module:model/AffordabilityResponse}
     */
    AffordabilityResponse: AffordabilityResponse,
    /**
     * The AffordabilitySummary model constructor.
     * @property {module:model/AffordabilitySummary}
     */
    AffordabilitySummary: AffordabilitySummary,
    /**
     * The AffordabilityTransactionLinks model constructor.
     * @property {module:model/AffordabilityTransactionLinks}
     */
    AffordabilityTransactionLinks: AffordabilityTransactionLinks,
    /**
     * The AffordabilityTransactionsGetLinks model constructor.
     * @property {module:model/AffordabilityTransactionsGetLinks}
     */
    AffordabilityTransactionsGetLinks: AffordabilityTransactionsGetLinks,
    /**
     * The AffordabilityTransactionsResponse model constructor.
     * @property {module:model/AffordabilityTransactionsResponse}
     */
    AffordabilityTransactionsResponse: AffordabilityTransactionsResponse,
    /**
     * The Anzsic model constructor.
     * @property {module:model/Anzsic}
     */
    Anzsic: Anzsic,
    /**
     * The AssetsPrevious6MonthsData model constructor.
     * @property {module:model/AssetsPrevious6MonthsData}
     */
    AssetsPrevious6MonthsData: AssetsPrevious6MonthsData,
    /**
     * The AuthLinkLinks model constructor.
     * @property {module:model/AuthLinkLinks}
     */
    AuthLinkLinks: AuthLinkLinks,
    /**
     * The AuthLinksPostResponseResource model constructor.
     * @property {module:model/AuthLinksPostResponseResource}
     */
    AuthLinksPostResponseResource: AuthLinksPostResponseResource,
    /**
     * The AuthLinksResponseResource model constructor.
     * @property {module:model/AuthLinksResponseResource}
     */
    AuthLinksResponseResource: AuthLinksResponseResource,
    /**
     * The AvgMonthlyData model constructor.
     * @property {module:model/AvgMonthlyData}
     */
    AvgMonthlyData: AvgMonthlyData,
    /**
     * The BadRequestError model constructor.
     * @property {module:model/BadRequestError}
     */
    BadRequestError: BadRequestError,
    /**
     * The CategoryDataExpenses model constructor.
     * @property {module:model/CategoryDataExpenses}
     */
    CategoryDataExpenses: CategoryDataExpenses,
    /**
     * The ChangeHistoryAffordabilityData model constructor.
     * @property {module:model/ChangeHistoryAffordabilityData}
     */
    ChangeHistoryAffordabilityData: ChangeHistoryAffordabilityData,
    /**
     * The ChangeHistoryExpensesClass model constructor.
     * @property {module:model/ChangeHistoryExpensesClass}
     */
    ChangeHistoryExpensesClass: ChangeHistoryExpensesClass,
    /**
     * The ChangeHistoryExternal model constructor.
     * @property {module:model/ChangeHistoryExternal}
     */
    ChangeHistoryExternal: ChangeHistoryExternal,
    /**
     * The ChangeHistoryIncome model constructor.
     * @property {module:model/ChangeHistoryIncome}
     */
    ChangeHistoryIncome: ChangeHistoryIncome,
    /**
     * The ClassDetails model constructor.
     * @property {module:model/ClassDetails}
     */
    ClassDetails: ClassDetails,
    /**
     * The ClassResourceExpenses model constructor.
     * @property {module:model/ClassResourceExpenses}
     */
    ClassResourceExpenses: ClassResourceExpenses,
    /**
     * The Colors model constructor.
     * @property {module:model/Colors}
     */
    Colors: Colors,
    /**
     * The ConnectionAccountLinks model constructor.
     * @property {module:model/ConnectionAccountLinks}
     */
    ConnectionAccountLinks: ConnectionAccountLinks,
    /**
     * The ConnectionGetResponseResource model constructor.
     * @property {module:model/ConnectionGetResponseResource}
     */
    ConnectionGetResponseResource: ConnectionGetResponseResource,
    /**
     * The ConnectionInstitution model constructor.
     * @property {module:model/ConnectionInstitution}
     */
    ConnectionInstitution: ConnectionInstitution,
    /**
     * The ConnectionProfile model constructor.
     * @property {module:model/ConnectionProfile}
     */
    ConnectionProfile: ConnectionProfile,
    /**
     * The ConnectionResponseResource model constructor.
     * @property {module:model/ConnectionResponseResource}
     */
    ConnectionResponseResource: ConnectionResponseResource,
    /**
     * The ConnectionsData model constructor.
     * @property {module:model/ConnectionsData}
     */
    ConnectionsData: ConnectionsData,
    /**
     * The ConnectionsGetResponseResource model constructor.
     * @property {module:model/ConnectionsGetResponseResource}
     */
    ConnectionsGetResponseResource: ConnectionsGetResponseResource,
    /**
     * The ConnectionsRefreshResource model constructor.
     * @property {module:model/ConnectionsRefreshResource}
     */
    ConnectionsRefreshResource: ConnectionsRefreshResource,
    /**
     * The CreateUser model constructor.
     * @property {module:model/CreateUser}
     */
    CreateUser: CreateUser,
    /**
     * The CreditLiabilities model constructor.
     * @property {module:model/CreditLiabilities}
     */
    CreditLiabilities: CreditLiabilities,
    /**
     * The CurrentIrregularSource model constructor.
     * @property {module:model/CurrentIrregularSource}
     */
    CurrentIrregularSource: CurrentIrregularSource,
    /**
     * The CurrentOtherCreditSource model constructor.
     * @property {module:model/CurrentOtherCreditSource}
     */
    CurrentOtherCreditSource: CurrentOtherCreditSource,
    /**
     * The CurrentRegularSource model constructor.
     * @property {module:model/CurrentRegularSource}
     */
    CurrentRegularSource: CurrentRegularSource,
    /**
     * The DivisionDetails model constructor.
     * @property {module:model/DivisionDetails}
     */
    DivisionDetails: DivisionDetails,
    /**
     * The EnrichCategory model constructor.
     * @property {module:model/EnrichCategory}
     */
    EnrichCategory: EnrichCategory,
    /**
     * The EnrichData model constructor.
     * @property {module:model/EnrichData}
     */
    EnrichData: EnrichData,
    /**
     * The EnrichGeometry model constructor.
     * @property {module:model/EnrichGeometry}
     */
    EnrichGeometry: EnrichGeometry,
    /**
     * The EnrichLocation model constructor.
     * @property {module:model/EnrichLocation}
     */
    EnrichLocation: EnrichLocation,
    /**
     * The EnrichMerchant model constructor.
     * @property {module:model/EnrichMerchant}
     */
    EnrichMerchant: EnrichMerchant,
    /**
     * The EnrichPhoneNumber model constructor.
     * @property {module:model/EnrichPhoneNumber}
     */
    EnrichPhoneNumber: EnrichPhoneNumber,
    /**
     * The ExpensesClass model constructor.
     * @property {module:model/ExpensesClass}
     */
    ExpensesClass: ExpensesClass,
    /**
     * The ExpensesLinks model constructor.
     * @property {module:model/ExpensesLinks}
     */
    ExpensesLinks: ExpensesLinks,
    /**
     * The ExpensesPostRequest model constructor.
     * @property {module:model/ExpensesPostRequest}
     */
    ExpensesPostRequest: ExpensesPostRequest,
    /**
     * The ExpensesResponse model constructor.
     * @property {module:model/ExpensesResponse}
     */
    ExpensesResponse: ExpensesResponse,
    /**
     * The ExternalLiabilityData model constructor.
     * @property {module:model/ExternalLiabilityData}
     */
    ExternalLiabilityData: ExternalLiabilityData,
    /**
     * The ExternalPayment model constructor.
     * @property {module:model/ExternalPayment}
     */
    ExternalPayment: ExternalPayment,
    /**
     * The FeatureCondition model constructor.
     * @property {module:model/FeatureCondition}
     */
    FeatureCondition: FeatureCondition,
    /**
     * The Features model constructor.
     * @property {module:model/Features}
     */
    Features: Features,
    /**
     * The ForbiddenAccessError model constructor.
     * @property {module:model/ForbiddenAccessError}
     */
    ForbiddenAccessError: ForbiddenAccessError,
    /**
     * The Gap model constructor.
     * @property {module:model/Gap}
     */
    Gap: Gap,
    /**
     * The GetAffordabilityLinks model constructor.
     * @property {module:model/GetAffordabilityLinks}
     */
    GetAffordabilityLinks: GetAffordabilityLinks,
    /**
     * The GetConnectionLinks model constructor.
     * @property {module:model/GetConnectionLinks}
     */
    GetConnectionLinks: GetConnectionLinks,
    /**
     * The GetConnectionsLinks model constructor.
     * @property {module:model/GetConnectionsLinks}
     */
    GetConnectionsLinks: GetConnectionsLinks,
    /**
     * The GetEnrichResponse model constructor.
     * @property {module:model/GetEnrichResponse}
     */
    GetEnrichResponse: GetEnrichResponse,
    /**
     * The GetUserAccount model constructor.
     * @property {module:model/GetUserAccount}
     */
    GetUserAccount: GetUserAccount,
    /**
     * The GetUserAccountData model constructor.
     * @property {module:model/GetUserAccountData}
     */
    GetUserAccountData: GetUserAccountData,
    /**
     * The GetUserConnection model constructor.
     * @property {module:model/GetUserConnection}
     */
    GetUserConnection: GetUserConnection,
    /**
     * The GetUserConnectionData model constructor.
     * @property {module:model/GetUserConnectionData}
     */
    GetUserConnectionData: GetUserConnectionData,
    /**
     * The GetUserLinks model constructor.
     * @property {module:model/GetUserLinks}
     */
    GetUserLinks: GetUserLinks,
    /**
     * The GoneError model constructor.
     * @property {module:model/GoneError}
     */
    GoneError: GoneError,
    /**
     * The GroupDetails model constructor.
     * @property {module:model/GroupDetails}
     */
    GroupDetails: GroupDetails,
    /**
     * The IncomeLinks model constructor.
     * @property {module:model/IncomeLinks}
     */
    IncomeLinks: IncomeLinks,
    /**
     * The IncomePostRequest model constructor.
     * @property {module:model/IncomePostRequest}
     */
    IncomePostRequest: IncomePostRequest,
    /**
     * The IncomeResponse model constructor.
     * @property {module:model/IncomeResponse}
     */
    IncomeResponse: IncomeResponse,
    /**
     * The IncomeSummary model constructor.
     * @property {module:model/IncomeSummary}
     */
    IncomeSummary: IncomeSummary,
    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution: Institution,
    /**
     * The InstitutionLogoResource model constructor.
     * @property {module:model/InstitutionLogoResource}
     */
    InstitutionLogoResource: InstitutionLogoResource,
    /**
     * The InstitutionModel model constructor.
     * @property {module:model/InstitutionModel}
     */
    InstitutionModel: InstitutionModel,
    /**
     * The InstitutionPerformanceStats model constructor.
     * @property {module:model/InstitutionPerformanceStats}
     */
    InstitutionPerformanceStats: InstitutionPerformanceStats,
    /**
     * The InstitutionsList model constructor.
     * @property {module:model/InstitutionsList}
     */
    InstitutionsList: InstitutionsList,
    /**
     * The InternalServerError model constructor.
     * @property {module:model/InternalServerError}
     */
    InternalServerError: InternalServerError,
    /**
     * The IrregularSource model constructor.
     * @property {module:model/IrregularSource}
     */
    IrregularSource: IrregularSource,
    /**
     * The IrregularityIncome model constructor.
     * @property {module:model/IrregularityIncome}
     */
    IrregularityIncome: IrregularityIncome,
    /**
     * The JobData model constructor.
     * @property {module:model/JobData}
     */
    JobData: JobData,
    /**
     * The JobsData model constructor.
     * @property {module:model/JobsData}
     */
    JobsData: JobsData,
    /**
     * The JobsInstitution model constructor.
     * @property {module:model/JobsInstitution}
     */
    JobsInstitution: JobsInstitution,
    /**
     * The JobsLinks model constructor.
     * @property {module:model/JobsLinks}
     */
    JobsLinks: JobsLinks,
    /**
     * The JobsResponseResource model constructor.
     * @property {module:model/JobsResponseResource}
     */
    JobsResponseResource: JobsResponseResource,
    /**
     * The JobsResult model constructor.
     * @property {module:model/JobsResult}
     */
    JobsResult: JobsResult,
    /**
     * The JobsStep model constructor.
     * @property {module:model/JobsStep}
     */
    JobsStep: JobsStep,
    /**
     * The LiabilitiesData model constructor.
     * @property {module:model/LiabilitiesData}
     */
    LiabilitiesData: LiabilitiesData,
    /**
     * The LoanLiabilities model constructor.
     * @property {module:model/LoanLiabilities}
     */
    LoanLiabilities: LoanLiabilities,
    /**
     * The LogoResourceLinks model constructor.
     * @property {module:model/LogoResourceLinks}
     */
    LogoResourceLinks: LogoResourceLinks,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The NotFoundError model constructor.
     * @property {module:model/NotFoundError}
     */
    NotFoundError: NotFoundError,
    /**
     * The OtherCreditSource model constructor.
     * @property {module:model/OtherCreditSource}
     */
    OtherCreditSource: OtherCreditSource,
    /**
     * The PaymentsSummaryExpenses model constructor.
     * @property {module:model/PaymentsSummaryExpenses}
     */
    PaymentsSummaryExpenses: PaymentsSummaryExpenses,
    /**
     * The PhysicalAddresses model constructor.
     * @property {module:model/PhysicalAddresses}
     */
    PhysicalAddresses: PhysicalAddresses,
    /**
     * The Previous3MonthsIncome model constructor.
     * @property {module:model/Previous3MonthsIncome}
     */
    Previous3MonthsIncome: Previous3MonthsIncome,
    /**
     * The Previous6MonthsCreditLiabilities model constructor.
     * @property {module:model/Previous6MonthsCreditLiabilities}
     */
    Previous6MonthsCreditLiabilities: Previous6MonthsCreditLiabilities,
    /**
     * The Previous6MonthsLoan model constructor.
     * @property {module:model/Previous6MonthsLoan}
     */
    Previous6MonthsLoan: Previous6MonthsLoan,
    /**
     * The PreviousMonthDataLiabilities model constructor.
     * @property {module:model/PreviousMonthDataLiabilities}
     */
    PreviousMonthDataLiabilities: PreviousMonthDataLiabilities,
    /**
     * The PreviousMonthDataLoanLiabilities model constructor.
     * @property {module:model/PreviousMonthDataLoanLiabilities}
     */
    PreviousMonthDataLoanLiabilities: PreviousMonthDataLoanLiabilities,
    /**
     * The ProfileFeatures model constructor.
     * @property {module:model/ProfileFeatures}
     */
    ProfileFeatures: ProfileFeatures,
    /**
     * The RegularSource model constructor.
     * @property {module:model/RegularSource}
     */
    RegularSource: RegularSource,
    /**
     * The ResourceLink model constructor.
     * @property {module:model/ResourceLink}
     */
    ResourceLink: ResourceLink,
    /**
     * The ResourceLinks model constructor.
     * @property {module:model/ResourceLinks}
     */
    ResourceLinks: ResourceLinks,
    /**
     * The ResponseFormat model constructor.
     * @property {module:model/ResponseFormat}
     */
    ResponseFormat: ResponseFormat,
    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source: Source,
    /**
     * The SourceName model constructor.
     * @property {module:model/SourceName}
     */
    SourceName: SourceName,
    /**
     * The StatementUploadResource model constructor.
     * @property {module:model/StatementUploadResource}
     */
    StatementUploadResource: StatementUploadResource,
    /**
     * The StatusServiceUnavailableError model constructor.
     * @property {module:model/StatusServiceUnavailableError}
     */
    StatusServiceUnavailableError: StatusServiceUnavailableError,
    /**
     * The SubCategoryExpenses model constructor.
     * @property {module:model/SubCategoryExpenses}
     */
    SubCategoryExpenses: SubCategoryExpenses,
    /**
     * The SubClass model constructor.
     * @property {module:model/SubClass}
     */
    SubClass: SubClass,
    /**
     * The SubdivisionDetails model constructor.
     * @property {module:model/SubdivisionDetails}
     */
    SubdivisionDetails: SubdivisionDetails,
    /**
     * The TokenPostResponse model constructor.
     * @property {module:model/TokenPostResponse}
     */
    TokenPostResponse: TokenPostResponse,
    /**
     * The TransactionData model constructor.
     * @property {module:model/TransactionData}
     */
    TransactionData: TransactionData,
    /**
     * The TransactionDataAffordability model constructor.
     * @property {module:model/TransactionDataAffordability}
     */
    TransactionDataAffordability: TransactionDataAffordability,
    /**
     * The TransactionLinks model constructor.
     * @property {module:model/TransactionLinks}
     */
    TransactionLinks: TransactionLinks,
    /**
     * The TransactionsAnzsic model constructor.
     * @property {module:model/TransactionsAnzsic}
     */
    TransactionsAnzsic: TransactionsAnzsic,
    /**
     * The TransactionsCategory model constructor.
     * @property {module:model/TransactionsCategory}
     */
    TransactionsCategory: TransactionsCategory,
    /**
     * The TransactionsClass model constructor.
     * @property {module:model/TransactionsClass}
     */
    TransactionsClass: TransactionsClass,
    /**
     * The TransactionsDivision model constructor.
     * @property {module:model/TransactionsDivision}
     */
    TransactionsDivision: TransactionsDivision,
    /**
     * The TransactionsEnrich model constructor.
     * @property {module:model/TransactionsEnrich}
     */
    TransactionsEnrich: TransactionsEnrich,
    /**
     * The TransactionsFeatures model constructor.
     * @property {module:model/TransactionsFeatures}
     */
    TransactionsFeatures: TransactionsFeatures,
    /**
     * The TransactionsGeometry model constructor.
     * @property {module:model/TransactionsGeometry}
     */
    TransactionsGeometry: TransactionsGeometry,
    /**
     * The TransactionsGetLinks model constructor.
     * @property {module:model/TransactionsGetLinks}
     */
    TransactionsGetLinks: TransactionsGetLinks,
    /**
     * The TransactionsGetResource model constructor.
     * @property {module:model/TransactionsGetResource}
     */
    TransactionsGetResource: TransactionsGetResource,
    /**
     * The TransactionsGroup model constructor.
     * @property {module:model/TransactionsGroup}
     */
    TransactionsGroup: TransactionsGroup,
    /**
     * The TransactionsLocation model constructor.
     * @property {module:model/TransactionsLocation}
     */
    TransactionsLocation: TransactionsLocation,
    /**
     * The TransactionsMerchant model constructor.
     * @property {module:model/TransactionsMerchant}
     */
    TransactionsMerchant: TransactionsMerchant,
    /**
     * The TransactionsPhoneNumber model constructor.
     * @property {module:model/TransactionsPhoneNumber}
     */
    TransactionsPhoneNumber: TransactionsPhoneNumber,
    /**
     * The TransactionsSubdivision model constructor.
     * @property {module:model/TransactionsSubdivision}
     */
    TransactionsSubdivision: TransactionsSubdivision,
    /**
     * The UnauthorizedError model constructor.
     * @property {module:model/UnauthorizedError}
     */
    UnauthorizedError: UnauthorizedError,
    /**
     * The UnsupportedMediaTypeError model constructor.
     * @property {module:model/UnsupportedMediaTypeError}
     */
    UnsupportedMediaTypeError: UnsupportedMediaTypeError,
    /**
     * The UpdateUser model constructor.
     * @property {module:model/UpdateUser}
     */
    UpdateUser: UpdateUser,
    /**
     * The UserConnectionPostData model constructor.
     * @property {module:model/UserConnectionPostData}
     */
    UserConnectionPostData: UserConnectionPostData,
    /**
     * The UserConnectionsPostData model constructor.
     * @property {module:model/UserConnectionsPostData}
     */
    UserConnectionsPostData: UserConnectionsPostData,
    /**
     * The UserGetResponse model constructor.
     * @property {module:model/UserGetResponse}
     */
    UserGetResponse: UserGetResponse,
    /**
     * The UserPostResponse model constructor.
     * @property {module:model/UserPostResponse}
     */
    UserPostResponse: UserPostResponse,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AffordabilityApi service constructor.
     * @property {module:api/AffordabilityApi}
     */
    AffordabilityApi: AffordabilityApi,
    /**
     * The AuthLinksApi service constructor.
     * @property {module:api/AuthLinksApi}
     */
    AuthLinksApi: AuthLinksApi,
    /**
     * The ConnectionsApi service constructor.
     * @property {module:api/ConnectionsApi}
     */
    ConnectionsApi: ConnectionsApi,
    /**
     * The EnrichApi service constructor.
     * @property {module:api/EnrichApi}
     */
    EnrichApi: EnrichApi,
    /**
     * The ExpensesApi service constructor.
     * @property {module:api/ExpensesApi}
     */
    ExpensesApi: ExpensesApi,
    /**
     * The IncomeApi service constructor.
     * @property {module:api/IncomeApi}
     */
    IncomeApi: IncomeApi,
    /**
     * The InstitutionsApi service constructor.
     * @property {module:api/InstitutionsApi}
     */
    InstitutionsApi: InstitutionsApi,
    /**
     * The JobsApi service constructor.
     * @property {module:api/JobsApi}
     */
    JobsApi: JobsApi,
    /**
     * The StatementsApi service constructor.
     * @property {module:api/StatementsApi}
     */
    StatementsApi: StatementsApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The TransactionsApi service constructor.
     * @property {module:api/TransactionsApi}
     */
    TransactionsApi: TransactionsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
