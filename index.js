const validation = () => {

	var input = document.getElementById('email');
	var email = document.getElementById('mail');
	var regx = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/;
    var icon = document.getElementById('error');
    
	if (regx.test(input.value) == false) {
		email.style.display = 'block';
		icon.style.display = 'block';
		input.style.border = 'solid 1px red';
		return false;
	} else {
		alert('You will receive a notification soon!');
		return true;
	}
};
const validateField = () => {

	var input = document.getElementById('email');
	var email = document.getElementById('mail');
	var regx = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/;
    var icon = document.getElementById('error');
    
	if (regx.test(input.value) == true) {
		email.style.display = 'none';
		icon.style.display = 'none';
		input.style.border = 'solid 1px green';
		return true;
	}
};
