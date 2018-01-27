
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



const tits = function (tit) {
    const span = document.createElement('span');
    span.className = 'thisisspan';
    const getnum = function(e) {
        e = e || window.event;
        var x = e.clientX || (e.clientX +
            (document.documentElement.scrollLeft
                || document.body.scrollLeft));
        var y= e.clientY || (e.clientY +
            (document.documentElement.scrollTop
                || document.body.scrollTop));
        return {'x':x,'y':y};
    };

    $(span).css({
        display:'block',
        position:'fixed',
        top:getnum().y-30+'px',
        left:getnum().x+20+'px',
        backgroundColor:'white',
        fontSize:'14px',
        color:'black',
        textAlign:'center',
        padding:'3px 5px'
    });
    $(span).html(tit);
    $(body).append(span);
};








