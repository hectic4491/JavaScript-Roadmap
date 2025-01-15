// The DOM API

/**The Document Object Model (DOM)
 * The DOM connects web pages to scripts or programming languages by
 * representing the structure of a document, such as the HTML
 * representing a web page, in memory. Usually it refers to JavaScript,
 * even though modeling HTML, SVG, or XML documents as objects are not
 * part of the core JavaScript language.
 * 
 * The DOM represents a document with a logical tree. Each branch of the
 * tree ends in a node, and each node contains objects. DOM methods allow
 * programmatic access to the tree. With them, you can change the
 * document's structure, style, or content.
 * 
 * Nodes can also have event handlers attached to them. Once an event is
 * triggered, the event handlers get executed.
 */

/**DOM interfaces -
 * 
 * AbortController
 * AbortSignal
 * AbstractRange
 * Attr
 * CDATASection
 * CharacterData
 * Comment
 * CustomEvent
 **Document**
 * DocumentFragment
 * DocumentType
 * DOMException
 * DOMImplementation
 * DOMParser
 * DOMPoint
 * DOMPointReadOnly
 * DOMReact
 * DOMTokenList
 **Element -> HTMLElement**
 * Event
 * EventTarget
 * HTMLCollection
 * MutationObserver
 * MutationRecord
 * NamedNodeMap
 * Node
 * NodeIterator
 * NodeList
 * ProcessingInstruction
 * Range
 * StaticRange
 * Text
 * TextDecoder
 * TextEncoder
 * TimeRanges
 * TreeWalker
 * XMLDocument
 *
 */


/**HTML DOM
 * A document containing HTML is described using the 'Document' interface,
 * which is extended by the HTML specification to incude various HTML-
 * specific features. In particular, the 'Element' interface is enhanced
 * to become HTMLElement and various subclasses, each representing one of
 * (or a family of closely related) elements.
 * 
 * The HTML DOM API provides access to various browser features such as
 * tabs and windows, CSS styles and stylesheets, browser, history, etc.
 * These interfaces are discussed further in the HTML DOC API
 * documentation. https://dom.spec.whatwg.org/
 */


/**SVG DOM
 * Similarly, a document SVG is also described using the Document
 * interface, which is extended by the SVG specification to include
 * various SVG-specific features. In particular, the Element interface
 * is enhanced to become SVGElement and various subclasses, each
 * representing an element or a family of closely related elements.
 * These interfaces are discussed in the SVG API documentation.
 */


/**Document Interface
 * The Document interface represents any web page loaded in the browser
 * and serves as an entry point into the web page's content, which is the
 * DOM tree.
 * 
 * The DOM tree includes elements such as <body> and <table>, among many
 * other. It provides functionality globally to the document, like how to
 * obtain the page's URL and create new elements in the document.
 * 
 * The Document interface describes the common properties and methods for
 * any kind of document. Depending on the document's type (e.g. HTML, XML,
 * SVG, ...) a larger API is available: HTML documents, served with the
 * "text/html" content type, also implement the HTMLDocument interface,
 * whereas XML and SVG documents implement the XMLDocument interface.
 * 
 **Instance Properties
 * ""This interface also inherits from the 'Node' and 'EventTarget'
 *   interfaces""
 * 
 **Extensions for HTMLDocument
 * ""The Document interface for HTML documents inherits from the 
 *   'HTMLDocument' interface or is extended for such documents.
 */