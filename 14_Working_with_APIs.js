//Working with APIs

/**Working with APIs
 * When working with remote APIs, you need a way to interact with those
 * APIs. Modern JavaScript provides two naive ways to send HTTP requests
 * to remote servers, XMLHttpRequest and Fetch.
 * 
 */


/**XMLHttpRequest
 * XMLHttpRequest (XHR) is a built-in browser object that can be used to
 * interact with servers. XHR allows you to update data without having to
 * reload a web page. Despite the word XML in its name, XHR not only used
 * to retrieve data with XML format, we can use it with any type of data,
 * like JSON, file(s), and much more.
 * 
 */


/**Fetch
 * The fetch() method in JavaScript is used to request to the server and
 * load the information on the webpages. The request can be of any APIs
 * that return the data of the format JSON or XML. This method returns a
 * promise.
 * 
 * The fetch() method of the 'window' interface starts the process of
 * fetching a resource from the network, returning a promise that is
 * fulfilled once the response is available.
 * 
 * The promise resolves to the Request object representing the response
 * to your request.
 * 
 * A fetch() promise only rejects when the request fails, for example,
 * because of a badly-formed request URL or a network error. A fetch()
 * promise does not reject if the server responds with HTTP status codes
 * that indicate errors (404, 500, etc.). Instead, a then() handler must
 * check the Reponse.ok and/or Reponse.status properties.
 * 
 * The fetch() method is controlled by the connect-src directive of
 * "Content Security Policy" rather than the directive of the resource
 * it's retrieving.
 * 
 * **Note: The fetch() method's parameters are identical to those of the
 *         Request() constructor.
 * 
 * Syntax:
 * 
 * fetch(resource)
 * fetch(resource, options)
 * 
 * 
 * Parameters:
 *    resource - This defines the resource that you wish to fetch. This
 *    can either be:
 *      > A string or any other object with a stringifier - including a 
 *        URL object - that provides the URL of the resource you want to
 *        fetch. The URL may be relative to the base URL, which is the
 *        document's 'baseURI' in a window context, or
 *        WorkerGlobalScope.location in a worker context.
 *      > A 'Request' object.
 * 
 *    options - A 'RequestInit' object containing any custom settings that
 *    you want to apply to the request.
 * 
 * Return value:
 *    A 'Promise' that resolves to a 'Response' object.
 * 
 * Exceptions:
 *    AbortError
 *    NotAllowedError
 *    TypeError
 */

