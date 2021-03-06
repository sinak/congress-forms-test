define([
  'jquery'
], function($){
  var growl = {
    success: function(message){
      $.growl.notice({title: "Success!", message: message});
    },
    error: function(message){
      $.growl.error({message: message});
    },
    info: function(message){
      $.growl({title: "Info", message: message});
    }
  };
  return growl;
});
