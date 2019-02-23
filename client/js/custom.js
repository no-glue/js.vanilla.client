/**
* makeListEmpty
*
* make DOM list empty
*
* list - list to empty
*
**/
var makeListEmpty=function(list){
    for(;list.hasChildNodes();){
        list.removeChild(list.lastChild);
    }
}

/**
* addClassToElements
*
* add some class to elements
*
* items - these have class added
*
* clss - class to add
*
**/
var addClassToElements = function(list,clss){
    var i=0;
    for(;i<list.length;i++){
        list[i].classList.add(clss);
    }
}
