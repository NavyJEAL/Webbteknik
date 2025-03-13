function ShowMore(){
	let ShowMorebtn = document.querySelector("#show-more");
	let currentItem = 10;

	let boxes = [...document.querySelectorAll(".movies-now a")];
	for(var i = currentItem; i < currentItem + 10 && i < boxes.length; i++){
		boxes[i].style.display = "grid";
	}
	currentItem += 10;

	if(currentItem >= boxes.length){
		ShowMorebtn.style.display = "none";
	}
}
