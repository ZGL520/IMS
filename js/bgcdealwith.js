// 定制化样式处理

// 样式参数
var item = {
    // 所有白色字体颜色
    // w:'white',
    w:'#CBDFFF',
    // 主导航选中字体颜色
    g:'#00FFFF',
    // 主背景渐变背景以及导航选中项背景色
    bgchange:'linear-gradient(to bottom, #32477E, #111822)',
    // 主背景色
    minechange:'#111822',
    // 二级目录背景渐变
    bgchangetwo:'linear-gradient(to bottom, #455171, #232939)',
    border:'solid #00FFFF 1px',
    // 内容模块背景色
    itembgchange:'linear-gradient(to right, #6D7895, #24354D)'
};


const initcss = function (item) {
    $('.minechange').css({
        backgroundColor: item.minechange
    });
    $('.navitem').css({
        color: item.w
    });
    $('.nowhere').css({
        color: item.g,
        background:item.bgchange
    });
    $('.bgchange').css({
        background:item.bgchange
    });
    $('.bgchangetwo').css({
        background:item.bgchange
    });
    $('.whitecolor').css({
        color:item.w
    });
    $('.tophead').css({
        borderBottom:item.border
    });
    $('.gcolor').css({
        color:item.g
    });
    $('.itembgchange').css({
        background:item.bgchange
    })
};
initcss(item);