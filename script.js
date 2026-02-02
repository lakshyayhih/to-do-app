
var todoarray=JSON.parse(localStorage.getItem("todo"))|| [];
document.querySelector("form").addEventListener("submit",myTODO);

displaytodo(todoarray);

function myTODO(){
    event.preventDefault();
    var taskname=document.querySelector("#tname").value;
    var description=document.querySelector("#descript").value;
    var piriority=document.querySelector("#tpiriority").value;

    var obj={tn:taskname,ds:description,pr:piriority}
    todoarray.push(obj);
    localStorage.setItem("todo",JSON.stringify(todoarray));
    displaytodo(todoarray);
    
}

function displaytodo(data){
    document.querySelector("tbody").innerText="";
    data.forEach(elem => {
    var tr=document.createElement("tr")

    var td1=document.createElement("td");
    td1.innerText=elem.tn;
    var td2=document.createElement("td");
    td2.innerText=elem.ds;
    var td3=document.createElement("td");
    td3.innerText=elem.pr;

    tr.append(td1,td2,td3);

    document.querySelector("tbody").append(tr);

    });
     
}
