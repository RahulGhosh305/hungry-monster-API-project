//* Get Value from input by button
document.getElementById('search-btn').addEventListener('click', function () {
    const searchInputBox = document.getElementById('search-input').value;
    clickToShow(searchInputBox)
})


//* Searches Data By fetch API
function clickToShow(inputValue) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayMealItem(data));


        const displayMealItem = (meals) => {
        const cardContainer = document.getElementById("card-container");
        const mealsArray = meals.meals

       
        mealsArray.forEach(meal => {
            const cardDiv = document.createElement("div");
            cardDiv.className = "card single-card";

            const cardInfo = `
            <img src='${meal.strMealThumb}' class='card-img-top'>
            <div class='card-body'>
                <h5 class='card-title text-center'>${meal.strMeal}</h5>
            </div>
            <button class='btn btn-success' onclick="singleCardDetail('${meal.idMeal}')">Show Details</button>
            `;

            cardDiv.innerHTML = cardInfo;
            cardContainer.appendChild(cardDiv);
        });
    }
}





//* Individuals Card Details
function singleCardDetail(id){
    console.log(id)
}