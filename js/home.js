'use strict';

$.ajax({
  dataType: 'json',
  url: 'strings.json',
  method: 'GET',
  success: function (data) {
    var vm = new Vue({
      el: '#page',
      data: data
    });
  },
  error: function (error) {
    console.log(JSON.stringify(error));
  }
});
