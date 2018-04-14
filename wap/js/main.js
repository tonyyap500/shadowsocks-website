// 封装
;(function($) {
    $.extend({
        http:{
            //ajax 封装方法
            get:function(url,data,callback) {
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json',
                    data: data,
                }).done(function (d) {
                    callback(d);

                }).fail(function (e) {
                    callback(e);
                });
            },

            post:function(url,data,callback) {
                $.ajax({
                    url: url,
                    type: 'POST',
                    dataType: 'json',
                    data: data,
                }).done(function (d) {
                    callback(d);

                }).fail(function (e) {
                    callback(e);
                });
            },
        }
    });
}(jQuery));