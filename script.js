
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

    const response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=f9f11fce"
    );
    const data = await response.json();

    let container = document.getElementById("data-container");
    container.innerHTML = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong>${data.Year}</p>
        <img>${data.Poster}</img>
          `;


  } 
  

displayData();

