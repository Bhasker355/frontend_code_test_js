//Fetching Json Data
const fetchData = (callback) => {
  fetch("./json/codeTest.json")
    .then((response) => response.json())
    .then((json) => {
      callback(json.articles);
    });
};

//Fetching Json Data callback, to write innerHTML
fetchData((articlesData) => {
  const articlesDataToShow = articlesData.map(
    (data) =>
      `<div class="card-container">
    <div class="card-container-div">
      <h4 class="card-container-h4">
        ${data.primarySectionRouteName}
      </h4>
      <h1 class="card-container-h1">${data.headline}</h1>
      <h3 class="card-container-h3">${data.standfirst}</h3>
    </div>
    <div>
      <img class="card-img" src=${data.thumbnail.src} />
    </div>
    </div>
    <div class="border-bottom"> </div>`
  );

  //Adding data to HTML div elemnt
  document.getElementById("bodyTemp").innerHTML = articlesDataToShow;
});
