async function getSelfData(){
    const userid = "F111111111";
    var response = await fetch("https://localhost:7285/api/Account/" + userid);

}