getSelfData();
async function getSelfData(){
    //const userid = "F111111111";
    const userid = "F128933062";
    var response = await fetch(url + "/api/Account/", {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "authorization":localStorage.getItem("loginToken")
        }),
      });
    var body = await response.json();
    console.log(body);
    var table = $(`#AccountList tbody`);
    if(body.status == 0){
        $.each(body.data,function(index,data){
            appendData(data);
        });
    }
    else{
      openLogin();
    }
}

function appendData(data){
    $(`#cash`).append(`<tr>
                            <td class="align-middle">${data.accountName}</td>
                            <td class="py-3">
                              <p class="mb-0">${data.amount}</p>
                            </td>
                       </tr>
    `);
    var cul = $(`#Allcash`).text().split(`:`)[1] == "" ? data.amount : $(`#Allcash`).text().split(`:`)[1] + data.amount;
    $(`#Allcash`).append(`現金帳戶 : ${cul}`);
}

function appendMonthData(data){

}

function appendYearData(data){

}