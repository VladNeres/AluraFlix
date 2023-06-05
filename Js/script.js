
//Json criando objeto
const movie={
    title: "Harry poter",
    url: "http://caminho.com/imagem"

};

//Document == HTML
const figure = document.createElement("figcaption") //<figure></figure>
const  img = document.createElement("img"); //<img> criação da tag de imagem
const title = document.createElement("figcaption"); //<figCaption>
const listBanner = document.querySelector(".list-banners"); //buscamos a classe do html que tem o list-banner

figure.classList.add("Wrapper-banner"); //<figure>

//adding an image
img.src= "/Image/image 1.png"; // <img src="/Image/image 1.png">
img.alt= "Banner movie"; //<img src="/Image/image 1.png" alt="imagem banner"> 
img.classList.add("main-banner"); // pegamos o elemento do list-banner e adicionamos um novo elemento no final 


title.textContent = "Novo filme";
title.classList.add("main-caption");

figure.insertAdjacentElement("beforeend",img);
figure.insertAdjacentElement("beforeend", title);
listBanner.insertAdjacentElement("beforeend", figure); 