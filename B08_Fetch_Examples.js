// Fetch examples

/**fetch = Function used for making HTTP requests to fetch resources. 
 * (JSON style data, images, files, etc.)
 * Simplifies asynchronous data fetching in JavaScript and used for
 * interacting with APIs to retrieve and send data asynchronously over
 * the web.
 * 
 * syntax examples:
 * fetch(url, {options})
 * 
 * fetch(url, {method: "GET"}) // we don't need to explicitly state GET
 * fetch(url, {method: "POST"})
 * fetch(url, {method: "PUT"})
 * fetch(url, {method: "DELETE"})
 */

/**
 * We pass a string representation of the URL "https://..."
 * Fetch is promised base, so it's either going to resolve or reject.
 * So we add a .then() and a .catch() to catch any errors.
 * 
 * If there's an error, we'll catch it and write it to the console.
 * 
 * Once the promise resolves, we'll be provided with an object, a response
 * object.
 */

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => console.log(response))
  .catch(error => console.error(error));

/**Next thing to do, is to convert it to a readable format. We have a few
 * different ways to do this:
 * 
 * arrayBuffer
 * blob
 * text
 * JSON
 * 
 * 
 * Let's use JSON. This is also promise based, so we have to chain a
 * .then() for when it resolves.
 */

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json())
  .then(data => console.log(data.id))
  .catch(error => console.error(error));


// What happens if we try to access a URL which doesn't exist?


fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
  .then(response => {

    if (!response.ok){
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then(data => console.log(data.name))
  .catch(error => console.error(error));



// Using async/await

async function fetchData(){

  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
    
    if(!response.ok){
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data.name)
  }
  catch(error){
    console.error(error);
  }
}

fetchData();