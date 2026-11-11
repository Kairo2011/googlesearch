
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector("#search-button");
    const searchForm = document.querySelector(".home .searchbar");
    const query = document.querySelector("#q");

    if (searchButton && searchForm && query) {
        searchButton.addEventListener("click", () => {
            if (query.value.trim()) {
                searchForm.requestSubmit();
            } else {
                query.focus();
            }
        });
    }
});
