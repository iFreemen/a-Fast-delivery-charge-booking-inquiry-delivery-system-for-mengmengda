        function setCookie(c_name, value, expiredays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = c_name + "=" + escape(value) +
                ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
        }

        function getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=")
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1
                    c_end = document.cookie.indexOf(";", c_start)
                    if (c_end == -1) c_end = document.cookie.length
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        }

        function delCookie(name) { //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间 
            var date = new Date();
            date.setTime(date.getTime() - 10000);
            document.cookie = name + "=a; expires=" + date.toGMTString();
        }

        function showInfo() {
            var name_l = getCookie("name");
            var tel_l = getCookie("tel");
            var id_l = getCookie("id");
            var nameInfo = eval(document.getElementById("nameInfo")).value;
            var telInfo = eval(document.getElementById("telInfo")).value;
            var roomInfo = eval(document.getElementById("roomInfo")).value;
            if (id_l == null || id_l == "") {
                ui.notice("首次访问，先来补充下信息吧～");
                nameInfo = "";
                telInfo = "";
                roomInfo = "";
            } else {
                $.ajax({
                    type: "POST",
                    //                async:false,
                    data: "tel=" + tel_l,
                    dataType: "JSON",
                    url: "http://121.40.18.253:8080/mengzhan/userFindDeal.jsp",
                    success: function (data) {
                        var msg = data;
                        var companyInfo_r = msg[0].company;
                        var areaInfo_r = msg[0].garden;
                        var coinInfo_r = msg[0].gold;
                        var idInfo_r = msg[0].id;
                        var nameInfo_r = msg[0].name;
                        var sexInfo_r = msg[0].sex;
                        var roomInfo_r = msg[0].site;
                        var telInfo_r = msg[0].tel;
                        userShowToLocal(companyInfo_r, areaInfo_r, coinInfo_r, idInfo_r, nameInfo_r, sexInfo_r, roomInfo_r, telInfo_r);
                        ui.success("欢迎回来，" + nameInfo_r,1000);

                    }
                })
            }

        }

        function sendData() {
            var id_l = getCookie("id");
            //id = $.cookie("name");
            if (validate_form(this)) {
                if (id_l == null || id_l == "") {
                    verify_telExistForAdd();
                } else {
                    verify_telExistForChange();
                }
            }
        }





        function addUser() {
            var nameInfo = eval(document.getElementById("nameInfo")).value;
            var telInfo = eval(document.getElementById("telInfo")).value;
            var roomInfo = eval(document.getElementById("roomInfo")).value;
            var companyInfo = eval(document.getElementById("companyInfo")).value;
            var areaInfo = eval(document.getElementById("areaInfo")).value;
            var sexInfo = eval(document.getElementById("sexInfo")).value;
            $.ajax({
                type: "POST",
                //                async: false,
                data: "name=" + nameInfo + "&tel=" + telInfo + "&site=" + roomInfo + "&company=" + companyInfo + "&garden=" + areaInfo + "&sex=" + sexInfo,
                dataType: "JSON",
                url: "http://121.40.18.253:8080/mengzhan/register_deal.jsp",
                success: function (data) {
                    ui.success("注册成功！", 1000);
                    //var msg = jQuery.parseJSON(data);
                    //var msg = JSON.parse(data);
                    var msg = data;
                    var companyInfo_r = msg[0].company;
                    var areaInfo_r = msg[0].garden;
                    var coinInfo_r = msg[0].gold;
                    var idInfo_r = msg[0].id;
                    var nameInfo_r = msg[0].name;
                    var sexInfo_r = msg[0].sex;
                    var roomInfo_r = msg[0].site;
                    var telInfo_r = msg[0].tel;
                    userToLocalCookie(companyInfo_r, areaInfo_r, coinInfo_r, idInfo_r, nameInfo_r, sexInfo_r, roomInfo_r, telInfo_r);


                }
            })
            
        }

        function changeUserInfo() {
            var idInfo = getCookie("id");
            //var idInfo = $.cookie("name");
            var nameInfo = eval(document.getElementById("nameInfo")).value;
            var telInfo = eval(document.getElementById("telInfo")).value;
            var roomInfo = eval(document.getElementById("roomInfo")).value;
            var companyInfo = eval(document.getElementById("companyInfo")).value;
            var areaInfo = eval(document.getElementById("areaInfo")).value;
            $.ajax({
                type: "POST",
                data: "id=" + idInfo + "&name=" + nameInfo + "&tel=" + telInfo + "&site=" + roomInfo + "&company=" + companyInfo + "&garden=" + areaInfo,
                dataType: "JSON",
                url: "http://121.40.18.253:8080/mengzhan/userChangeDeal.jsp",
                success: function (data) {
                    ui.success("修改成功！", 3000);
                    userToLocalCookie2(telInfo);
                    showInfo();



                }
            })
        }


        function userToLocalCookie(companyInfo_r, areaInfo_r, coinInfo_r, idInfo_r, nameInfo_r, sexInfo_r, roomInfo_r, telInfo_r) {
            setCookie("company", companyInfo_r, 365);
            setCookie("area", areaInfo_r, 365);
            setCookie("coin", coinInfo_r, 365);
            setCookie("id", idInfo_r, 365);
            setCookie("name", nameInfo_r, 365);
            setCookie("sex", sexInfo_r, 365);
            setCookie("room", roomInfo_r, 365);
            setCookie("tel", telInfo_r, 365);
            //                    $.cookie("company", "companyInfo_r"); 
            //                    $.cookie("area", "areaInfo_r"); 
            //                    $.cookie("coin", "coinInfo_r"); 
            //                    $.cookie("id", "idInfo_r"); 
            //                    $.cookie("name", "nameInfo_r"); 
            //                    $.cookie("sex", "sexInfo_r"); 
            //                    $.cookie("room", "roomInfo_r");
            //                    $.cookie("tel", "telInfo_r");
            document.getElementById("id").innerHTML = idInfo_r;
            document.getElementById("coin").innerHTML = coinInfo_r;
            //setCookie("id",eval(document.getElementById("id")),365);
        }

        function userToLocalCookie2(telInfo) {
            setCookie("tel", telInfo, 365);
        }

        function userShowToLocal(companyInfo_r, areaInfo_r, coinInfo_r, idInfo_r, nameInfo_r, sexInfo_r, roomInfo_r, telInfo_r) {
            eval(document.getElementById("nameInfo")).value = nameInfo_r;
            //eval(document.getElementById("sexInfo")).value = sexInfo_r;
            eval(document.getElementById("telInfo")).value = telInfo_r;
            //eval(document.getElementById("areaInfo")).value = areaInfo_r;
            eval(document.getElementById("companyInfo")).value = companyInfo_r;
            eval(document.getElementById("roomInfo")).value = roomInfo_r;
            document.getElementById("id").innerHTML = idInfo_r;
            document.getElementById("coin").innerHTML = coinInfo_r;
            for (var i = 0; i < document.getElementById("sexInfo").options.length; i++) {
                if (document.getElementById("sexInfo").options[i].text == sexInfo_r) {
                    document.getElementById("sexInfo").options[i].selected = true;
                    break;
                }
            }
            for (var i = 0; i < document.getElementById("areaInfo").options.length; i++) {
                if (document.getElementById("areaInfo").options[i].text == areaInfo_r) {
                    document.getElementById("areaInfo").options[i].selected = true;
                    break;
                }
            }

        }

        function verify_telExistForAdd() {
            var telInfo = eval(document.getElementById("telInfo")).value;
            $.ajax({
                type: "POST",
                //                async:false,
                data: "tel=" + telInfo,
                dataType: "JSON",
                url: "http://121.40.18.253:8080/mengzhan/userFindDeal.jsp",
                success: function (data) {
                    var msg = data;
                    if (msg == "404"){
                        addUser();
                    } else {
                       ui.error("手机号码已注册,请直接用该号码登录！",1000);
                        telInfo = "";
                        telInfo.focus();
                    }

                }
            })
        }

        function verify_telExistForChange() {
            var telInfo = eval(document.getElementById("telInfo")).value;
            $.ajax({
                type: "POST",
                //                async:false,
                data: "tel=" + telInfo,
                dataType: "JSON",
                url: "http://121.40.18.253:8080/mengzhan/userFindDeal.jsp",
                success: function (data) {
                    var msg = data;
                    var id_l = getCookie("id");
                    if (msg=="404") {
                        changeUserInfo();
                    } else{
                    var id_r = msg[0].id;
                    var name_r =msg[0].name;
                    if (id_l !== id_r) {
                       ui.error("该手机号码已与“"+name_r+"”的账号绑定,请换填手机号码！",3000);
                        telInfo = "";
                        telInfo.focus();
                    } else {
                        changeUserInfo();
                    }
                    }
                }
            })
        }

        //        function showInfo() {
        //            name = getCookie("name");
        //            sex = getCookie("sex");
        //            tel = getCookie("tel");
        //            area = getCookie("area");
        //            room getCookie("room");
        //            if (name === null || name === "") {
        //                alert("首次访问，先来补充下信息吧～");
        //            } else {
        //                alert("欢迎回来，" + name);
        //            }
        //            document.getElementById("nameInfo").setAttribute("value",name);
        //            document.getElementById("telInfo").setAttribute("value",tel);
        //            document.getElementById("sexInfo").setAttribute("value",sex);
        //            document.getElementById("areaInfo").setAttribute("value",area);
        //            document.getElementById("roomInfo").setAttribute("value",room);
        //        }