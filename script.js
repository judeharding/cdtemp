const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();

// RED HORIZONTAL LINE
ctx.beginPath();
ctx.strokeStyle = "#FF0000";
ctx.moveTo(50, 50); // starting point
ctx.lineTo(550, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// GREEN VERTICLE LINE
ctx.beginPath();
ctx.strokeStyle = "#00FF00";
ctx.moveTo(50, 450); // starting point
ctx.lineTo(50, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// BLUE DIAGONAL LINE
ctx.beginPath();
ctx.strokeStyle = "#0000FF";
ctx.moveTo(50, 450); // starting point
ctx.lineTo(550, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// PINK DIAGONAL LINE
ctx.beginPath();
ctx.strokeStyle = "#FF00FF";
ctx.moveTo(550, 450); // starting point
ctx.lineTo(300, 250); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// YELLOW DIAGONAL LINE
ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.moveTo(300, 250); // starting point
ctx.lineTo(50, 50); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// PURPLE VERTICLE LINE
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.moveTo(550, 50); // starting point
ctx.lineTo(550, 450); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// ORANGE HORIZONTAL LINE
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.moveTo(50, 450); // starting point
ctx.lineTo(550, 450); // straight horizontal line
ctx.stroke(); // actually DRAWS the line
ctx.closePath();

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
