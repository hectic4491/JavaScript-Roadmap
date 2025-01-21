/**Using JSONPlaceholder to fetch dummydata.
 * """https://jsonplaceholder.typicode.com"
 * 
 *    /posts
 *    /comments
 *    /albums
 *    /photos
 *    /todos
 *    /users
 */


// HTTP GET method practice


const src = "https://jsonplaceholder.typicode.com/error"
// const src = "https://jsonplaceholder.typicode.com/posts"
// const src = "https://jsonplaceholder.typicode.com/comments"


fetch(src)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Could not fetch resource. Status: ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    //Here is where we do something with the data.
    console.log(data[0]);
    }
  )
  .catch(error => console.log(error));


// When we don't provide an error catch, we just return an empty object {}
fetch(src)
  .then(response => response.json())
  .then(data => console.log(data));


//HTTP POST method practice