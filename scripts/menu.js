export default function toggleMenu() {
    const $button = document.querySelector(".header__toggle");
    const $navbar = document.querySelector(".navbar");

    $button.addEventListener("click", () => {
        if ($navbar.dataset.hidden == "true") {
            $navbar.style.left = "0";
            $navbar.dataset.hidden = "false";
        } else {
            $navbar.style.left = "-231px";
            $navbar.dataset.hidden = "true";
        }
    });
}