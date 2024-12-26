let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(event){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delbtn");
    item.appendChild(del);
    ul.appendChild(item);
    inp.value="";
});
/*let dbtns=document.querySelectorAll(".delbtn");
for(dbtn of dbtns){
dbtn.addEventListener("click",function(event){
    
       let pare=this.parentElement;
       pare.remove();

})
}*/
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let para=event.target.parentElement;
        para.remove();
    }
})