
async function fetchData() {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=f9f11fce&s=fast"
    );
    const data = await response.json();
    console.log(data);
  } 
  catch (error) {
    console.error("Error:", error);
    return "Couldn't Fetch Data";
  }
}

fetchData();

async function displayData() {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=f9f11fce&s=fast"
    );
    const data = await response.json();

    let container = document.getElementById("data-container");
    container.innerHTML = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong>${data.Year}</p>
        <p><strong></strong> <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" alt="Movie Poster"></p>
          `;
  } catch (error) {
    console.error("Error:", error);
    return "Couldn't Fetch Data";
  }
  

}

displayData();

