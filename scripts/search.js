export default function toggleSearch() {
  const $button = document.querySelector(".header__toggle-search");
  const $searchBar = document.querySelector(".search-bar");

  $button.addEventListener("click", () => {
      if ($searchBar.dataset.hidden == "true") {
          $searchBar.style.display = "grid";
          $searchBar.dataset.hidden = "false";
      } else {
          $searchBar.style.display = "none";
          $searchBar.dataset.hidden = "true";
      }
  });
}