getSelfData();
async function getSelfData(){
    const userid = "F111111111";
    var response = await fetch("https://localhost:7285/api/Account/" + userid);
    var body = await response.json();
    var table = $(`#accountList tbody`);
    $.each(body,function(index,data){
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