// async function fetchData(query = "fast") {
//     try {
//       const response = await fetch(
//         `https://www.omdbapi.com/?apikey=f9f11fce&s=${encodeURIComponent(query)}`
//       );
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error:", error);
//       return null;
//     }
//   }
  
//   async function displayData(query = "fast") {
//     const data = await fetchData(query);
//     const container = document.getElementById("data-container");
  
//     if (!data || !data.Search || data.Search.length === 0) {
//       container.innerHTML = "<p>No results found.</p>";
//       return;
//     }
  
//     movieData = data.Search;
//     renderMovies();

  
//     data.Search.forEach((movie) => {
//       const movieHTML = `
//         <div style="border:1px solid #ccc; margin:10px; padding:10px; max-width:200px;">
//           <h3>${movie.Title}</h3>
//           <p><strong>Year:</strong> ${movie.Year}</p>
//           <img src="${movie.Poster}" alt="${movie.Title}" style="width:100%;">
//         </div>
//       `;
//       container.innerHTML += movieHTML;
//     });
//   }



// // Filter Movies


// function renderMovies(filter = "") {
//     const container = document.getElementById("data-container");
//     let filteredMovies = [...movieData]

//     if (filter === "Oldest_To_Newest") {
//     filteredmovies.sort((a,b) => parseInt(a.Year) - parseInt(b.Year)); 
//     } else if (filter === "Newest_To_Oldest") {
//         filteredmovies.sort((a,b) => parseInt(b.Year) - parseInt(a.Year));
//     }

// container.innerHTML = "";

// filteredMovies.forEach((movie) => {
//     const movieHTML = `
//     <div style="border:1px solid #ccc; margin:10px; padding:10px; max-width:200px;">
//         <h3>${movie.Title}</h3>
//         <p><strong>Year:</strong> ${movie.Year}</p>
//         <img src="${movie.Poster}" alt="${movie.Title}" style="width:100%;">
//       </div>
//     `;
//     container.innerHTML += movieHTML;
// });
// }



// // Display Data

//   displayData();

//   document.querySelector(".search-input").addEventListener("input", function (e) {
//     const query = e.target.value.trim();
//     if (query.length > 2) {
//         displayData(query);
//     }
//   });
  
//   document.getElementById("search-icon").addEventListener("click", function () {
//     const searchText = document.getElementById("search-input").value;
//     displayData(searchText);
//   });
  
 
//   function debounce(func, delay) {
//     let timeoutID;
//     return function () {
//       const args = arguments;
//       const context = this;
//       clearTimeout(timeoutID);
//       timeoutID = setTimeout(() => func.apply(context, args), delay);
//     };
//   }
  
 
//   document.getElementById("search-input").addEventListener("input", debounce(function () {
//     const searchText = document.getElementById("search-input").value;
//     displayData(searchText);
//   }, 500)
// );
  


let movieData = [];

async function fetchData(query = "fast") {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=f9f11fce&s=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

async function displayData(query = "fast") {
  const data = await fetchData(query);
  const container = document.getElementById("data-container");

  if (!data || !data.Search || data.Search.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    movieData = [];
    return;
  }

  movieData = data.Search;
  renderMovies(); // render initially without sorting
}

function renderMovies(filter = "") {
  const container = document.getElementById("data-container");
  let filteredMovies = [...movieData];

  if (filter === "Oldest_To_Newest") {
    filteredMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  } else if (filter === "Newest_To_Oldest") {
    filteredMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  }

  container.innerHTML = "";

  filteredMovies.forEach((movie) => {
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

// Filter event
function filterMovies(event) {
  const filterValue = event.target.value;
  renderMovies(filterValue);
}

// Search input
document.querySelector(".search-input").addEventListener("input", function (e) {
  const query = e.target.value.trim();
  if (query.length > 2) {
    displayData(query);
  }
});

// Search icon click
document.querySelector(".search-icon").addEventListener("click", function () {
  const searchText = document.querySelector(".search-input").value;
  displayData(searchText);
});

// Debounce helper
function debounce(func, delay) {
  let timeoutID;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func.apply(context, args), delay);
  };
}

// Optional debounce on input
document.querySelector(".search-input").addEventListener(
  "input",
  debounce(function () {
    const searchText = document.querySelector(".search-input").value;
    if (searchText.length > 2) {
      displayData(searchText);
    }
  }, 500)
);
// Initial load
displayData();