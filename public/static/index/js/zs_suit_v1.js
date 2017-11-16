/**
 * @author  zhouqiao
 * @date    2015-10-27
 * @mail    zhou.qiao@zol.com.cn
 */
var zsSuit      = {
    suitRuleInfo:{},//套装信息
    num:'4',//几层结构，默认2层
    paramsSort:[],//已经设置的层级ID及值[0:21,1:0,2:0,3:5]
    paramsArr:[],//每层可选范围[0:[21,11],1:[2]],
    canNotArr:[],//不能选数组，返回给回调函数使用
    tempCan:[],//临时可选
    //全局初始化
    init:function(){
        //判断套装使用的几层模型
        var suitRuleInfo    = this.suitRuleInfo;
        for(var i in suitRuleInfo){
            if(this.num){
                var frontValArr = suitRuleInfo[i].split("_");
                this.num        = frontValArr.length;
            }
        }
        //根据结构类型创建参数对象
        for(var i=0; i<this.num; i++){
            this.paramsSort[i]  = 0;
            this.paramsArr[i]   = [];
        }

        //每层可选范围
        for(var i in this.suitRuleInfo){
            var curSuitRuleInfo = this.suitRuleInfo[i].split("_");
            for(var j in curSuitRuleInfo){
                if(this.inArr(curSuitRuleInfo[j],this.paramsArr[j]) < 0){
                    if(curSuitRuleInfo[j] > 0){
                        this.paramsArr[j].push(curSuitRuleInfo[j]);
                    }
                }
            }
        }
    },
    //临时变量初始化，循环中使用的变量
    tempInit:function(){
        for(var i=0; i<this.num; i++){
            this.tempCan[i]     = [];
        }
    },
    //单次初始化变量，每次选择变更时要调整的量
    singleInit:function(){
        for(var i=0; i<this.num; i++){
            this.canNotArr[i]   = [];
        }
    },
    //数组判断
    inArr:function(val,IdArr){
        var flag        = -1;
        for(var i in IdArr){
            if(val == IdArr[i]){
                flag    = i;
            }
        }
        return flag;
    },
    //数组取差集 a与b的差集
    diffArr:function(a,b){
        var c = [];
        for(var i in b){
            if(this.inArr(b[i],a) < 0){
                c.push(b[i]);
            }
        }
        return c;
    },
    //配置
    config:function(obj){
        this.suitRuleInfo = obj.suitRuleInfo;
        this.init();
    },
    //设置信息
    set:function(position, val){
        this.paramsSort[position] = val;
        this.singleInit();
        this.out();
    },
    //删除信息
    unset:function(position){
        this.paramsSort[position] = 0;
        this.singleInit();
        this.out();
    },
    //外部输出
    out:function(){
        //判断当前设置了几个层级
        var num     = 4;


        //处理套装层级值的数据
        for(var j=1; j<=num; j++){
            switch(j){
                case 1:
                    this.singleJurdge();
                    break;
                case 2:
                    this.doubleJurdge();
                    break;
                case 3:
                    this.threeJurdge();
                    break;
                case 4:
                    this.fourJurdge();
                    break;
                default:
                    break;
            }
        }

        //如果所有层级选择完整，且有符合条件的数据
        var suitId  = 0;
        if(num == this.num){
            var curPattren  = this.createPattren(this.paramsSort);
            for(var curSuitId in this.suitRuleInfo){
                var pattren = new RegExp(curPattren);
                if(pattren.test(this.suitRuleInfo[curSuitId])){
                    suitId  = curSuitId;
                }
            }
        }

        //返回数据
        this.callBack(this.canNotArr, suitId);

    },
//
    callBack:function(data,suitId){

        for(var i=0;i<$("#zp-choose-product li").length;i++){
            var val = $("#zp-choose-product li").eq(i).attr("data-val");
            $("#zp-choose-product li").eq(i).children("span").attr("class","can-buy");
            if(this.inArr(val, data[0])>=0){
                $("#zp-choose-product li").eq(i).children("span").attr("class","can-not-buy");
            }
        }
        for(var i=0;i<$("#zp-choose-color li").length;i++){
            var val = $("#zp-choose-color li").eq(i).attr("data-val");
            $("#zp-choose-color li").eq(i).children("span").attr("class","can-buy");
            if(this.inArr(val, data[1])>=0){
                $("#zp-choose-color li").eq(i).children("span").attr("class","can-not-buy");
            }
        }
        for(var i=0;i<$("#zp-choose-sale li").length;i++){
            var val = $("#zp-choose-sale li").eq(i).attr("data-val");
            $("#zp-choose-sale li").eq(i).children("span").attr("class","can-buy");
            if(this.inArr(val, data[2])>=0){
                $("#zp-choose-sale li").eq(i).children("span").attr("class","can-not-buy");
            }
        }
        for(var i=0;i<$("#zp-choose-suit li").length;i++){
            var val = $("#zp-choose-suit li").eq(i).attr("data-val");
            $("#zp-choose-suit li").eq(i).children("span").attr("class","can-buy");
            if(this.inArr(val, data[3])>=0){
                $("#zp-choose-suit li").eq(i).children("span").attr("class","can-not-buy");
            }
        }


        this.getSuitId(window.goodsId,suitId);
    },
    getSuitId: function (goodsId,suitId) {

        var goodsId = goodsId;
        var suitId  = suitId;

        //参数不完整时，不获取信息
        if (parseInt(goodsId) == 0 || parseInt(suitId) == 0) {
            return false;
        }

        //数据获取
        var url = "/index.php?c=Ajax_GoodsSuit&a=DefaultV2&callback=?&t=" + Math.random();
        $.ajax({
            url:url,
            data:{goodsId: goodsId,suitId: suitId},
            dataType:'jsonp',
            success:function (data) {
//                            console.log(data);
                // 未选择套装弹框
                var noSelectSuit = $('.zs-attention').length;
                if (data.flag) {
                    if (data.data.skuId != 0 && $("#zp-choose-suit-id").length > 0) {
                        if ($("#zp-choose-suit-id").val() != data.data.suitId) {
                            location.href=goodsUrl+"?skuId="+data.data.skuId+"&suitId="+suitId;
                            return;
                        }
                    }
                    $("#zp-cost-goods-price").html("&yen;" + data.data.costSuitPrice + ".00");
                    var price = parseInt(data.data.suitPrice);
                    $("#zp-promo-price").html(price + ".00");
                    $("#zp-choose-goods-price").val(price).change();

                    if (parseInt(isOnline) == 1) {
                        var price = parseInt(data.data.suitPrice);
                        $("#zp-goods-price").html( price+ ".00");
                        $("#zp-choose-goods-price").val(price).change();
                        if( typeof calculatePrePay === 'function' ){
                            calculatePrePay();
                        }
                    }

                    // 判断是否包邮
                    if (data.goodsPrice < 100) {
                        $("#isBaoYou").hide();
                    } else {
                        $("#isBaoYou").show();
                    }

                    //数量
                    $(".zs-goods-number-show").html('（限购' + data.data.suitNumber + '件）');
                    $("#zp-choose-goods-number").val(data.data.suitNumber);
                    if (data.goodsNumber <= 1) {
                        $(".zp-increase").addClass("zp-no-increase");
                        $(".zp-decrease").addClass("zp-no-decrease");
                    } else {
                        $(".zp-increase").removeClass("zp-no-increase");
                    }
                    //套装信息
                    var suitInfo = data.suitInfo;
                    $("#zp-suit-desc").html(data.data.suitDesc).show();
                    $("#zp-choose-suit-id").val(data.data.suitId);
                    //合约机话费
                    if(parseInt(data.data.callsStored) || (data.data.saleTypeDescNoPic!='' && data.data.saleTypeDescNoPic!='0')){
//
//                                console.log(data.data.callsStored);
//                                console.log(data.data.saleTypeDescNoPic);
                        var str = '合约机套餐：';
                        if(parseInt(data.data.callsStored)){
                            str += "包含预存话费"+data.data.callsStored+"元";
                            $("#callsStored").show();
                            $("#callsStored").html("包含"+data.data.callsStored+"元话费");
                            $("#zpCountdown").hide();
                        }
                        $("#zp-suit-call").html(str+data.data.saleTypeDescNoPic).show();

                    }else{
                        $("#zp-suit-call").hide();
                        $("#callsStored").hide();
                        $("#zpCountdown").show();
                    }
                    //合约机说明
//                            $(".contract-phone-layer .title").html(data.data.saleTypeName+"套餐说明");
//                            $(".contract-phone-layer .explain").html(data.data.saleTypeDesc);
                    //合约机隐藏添加购物车按钮
                    if(parseInt(data.data.saleTypeId) >=2 && parseInt(data.data.saleTypeId) <= 4){
                        $("#prom").html("合约机价：");
                        $("#zs-price").html("合约价格：");
                        $(".zs-store-buy").hide();
                        $("#heyueText").show();
                        $(".area-selected-box").hide();
                        $("#zp-choose-call-price").val(data.data.callsStored);
                        $(".zs-store-buy").hide();
                    }else{
                        $("#prom").html("<span style='letter-spacing:6.5px'>促销价</span><span style='position:relative;left:-2px;'>:</span>");
                        $("#zs-price").html("价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：");
                        $(".zs-store-buy").show();
                        $("#heyueText").hide();
                        $(".area-selected-box").show();
                        $("#zp-choose-call-price").val(0);
                        if($('.zs-skin-inner').attr('class')=='zs-skin-inner zs-attention'){
                            $(".zs-store-buy").hide();
                        }else{
                            $(".zs-store-buy").show();
                        }

                    }
                    //套装促销信息
                    var suitPromoInfo = data.suitPromoInfo;
                    if (suitPromoInfo == '') {
                        $("#zp-suit-promotion").hide(); //隐藏
                    } else {
//                                $("#zp-suit-promotion-info").html('<span class="zp-flash-sale">' + suitPromoInfo.promoTypeName + '</span><em>' + suitPromoInfo.promoTypeTips + '</em>');
                        $("#zp-suit-promotion").show(); //显示
                    }
                    $.checkStyle($("input[fn=zp-goods-number]").val());
                    if (noSelectSuit == 1) {
                        $('.zs-confirm-btn').show();
                    }
                } else {
                    $('.zs-confirm-btn').hide();
                    alert(data.msg);
                }
            }
        });
    },
    //按需创建正则
    createPattren:function(positionObj){
        var pattrenArr  = new Array;
        for(var i=0; i<this.num; i++){
            var curVal  = '[0-9]+';
            if(i in positionObj){
                curVal  = positionObj[i];
            }
            pattrenArr.push(curVal);
        }
        var pattren     = pattrenArr.join('_');
        return pattren;
    },
    //单个判断
    singleJurdge:function(){
        for(var i in this.paramsSort){
            if(this.paramsSort[i]){
                var positionArr = [];
                positionArr[i]      = this.paramsSort[i];
                var curPattren      = this.createPattren(positionArr);
                this.jurdgeSuit(curPattren, positionArr);
            }
        }
    },
    //两两判断
    doubleJurdge:function(){
        for(var i=0; i<this.num; i++){
            var curVal  = this.paramsSort[i];
            if(curVal){
                for(var j in this.paramsSort){
                    //排除重复组合及空值
                    if(j>i && this.paramsSort[j]){
                        var positionArr = [];
                        positionArr[i]  = curVal;
                        positionArr[j]  = this.paramsSort[j];
                        var curPattren  = this.createPattren(positionArr);
                        this.jurdgeSuit(curPattren, positionArr);
                    }
                }
            }
        }
    },
    //三个判断
    threeJurdge:function(){
        for(var i=0; i<this.num; i++){
            var curVal  = this.paramsSort[i];
            if(curVal){
                for(var j in this.paramsSort){
                    //排除重复组合及空值
                    if(j<=i || !this.paramsSort[j]){
                        continue;
                    }
                    var sencodVal  = this.paramsSort[j];
                    for(var k in this.paramsSort){
                        //排除重复组合及空值
                        if(k<=j || !this.paramsSort[k]){
                            continue;
                        }
                        var positionArr = [];
                        positionArr[i]  = curVal;
                        positionArr[j]  = this.paramsSort[j];
                        positionArr[k]  = this.paramsSort[k];
                        var curPattren  = this.createPattren(positionArr);
                        this.jurdgeSuit(curPattren, positionArr);
                    }
                }
            }
        }
    },
    //四个判断
    fourJurdge:function(){
        //啥也不做，这个层级暂不考虑
    },
    //获取一定不可选的套装数据
    jurdgeSuit:function(curPattren, positionArr){
        //重置临时变量
        this.tempInit();
        //判断正则
        var pattren         = new RegExp(curPattren);
        var suitRuleInfo    = this.suitRuleInfo;
        //匹配数据并解析
        for(var i in suitRuleInfo){
            var curVal  = suitRuleInfo[i];
            var flag    = pattren.test(curVal);
            if(flag){
                var curArr  = curVal.split("_");
                for(var j in curArr){
                    if(this.inArr(curArr[j],this.tempCan[j]) < 0){
                        this.tempCan[j].push(curArr[j]);
                    }
                }
            }
        }
        //筛选出各层级一定不能选的ID
        for(var i in this.tempCan){
            if(i in positionArr){
                continue;
            }
            var canNotArr       = this.diffArr(this.tempCan[i],this.paramsArr[i]);
            for(var j in canNotArr){
                //本次正则选择的层级不在范围里
                if(this.inArr(canNotArr[j], this.canNotArr[i]) < 0){
                    this.canNotArr[i].push(canNotArr[j]);
                }
            }
        }
    }
};