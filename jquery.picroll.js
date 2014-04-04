/**
 * jquery.picroll
 * 
 * $(".picroll").picroll({
 *     i: 5,                // ÿҳ��ʾ����
 *     ul: "ul",            // ul Ԫ��
 *     li: "li",            // li Ԫ��
 *     last: ".last",       // ��һҳ��ť
 *     next: ".next",       // ��һҳ��ť
 *     speed: "slow"        // �����ٶ�
 *     before: $.noop,      // ����ǰִ��
 *     after: $.noop        // ������ִ��
 * });
 * 
 * @link https://github.com/mingfunwong/jquery.picroll
 * @license http://opensource.org/licenses/MIT
 * @author Mingfun Wong <mingfun.wong.chn@gmail.com>
 */
$.fn.picroll = function(options) {
    var options = $.extend({
            i: 5,
            ul: "ul",
            li: "li",
            last: ".last",
            next: ".next",
            speed: "slow",
            before: $.noop,
            after: $.noop
        }, options);
    this.each(function (i) {
        var $box = $(this),
            $ul = $box.find(options.ul),
            $li = $ul.find(options.li),
            width = $li.width(),
            now = 0,
            max = Math.ceil($li.length / options.i) - 1,
            animate = function () {options.before(now); width = $li.width(); $ul.stop().animate({left: now * width * options.i * -1}, options.speed, function(){ options.after(now) }); };
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
