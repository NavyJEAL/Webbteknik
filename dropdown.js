document.addEventListener('DOMContentLoaded', function(){
	const Vnav = document.querySelector('#Vnav');
	const dropBtn = document.querySelector('.dropbtn');
	const content = document.querySelector('.drop-content');
	const dropdown = document.querySelector('.dropdown');

	dropBtn.addEventListener('click', function(){
        Vnav.style.borderBottomLeftRadius = '0px';
		content.style.display = 'block';
	})

	dropdown.addEventListener('mouseleave', function() {
		Vnav.style.borderBottomLeftRadius = '10px';
		content.style.display = 'none';
	})

})