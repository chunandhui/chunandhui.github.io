$(document).ready(function(){

    var page = 1;
    var i = 4;
    $("span.next").click(function() {  //绑定click事件
        var $parent = $(this).parents("div.v_show");  //根据当前单击的元素获取到父元素
        var $v_show = $parent.find("div.v_content_list");  //找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content");  //找到“视频内容展示区域”外围的div
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if ( !$v_show.is(":animated") ) {
            if (page == page_count) {
                //已经到最后一个版面了，如果再往后，必须跳转到第一个版面
                $v_show.animate({left: '0px'}, "slow");
                //通过改变left值，跳转到第一个版面
                page = 1;
            } else {
                $v_show.animate({left: '-=' + v_width}, "slow");
                page++;
            }
            $parent.find("span").eq((page - 1)).addClass("current").siblings().removeClass("current")
        }
    });


    $("span.prev").click(function() {  //绑定click事件
        var $parent = $(this).parents("div.v_show");  //根据当前单击的元素获取到父元素
        var $v_show = $parent.find("div.v_content_list");  //找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content");  //找到“视频内容展示区域”外围的div
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if ( !$v_show.is(":animated") ) {
            if (page == 1) {
                //已经到第一个版面了，如果再往后，必须跳转到最后一个版面
                $v_show.animate({left: '-=' +v_width*(page_count-1)}, "slow");
                page = page_count;
            } else {
                $v_show.animate({left: '+=' + v_width}, "slow");
                page--;
            }
            $parent.find("span").eq((page - 1)).addClass("current").siblings().removeClass("current")
        }
    });




})