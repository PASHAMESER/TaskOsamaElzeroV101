let myBody = document.querySelector("body");
let containerHeader = document.createElement("div");
let containerLinksHeader = document.createElement("div");
let hh1 = document.createElement("h1");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let a4 = document.createElement("a");
myBody.style.cssText = `margin: 0; font-family: system-ui; background-color: #ddd;`;
// Header
containerHeader.style.cssText = `height: 70px; background-color: #fff; display: flex; align-items: center; justify-content: space-between; padding: 0px 25px; margin-bottom: 10px; `;
hh1.innerText = "Mohamed Roshdy";
hh1.style.cssText = `color: #26A47F; font-size: 20px; `;
containerLinksHeader.style.cssText = `display: flex; gap: 10px;`;
containerLinksHeader.appendChild(a1);
containerLinksHeader.appendChild(a2);
containerLinksHeader.appendChild(a3);
containerLinksHeader.appendChild(a4);
a1.innerHTML = "Home";
a2.innerHTML = "About";
a3.innerHTML = "Service";
a4.innerHTML = "Contact";
// End Header
// Header 2
containerHeader.appendChild(hh1);
containerHeader.appendChild(containerLinksHeader);
// End Header 2
// MainPage
let mainPage = document.createElement("div");
myBody.appendChild(containerHeader);
let i;
for (i = 1; i <= 15; i++) {
    let containerContent = document.createElement("div");
    let mainH2 = document.createElement("div");
    let MainP = document.createElement("div");
    containerContent.className = "content";
    mainH2.innerHTML = i;
    MainP.innerHTML = "Product";
    containerContent.style.cssText = `height: 135px; width: 31%; margin: 15px; background-color: #fff; display: flex; align-items: center; justify-content: center; flex-direction: column; box-shadow: rgb(0 0 0 / 2%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px; border-radius: 5px;`;
    mainPage.style.cssText = `height: 900px; display: flex; flex-wrap: wrap; justify-content: center; `;
    mainH2.style.cssText = `font-size: 24px; font-weight: 400;`;
    MainP.style.cssText = `font-weight: 400; color: #808998;`;
    containerContent.appendChild(mainH2);
    containerContent.appendChild(MainP);
    mainPage.appendChild(containerContent);
    myBody.appendChild(mainPage);
}
// End MainPage 2
// Footer
let devFooter = document.createElement("div");
let footerH1 = document.createElement("h1");
devFooter.style.cssText = `height: 70px; background-color: #23A96E; display: flex; align-items: center; justify-content: center; `;
footerH1.style.cssText = `color: #fff; font-size: 25px; font-weight: 500; `;
footerH1.innerText = "Copyright 2022";
devFooter.appendChild(footerH1);
// End Footer
myBody.appendChild(devFooter);
