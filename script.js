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
    // Kenar boşluklarını temizle ve Türkçe karakter uyumlu küçük harfe çevir
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    cards.forEach((card) => {
      const titleElement = card.querySelector(".card-title");
      const titleText = titleElement
        ? titleElement.textContent.trim().toLocaleLowerCase("tr-TR")
        : "";

      // Filtreleme koşulu: Arama kutusu boşsa veya başlık aranan ifadeyi içeriyorsa göster
      const isMatch = query === "" || titleText.includes(query);

      if (isMatch) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    // Sonuç sayacını ve boş sonuç mesajını güncelle
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
  }

  // Event Listener 1: Kullanıcı arama kutusuna yazdıkça anlık filtreleme
  searchInput.addEventListener("input", filterCards);

  // Event Listener 2: Temizle düğmesine tıklandığında aramayı sıfırlama
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterCards();
    searchInput.focus();
  });
});