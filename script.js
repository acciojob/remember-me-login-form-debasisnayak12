//your JS code here. If required.
document.addEventListener('DOMContentLoaded',()=>{
	const submitBtn = document.getElementById('submit');
	const existingBtn = document.getElementById('existing');

	submitBtn.addEventListener('click',(e)=>{
		e.preventDefault();
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let isCheck = document.getElementById('check').checked;
		if(isCheck){
			let loginDetails = {username,password};
			localStorage.setItem('loginDetails',JSON.stringify(loginDetails));
		}else{
			localStorage.removeItem('loginDetails');
		}
		alert("Logged in as " + username);

		existingBtn.style.display = "block";
	});

	let saveDetails = JSON.parse(localStorage.getItem('loginDetails'));
	if(saveDetails){
		existingBtn.style.display = "block";
		existingBtn.addEventListener('click',()=>{
			alert("Logged in as " + saveDetails.username);
		});
	}else{
		existingBtn.style.display = "none";
	}
});
	
	 
	
