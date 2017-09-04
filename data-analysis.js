$(function(){
    var rankingsppr;
    var rankingsstd;
    $.getJSON('rankingsppr.json', function(data){
        rankingsppr = data;
    })
    console.log(rankingsppr);

})
