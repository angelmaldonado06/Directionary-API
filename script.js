function getAndDisplayWordData() {

    let userInput = document.getElementById('word-search-input').value;

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
    .then(response => {

      wordData = response.data;

      word = wordData[0].word;
      pronunciation = wordData[0].phonetic;
      definition = wordData[0].meanings[0].definitions[0].definition;
      document.getElementById('no-word-found').style.display = "none";

      document.getElementById('word').innerText = word;
      document.getElementById('pronunciation').innerText = pronunciation;
      document.getElementById('definition').innerText = definition;

    });
}