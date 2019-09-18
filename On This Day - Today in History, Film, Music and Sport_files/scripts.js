$(document).ready(function(e){
   $('.search__text').datepicker({
      constrainInput: false,
      maxDate: new Date(Date.now()),

   });
   // $('.ui-datepicker').draggable();
   //$('.ui-datepicker').zIndex(99999);
   // $('.search__text').on('click', function(){
   //    $('.ui-datepicker .ui-widget .ui-widget-content .ui-helper-clearfix .ui-corner-all .ui-draggable .ui-draggable-handle').zIndex(99999);
   // });
});