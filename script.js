const categoryDescriptions = {
"Blue Archive": "Karakter Dari Blue Archive",
"Boku no kokkoro no yabai yatsu": "Karakter Dari Anime Boku No Kokkoro No Yabai Yatsu",
"Gotoubun No Hanayome": "Karakter Dari Anime Gotoubun No Hanayome",
"Genshin Impact": "Karakter Dari Game Genshin Impact",
"base": "Place Holder",
};


const categories = {
"Blue Archive": [
{
name: "Hanako Urawa",
dir: "blue-archive",
subname: "hanako", image: "image/hanako.jpg",
desc: "Hanako Urawa\n- Blue Archive -",
},
{
name: "Hikari Tachibana",
dir: "blue-archive",
subname: "hikari", image: "image/hikari.jpg",
desc: "Hikari Tachibana\n- Blue Archive -",
},
{
name: "Hoshino Takanashi",
dir: "blue-archive",
subname: "hoshino", image: "image/hoshino.jpg",
desc: "Hoshino Takanashi\n- Blue Archive -",
},
{
name: "Ibuki Tanga",
dir: "blue-archive",
subname: "ibuki", image: "image/ibuki.jpg",
desc: "Ibuki Tanga\n- Blue Archive -",
},
{
name: "Kisaki Ryuge",
dir: "blue-archive",
subname: "kisaki", image: "image/kisaki.jpg",
desc: "Kisaki Ryuge\n- Blue Archive -",
},
{
name: "Kokona Sunohara",
dir: "blue-archive",
subname: "kokona", image: "image/kokona.jpg",
desc: "Kokona Sunohara\n- Blue Archive -",
},
{
name: "Koharu Shimoe",
dir: "blue-archive",
subname: "hoharu", image: "image/hoharu.jpg",
desc: "Koharu Shimoe\n- Blue Archive -",
},
{
name: "Midori Saiba",
dir: "blue-archive",
subname: "midori", image: "image/midori.jpg",
desc: "Midori Saiba\n- Blue Archive -",
},
{
name: "Momoi Saiba",
dir: "blue-archive",
subname: "momoi", image: "image/momoi.jpg",
desc: "Momoi Saiba\n- Blue Archive -",
},
{
name: "Nonomi Iyazoi",
dir: "blue-archive",
subname: "nonomi", image: "image/nonomi.jpg",
desc: "Nonomi Izayoi\n- Blue Archive -",
},
{
name: "Nozomi Tachibana",
dir: "blue-archive",
subname: "nozomi", image: "image/nozomi.jpg",
desc: "Nozomi Tachibana\n- Blue Archive -",
},
{
name: "Seia Yurizono",
dir: "blue-archive",
subname: "seia", image: "image/seia.jpg",
desc: "Seia Yurizono\n- Blue Archive -",
},
{
name: "Serika Kuromi",
dir: "blue-archive",
subname: "serika", image: "image/serika.jpg",
desc: "Serika Kuromi\n- Blue Archive -",
},
{
name: "Shiroko Sunaookami",
dir: "blue-archive",
subname: "shiroko", image: "image/shiroko.jpg",
desc: "Shiroko Sunaookami\n- Blue Archive -",
},
{
name: "Shun Sunohara",
dir: "blue-archive",
subname: "shun", image: "image/shun.jpg",
desc: "Shun Sunohara\n- Blue Archive -",
}
],

"Boku no kokkoro no yabai yatsu": [
{
name: "Anna Yamada" ,
dir: "boku-no-kokkoro-no-yabai-yatsu",
subname: "yamada", image: "image/yamada.jpg",
desc: "Anna Yamada\nBoku no kokkoro no yabai yatsu",
}
],
"Genshin Impact": [
{
name: "Furina" ,
dir: "genshin" ,
subname: "furina", image: "image/furina.jpg",
desc: "Furina\n- Genshin Impact-",
},
{
name: "Hu Tao" ,
dir: "genshin" ,
subname: "hutao", image: "image/hutao.jpg",
desc: "Hu Tao\n- Genshin Impact -",
},
{
name: "Yae Miko" ,
dir: "genshin" ,
subname: "yaemiko", image: "image/yae.jpg",
desc: "Yae Miko\n- Genshin Impact-",
}
],

"Gotoubun No Hanayome": [
{
name: "Nakano Ichika" ,
dir: "gotoubun" ,
subname: "ichika", image: "image/ichika.jpg",
desc: "Nakano Ichika\n- Gotoubun -",
},
{
name: "Nakano Nino" ,
dir: "gotoubun" ,
subname: "nino", image: "image/nino.jpg",
desc: "Nakano Nino\n- Gotoubun -",
},
{
name: "Nakano Miku" ,
dir: "gotoubun" ,
subname: "miku", image: "image/miku.jpg",
desc: "Nakano Miku\n- Gotoubun -",
},
{
name: "Nakano Yotsuba" ,
dir: "gotoubun" ,
subname: "yotsuba", image: "image/yotsuba.jpg",
desc: "Nakano Yotsuba\n- Gotoubun -",
},
{
name: "Nakano Itsuki" ,
dir: "gotoubun" ,
subname: "itsuka", image: "image/itsuki.jpg",
desc: "Nakano Itsuki\n- Gotoubun -",
},
{
name: "Uesugi Raiha" ,
dir: "gotoubun" ,
subname: "raiha", image: "image/raiha.jpg",
desc: "Uesugi raiha\n- Gotoubun -",
}
],

"base": [
{
name: "base" ,
dir: "base" ,
subname: "base", image: "image/base.jpg",
desc: "char\n- Anime -",
},
{
name: "base" ,
dir: "base" ,
subname: "base", image: "image/base.jpg",
desc: "char\n- Anime -",
}
]
};

function renderProducts() {
const container = document.getElementById("productContainer");
container.innerHTML = "";

for (const category in categories) {
const section = document.createElement("div");
section.classList.add("category");

section.innerHTML = `

  <h2>${category}</h2>  
  <div class="category-desc">${categoryDescriptions[category] || ""}</div>  
  <div class="slider" id="${category}"></div>  
`;  
    container.appendChild(section);  const slider = section.querySelector(".slider");  
categories[category].forEach((p, i) => {  
  const formattedDesc = p.desc.replace(/\n/g, "<br>");  
  slider.innerHTML += `  
    <div class="product">  
      <img src="${p.image}" alt="${p.name}">  
      <div class="title-group">  
        <h3>${p.name}</h3>  
      </div>
      <div class="desc" id="desc-${category}-${i}">${formattedDesc}</div>  
      <div class="btn-group">  
        <a class="btn" href="https://aichatbot.faanrky.my.id/${p.dir}/${p.subname}">Mulai Chat</a>
        <button class="btn" onclick="toggleDesc('${category}', ${i})">Lihat Deskripsi</button>  
      </div>  
    </div>  
  `;  
});

}
}

function toggleDesc(cat, index) {
  const el = document.getElementById(`desc-${cat}-${index}`);
  el.classList.toggle("show");
}
function scrollSlider(cat, dir) {
const slider = document.getElementById(cat);
slider.scrollLeft += dir * 220;
}

document.addEventListener("DOMContentLoaded", function () {
const qrisBox = document.getElementById("qrisBox");
const toggleBtn = document.getElementById("toggleQrisBtn");

toggleBtn.addEventListener("click", function () {
qrisBox.classList.toggle("show");
if (qrisBox.classList.contains("show")) {
toggleBtn.textContent = "Sembunyikan QRIS";
} else {
toggleBtn.textContent = "Tampilkan QRIS";
}
});
});

renderProducts()
