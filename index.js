'use strict';


const API_KEY= 'WSJxSY1ToMGvG5DXikXrgsHbZEPXPGa2YrovqmVf';
const BASE_URL= 'http://api.nps.gov/api/v1/parks';//was missing /parks causing the query to be invalid



// function displayResults(){
// //will get an html string
//   const showResults= [];
//   for(let i =0; i < responseJson.message.length; i++){
//         showResults.push();
//   }
//   //added a <ul> to our html page so we could have each result for each state be in a list
//   // we need each park, descrip, and URL to be from an index in the array we created.
//   //maybe it should be an obj?
//   $('.search-results').html(`<li>
//   <p>Park: ${showResults} <br>
//     Description:  <br>
//     URL: 
//     </p>
//     </li>`);
// console.log(`here is showResults: `, showResults);
// }



function parksQuery(stateCode, limit){
  const queryInfo = {
    stateCode,
    limit
  };
  const queryString = formatQuery(queryInfo);
  //"A comma delimited list of 2 character state codes." - We can have commas in our search over multiple states.
  const completedURL = `${BASE_URL}?${queryString}&api_key=WSJxSY1ToMGvG5DXikXrgsHbZEPXPGa2YrovqmVf`;
  console.log(queryString, completedURL);
  //joined two functions to gain access to the completedURL for the fetch.    
  fetch(completedURL)
    .then(response => response.json())
    //display results is currently commented out
    .then(responseJson => displayResults(responseJson))  
    .catch(error => alert ('Search Results are not working'));
}

//format the query to valid query in the url
function formatQuery (queryInfo) {
  const query = 
    Object.keys(queryInfo).map(key => `${key}=${queryInfo[key]}`);
    console.log(query);
     query.join('&');

  
}


//event handler - complete
function watchForm(){  
  $('.state-search').submit(function(event){
    console.log('watchForm is working');
    event.preventDefault();
    const stateCode= $('#state').val();
    const limit = $('.result-limit').val();
    parksQuery(stateCode, limit);
    console.log(stateCode, limit);
    
  });

}

function main(){
  watchForm();

}
$(main);