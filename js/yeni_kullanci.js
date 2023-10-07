var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function giris(){
	var x = document.getElementById("Userix").value;
	var y = document.getElementById("Passwordix").value;
	if(x==uname)
	{
		if(y==pass)
		{
			alert ("Başarı bir şekilde giriş yaptınız.");
			window.location = "genel.html"; // Redirecting to other page.
			return false;
		}
		else
		{
			alert('Şifre yanlış');
		}
	}
	else if(x=="FilmD")
	{
		if(y=="filmd123")
		{
			alert ("Başarı bir şekilde giriş yaptınız.");
			window.location = "genel.html"; // Redirecting to other page.
			return false;
		}
		else
		{
			alert('Şifre yanlış');
		}
	}
	else
	{
		attempt --;// Decrementing by one.
		alert(attempt+" deneme hakkınız kaldı.");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("Userix").disabled = true;
			document.getElementById("Passwordix").disabled = true;
			document.getElementById("submit1").disabled = true;
			return false;
		}
	}
}
var uname;
var pass;
function kayid(){
	uname = document.getElementById("username").value;
	pass = document.getElementById("password").value;
	if(pass.length >= 5 && uname.length >= 5){
		alert('Hesap başarıyla oluşturuldu');
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
	}
	else if(pass.length<5){
		document.getElementById("password").value="";
		alert('Girdiğiniz şifreniz, geçerli değil. (En az 5 karakter içermeli)')
	}
	else if(uname.length<5){
		document.getElementById("username").value="";
		document.getElementById("password").value="";
		alert('Girdiğiniz kullanıcı adı geçerli değil. (En az 5 karakter içermeli)')
	}
}