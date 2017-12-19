
var initclass = 'nowhere';

// 导航栏切换背景变化
const initbgc = function () {
    $(".navitem").css({
        background:item.minechange,
        color:item.w
    });
    $('.nowhere').css({
        background:item.bgchange,
        color:item.g
    });
};


// 导航栏切换
const bgc = function (mark) {
    $('.navitem').click(function () {
        $('.navitem').removeClass(mark);
        $(this).addClass(mark);
        initbgc();
    });

};
bgc(initclass);





