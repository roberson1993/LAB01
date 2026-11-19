const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const gallery = document.getElementById("gallery");

function filterPeople() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();

  // The search vibe
  gallery.querySelectorAll(".profile-card").forEach((card) => {
    const name = card.querySelector(".profile-name")?.textContent ?? "";

    // Hide all the name that the letter does match with searchTerm data
    card.hidden = !name.toLocaleLowerCase().includes(searchTerm);
  });


}

//searchInput.addEventListener("input", filterPeople);
searchButton.addEventListener("click", filterPeople);

new MutationObserver(filterPeople).observe(gallery, { childList: true });
