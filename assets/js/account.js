getSelfData();
async function getSelfData(){
    const userid = "F111111111";
    var response = await fetch("https://c616-61-222-180-215.ngrok-free.app/api/Account/" + userid, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
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
                    <a href="https://alan-ddddd.github.io/NewProject/html" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-coin bx-tada"></i>
                    </a>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-refresh bx-flip-vertical bx-spin"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-comment-detail"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <i class="tf-icons bx bx-qr"></i>
                    </button>
                </div>
              </td>
            </tr>
            `);
        });
    }
}