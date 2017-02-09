;(function($){
    //如果有元素移除
    var fontSize = parseInt($('html').css('font-size'))/$('html').attr('data-dpr');
    var base36 = 0.96 * parseInt($('html').css('font-size'));
    var base18 = 0.48 * parseInt($('html').css('font-size'));
    $('.sel-boxs').remove();
    $('body').append('<style>'+
                '.sel-boxs{display:none;}'+
                '.sel-boxs .bg{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:998;}'+
                '.sel-box{position:fixed;bottom:0;left:0;right:0;z-index:999;}'+
                '.sel-box .btn{background:#fda626;overflow:hidden;}'+
                '.sel-box .btn1{overflow:hidden;width:' + 22/fontSize + 'rem;height:' + 22/fontSize + 'rem;float:left;padding:' + 11/fontSize + 'rem ' + 12/fontSize + 'rem;}'+
                '.sel-box .btn1 img{float:left;width:100%;height:100%;}'+
                '.sel-box .ok{float:right;}'+
                '.sel-box .name{color:white;text-align:center;line-height:' + 22/fontSize + 'rem;font-size:' + 18/fontSize + 'rem;padding:' + 11/fontSize + 'rem 0;}'+
                '.sel-con{background:white;}'+
                '.sel-con .border{height:' + 34/fontSize + 'rem;border:solid 1px #fda626;border-width:1px 0;position:fixed;bottom:' + 72/fontSize + 'rem;left:0;right:0;pointer-events:none;}'+
                '.sel-con .table{display:table;width:100%;table-layout:fixed;}'+
                '.sel-con .cell{display:table-cell;vertical-align:middle;text-align:center;overflow:hidden;}'+
                '.sel-con .scroll{-webkit-overflow-scrolling:touch;height:' + 180/fontSize + 'rem;overflow:auto;box-sizing:border-box;padding:' + 72/fontSize + 'rem 0;width:200%;padding-right:100%;}'+
                '.sel-con .ele{font-size:' + 16/fontSize + 'rem;color:#b2b2b2;height:' + 36/fontSize + 'rem;line-height:' + 36/fontSize + 'rem;}'+
                '@-webkit-keyframes fadeInUp {from {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}'+
                '@keyframes fadeInUp {from {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);} to {opacity: 1;-webkit-transform: none;transform: none;}}'+
                '.fadeInUp {-webkit-animation-name: fadeInUp;animation-name: fadeInUp;}'+
                '@-webkit-keyframes fadeInDown {from {opacity: 1;-webkit-transform: none;transform: none;}to {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}}'+
                '@keyframes fadeInDown {from {opacity: 1;-webkit-transform: none;transform: none;}to {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}}'+
                '.fadeInDown {-webkit-animation-name: fadeInDown;animation-name: fadeInDown;}'+
                '.animated {-webkit-animation-duration: .4s;animation-duration: .4s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}'+
                '</style>'+
                '<div class="sel-boxs">'+
                '   <div class="bg"></div>'+
                '   <div class="sel-box animated fadeInUp">'+
                '       <div class="btn">'+
                '           <div class="btn1 ok"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMAR/fu0fuGIwupFQcC8uPXxr+6j1lR2k2yl5VfhFNEMGTn37CfP8ikenEcAN6KmwAAAcRJREFUOMullYmSgjAQRCEEERBQPMBrvfd6//9/C4sGYoJb1E6VZRjacY5Oj/NkY3d0yTwhvOwycsfOK3NDQcdE6PZCl7LBeHI6lV5zlksrNMipLJ0XUfMcFfO09uSBiV0kwMyddH0TdwYki2fsDli9mTHeVsBO922AdWzLLl7Xr7qeEfjbvrq3Pow6+VbYpdPfpQqt8g4SOL5q/xGSR09ylVRrRkn5/V9gFb8Gxyto8pTQM9VDuH/wAOT9e9YT70z6OM+aiGFv4E+4OG3osOKkIJ1YsVGCH6jJp4hx/ZO5PfBVezMHtx5eYa8OTh32F/UYS4is4Kk+qQhKJ8OzYhfwrtXikVUfacOOU7hpHllFFUxt4B18PKclesCBQHwbYC2NQ/l1P4XwqdwqDa3AK6x/i7rBWbWtLVBrXeFDGFfjktBQSG+dPpRCQD52ji239KHo474l8B6c8A+trx33M5EOJxD6zWmJZFA0OAOeKkOjqEn+7wy+1JNOfvNaRR/X2BAmkEMu7F5JweZvKeiIzPYVdluLzBD5Gi6MreRu7JL7q8bDxHz4mjAXkPtYQK5aQDbb21bb/t9Ls13HZeb5vpeV5jr+ARdfPT/feckoAAAAAElFTkSuQmCC" alt="确定"></div>'+
                '           <div class="btn1 cancel"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAflBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vroaSAAAAKXRSTlMAR3Vx7fjY0vyWhlIK8r+7qVkVB+MixrJgTRqRjoQk3Mewb2IQDOUsKwWQsecAAAGYSURBVDjLlZWJbsIwDECd0YvSUsZNYWzj2Pb+/wcXpUDamkN5EkKVn1IncW3pUZj8O4niOEq+c1PIM8wkpkU8MQ/VUYojSr++0ghHOrqrLiosP9vNVBzTzXaOpVpo970ExqaX1hgo3/vuB5B41esJ8CEdhsBwJneYuZC0yCFbywPWGeStfK07koeMrH3Le1HCUZ5whPJ6JlUvKc0QqstbIJk9l2cJNHmmYOQFBtLL/9jXUd1W/vzTuFlx0lq4+MwO3n2jrFtLT2w8Zn4L1xkMvAu/t9CcuBADO7kxwNreffORLRjJYSPKVq5sIJcVTEXZypUprCQhElG2ckUiEvtLRdvalZRIYpaibe3KkljLTb4M7sk2De06W6ehN+j25napNuiOTrn+vDtH5y5Fu9p2l6Kv27radtfdLaSFd52d1Z1C6pboKWqf7yH7LNol2i/+U6dX1UWn+EM+q6APNqgV+CazfuauodyHtK+QxhjYcsObefiYsOwrLPOduQ4gs2sG0P7FaFsu1WgLHJqas8lXzThe5ebcC/4DShk9Lfj6+QIAAAAASUVORK5CYII=" alt="取消"></div>'+
                '           <div class="name">加载中...</div>'+
                '       </div>'+
                '       <div class="sel-con">'+
                '           <div class="border"></div>'+
                '           <div class="table"></div>'+
                '       </div>'+
                '   </div>'+
                '</div>');

    // 取消选择
    $('.sel-box .cancel,.sel-boxs .bg').click(function(){
    
        $('.sel-boxs .bg')[0].removeEventListener('touchmove', preDef, false);
        $('.sel-boxs .btn')[0].removeEventListener('touchmove', preDef, false);
        $('.sel-boxs').find('.sel-box').removeClass('fadeInUp').addClass('fadeInDown');
        setTimeout(function(){
          $('.sel-boxs').hide();
        },300);
    });

    //取消ios在zepto下的穿透事件
    $(".sel-con").on("touchend", function (event) {
        event.preventDefault();
    });

    //取消默认行为
    var preDef = function(e){
       e.preventDefault();
        return false;
    };

    function dataFrame(ele){
        // ele数组转换成相应结构
        var eleText = '';
        for(var i=0;i<ele.length;i++){
            eleText += '<div class="ele">'+ele[i]+'</div>';
        };
        return '<div class="cell elem"><div class="scroll">'+eleText+'</div></div>';
    };
    // 封装说明：
    // 基于jQuery
    // 适合场景，只适用于单个值的选取模式
    $.scrEvent = function(params){

        var dataArr = params.data || [];
        var evEle = params.evEle;
        var title = params.title || '';
        var defValue = params.defValue || dataArr[0]; //首次默认值
        var type = params.type || 'click'; //事件类型
        var beforeAction = params.beforeAction || function(){};//执行前的动作  无参数 
        var afterAction = params.afterAction || function (){};//执行后的动作   参数：选择的文字

        $(evEle).attr('readonly','readonly');
        // 点击对应input执行事件
        $(evEle).on(type, function (){

            //由于IOS点击(tap)其他区域 input也不失去焦点的特性
            $('input, textarea').each(function(){
                this.blur();
            });
            $('.sel-boxs .bg')[0].addEventListener('touchmove', preDef, false);
            $('.sel-boxs .btn')[0].addEventListener('touchmove', preDef, false);
            beforeAction();
            $('.sel-con .table').html(dataFrame(dataArr));
            $('.sel-box .name').text(title);
            $('.sel-boxs').show().find('.sel-box').removeClass('fadeInDown').addClass('fadeInUp');
            // 默认值
            $(evEle).val() == "" ? defValue = defValue : defValue = $(evEle).attr('data-sel01');

            $('.sel-con').find('.elem').eq(0).find('.ele').each(function(){
                if($(this).text() == defValue){
                    $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                }
            });
            // 选择器滚动获取值和确认赋值
            var scText = defValue; // 默认值为默认值
            $('.sel-con .scroll').scroll(function(){
                var that = $(this);
                // 数值显示

                var scTop =  this.scrollTop + base18;
                var scNum = Math.floor(scTop/base36);
                scText = $(this).find('.ele').eq(scNum).text();
                // 停止锁定
                clearTimeout($(this).attr('timer'));
                $(this).attr('timer',setTimeout(function(){
                    that[0].scrollTop = scNum*base36;
                },100));
            });

            //移除之前的绑定事件
            $(".sel-box .ok").off();
            // 确认选择
            $('.sel-box .ok').click(function(){
                $(evEle).attr('data-sel01', scText);
                afterAction(scText);
                $('.sel-boxs').find('.sel-box').removeClass('fadeInUp').addClass('fadeInDown');
                setTimeout(function(){
                  $('.sel-boxs').hide();
                },300);

                $('.sel-boxs .bg')[0].removeEventListener('touchmove', preDef, false);
                $('.sel-boxs .btn')[0].removeEventListener('touchmove', preDef, false);
            });
        });
    };


    // 封装说明：
    // 基于jQuery
    // 适合场景，只适用于两个值（可带单位）的选取模式
    $.scrEvent2 = function(params){

        var ele = params.data1 || [];
        var ele2 = params.data2 || [];
        var evEle = params.evEle;
        var selName = params.title || '';

        var defValue = params.defValue || ele[0]; //首次默认值
        var defValue2 = params.defValue2 || ele2[0];//首次默认值
        var type = params.type || 'click'; //事件类型
        var eleName = params.eleName || '';  //第一个值的单位
        var eleName2 = params.eleName2 || '';  //第二个值的单位
        var beforeAction = params.beforeAction || function(){}; //执行前的动作  无参数
        var afterAction = params.afterAction || function (){}; //执行后的动作   参数1：选择的文字1； 参数2 选择的文字2 

        $(evEle).attr('readonly','readonly');
        eleName!=''?eleName = '<div class="cell" style="font-size:' + 14/fontSize + 'rem;color:#b2b2b2;">'+eleName+'</div>':eleName = '';
        eleName2!=''?eleName2 = '<div class="cell" style="font-size:' + 14/fontSize + 'rem;color:#b2b2b2;">'+eleName2+'</div>':eleName2 = '';
        
        $(evEle).on(type, function (){

            //由于IOS点击(tap)其他区域 input也不失去焦点的特性
            $('input, textarea').each(function(){
                this.blur();
            });

            $('.sel-boxs .bg')[0].addEventListener('touchmove', preDef, false);
            $('.sel-boxs .btn')[0].addEventListener('touchmove', preDef, false);
            beforeAction();
            $('.sel-con .table').html(dataFrame(ele)+eleName+dataFrame(ele2)+eleName2);
            $('.sel-box .name').text(selName);
            $('.sel-boxs').show().find('.sel-box').removeClass('fadeInDown').addClass('fadeInUp');

            // 第一个值默认值
            $(evEle).val()==""?defValue = defValue:defValue= $(evEle).attr('data-sel01');
            // 第二个值默认值
            $(evEle).val()==""?defValue2 = defValue2:defValue2=$(evEle).attr('data-sel02');
    

            $('.sel-con').find('.elem').eq(0).find('.ele').each(function(){
                if($(this).text()==defValue){
                    $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                }
            });
            // 第二个值默认值
            $('.sel-con').find('.elem').eq(1).find('.ele').each(function(){
                if($(this).text()==defValue2){
                    $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                }
            });
            // 选择器滚动获取值和确认赋值
            var scText = ele[0]; // 默认值为数组第一个值
            var scText2 = ele2[0]; // 默认值为数组第二个值
            $('.sel-con .scroll').scroll(function(){
                var that = $(this);
                // 数值显示
                var scTop =  this.scrollTop + base18;
                var scNum = Math.floor(scTop/base36);
                if($(this).parents('.elem').index()==0){
                    scText = $(this).find('.ele').eq(scNum).text();
                }else{
                    scText2 = $(this).find('.ele').eq(scNum).text();
                };
                // 停止锁定
                clearTimeout($(this).attr('timer'));
                $(this).attr('timer',setTimeout(function(){
                    that[0].scrollTop = scNum*base36;
                },100));
            });

            //移除之前的绑定事件
            $(".sel-box .ok").off();
            // 确认选择
            $('.sel-box .ok').click(function(){
                $(evEle).attr('data-sel01', scText);
                $(evEle).attr('data-sel02', scText2);
                afterAction(scText, scText2);
                $('.sel-boxs').find('.sel-box').removeClass('fadeInUp').addClass('fadeInDown');
                setTimeout(function(){
                  $('.sel-boxs').hide();
                },300);
    
                $('.sel-boxs .bg')[0].removeEventListener('touchmove', preDef, false);
                $('.sel-boxs .btn')[0].removeEventListener('touchmove', preDef, false);
            });   
        });
    };

   

    // 选择器
    // 封装说明：
    // 基于jQuery
    // 适合场景，适用于年 月 日选择    也可以小时和分钟
    
    // 每个月的天数
    function getMonthDays(year,month){
        return new Date(year,month,0).getDate();
    };
    // 天数小于10天在前面加"0"
    function twoZero(n){
        return n<10?n='0'+n:n=n+'';
    };
    // 天数转换成数组
    function couDay(n){
        arrDay = [];
        for(var i=1;i<=n;i++){
            arrDay.push(twoZero(i));
        };
        return arrDay;
    };

    $.dateSelector = function(params){
        var hunYear = [];
        var evEle = params.evEle || evEle;
        var year = params.year || new Date().getFullYear();
        var month = params.month || new Date().getMonth() + 1;
        var day = params.day || new Date().getDate();
        var type = params.type || 'click'; //事件类型
        var startYear = params.startYear || '';
        var endYear = params.endYear || '';
        var timeBoo = params.timeBoo || false;
        var hour = params.hour || new Date().getHours();
        var minute = params.minute || new Date().getMinutes();
        var title = params.title || '日期选择';
        var beforeAction = params.beforeAction || function(){}; //执行前的动作  无参数   
        var afterAction = params.afterAction || function (){};//执行后的动作   参数：选择的文字

        // 年 默认范围：当前年份-10 ~ 当前年份 ~ 当前年份+10
        if (startYear !== '' && endYear !== '') {
            for(var i = startYear; i <= endYear; i++){
                hunYear.push(i)
            };
        }else{
            for(var i = -10;i<10;i++){
                hunYear.push(new Date().getFullYear()-i)
            };
        }

        $(evEle).attr('readonly','readonly');

        // 月 范围：十二个月份
        var tweMonth = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        // 日 获取日期
        var arrDay = [];
        // 小时
        var timeHour = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
        // 分钟
        var timeMinute = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];

        // 年月日选择器
        $(evEle).on(type, function(){

            $('.sel-boxs .bg')[0].addEventListener('touchmove', preDef, false);
            $('.sel-boxs .btn')[0].addEventListener('touchmove', preDef, false);
             beforeAction();
            var timeGroup = '';
            if(timeBoo){
                timeGroup=dataFrame(timeHour)+dataFrame(timeMinute);
            };
            $('.sel-con .table').html(dataFrame(hunYear)+dataFrame(tweMonth)+dataFrame(couDay(getMonthDays(hunYear[0],tweMonth[0])))+timeGroup);
            $('.sel-box .name').text("日期选择");
            $('.sel-boxs').show().find('.sel-box').removeClass('fadeInDown').addClass('fadeInUp');
            // 选择器
            if($(evEle).val()!=''){
                year = $(evEle).attr('data-sel01');
                month = $(evEle).attr('data-sel02');
                day = $(evEle).attr('data-sel03');
                if(timeBoo){
                    hour = $(evEle).attr('data-sel04');
                    minute = $(evEle).attr('data-sel05');
                };
            };
            var scText = year; // 年
            var scText2 = month; // 月
            var scText3 = day; // 日
            var scText4 = hour; // 小时
            var scText5 = minute; // 分钟
            $('.sel-con').find('.elem').eq(0).find('.ele').each(function(){
                if($(this).text()==year){
                    $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                }
            });
            $('.sel-con').find('.elem').eq(1).find('.ele').each(function(){
                if($(this).text()==month){
                    $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                }
            });
            $('.sel-con').find('.elem').eq(2).find('.ele').each(function(){
                if($(this).text()==day){
                    $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                }
            });
            if(timeBoo){
                $('.sel-con').find('.elem').eq(3).find('.ele').each(function(){
                    if($(this).text()==hour){
                        $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                    }
                });
                $('.sel-con').find('.elem').eq(4).find('.ele').each(function(){
                    if($(this).text()==minute){
                        $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                    }
                });
            };
            $('.sel-con .scroll').eq(0).scroll(function(){
                var that = $(this);
                // 数值显示
                var scTop =  this.scrollTop + base18;
                var scNum = Math.floor(scTop/base36);
                // 类型名称
                scText = $(this).find('.ele').eq(scNum).text();
                // 停止锁定
                clearTimeout($(this).attr('timer'));
                $(this).attr('timer',setTimeout(function(){
                    that[0].scrollTop = scNum*base36;
                },100));
                $('.sel-con .table').find('.elem').eq(2).remove();
                $('.sel-con .table').find('.elem').eq(1).after(dataFrame(couDay(getMonthDays(scText,scText2))));
                // 固定在原来的值
                $('.sel-con').find('.elem').eq(2).find('.ele').each(function(){
                    if(Number($(this).text())<=Number(scText3)){
                        $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                    }
                });
                $('.sel-con .scroll').eq(2).scroll(function(){
                    var that = $(this);
                    // 数值显示
                    var scTop =  this.scrollTop + base18;
                    var scNum = Math.floor(scTop/base36);
                    // 类型名称
                    scText3 = $(this).find('.ele').eq(scNum).text();
                    // 停止锁定
                    clearTimeout($(this).attr('timer'));
                    $(this).attr('timer',setTimeout(function(){
                        that[0].scrollTop = scNum*base36;
                    },100));
                });
            });
            $('.sel-con .scroll').eq(1).scroll(function(){
                var that = $(this);
                // 数值显示
                var scTop =  this.scrollTop + base18;
                var scNum = Math.floor(scTop/base36);
                // 类型名称
                scText2 = $(this).find('.ele').eq(scNum).text();
                // 停止锁定
                clearTimeout($(this).attr('timer'));
                $(this).attr('timer',setTimeout(function(){
                    that[0].scrollTop = scNum*base36;
                },100));
                $('.sel-con .table').find('.elem').eq(2).remove();
                $('.sel-con .table').find('.elem').eq(1).after(dataFrame(couDay(getMonthDays(scText,scText2))));
                // 固定在原来的值
                $('.sel-con').find('.elem').eq(2).find('.ele').each(function(){
                    if(Number($(this).text())<=Number(scText3)){
                        $(this).parents('.scroll')[0].scrollTop = $(this).index()*base36;
                    };
                });
                $('.sel-con .scroll').eq(2).scroll(function(){
                    var that = $(this);
                    // 数值显示
                    var scTop =  this.scrollTop + base18;
                    var scNum = Math.floor(scTop/base36);
                    // 类型名称
                    scText3 = $(this).find('.ele').eq(scNum).text();
                    // 停止锁定
                    clearTimeout($(this).attr('timer'));
                    $(this).attr('timer',setTimeout(function(){
                        that[0].scrollTop = scNum*base36;
                    },100));
                });
            });
            $('.sel-con .scroll').eq(2).scroll(function(){
                var that = $(this);
                // 数值显示
                var scTop =  this.scrollTop + base18;
                var scNum = Math.floor(scTop/base36);
                // 类型名称
                scText3 = $(this).find('.ele').eq(scNum).text();
                // 停止锁定
                clearTimeout($(this).attr('timer'));
                $(this).attr('timer',setTimeout(function(){
                    that[0].scrollTop = scNum*base36;
                },100));
            });
            var time = '';
            if(timeBoo){
                $('.sel-con .scroll').scroll(function(){
                    var that = $(this);
                    // 数值显示
                    var scTop =  this.scrollTop + base18;
                    var scNum = Math.floor(scTop/base36);
                    // 类型名称
                    if($(this).parents('.elem').index()==3){
                        scText4 = $(this).find('.ele').eq(scNum).text();
                    }else if($(this).parents('.elem').index()==4){
                        scText5 = $(this).find('.ele').eq(scNum).text();
                    };
                    time = ' '+scText4+':'+scText5
                    // 停止锁定
                    clearTimeout($(this).attr('timer'));
                    $(this).attr('timer',setTimeout(function(){
                        that[0].scrollTop = scNum*base36;
                    },100));
                });
            }

            //移除之前的绑定事件
            $(".sel-box .ok").off();
            // 进行传值
            $('.sel-box .ok').click(function(){
                $(evEle).attr('data-sel01', scText);
                $(evEle).attr('data-sel02', scText2);
                $(evEle).attr('data-sel03', scText3);
                $(evEle).attr('data-sel04', scText4);
                $(evEle).attr('data-sel05', scText5);
                afterAction(scText,scText2,scText3,scText4,scText5);

                $('.sel-boxs').find('.sel-box').removeClass('fadeInUp').addClass('fadeInDown');
                setTimeout(function(){
                  $('.sel-boxs').hide();
                },300);
    
                $('.sel-boxs .bg')[0].removeEventListener('touchmove', preDef, false);
                $('.sel-boxs .btn')[0].removeEventListener('touchmove', preDef, false);
            });
        }); 
    }
})($);
