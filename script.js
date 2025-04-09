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
      return;
    }
  
    container.innerHTML = "";
  
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

  document.querySelector(".search-input").addEventListener("input", function (e) {
    const query = e.target.value.trim();
    if (query.length > 2) {
        displayData(query);
    }
  });
  
  document.getElementById("search-icon").addEventListener("click", function () {
    const searchText = document.getElementById("search-input").value;
    displayData(searchText);
  });
  
 
  function debounce(func, delay) {
    let timeoutID;
    return function () {
      const args = arguments;
      const context = this;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => func.apply(context, args), delay);
    };
  }
  
 
  document.getElementById("search-input").addEventListener("input", debounce(function () {
    const searchText = document.getElementById("search-input").value;
    displayData(searchText);
  }, 500)
);
  
  