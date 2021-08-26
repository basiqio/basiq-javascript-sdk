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
    // AMD. Register as an anonymous module.
    define(['superagent', 'querystring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'), require('querystring'));
  } else {
    // Browser globals (root is window)
    if (!root.BasiqApi) {
      root.BasiqApi = {};
    }
    root.BasiqApi.ApiClient = factory(root.superagent, root.querystring);
  }
}(this, function(superagent, querystring) {
  'use strict';

  /**
   * @module ApiClient
   * @version 2.0.0
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://au-api.basiq.io
     */
    this.basePath = 'https://au-api.basiq.io'.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'api_key': {type: 'apiKey', 'in': 'header', name: 'Authorization'},
      'application': {type: 'oauth2'}
    };
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    this.cache = true;

    /**
     * If set to true, the client will save the cookies from each server
     * response, and return them in the next request.
     * @default false
     */
    this.enableCookies = false;

    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */
    if (typeof window === 'undefined') {
      this.agent = new superagent.agent();
    }

    /*
     * Allow user to override superagent agent
     */
    this.requestAgent = null;
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toISOString();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
    if (typeof require === 'function') {
      var fs;
      try {
        fs = require('fs');
      } catch (err) {}
      if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
        return true;
      }
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the request.
   * @param {Object} request The request object created by a <code>superagent()</code> call.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(request, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            request.set({'Authorization': 'Bearer ' + auth.accessToken});
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {Object} response A SuperAgent response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null || response.status == 204) {
      return null;
    }
    // Rely on SuperAgent for parsing response body.
    // See http://visionmedia.github.io/superagent/#parsing-response-bodies
    var data = response.body;
    if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
      // SuperAgent does not always produce a body; use the unparsed response as a fallback
      data = response.text;
    }
    return exports.convertToType(data, returnType);
  };

  /**
   * Callback function to receive the result of the operation.
   * @callback module:ApiClient~callApiCallback
   * @param {String} error Error message, if any.
   * @param data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Object.<String, String>} pathParams A map of path parameters and their values.
   * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
   * @param {Object.<String, Object>} collectionQueryParams A map of collection query parameters and their values.
   * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
   * @param {Object.<String, Object>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} authNames An array of authentication type names.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.
   * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
   * constructor for a complex type.
   * @param {module:ApiClient~callApiCallback} callback The callback function.
   * @returns {Object} The SuperAgent request object.
   */
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, collectionQueryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType, callback) {

    var _this = this;
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);

    // apply authentications
    this.applyAuthToRequest(request, authNames);

    // set collection query parameters
    for (var key in collectionQueryParams) {
      if (collectionQueryParams.hasOwnProperty(key)) {
        var param = collectionQueryParams[key];
        if (param.collectionFormat === 'csv') {
          // SuperAgent normally percent-encodes all reserved characters in a query parameter. However,
          // commas are used as delimiters for the 'csv' collectionFormat so they must not be encoded. We
          // must therefore construct and encode 'csv' collection query parameters manually.
          if (param.value != null) {
            var value = param.value.map(this.paramToString).map(encodeURIComponent).join(',');
            request.query(encodeURIComponent(key) + "=" + value);
          }
        } else {
          // All other collection query parameters should be treated as ordinary query parameters.
          queryParams[key] = this.buildCollectionParam(param.value, param.collectionFormat);
        }
      }
    }

    // set query parameters
    if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
        queryParams['_'] = new Date().getTime();
    }
    request.query(this.normalizeParams(queryParams));

    // set header parameters
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));


    // set requestAgent if it is set by user
    if (this.requestAgent) {
      request.agent(this.requestAgent);
    }

    // set request timeout
    request.timeout(this.timeout);

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
      if(contentType != 'multipart/form-data') {
        request.type(contentType);
      }
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      request.send(querystring.stringify(this.normalizeParams(formParams)));
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    if (returnType === 'Blob') {
      request.responseType('blob');
    } else if (returnType === 'String') {
      request.responseType('string');
    }

    // Attach previously saved cookies, if enabled
    if (this.enableCookies){
      if (typeof window === 'undefined') {
        this.agent.attachCookies(request);
      }
      else {
        request.withCredentials();
      }
    }


    request.end(function(error, response) {
      if (callback) {
        var data = null;
        if (!error) {
          try {
            data = _this.deserialize(response, returnType);
            if (_this.enableCookies && typeof window === 'undefined'){
              _this.agent.saveCookies(response);
            }
          } catch (err) {
            error = err;
          }
        }
        callback(error, data, response);
      }
    });

    return request;
  };

  /**
   * Parses a string representation of a date value.
   * @param {String} str The date value as an ISO-8601 full-date or date-time string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    // OpenAPI 2.0 & 3.0 specs state that:
    // - date values are serialized as ISO-8601 full-date strings. 
    // - date-time values are serialized as ISO-8601 date-time strings, in which the timezone offset is mandatory. 
    return new Date(str);
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type or null or undefined if data is null or undefined.
   */
  exports.convertToType = function(data, type) {
    if (data === null || data === undefined)
      return data

    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return this.parseDate(String(data));
      case 'Blob':
      	return data;
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === 'function') {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * Constructs a new map or array model from REST data.
   * @param data {Object|Array} The REST data.
   * @param obj {Object|Array} The target object or array.
   */
  exports.constructFromObject = function(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = exports.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          obj[k] = exports.convertToType(data[k], itemType);
      }
    }
  };

  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports();

  return exports;
}));
