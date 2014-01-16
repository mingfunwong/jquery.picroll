/**
 * jquery.picroll
 * 
 * @link https://github.com/mingfunwong/jquery.picroll
 * @license http://opensource.org/licenses/MIT
 * @author Mingfun Wong <mingfun.wong.chn@gmail.com>
 */
$.picroll = function(options) {
    var defaults = {
            i: 5,
            box: ".pic_roll",
            content: ".content",
            ul: "ul",
            li: "li",
            last: ".last",
            next: ".next"
        },
        opts = $.extend(defaults, options);
    
    $(opts.box).each(function (i){
        var i = opts.i,
            $box = $(this),
            $content = $box.find(opts.content),
            $ul = $content.find(opts.ul),
            $li = $ul.find(opts.li),
            width = $content.parent().width(),
            li_width = $li.width(),
            now_page = 0,
            max_page = Math.ceil($li.length / i) - 1;
        $box.on("click", opts.last, function(){
                (--now_page < 0) ? now_page = max_page : "";
                $content.stop().animate({left: "-" + now_page * li_width * i}, "slow");
            })
            .on("click", opts.next, function(){
                (++ now_page > max_page) ? now_page = 0 : "";
                $content.stop().animate({left: "-" + now_page * li_width * i}, "slow");
        });
    });
    return;
}
