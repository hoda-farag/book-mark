var nameInput=document.getElementById("siteName");
var urlInput=document.getElementById("siteUrl");

if(localStorage.getItem('web')!=null)
{
    container= JSON.parse(localStorage.getItem('web'));
    showData(container)
}
var container=[]
function addWeb(){
webObj={
    name:nameInput.value,
    URL:urlInput.value
}
container.push(webObj)
localStorage.setItem("web",JSON.stringify(container))
showData()

}

function showData(){
    var cartona=``
    for(var i=0;i<container.length;i++){
        cartona+=`
        <div class="d-flex p-2 demo ">
            <h2 class="col-md-2">${container[i].name}</h2>
            <a href="${container[i].URL}" class="btn btn-info btn-lg mx-4" target="_blank">Visit</a>
            <button onclick="deleteUrl(${i})" class="btn btn-danger ">Delete</button>
        </div>
        
        `
    }
    document.getElementById("table").innerHTML=cartona;
    localStorage.setItem("web",JSON.stringify(container))
    clear()
}
function clear(){
    nameInput.value=''
    urlInput.value=''
}
function deleteUrl(index){
    container.splice(index,1)
    localStorage.setItem("web",JSON.stringify(container))
showData()
}
