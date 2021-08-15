var button = document.getElementById('btn');

function reset() {
	var elements = document.getElementsByClassName('col2'); // get all elements
    var color = random_bg_color();
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = color;
	}
}

button.addEventListener('click',reset);

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 return bgColor ;
    }

