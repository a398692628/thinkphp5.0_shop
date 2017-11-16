/**
 * topic统计
 * version 2.0
 * @author yeweipeng
 * @date 2016-8-23
 */
    //获取专题号
var ChangeUrl = {
        'init':function(tagName,topics) {
            var allHref	 = document.getElementsByTagName(tagName);
            //为所有超链接添加 topic=专题号
            for (var i = 0; i <= allHref.length-1; i++) {
                var urlNew = ""; //定义新连接

                var url = allHref[i].getAttribute("href");
                if(url===null || url==='' || url===undefined || url.indexOf('#') >-1){
                    continue;
                }
                if(url.indexOf('topic=') >= 0) {//原来加了统计 干掉换成topic=本专题号
                    urlNew = url.replace(/topic=[0-9]*/,topics);
                } else {
                    if(url.indexOf('?') >= 0) {
                        urlNew = url+"&"+topics;
                    } else {
                        urlNew = url+"?"+topics;
                    }
                }
                //重新给url赋值
                allHref[i].setAttribute("href", urlNew);
            }
        },
        'start':function() {
            var  addressUrl = window.location.href; //地址栏
            var  specialReg = /special_[0-9]*_[0-9]{6}\.html/;

            var  searchUrl  = window.location.search; //参数
            var  searchReg  = /topic=[0-9]*/;
            //检查是否从专题首页跳转过去的 或者首页带?spm跳转到专题的
            var  regCheck   = searchReg.test(searchUrl);
            if ( searchUrl && searchReg.test(searchUrl)) {
                //获取url中"?"符后的字符串并正则匹配
                var topics = searchUrl.match('topic=[0-9]*')[0];

                if(topics != null || topics != '' || topics != undefined  ){
                    ChangeUrl.init('a',topics);
                    ChangeUrl.init('area',topics);

                }
            }else if( specialReg.test(addressUrl) ){ //是店铺专题
                var specialName = addressUrl.match(specialReg)[0];
                var number      = specialName.replace(/[^0-9]/g,'');
                if(number){
                    var topics      = 'topic='+number;
                    ChangeUrl.init('a',topics);
                    ChangeUrl.init('area',topics);
                }
            }else{ //系统专题首页
                var urlArr   = window.location.pathname.split('/');
                var legt     = urlArr.length;
                var fileName = urlArr[legt-1];
                var number   = fileName.match(/[0-9]*/)[0];
                if(number && urlArr[legt-2] == 'topic'){
                    var topics   ='topic='+number;
                    ChangeUrl.init('a',topics);
                    ChangeUrl.init('area',topics);
                }
            };
        }
    };
ChangeUrl.start();
