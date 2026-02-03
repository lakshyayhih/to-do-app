
var todoarray=JSON.parse(localStorage.getItem("todo"))|| [];
document.querySelector("form").addEventListener("submit",myTODO);

displaytodo(todoarray);
function deleterow(index){
    todoarray.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(todoarray));
    displaytodo(todoarray)


}

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
    data.forEach(function (elem,ind){
    var tr=document.createElement("tr")
    var td0=document.createElement("td");
    td0.innerText=ind+1;

    var td1=document.createElement("td");
    td1.innerText=elem.tn;
    var td2=document.createElement("td");
    td2.innerText=elem.ds;
    var td3=document.createElement("td");
    td3.innerText=elem.pr;
    var td4=document.createElement("td");
    td4.innerText="Delete"
    //td4.style.color="red";
    td4.innerHTML='<i class="fa-regular fa-trash-can"></i>';
    td4.style.alignItems="center";
    td4.addEventListener("click",function(){deleterow(ind)})
    tr.append(td0,td1,td2,td3,td4);

    document.querySelector("tbody").append(tr);

    });
     
}
