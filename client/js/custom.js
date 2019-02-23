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
