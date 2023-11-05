function loginteste() {

    vLogin = document.getElementById('username').value;
    vPassword = document.getElementById('password').value;

    if(vLogin === "adm" || vPassword === "admin"){
        alert("Sistema Liberado")

    }else{
        alert("Login ou Password errados");
    }
   
  
}


