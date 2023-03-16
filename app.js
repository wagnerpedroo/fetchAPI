const $items = Array.from(document.querySelectorAll("li"));

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    $items.map((item, i) => {
        item.innerHTML = data[i].name
    })
    // console.log(data[0].name);
  })
  .catch((err) => console.error(err));
console.log($items);
