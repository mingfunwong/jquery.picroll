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
        box: ".box.pic_roll",
        content: ".content",
        ul: "ul",
        li: "li",
        last: ".last",
        next: ".next"
    };  
    var opts = $.extend(defaults, options);
    
    var i = opts.i;
    var $box = $(opts.box);
    var $content = $box.find(opts.content);
    var $ul = $content.find(opts.ul);
    var $li = $ul.find(opts.li);
    var $last = $box.find(opts.last);
    var $next = $box.find(opts.next);
    var width = $content.parent().width();
    var li_width = $li.width();
    var now_page = 0;
    var max_page = Math.ceil($li.length / i) - 1;
    $last.on("click",
        function(){
            now_page --;
            (now_page < 0) ? now_page = max_page : "";
            $content.animate({left: "-" + now_page * li_width * i}, "slow");
       }
    )
    $next.on("click",
        function(){
            now_page ++;
            (now_page > max_page) ? now_page = 0 : "";
            $content.animate({left: "-" + now_page * li_width * i}, "slow");
       }
    )
  
    return;
}
