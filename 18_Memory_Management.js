// Memory Management

/**Low-level languages like C, have manual memory management primitives
 * such as malloc() and free(). In contrast, JavaScript automatically 
 * allocates memory when objects are created and frees it when they are
 * not used anymore (garbage collection). This automatically is a
 * potential source of confusion: it can give developers the false
 * impression that they don't need to worry about memory management.
 */


/**Memory lifecycle
 * Regardless of the programming language, the memory life cycle is pretty
 * much always the same:
 * 
 * - Allocate the memory you need
 * - Use the allocated memory (read, write)
 * - Release the allocated memory when it is not needed anymore
 * 
 * The second part is explicit in all languages. The first and last parts
 * are explicit in low-level languages but are mostly implicit in
 * high-level languages like JavaScript
 */


/**Garbage Collection
 * Memory management in JavaScript is performed automatically and 
 * invisibly to us. We create primitives, objects, functions... All that
 * takes memory. The main concept of memory management in JavaScript is 
 * reachability.
 */


// Look into these topics more at my own pace.