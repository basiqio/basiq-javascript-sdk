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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BasiqApi);
  }
}(this, function(expect, BasiqApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('JobsData', function() {
      beforeEach(function() {
        instance = new BasiqApi.JobsData();
      });

      it('should create an instance of JobsData', function() {
        // TODO: update the code to test JobsData
        expect(instance).to.be.a(BasiqApi.JobsData);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property institution (base name: "institution")', function() {
        // TODO: update the code to test the property institution
        expect(instance).to.have.property('institution');
        // expect(instance.institution).to.be(expectedValueLiteral);
      });

      it('should have the property links (base name: "links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property steps (base name: "steps")', function() {
        // TODO: update the code to test the property steps
        expect(instance).to.have.property('steps');
        // expect(instance.steps).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

    });
  });

}));
