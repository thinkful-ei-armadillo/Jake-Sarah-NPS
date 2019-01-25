'use strict';


const API_KEY= 'WSJxSY1ToMGvG5DXikXrgsHbZEPXPGa2YrovqmVf';
const BASE_URL= 'http://api.nps.gov/api/v1';

let results = {
  searchResults: []};


function getSearchResults(){
  fetch(api.nps.gov/api/v1/parks)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
   
    .catch(error => alert ('Search Results is not working'));
}


function displayResults(){
//will get an html string
  const showResults= [];
  for(let i =0; i < responseJson.message.length; i++){
    showResults.push();
  }
  $('.search-results').html(`<p>Here is your park: ${showResults} <br>
Here is your description:  <br>
URL: </p>`);
}


function parksQuery(states, limit){
  if(limit > 50){
    throw new Error('limit cannot exceed 50 states.');
  }
  let state = states.join('&');

  console.log(state);
}



function watchForm(){  
  $('.state-search').submit(function(event){
    console.log('watchForm is working');
    event.preventDefault();
    const searchVal= $('#state').val();
    const searchLimit = $('.result-limit').val();
    parksQuery(searchVal, searchLimit);
    console.log(searchVal, searchLimit);
    
  });

}



function main(){
  watchForm();
  getSearchResults();
  parksQuery();
}
$(main);