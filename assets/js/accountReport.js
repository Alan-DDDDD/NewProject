getSelfData();
async function getSelfData(){
    //const userid = "F111111111";
    const userid = "F128933062";
    //var apis = ["/api/getAccount/","/api/getReport/"];
    var apis = ["Account","getReport"];
    $.each(apis,function(index,api){
        await api(api);
    });
    
}

async function api(api){
    let apiDetail = `/api/${api}/`;
    var response = await fetch(url + api, {
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
            switch (api){
                case "Account":
                    appendData(data);
                    breake;
            }
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
    var old = $(`#Allcash`).text().split(`:`)[1].trim();
    var cul = old == "" ? data.amount : Number(old) + data.amount;

    $(`#Allcash`).text(`現金帳戶 : ${cul}`);
}

function appendMonthData(data){
    $(`#month`)
}

function appendYearData(data){
    $(`#year`)
}