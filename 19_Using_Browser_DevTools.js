// Using Browser DevTools

/**JavaScript Chrome Dev Tools
 * These are a set of tools built into the browser to aid frontend
 * developers diagnose and solve various issues in their applications —
 * such as JavaScript and logical bugs, CSS styling issues or even just
 * making quick temporary alterations to the DOM.
 * 
 * To enter the dev tools, right click Inspect (or press ctrl+shift+c) to
 * enter the Elements panel. Here you can debug CSS and HTML issues.
 * 
 * If you want to see logged messages or interact with javascript, enter
 * the 'Console' tab from the tabs above (or press ctrl+shift+j or F12
 * to enter it directly).
 * 
 * Another very useful feature in the Chrome dev tools is the Lighthouse
 * (for checking performance).
 * 
 * NOTE** Similar tools are usually provided by most browsers, not just
 * Chrome.
 */

/**Debugging Issues
 * When you're just starting out with JavaScript development, you might
 * use a lot of 'console.log()' statements in your code to log and check
 * values of variables while debugging. The results of these would show
 * up in the Console panel, along with a reference to the line and file
 * of code which originated it.
 * 
 * However, for quicker, more complex and easier to handle debugging
 * (which also doesn't litter your codebase with console.log() statements)
 * breakpoints and the sources panel is your friend.
 */

/**Debugging Memory Leaks
 * In JavaScript, memory leaks commonly occur within heap allocated 
 * memory, where short lived objects are attached to long lived ones and
 * the Garbage Collector cannot safely de-allocate that memory as it is
 * still referenced from the root set (the global object).
 */

/**Debugging performance
 * Enter the Dev Tools and check out the Lighthouse tab. This is
 * essentially a series of tests which analyses the currently open
 * website on a bunch of metrics related to performance, page speed,
 * accessibility, etc. Feel free to run the tests by clicking the
 * 'Analyze Page Load' button (you might want to do this in an incognito
 * tab to avoid errors arising from your extensions). Once you have the
 * results, take your time and read through them (and do click through
 * to the reference pages mentioned alongside each test result to know
 * more about it!)
 */