// TODO: Autocomplete the input with AJAX calls.
const wordList = document.querySelector('#results');
const searchInput = document.querySelector("#search");

// create a string var that will update the film keyword for our oMDB Fetch
let searchKeyword = "";

const dictionaryFetch = (keyword) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${keyword}`) // fetch(url)
    .then(response => response.json())
    .then((data) => {
      const dictArr = data.words;
      console.log(dictArr);
      // when i get new information. delete existing li
      wordList.innerText = '';

      dictArr.forEach((word) => {
        // create a <li>
        const li = document.createElement('li');
        li.innerText = word;
        li.classList.add('list-contents');
        // append it to a <ul>
        wordList.appendChild(li);
      });
    });
};

const handleKeyUp = (evt) => {
  const inputValue = evt.currentTarget.value;
  if (inputValue.length > 1) { // check if it's an empty string
    // replace the searchKeyword with the new inputValue
    searchKeyword = inputValue;
    // pass a new searchKeyword everytime i type
    dictionaryFetch(searchKeyword);
  }
};

searchInput.addEventListener('keyup', handleKeyUp);
