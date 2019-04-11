function submitform(){
    alert("Thanks for your submit!!");
}

var i=0;
var pho1= {image:"images/0.jpg"};
var pho2 = {image:"images/1.jpg"};
var pho3 ={image:"images/2.jpg"};
var pho4 ={image:"images/3.jpg"};
var photo =[];
photo.push(pho1,pho2,pho3,pho4);


function change(){
    if(i!==3){
        i=i+1;}
    else{
        i=0}
    document.getElementById('photo').src=photo[i].image;
}

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});
