;
var GLOBAL = {};
//namespace
GLOBAL.zgl = {};

//判断pc还是移动端，pc端返回true，移动端返回false
GLOBAL.zgl.isclient = function () {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};

//确认弹出层，传入一个回调函数，返回true or false赋值给回调函数的第一个参数

GLOBAL.zgl.comfirm = function (callback,id) {
    const shadow = document.createElement('div');
    const pp = document.createElement('div');
    const yes = document.createElement('a');
    const no = document.createElement('a');
    const tobeornottobe = document.createElement('p');

    $(tobeornottobe).html('是否确定?');
    $(tobeornottobe).css({
        fontSize:24+'px',
        marginBottom:20+'px',
    });


    shadow.className = 'shadow';
    $(shadow).css({
        position:'fixed',
        top:0,
        left:0,
        width:100+'vw',
        height:100+'vh',
        backgroundColor:'rgba(0,0,0,0.3)',
        'z-index':9999999999
    });

    $(pp).css({
        width:'20%',
        height:'30%',
        backgroundColor:'#ffffff',
        margin:'100px auto',
        borderRadius:15+'PX',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    });

    $(yes).html('确定');
    yes.className = 'yes';
    $(yes).attr('href','javascript:;');
    $(yes).css({
        display:'block',
        textDecoration:'none',
        backgroundColor:'green',
        height:40+'px',
        borderRadius:20+'px',
        width:'80%',
        textAlign:'center',
        fontSize:24+'px',
        lineHeight:40+"px",
        color:'#ffffff',
        marginBottom:20+'px'
    });

    $(no).html('取消');
    no.className = 'no';
    $(no).attr('href','javascript:;');
    $(no).css({
        display:'block',
        textDecoration:'none',
        backgroundColor:'red',
        height:40+'px',
        borderRadius:20+'px',
        width:'80%',
        textAlign:'center',
        fontSize:24+'px',
        lineHeight:40+"px",
        color:'#ffffff',
    });
    $('body').before(shadow);

    shadow.append(pp);
    pp.append(tobeornottobe,yes,no);

    var flag;
    $('.yes').click(function () {
        $('.shadow').remove();
        flag = true;
        callback(flag,id)
    });
    $(".no").click(function () {
        $('.shadow').remove();
        // flag =  false;
        // callback(flag,id)
    });
};