'use strict';


const API_KEY= 'WSJxSY1ToMGvG5DXikXrgsHbZEPXPGa2YrovqmVf';
const BASE_URL= 'http://api.nps.gov/api/v1/parks';//was missing /parks causing the query to be invalid



function displayResults(responseJson){
//will get an html string
  const showResults= [];
  for(let i =0; i < responseJson.data.length; i++){
    showResults.push(`<li>
          <p>State: ${responseJson.data[i].states}
          <br>
          Park:${responseJson.data[i].fullName}  
          <br>
          Description: ${responseJson.data[i].description} <br>
          URL: ${responseJson.data[i].url}
          </p>
          </li>`);
  }
  //added a <ul> to our html page so we could have each result for each state be in a list
  // we need each park, descrip, and URL to be from an index in the array we created.
  //maybe it should be an obj?
  $('.search-results ul').html(showResults);
  //console.log('here is showResults: ', showResults);
}



function parksQuery(stateCode, limit){
  const queryInfo = {
    stateCode,
    limit
  };
  const queryString = formatQuery(queryInfo);
  //"A comma delimited list of 2 character state codes." - We can have commas in our search over multiple states.
  const completedURL = `${BASE_URL}?${queryString}&api_key=${API_KEY}`;
  //console.log('1', queryInfo, '2', queryString, '3', completedURL);
  //joined two functions to gain access to the completedURL for the fetch.    
  fetch(completedURL, {
    // headers : {
    //   'X-Api-Key': API_KEY
    // }
  })
    .then(response => response.json())
    //display results is currently commented out
    .then(responseJson => displayResults(responseJson))  
    .catch(error => alert ('Search Results are not working'));
}

//format the query to valid query in the url
function formatQuery (queryInfo) {
  const query = 
    Object.keys(queryInfo).map(key => `${key}=${queryInfo[key]}`);
  return query.join('&');

  
}


//event handler - complete
function watchForm(){  
  $('.state-search').submit(function(event){
    event.preventDefault();
    const stateCode= $('#state').val();
    const limit = $('.result-limit').val()-1;
    parksQuery(stateCode, limit);
    $().clear()
    
  });

}

function main(){
  watchForm();

}
$(main);