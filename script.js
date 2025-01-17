async function searchMeal() {
    const query = document.getElementById('meal-search').value;
    if (!query) return;
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    displayMeals(data.meals);
  }
  