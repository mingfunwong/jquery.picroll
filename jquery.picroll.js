/**
 * jquery.picroll
 * 
 * $(".picroll").picroll({
 *     ul: "ul",            // ul 元素
 *     li: "li",            // li 元素
 *     last: ".last",       // 上一页按钮
 *     next: ".next",       // 下一页按钮
 *     speed: "normal",     // 滚动速度
 *     mode: "x",           // 滚动模式 x/y
 *     ready: $.noop,       // 载入后执行
 *     before: $.noop,      // 滚动前执行
 *     after: $.noop        // 滚动后执行
 * });
 * 
 * @link https://github.com/mingfunwong/jquery.picroll
 * @license http://opensource.org/licenses/MIT
 * @author Mingfun Wong <mingfun.wong.chn@gmail.com>
 */
$.fn.picroll = function(options) {
    var options = $.extend({
            ul: "ul",
            li: "li",
            last: ".last",
            next: ".next",
            speed: "normal",
            mode: "x",
            ready: $.noop,
            before: $.noop,
            after: $.noop
        }, options);
    this.each(function (i) {
        var $box = $(this),
            $ul = $box.find(options.ul),
            $li = $ul.find(options.li),
            width, height, number, max,
            now = 0,
            animate = function () {
                options.before($box, {now: now, width: width, height: height, max: max});
                reset();
                if (options.mode === "x")
                    $ul.stop().animate({left: now * width * number * -1}, options.speed, function(){ options.after($box, {now: now, width: width, height: height, max: max}) });
                else
                    $ul.stop().animate({top: now * height * number * -1}, options.speed, function(){ options.after($box, {now: now, width: width, height: height, max: max}) });
            },
            reset = function () {
                width = $li.width();
                height = $li.height();
                if (options.mode === "x")
                    number = parseInt($box.width() / width) < 1 ? 1 : parseInt($box.width() / width);
                else 
                    number = parseInt($box.height() / height) < 1 ? 1 : parseInt($box.height() / height);
                max = Math.ceil($li.length / number) - 1;
            };
        reset();
        options.ready($box, {now: now, width: width, height: height, max: max});
        $box.on("click", options.last, function() {
                animate(-- now < 0 ? now = max : "")
            })
            .on("click", options.next, function(){
                animate(++ now > max ? now = 0 : "")
            })
            .on("select", function(event, i){
                animate(now = i)
        });
    });
}
