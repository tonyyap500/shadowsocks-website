// 封装
;(function($) {
    $.extend({
        util:{
            pop_tips:function(val){
                //统一 提示 eg：接口
                $("body").append(
                    '<div class="pop-bg-ok"></div>' +
                    '<div class="g-warp-540 cancel-ok">' +
                    '<i class="m-icon"></i>' +
                    '<div class="ct">' +
                    //'<p class="u-fs24 wri2">已成功支付<span class="u-fcf">￥25000</span></p>' +
                    //'<p class="u-fs14 u-fc9 wri3">您的余额还剩余<span class="u-fcf">￥5000</span></p>' +
                    '<p class="u-fs18 wri1">'+ val +'</p>' +
                    '</div>' +
                    '<div class="ft">' +
                    '<div class="btn">' +
                    '<a class="u-btn-p13 determine u-btn-bgf">确定</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>');

                $.app.util.pop_del_sure_cancel();
            },
        },
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
            tool:{
                /* 正则验证
           * 用法:verify(str,'type')
           * 参数:
           *  str:需要验证的字符串
           * type:验证的类型[notEmpty,email,mobile,qq,IDCard]
           * 返回值:[true|false]
           */
                verify:function(str,type){
                    var rule = {
                        notEmpty: /^\s+$/g,                                                     //不为空
                        email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/,            //邮箱
                        // mobile: /^1[3|4|5|7|8]\d{9}$/,                                          //移动手机号
                        mobile: /^(((1[0-9][0-9]{1}))+\d{8})$/,                                          //移动手机号
                        qq: /^\d{5,11}$/,                                                       //qq号
                        IDCard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/, //身份证
                        money: /(^[1-9]|^[1-9]\d+|^0)(\.\d{1,2})?$/,                            //金钱
                    }
                    try{
                        return rule[type].test(str.trim());
                    }catch(e){
                        return rule[type].test(str);
                    }
                },
            },
            determine:{
                loadingTxt:"提交中..."
            }
        }
    });
}(jQuery));