getSelfData();
async function getSelfData(){
    const userid = "F111111111";
    var response = await fetch("https://f11c-61-222-180-215.ngrok-free.app/api/Account/" + userid, {
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
            table.append(`
            <tr>
              <td>${index+1}</td>
              <td>${data.userid}</td>
              <td>${data.bankname}</td>
              <td>${data.bankcode}</td>
              <td>${data.bankaccount}</td>
              <td>${data.amount}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-coin bx-tada"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-refresh bx-flip-vertical bx-spin"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-comment-detail"></i>
                    </button>
                    <a href="https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=TWQRP%3A%2F%2F${data.bankcode}NTTransfer%2F158%2F02%2FV1%3FD6%3D0000699509320849%26D5%3D013%26D1%3D50000%26D10%3D901" target="_blank" class="btn btn-outline-secondary">
                      <img src="https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=TWQRP%3A%2F%2F${data.bankcode}NTTransfer%2F158%2F02%2FV1%3FD6%3D0000699509320849%26D5%3D013%26D1%3D50000%26D10%3D901" with="100" heigh="100" alt="一張圖片">
                    </a>
                </div>
              </td>
            </tr>
            `);
        });
    }
    else{
      openLogin();
    }
}

function　getQR(code,account){
  var money = prompt("請問輸入轉帳金額");
  console.log(Number(money));
  if(money == (0 || "NaN")){
    alert("x");
  }
  let url = "https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=TWQRP%3A%2F%2F"&code&"NTTransfer%2F158%2F02%2FV1%3FD6%3D"&account&"%26D5%3D"&code&"%26D1%3D"&money*100&"%26D10%3D901";
  open(url,"_block");
}