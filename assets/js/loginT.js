$(`#login`).on(`click`,async function (e){
    e.preventDefault();
    var formdata = new FormData()[0];
    var response = await fetch(`https://2884-61-222-180-215.ngrok-free.app/api/Login`,{
        method:"Post",
        body:formdata
    });
    var responseData = await response.json();
    console.log(responseData);
})