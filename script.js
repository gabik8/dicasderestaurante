document.getElementById("restaurantForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const city = document.getElementById("city").value;
  const neighborhood = document.getElementById("neighborhood").value;
  const cuisine = document.getElementById("cuisine").value;

  fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?/?city=${city}&neighborhood=${neighborhood}&cuisine=${cuisine}`)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
      if (data.length === 0) {
        resultsDiv.innerHTML = "<p>Nenhum restaurante encontrado.</p>";
      } else {
        const ul = document.createElement("ul");
        data.forEach(restaurant => {
          const li = document.createElement("li");
          li.textContent = restaurant;
          ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
      }
    })
    .catch(error => console.error("Erro ao buscar restaurantes:", error));
});
