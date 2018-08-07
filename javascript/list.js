var mu = '';
var ng = '';
var uk = '';
$(document).ready(function(){
    $.getJSON("https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=mauritius", function(result){
        $.each(result, function(i, field){
            mu += '<li><a href="'+ field.web_pages + 
            '" class= "link" target="_blank"> ' + field.name + '</a> </li>';
        });
        $("#unilist").append(mu);

    });

    $.getJSON("https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=nigeria", function(result){
        $.each(result, function(i, field){
            ng += '<li><a href="'+ field.web_pages + 
            '" class= "link" target="_blank"> ' + field.name + '</a> </li>';
        });
        $("#unilist1").append(ng);

    });

    $.getJSON("https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=united%20kingdom", function(result){
        $.each(result, function(i, field){
            uk += '<li><a href="'+ field.web_pages + 
            '" class= "link" target="_blank"> ' + field.name + '</a> </li>';
        });
        $("#unilist2").append(uk);

    });
});
