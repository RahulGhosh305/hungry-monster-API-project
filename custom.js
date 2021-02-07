//* Get Value from input by button
document.getElementById('search-btn').addEventListener('click', function () {
    const searchInputBox = document.getElementById('search-input').value;
    clickToShow(searchInputBox)
})


//* API fetch
function clickToShow(inputValue) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayMealItem(data));


    const displayMealItem = (meals) => {

        const cardContainer = document.getElementById("card-container");
        const mealsArray = meals.meals

        mealsArray.forEach(meal => {
            // console.log(meal.strMealThumb)

            const cardDiv = document.createElement("div");
            cardDiv.className = "card single-card";
            const image = document.createElement('img');
            image.className = 'card-img-top imgSet';
            image.setAttribute('src', meal.strMealThumb)
            const cardBody = document.createElement('div')
            cardBody.className = 'card-body';
            const h5 = document.createElement('h5');
            h5.className = 'card-title text-center';
            h5.innerText = meal.strMeal;
            cardBody.appendChild(h5);

            cardDiv.appendChild(image);
            cardDiv.appendChild(cardBody);
            cardContainer.appendChild(cardDiv);
        });

    }
}












//* API fetch Original 
// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
//     .then((response) => response.json())
//     .then((data) => displayMealItem(data));


// const displayMealItem = (meals) => {

//     const cardContainer = document.getElementById("card-container");
//     const mealsArray = meals.meals
//     console.log(mealsArray)

//     mealsArray.forEach(meal => {
//         // console.log(meal.strMealThumb)

//         const cardDiv = document.createElement("div");
//         cardDiv.className = "card single-card";
//         const image = document.createElement('img');
//         image.className = 'card-img-top imgSet';
//         image.setAttribute('src',meal.strMealThumb)
//         const cardBody = document.createElement('div')
//         cardBody.className = 'card-body';
//         const h5 = document.createElement('h5');
//         h5.className = 'card-title text-center';
//         h5.innerText = meal.strMeal;
//         cardBody.appendChild(h5);

//         cardDiv.appendChild(image);
//         cardDiv.appendChild(cardBody);
//         cardContainer.appendChild(cardDiv);
//     });

// }


















// * lagbe na
// const cardDiv = document.createElement("div");
//     cardDiv.className = "card";
//     const image = document.createElement('img');
//     image.className = 'card-img-top';
//     image.setAttribute('src','./icon/food.jpg')
//     const cardBody = document.createElement('div')
//     cardBody.className = 'card-body';
//     const h5 = document.createElement('h5');
//     h5.className = 'card-title text-center';
//     cardBody.appendChild(h5);

//     cardDiv.appendChild(image);
//     cardDiv.appendChild(cardBody);
//     cardContainer.appendChild(cardDiv);