
function loadCategories(){
     //fetch koreche
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  // convert promise to json
    .then((res)=>res.json())
// send data to display
    .then((data) => displayCategories(data.categories))
}

function displayCategories(categories){
  //get the container
  const categoryContainer= document.getElementById("category-container")

  //loop operation on array of object
  for (let cat of categories){
    console.log(cat)

    //Element create
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML= `
<button class="btn btn-wide hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `
    //append the element
    categoryContainer.append(categoryDiv)
  }
}
loadCategories()