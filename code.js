let urun1 = {
    isim : "browni",
    kategori : "çikolata",
    fiyat : 5
 }
 let urun2 = {
     isim : "browni gold",
     kategori : "çikolata",
     fiyat : 5
  }
  let urun3 = {
     isim : "laviva",
     kategori : "çikolata",
     fiyat : 5
  }
  let urun4 = {
     isim : "damak",
     kategori : "çikolata",
     fiyat : 5
  }
  let urun5 = {
     isim : "damak bitterli",
     kategori : "çikolata",
     fiyat : 20
  }
  let urunler = [urun1,urun2,urun3,urun4,urun5];
  let filtreliUrun = [];
  let kullaniciUrunIsim = prompt("Lütfen ürün ismini gir : ");
 
  filtreliUrunDoldur(urunler);
  filtreliUrunYazdir(filtreliUrun);
 
  function filtreliUrunDoldur(urunler){
     urunler.forEach(function(urun){
         if(urun.isim.toUpperCase().includes(kullaniciUrunIsim.toUpperCase(),0)){
             filtreliUrun.push(urun);
            }
 
     });
  }
 function filtreliUrunYazdir(urunler){
     urunler.forEach(function(urun){
     console.log("------------------------------------");
     console.log(" | " + urun.isim + " | " + urun.kategori + " | " + urun.fiyat);
     console.log("-------------------------------------");
     });
 }