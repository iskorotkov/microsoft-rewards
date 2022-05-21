const bingSearchButton = document.getElementById('bing-search-button')
if (!bingSearchButton) {
  throw new Error('Could not find bing search button')
}

bingSearchButton.addEventListener('click', () => {
  fetch(`https://random-word-api.herokuapp.com/word?number=30`)
    .then(response => response.json())
    .then(words => {
      for (const word of words) {
        window.open('https://www.bing.com/search?q=' + encodeURIComponent(word))
      }
    })
    .catch(e => console.error(e))
})
