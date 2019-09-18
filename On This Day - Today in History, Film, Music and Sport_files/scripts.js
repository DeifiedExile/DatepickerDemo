$(document).ready(function(e){
   $('.search__text').datepicker({
      constrainInput: false,
      maxDate: new Date(Date.now()),
      changeMonth: true,
      changeYear: true

   });

});