
async function fetchData() {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=f9f11fce&s=fast"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}





async function displayData() {

const data = await fetchData();
const container = document.getElementById("data-container");
    
if (!data || !data.Search || data.Search.length === 0) {
container.innerHYML = "<p>No results found.</p>";
return;
}

    // Clear container first
container.innerHTML = "";

    // Loop through each movie and add to container
data.Search.forEach((movie) => {
const movieHTML = `
<div style="border:1px solid #ccc; margin:10px; padding:10px; max-width:200px;">
<h3>${movie.Title}</h3>
<p><strong>Year:</strong> ${movie.Year}</p>
<img src="${movie.Poster}" alt="${movie.Title}" style="width:100%;">
</div>
`;
container.innerHTML += movieHTML;
});
}
displayData();



function debounce(func, delay) {
    let timeOutID;
    return function () {
        const args = arguments;
        const context = this;
        clearTimeout(timeOutID);
        timeOutID = setTimeout(() => func.apply(context, args), delay);
    };
}

function performSearch() {
    const query = document.getElementById("search-input").value;
    document.getElementById("searchResults").textContent = `${query}`;
}

document
.getElementById("search-input")
.addEventListener("input", debounce(performSearch, 500));