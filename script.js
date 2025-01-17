async function searchMeal() {
    const query = document.getElementById('meal-search').value;
    if (!query) return;
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    displayMeals(data.meals);
  }
  
  function displayMeals(meals) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (!meals) {
      resultsDiv.innerHTML = '<p>No meals found.</p>';
      return;
    }
    const firstFiveMeals = meals.slice(0, 5);
    firstFiveMeals.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('meal-card');
      mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0, 100)}...</p>
      `;
      resultsDiv.appendChild(mealCard);
    });
  
    if (meals.length > 5) {
      const showAllButton = document.createElement('button');
      showAllButton.textContent = 'SHOW ALL';
      showAllButton.onclick = () => displayAllMeals(meals);
      resultsDiv.appendChild(showAllButton);
    }
  }
  
  function displayAllMeals(meals) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    meals.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('meal-card');
      mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0, 100)}...</p>
      `;
      resultsDiv.appendChild(mealCard);
    });
  }
  