$(function(){
    var players = [];
    var names = $('.last td a');
    var justnames = [];
    $.each(names, function(i, val){
      //Fantasy Pros extra
      var clean;
      var tempObj = {};
      tempObj['rank'] = i;
      tempObj['name'] = val.innerHTML;
      players.push(tempObj);
      })
      $.each(players, function(i,val){
          commasep = val.name + ", ";
          justnames.push(commasep);
        })
        $('body').prepend(justnames);
})
