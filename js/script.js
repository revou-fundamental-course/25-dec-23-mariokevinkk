
function getLuas() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
  
    // Cek apakah semua input terisi
    if (alas === "" || tinggi === "") {
      alert("Semua input harus diisi!");
    } else if(alas<0 || tinggi<0){
        alert("Input tidak boleh negatif");
    } else{
      // Hitung luas
      const luas = (alas * tinggi) / 2;
  
      // Tampilkan hasil
      document.getElementById("luas").innerHTML = luas;
    }
  }
function getKeliling(){
    const side1 = document.getElementById("side1").value;
    const side2 = document.getElementById("side2").value;
    const side3 = document.getElementById("side3").value;
    if (side1 === "" || side2 === "" || side3 === "") {
        alert("Semua input harus diisi!");
      } else if(side1<0 || side2<0 || side3<0){
          alert("Input tidak boleh negatif");
      } else{
        // Hitung Keliling
        const keliling  = (side1*1+side2*1+side3*1);
    
        // Tampilkan hasil
        document.getElementById("keliling").innerHTML = keliling ;
      }
}