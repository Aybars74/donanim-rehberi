# Test Senaryoları ve Sonuçları

Bu belge, **DonanımRehberi** web sitesinin tarayıcı üzerinde gerçekleştirilen işlevsellik, tasarım ve erişilebilirlik testlerinin kayıtlarını içerir.

| Test No | Test Adımı ve Girdi | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Arama kutusuna bir başlığın ayırt edici bölümünü yazma (`"İşlemci"`) | Yalnızca eşleşen kart görünür; sayaç 1 olarak güncellenir. | Yalnızca "İşlemci (CPU)" kartı göründü; sayaç "1 eşleşen içerik bulundu." yazdı. | **Geçti** |
| **2** | Harf büyüklüğünü değiştirip kenarlara boşluk ekleme (`"  eKrAn kArTı  "`) | Büyük/küçük harf ve baştaki/sondaki boşluklar yok sayılarak eşleşen başlık gösterilir. | "Ekran Kartı (GPU)" kartı eşleşti ve ekranda listelendi. | **Geçti** |
| **3** | Hiçbir başlıkta olmayan bir ifade yazma (`"klavye"`) | Tüm kartlar gizlenir, sayaç 0 olur ve boş sonuç mesajı görünür. | Tüm kartlar gizlendi, sayaç "0 içerik gösteriliyor." oldu ve uyarı mesajı göründü. | **Geçti** |
| **4** | Önce **Temizle** düğmesine basma; ardından kutuya yalnızca boşluk (`"    "`) yazma | Her iki durumda da tüm 6 kart yeniden görünür ve sayaç 6 olur. | Temizle düğmesi kutuyu sıfırladı; yalnızca boşluk girildiğinde de 6 kartın tamamı göründü. | **Geçti** |
| **5** | Her sayfadaki (Ana Sayfa, İçerikler, Hakkında) üst menü bağlantılarını açma | Tüm bağlantılar ilgili HTML sayfasına hatasız yönlendirir. | Tüm sayfalardaki menü bağlantıları doğru sayfalara geçiş sağladı. | **Geçti** |
| **6** | Tarayıcı genişliğini `390px` yapma ve `Tab` tuşu ile gezinme | Yatay taşma (horizontal scroll) olmaz; arama kutusu ve Temizle düğmesine klavyeyle odaklanılır. | `390px` genişlikte yatay taşma oluşmadı; `Tab` tuşuyla giriş kutusu ve düğmeye odaklanıldı. | **Geçti** |

## Ekran Görüntüleri
- `ekran_goruntuleri/1_normal_arama.jpg`: Normal arama ve sayaç görünümü
- `ekran_goruntuleri/2_bos_sonuc.jpg`: Eşleşme olmadığında görünen boş sonuç uyarısı
- `ekran_goruntuleri/3_mobil_gorunum.jpg`: `390px` mobil ekran düzeni ve klavye odağı
