/* window.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname.slice(1);
  	document.querySelector(`a[href="${path}"]`).classList.add('active');
});*/
console.log(window.location.pathname);
if(window.location.pathname == '/PHP/luse.loc/teacher.php') {
	document.querySelector('li.active').classList.remove('active');
	document.querySelector('a[href="teacher.php"]').parentNode.classList.add('active');
}
if(window.location.pathname == '/PHP/luse.loc/contact.php') {
	document.querySelector('li.active').classList.remove('active');
	document.querySelector('a[href="contact.php"]').parentNode.classList.add('active');
}
if(window.location.pathname == '/PHP/luse.loc/pricing.php') {
	document.querySelector('li.active').classList.remove('active');
	document.querySelector('a[href="pricing.php"]').parentNode.classList.add('active');
}
if(window.location.pathname == '/PHP/luse.loc/courses.php') {
	document.querySelector('li.active').classList.remove('active');
	document.querySelector('a[href="courses.php"]').parentNode.classList.add('active');
}