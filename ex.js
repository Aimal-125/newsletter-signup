let email = document.querySelector("#email");
let button = document.querySelector("#btn");
let errorMsg = document.querySelector("#error");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let str1 = "Email required";
let str2 = "Valid email required";
let img = document.querySelector(".desktop-div");
img.style.background = "white";
button.addEventListener("click", validateForm);
email.addEventListener("focus", vform2);
email.addEventListener("mouseenter", vform2);
email.addEventListener("mouseleave", vfor3);
email.addEventListener("mouseleave", vfor3);
email.addEventListener("keydown", vfor3);
email.addEventListener("mouseenter", changecolor);
email.addEventListener("mouseleave", changecolor);
function changecolor() {
	if(img.style.background === "white") {
		img.style.background = "linear-gradient(180deg, #ff634C, #ff527b)";
	} else {
		img.style.background = "white";
	}
}
function validateForm(event) {
	if(email.value == "") {
		errorMsg.innerHTML = `${str1}`;
		event.preventDefault();
		email.style.border = "0.1vh solid red";
		email.style.background = "rgba(255, 0, 0, 0.1)";
		errorMsg.style.color = "red";
	}
	if(email.value != "" && !(email.value.match(regex))) {
		errorMsg.innerHTML = `${str2}`;
		event.preventDefault();
		email.style.border = "0.1vh solid red";
		email.style.background = "rgba(255, 0, 0, 0.1)";
		errorMsg.style.color = "red";
	}
}
function vform2() {
	email.style.background = "initial";
	email.style.border = "0.1vh solid hsl(231, 7%, 70%)";
	email.style.color = "initial";
	errorMsg.innerHTML = "";
}
function vfor3() {
	if(email.value != "" && email.value.match(regex)) {
		email.style.border = "0.1vh solid green";
		email.style.background = "rgba(0, 255, 0, 0.1)";
		email.style.color = "green";
		errorMsg.innerHTML = "OK";
		errorMsg.style.color = "green";
	}
	if(!(email.value.match(regex))) {
		email.style.border = "0.1vh solid hsl(231, 7%, 70%)";
		email.style.background = "initial";
		email.style.color = "initial";
		errorMsg.innerHTML = "";
	}
	if(email.value == "") {
		email.style.background = "initial";
		email.style.border = "0.1vh solid hsl(231, 7%, 70%)"
		email.style.color = "initial"
		errorMsg.innerHTML = "";
	}
}

function color() {
	if(!(email.value.match(regex))) {
		email.style.color = "red";
	}
	if(email.value == "") {
		email.style.color = "red";
	}
}

button.addEventListener("click", color);