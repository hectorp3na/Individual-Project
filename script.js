
async function fetchData() {
    try {
      let response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=f9f11fce');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();

  async function displayData() {
    let response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=f9f11fce');
    let data = await response.json();
    
    let container = document.getElementById('data-container');
    container.innerHTML = data.map(item => `<p>${item.name}</p>`).join('');
  }
  
  displayData();

 