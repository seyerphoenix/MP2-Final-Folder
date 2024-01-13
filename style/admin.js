function validateForm(){
    var name =  document.getElementById("name").value;
    var name =  document.getElementById("brand").value;
    var name =  document.getElementById("serial").value;
    var name =  document.getElementById("invoice").value;
    var name =  document.getElementById("problem").value;
    var name =  document.getElementById("updatestatus").value;

    if(name == ""){
    alert("Name is required");
    return false;
    }

    if(brand == ""){
        alert("Brand/Model is required");
        return false;
    }

    if(brand == ""){
        alert("Brand/Model is required");
        return false;
    }

    if(brand == ""){
        alert("Brand/Model is required");
        return false;
    }

    if(brand == ""){
        alert("Brand/Model is required");
        return false;
    }

    if(brand == ""){
        alert("Brand/Model is required");
        return false;
    }

    function showDAta(){
        var clientlist;
        if(localStorage.getItem("clientlist") == null){
            clientlist = [];
        }
        else{
            clientlist = JSON.parse(localStorage.getItem("peoplelist")
        }
var html = "";

clientlist.forEach(function (element, index){
    html += "<tr>"
    html += "<tr>" + element.name + "</td>";
    html += "<tr>" + element.brand + "</td>";
    html += "<tr>" + element.serial + "</td>";
    html += "<tr>" + element.invoice + "</td>";
    html += "<tr>" + element.problem + "</td>";
    html += "<tr>" + element.updatestatus + "</td>";
    
})
    }
}