$(`#login`).on(`click`,async function (e){
    e.preventDefault();
    var formdata = new FormData(formAuthentication);
    var response = await fetch(`https://2884-61-222-180-215.ngrok-free.app/api/Login`,{
        method:"Post",
        body:formdata
    });
    var responseData = await response.json();
    console.log(responseData);
    if(responseData.status == 0){
        localStorage.setItem(`loginToken`,responseData.data);
        let url = localStorage.getItem(`backUrl`)
        if(url){
            localStorage.removeItem(`backUrl`); 
            open(url,"_self");
        }
    }
})