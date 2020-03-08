let c = console.log;
let upBut = document.querySelector('#up-button');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 900) {
		//upBut.style.visibility = 'visible'; 
		upBut.style.opacity = '0.7'
	} else //upBut.style.visibility = 'hidden'; 
		upBut.style.opacity = '0'
})