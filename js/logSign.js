function viewlogin() {
  var x = document.getElementById("signup");
  var y = document.getElementById("login");
  console.log(x);
  x.style.display = "none";
  y.style.display = "block";
}

function viewsignup() {
  var y = document.getElementById("signup");
  var x = document.getElementById("login");
  y.style.display = "block";
  x.style.display = "none";
}

function riderviewbook() {
	var a = document.getElementById("bookride");
	var b = document.getElementById("riderprofile");
	var c = document.getElementById("ridertrips");
	// var d = document.getElementById("logout");
	a.style.display = "block";
	b.style.display = "none";
	c.style.display = "none";
	// d.style.display = "none";
}

function riderviewprofile() {
	var a = document.getElementById("bookride");
	var b = document.getElementById("riderprofile");
	var c = document.getElementById("ridertrips");
	// var d = document.getElementById("logout");
	a.style.display = "none";
	b.style.display = "block";
	c.style.display = "none";
	// d.style.display = "none";
}

function riderviewtrips() {
	var a = document.getElementById("bookride");
	var b = document.getElementById("riderprofile");
	var c = document.getElementById("ridertrips");
	// var d = document.getElementById("logout");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "block";
	// d.style.display = "none";
}

function driverviewlicense() {
	var a = document.getElementById("driverlicense");
	var b = document.getElementById("driverprofile");
	var c = document.getElementById("drivertrips");
	a.style.display = "block";
	b.style.display = "none";
	c.style.display = "none";
}

function driverviewprofile() {
	var a = document.getElementById("driverlicense");
	var b = document.getElementById("driverprofile");
	var c = document.getElementById("drivertrips");
	a.style.display = "none";
	b.style.display = "block";
	c.style.display = "none";
}

function driverviewtrips() {
	var a = document.getElementById("driverlicense");
	var b = document.getElementById("driverprofile");
	var c = document.getElementById("drivertrips");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "block";
}