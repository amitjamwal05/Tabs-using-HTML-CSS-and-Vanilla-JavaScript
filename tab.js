let tab = document.querySelector(".tab-box");

tab.addEventListener("click",function(e){
    let id = e.target.id;
     
    let element = document.querySelectorAll(".para");
    for(let i = 0; i < element.length; i++){
        element[i].classList.add("hide");
    }
    document.querySelector("#box_"+id).classList.remove("hide");

    //Top tab on click
    let active_element = document.querySelectorAll(".child-box");
    for(let i = 0; i < active_element.length; i++){
        active_element[i].classList.add("not_active");
    }
    document.querySelector("#"+id).classList.remove("not_active");
});


