/**
 * jquery.picroll
 * 
 * $(".picroll").picroll({
 *     i: 5,                // ÿҳ��ʾ����
 *     content: ".content", // ul �ĸ�Ԫ��
 *     ul: "ul",            // ul Ԫ��
 *     li: "li",            // li Ԫ��
 *     last: ".last",       // ��һҳ��ť
 *     next: ".next",       // ��һҳ��ť
 *     speed: "slow"        // �����ٶ�
 * });
 * 
 * @link https://github.com/mingfunwong/jquery.picroll
 * @license http://opensource.org/licenses/MIT
 * @author Mingfun Wong <mingfun.wong.chn@gmail.com>
 */
$.fn.picroll = function(options) {
    var options = $.extend({
            i: 5,
            content: ".content",
            ul: "ul",
            li: "li",
            last: ".last",
            next: ".next",
            speed: "slow"
        }, options);
    this.each(function (i) {
        var $box = $(this),
            $content = $box.find(options.content),
            $li = $content.find(options.ul).find(options.li),
            width = $li.width(),
            now = 0,
            max = Math.ceil($li.length / options.i) - 1,
            animate = function () { $content.stop().animate({left: now * width * options.i * -1}, options.speed) };
        $box.on("click", options.last, function() {
                animate(-- now < 0 ? now = max : "")
            })
            .on("click", options.next, function(){
                animate(++ now > max ? now = 0 : "")
        });
    });
}
