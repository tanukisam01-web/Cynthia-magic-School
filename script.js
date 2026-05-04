function loadPage(page){

  let viewer = document.getElementById("viewer");

  if(page === "home"){
    viewer.src = "page/main/lore.html";
  }

  if(page === "charge"){
    viewer.src = "page/Chargecase/case.html";
  }

  if(page === "student"){
    viewer.src = "page/potion/potion.html";
  }

}