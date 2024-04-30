jQuery.fn.AlertMethod=function(){
    return this.each(function(){
        alert('jquery plugin"'+$(this).prop("tagname")+'"tag');
    });
};