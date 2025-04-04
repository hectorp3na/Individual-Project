async function fetchData() {
  try {
    let response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=f9f11fce"
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
    return "Couldn't Fetch Data";
  }
}

fetchData();

async function displayData() {
  try {
    let response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=f9f11fce"
    );
    let data = await response.json();

    let container = document.getElementById("data-container");
    container.innerHTML = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Rated:</strong> ${data.Rated}</p>
        <p><strong></strong> <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" alt="Movie Poster"></p>
          `;
  } catch (error) {
    console.error("Error:", error);
    return "Couldn't Fetch Data";
  }
}

displayData();

