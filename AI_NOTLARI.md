# AI Kullanım ve Kod İnceleme Notları

## Kullandığım Prompt'lar

1. **Dosya ve Sayfa Planı:**
   - **Prompt:** "Bilgisayar donanımları hakkında 3 sayfalık (Ana Sayfa, İçerikler, Hakkında) basit bir site yapacağım. Ortak menü ve içerik kartlarını başlığa göre arayan bir yapı için dosya düzenini nasıl kurmalıyım?"
   - **Amacı:** HTML, CSS ve JS dosyalarını birbirine karıştırmadan düzenli kurmak.

2. **Mobil Uyum ve CSS Düzeni:**
   - **Prompt:** "style.css dosyasında kartları yan yana diz ama 390px mobil ekranda sağa sola taşma olmasın. Tab tuşuna basınca input ve buton belli olsun."
   - **Amacı:** Küçük ekranlarda tasarımın bozulmasını engellemek ve klavye kullanımını kolaylaştırmak.

3. **Arama Filtresi:**
   - **Prompt:** "icerikler.html sayfasındaki arama kutusuna yazı yazdıkça sadece kart başlıklarını kontrol eden, büyük-küçük harf fark etmeyen ve Temizle butonuna basınca hepsini geri getiren JS kodunu yaz."
   - **Amacı:** Sayfa yenilenmeden anlık arama yapabilmek.

## Önerileri Nasıl Kullandım?
- AI'ın verdiği `<label>` bağlantısı ve kart yapısı önerisini doğrudan kullandım.
- İlk gelen kodda kartlara `display: flex` verdiğim için `card.hidden = true` komutu kartları gizlemedi. Bunu fark edip `style.css` en altına `[hidden] { display: none !important; }` ekleyerek düzelttim.
- Türkçe karakterlerde (`İ`, `ı`, `Ş`) sorun çıkmaması için `toLowerCase()` yerine `toLocaleLowerCase("tr-TR")` kullandım.

## Kod Açıklamaları
- **Event Listener:** `searchInput.addEventListener("input", filterCards)` satırı, arama kutusuna her harf yazıldığında veya silindiğinde `filterCards` fonksiyonunu otomatik çalıştırır. Böylece butona basmaya gerek kalmadan anlık arama yapılır.
- **Filtreleme Koşulu:** `query === "" || titleText.includes(query)` koşulu iki şeye bakar: Kutu boşsa (veya sadece boşluk girildiyse) tüm kartları gösterir; yazı varsa sadece kartın başlığında o kelimenin geçip geçmediğini kontrol eder.