const ulMenuTab = document.querySelector(".ulMenu");
const sliderTab = document.querySelector(".slider");
const homeHideTab = document.querySelector(".homeHide");
const loginTab = document.querySelector(".login");
const slideImageTab = document.querySelector(".slideImg");
const icon1Tag = document.querySelector(".icon1");
const icon2Tag = document.querySelector(".icon2");
const slideShowTag = document.querySelector(".slideShow");

let tabMenu = ["Home","About Us","Slide show","Contact Us","Login"];
let image = ["https://bit.ly/3m4NYoZ","https://bit.ly/3kLoH3T","https://bit.ly/3kKtYsD","https://bit.ly/3ivpbd5","https://bit.ly/3CRxEPq"]

for ( i = 0; i < tabMenu.length; i++){
	let liTab = document.createElement("li");
	let menus = tabMenu[i].toUpperCase()
	liTab.append(menus);
	liTab.id = i;
	liTab.addEventListener("click", () => {
		let liElement = document.getElementById(liTab.id);
		let liElementWidth = liElement.offsetWidth;
		sliderTab.style.width = liElementWidth + "px";
		let liElementOffsetLeft = liElement.offsetLeft;
		sliderTab.style.transform = `translateX(${liElementOffsetLeft}px)`
		if(liTab.id === "0"){
			homeHideTab.style.display = "block";
			loginTab.style.display = "none";
			slideShowTag.style.display = "none";
		}
		else if(liTab.id === "4"){
			loginTab.style.display = "block";
			homeHideTab.style.display = "none";
			slideShowTag.style.display = "none";
		}
		else if(liTab.id === "2"){
			slideShowTag.style.display = "block";
			loginTab.style.display = "none";
			homeHideTab.style.display = "none";
		}
		else{
			homeHideTab.style.display = "none";
			loginTab.style.display = "none";
			slideShowTag.style.display = "none";
		}
	})
	ulMenuTab.append(liTab)
}

let counter = 0;
icon2Tag.addEventListener("click", () => {
	if(counter === 5){
		slideImageTab.src = "https://bit.ly/3AQSD4c";
		counter = 0;
		return
	}
	slideImageTab.src = image[counter];
	counter += 1;
})

let count = 4;
icon1Tag.addEventListener("click", () => {
	if(count === -1){
		slideImageTab.src = "https://bit.ly/3AQSD4c";
		count = 4;
		return
	}
	slideImageTab.src = image[count];
	count -= 1;
})