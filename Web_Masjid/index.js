const pPengurus = document.getElementById("pPengurus");
const pUstadz = document.getElementById("pUstadz");
const profil = document.getElementsByClassName("profil");

pPengurus.addEventListener("change", function () {
  const value = pPengurus.value;
  const pengurus = biodataPengurus.find((item) => item.nama === value);

  if (pengurus) {
    const enama = document.createElement("h5");
    const ealamat = document.createElement("h5");
    const efoto = document.createElement("img");
    enama.innerText = pengurus.nama;
    ealamat.innerText = pengurus.alamat;
    efoto.setAttribute("src", pengurus.foto);
    efoto.setAttribute("alt", "fotoProfil");
    efoto.setAttribute("width", "100px");
    efoto.setAttribute("height", "120px");

    profil[0].innerHTML = "";
    profil[0].appendChild(efoto);
    profil[0].appendChild(enama);
    profil[0].appendChild(ealamat);
    console.log(profil[0]);
  } else {
    info.innerHTML = "Biodata tidak ditemukan";
  }
});

pUstadz.addEventListener("change", function () {
  const value = pUstadz.value;
  const ustadz = biodataUstadz.find((item) => item.nama === value);

  if (ustadz) {
    const enama = document.createElement("h5");
    const ealamat = document.createElement("h5");
    const efoto = document.createElement("img");
    enama.innerText = ustadz.nama;
    ealamat.innerText = ustadz.alamat;
    efoto.setAttribute("src", ustadz.foto);
    efoto.setAttribute("alt", "fotoProfil");
    efoto.setAttribute("width", "100px");
    efoto.setAttribute("height", "120px");

    profil[1].innerHTML = "";
    profil[1].appendChild(efoto);
    profil[1].appendChild(enama);
    profil[1].appendChild(ealamat);
    console.log(profil[1]);
  } else {
    info.innerHTML = "Biodata tidak ditemukan";
  }
});

// Jadwal Sholat
const date = new Date();
const year = date.getFullYear();
const month = () => {
  if (date.getMonth() < 10) {
    return "0" + `${date.getMonth() + 1}`;
  }
};
const url = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/bandung/${year}/${month()}.json`;
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  const jadwal = data[date.getDate() - 1];
  console.log(jadwal);
  document.getElementById("jsTanggal").innerHTML = jadwal.tanggal;
  document.getElementById("imsyak").innerHTML = jadwal.imsyak;
  document.getElementById("subuh").innerHTML = jadwal.shubuh;
  document.getElementById("terbit").innerHTML = jadwal.terbit;
  document.getElementById("dhuha").innerHTML = jadwal.dhuha;
  document.getElementById("dzuhur").innerHTML = jadwal.dzuhur;
  document.getElementById("ashar").innerHTML = jadwal.ashr;
  document.getElementById("maghrib").innerHTML = jadwal.magrib;
  document.getElementById("isya").innerHTML = jadwal.isya;
};

document.getElementById("quotes").innerHTML =
  quotes[Math.floor(Math.random() * 3) + 0];
