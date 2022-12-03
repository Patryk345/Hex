function kolor() {
	event.preventDefault();
	var body = document.querySelector("body");
	var text = document.getElementById("text").value;

	body.style.backgroundColor = "#" + text;
}

onkeyup = "kolor()";
