getSelfData();
async function getSelfData(){
    const userid = "F111111111";
    var response = await fetch("https://localhost:5001/api/Account/" + userid);
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
            </tr>
            `);
        });
    }
}