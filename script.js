let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", filterName);

function filterName() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  let ul = document.getElementById("names");

  let li = ul.querySelectorAll("li.collection-item");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    let Html = a.innerHTML.toUpperCase().indexOf(filterValue);

    if (Html > -1) {
      li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
  }
}
