var code;

//生成验证码
function createCode() {
    var codeLength = 4; //验证码长度
    //获取验证码 Id
    var CheckCode = document.getElementById("CheckCode");
    var selectChar = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //验证码中的字母

    var charIndex = Math.floor(Math.random() * 32); //生成随机数用于选择字母
    code = selectChar[charIndex]; //获取一个字母

    for (var i = 1; i < codeLength; i++) {
        //获取四位字母的验证码
        var charIndex = Math.floor(Math.random() * 32);
        code += selectChar[charIndex];
    }

    //若验证码长度不对再次调用生成验证码函数
    if (code.length != codeLength) {
        createCode();
    }
    document.getElementById("checkCode").value = code;
}

//登陆验证
function loginValidate() {
    //将输入框中的字符转换为大写取出，使得验证码不用考虑大小写
    var inputCode = document.getElementById("input1").value.toUpperCase();
    var usrName = document.getElementById("usr").value; //获取用户名
    var passWD = document.getElementById("pwd").value; //获取密码

    if ((usrName == "Admin") && (passWD == "JavaWeb")) {
        if (inputCode.length <= 0) {
            alert("请输入验证码！");
            return false;
        } else if (inputCode != code) {
            alert("验证码输入错误！");
            createCode(); //重新生成验证码
            document.getElementById("input1").value = ""; //清空验证码输入框
            return false;
        } else {
            alert("登陆成功！");
            jump("index.html"); //返回主页面
            return true;
        }
    } else {
        alert("用户名或密码错误，请重新输入！");
        jump("login.html"); //重新刷新页面
        return false;
    }
}

//页面跳转
function jump(address) {
    if (address == null) {
        window.location.href = "login.html";
    } else {
        window.location.href = address;
    }
}