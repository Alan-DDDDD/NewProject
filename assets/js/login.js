checkToken();
async function checkToken(){
    let token = localStorage.getItem(`loginToken`);
    var data = "https://alan-ddddd.github.io/NewProject/html/auth-login-basic.html";
    if(token){
        var response = await fetch(`https://2884-61-222-180-215.ngrok-free.app/api/Login` + token);
        var responseData = await response.json();
        if(responseData.status == 0){
            data = responseData.data.url;
        }
        else{
            open(data,"_self");
        }
    }
    else{
        open(data,"_self");
    }
}