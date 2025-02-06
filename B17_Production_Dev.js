// How to think about JavaScript between development and production.

/**Production
 * 
 * -> When deploying an app to production, you would want a single,
 *    bundled and minified.js file. This in theorth helps increase
 *    performance.
 */


/**Development Environment
 * 
 * -> During development, it makes sense to have multiple javascript
 *    files for an app, because it helps maintain clarity and
 *    organization.
 * 
 * -> When the app is finished, we just have to bundle the code to
 *    using a bundler to make it more performant and standard.
 */


/**Seperating Files
 * 
 * -> If the main script element in our HTML points to a main.js script
 *    that adds the other javascript files to other script elements in
 *    the head of the HTML document, we effectively seperate our 
 *    JavaScript into more contained modules. The main.js element should
 *    be called at the end of the HTML document to ensure all the elements
 *    have been loaded. Then we can freely append them to the head of the
 *    document for organization without error.
 */
