
var initclass = 'owhere';

// 导航栏切换背景变化
const initbgc = function () {
    $(".navitem").css({
        background:item.minechange,
        color:item.w
    });
    $('.'+initclass).css({
        background:item.bgchange,
        color:item.g
    });
};

const whoshow = function (data) {
    switch (data){
        case 'home':
            return 'homenav';
        case  'rich':
            return 'richmanagenav';
        case  'bussiness':
            return 'bussiness';
        case  'store':
            return 'store';
        case  'info':
            return 'info';
        case  'help':
            return 'help';
        default:
            return  'home';
    }
};
// 导航栏切换
const bgc = function (mark) {
    $('.navitem').mouseover(function () {
        $('.navitem').removeClass(mark);
        $(this).addClass(mark);
        initbgc();
        const da = whoshow(this.id);
        $('.contentnavitem').hide();
        $('.'+da).show();
    });

};
bgc(initclass);









