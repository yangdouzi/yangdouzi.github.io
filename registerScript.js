var code; //全局变量——验证码

//生成验证码
function createCode() {
    var codeLength = 4; //验证码长度
    //获取验证码 Id
    var rCheckCode = document.getElementById("rCheckCode");
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
    document.getElementById("rCheckCode").value = code;
}


//注册验证
function registerValidate() {
    //将输入框中的字符转换为大写取出，使得验证码不用考虑大小写
    var inputCode = document.getElementById("rInputCode").value.toUpperCase();
    var usrName = document.getElementById("rUsr").value; //获取用户名
    var passWD1 = document.getElementById("rPwd1").value; //获取密码
    var passWD2 = document.getElementById("rPwd2").value; //获取确认密码

    //先验证验证码
    if (inputCode.length <= 0) {
        alert("请输入验证码！");
        document.getElementById("rInputCode").focus(); //光标定位至验证码输入框
        return false;
    } else if (inputCode != code) {
        alert("验证码输入错误！");
        createCode(); //重新生成验证码
        document.getElementById("rInputCode").value = ""; //清空验证码输入框
        document.getElementById("rInputCode").focus(); //光标定位至验证码输入框
        return false;
    } else if (usrName.length <= 0) {
        alert("用户名不能为空！");
        createCode(); //重新生成验证码
        document.getElementById("rInputCode").value = ""; //清空验证码输入框
        document.getElementById("rUsr").focus(); //光标定位至用户名输入框
        return false;
    } else if (passWD1.length <= 0) {
        alert("密码不能为空！");
        createCode(); //重新生成验证码
        document.getElementById("rInputCode").value = ""; //清空验证码输入框
        document.getElementById("rPwd1").focus(); //光标定位至密码输入框
        return false;
    } else if (passWD2.length <= 0) {
        alert(" 确认密码不能为空！");
        createCode(); //重新生成验证码
        document.getElementById("rInputCode").value = ""; //清空验证码输入框
        document.getElementById("rPwd1").focus(); //光标定位至密码输入框
        return false;
    } else if (usrName == "Admin") { //判断输入的用户名是否与已有的用户名重复（“Admin”）
        alert("很抱歉，该用户名已注册，请更换注册用户名!");
        createCode(); //重新生成验证码
        document.getElementById("rInputCode").value = ""; //清空验证码输入框
        document.getElementById("rUsr").focus(); //光标定位至用户名输入框
    } else if (passWD2 != passWD1) {
        alert("输入的密码不一致，请重新输入！");
        //清空密码框
        document.getElementById("rPwd1").value = "";
        document.getElementById("rPwd2").value = "";
        createCode(); //重新生成验证码
        document.getElementById("rInputCode").value = ""; //清空验证码输入框
        document.getElementById("rPwd1").focus(); //光标定位至用户名输入框
        return false;
    } else {
        alert("恭喜" + usrName + "注册成功！");
        jump("index.html"); //返回主页面
        return true;
    }

}


//页面跳转
function jump(address) {
    if (address == null) {
        window.location.href = "index.html";
    } else {
        window.location.href = address;
    }
}
