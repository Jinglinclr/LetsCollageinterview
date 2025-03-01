/** ****************** * Color Mode Button * ****************** **/
document.addEventListener('DOMContentLoaded', function() {
	var colormodeTrigger = document.querySelector('.js-mode');
  
	if (colormodeTrigger) {
		colormodeTrigger.addEventListener('click', function() {
			document.body.classList.toggle('dark-mode');

			if (document.body.classList.contains('dark-mode')) {
				colormodeTrigger.innerText = 'Dark';
			} else {
				colormodeTrigger.innerText = 'Light';
			}
		});
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var menuTrigger = document.querySelector('.js-menu-trigger');
  
	if (menuTrigger) {
	  menuTrigger.addEventListener('click', function() {
		document.body.classList.toggle('show-menu');
	  });
	}
  });

