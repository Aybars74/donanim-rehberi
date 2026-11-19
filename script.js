document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const resultCount = document.getElementById("resultCount");
  const emptyMessage = document.getElementById("emptyMessage");
  const cards = Array.from(document.querySelectorAll("#cardGrid .card"));

  if (!searchInput || !clearBtn || !resultCount || !emptyMessage) {
    return;
  }

  function filterCards() {
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    cards.forEach((card) => {
      const titleElement = card.querySelector(".card-title");
      const titleText = titleElement
        ? titleElement.textContent.trim().toLocaleLowerCase("tr-TR")
        : "";

      const isMatch = query === "" || titleText.includes(query);

      if (isMatch) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    if (visibleCount === 0) {
      resultCount.textContent = "0 içerik gösteriliyor.";
      emptyMessage.hidden = false;
    } else {
      resultCount.textContent =
        query === ""
          ? `Toplam ${visibleCount} içerik gösteriliyor.`
          : `${visibleCount} eşleşen içerik bulundu.`;
      emptyMessage.hidden = true;
    }
  searchInput.addEventListener("input", filterCards);

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterCards();
    searchInput.focus();
  });
});