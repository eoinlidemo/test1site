var tb = document.getElementsByClassName("box1");
for (var i = 0; i < tb.length; i++){
	if (i > 0) {
		var height = 120 + 30*i;
		tb[i].style.top = height + "px";
	}
}