// A Closer look at the HTML <script> element.

/**
 * The <script> HTML element is used to embed executable code or data;
 * this is typically used to embed or refer to JavaScript code. The
 * <script> element can also be used with other languages, such as 
 * WebGL's GLSL shader programming language and JSON.
 */

// Main Attributes:

// src: Specifies the URL of an external script file to be included.
//
// example: <script src="script.js"></script>


// type: This attribute indicates the type of script represented. The
//       value of this attribute will be one of the following.
//       Here are a few types:
//        > Attribute is not set (default), an empty string, or a
//          JavaScript MIME type.
//        > importmap
//        > module
//        > speculationrules
//        > Any other value is treated as a 'data block'.
//
// exmaple: <script type="text/javascript"></script>


// async: Indicates that the script should be executed asynchronously as
//        soon as it is available, without blocking the rendering of the
//        page.
//
// example: <script src="script.js" async></script>


// defer: Indicates that the script should be executed after the
//        document has been parsed, which can be useful for non-blocking
//        scripts that depend on the DOM being fully loaded.
//
// example: <script src="script.js" defer></script>


// integrity: Allows browsers to verify that the fetched script has not
//            been tampered with, using a cryptographic hash.
//
// example: <script src="script.js" integrity="sha384-OgVRvuATP1z7JjHLkuOUjGQ3bXIlYpFW9EZTzT...."></script>


// crossorigin: Indicates how the element handles cross-origin requests.
//              This attribute is used to enable CORS (Cross-Origin 
//              Resource Sharing) for the script.
//
// example: <script src="script.js" crossorigin="anonymous"></script>


// nomodule: Indicates that the script should not be executed in browsers
//           that support ES modules.
//
// example: <script src="legacy-script.js" nomodule></script>
