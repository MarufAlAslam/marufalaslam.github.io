$(document).ready(function(){

    $('#navLink').click(function(e){
        var linkOf = $(this).attr('href');
        console.log(linkOf);
    });

    $('#html').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: '#03c229',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
    
      $('#css').LineProgressbar({
        percentage: 100,
        fillBackgroundColor: '#03c229',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
    
      $('#js').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#03c229',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
    
      $('#php').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#03c229',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
      
      
    
});