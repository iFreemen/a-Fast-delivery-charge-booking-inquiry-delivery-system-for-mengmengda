     
     function update_name() {
         var value = prompt("更正名字为:",document.getElementById("nameInfo").innerHTML);
         if (value === null) {
             alert("你取消了本次联系人更改操作！");
         } else if (value === "") {
             alert("你一定要输入一个名字才可以！");
             update_info();
         } else {
             document.getElementById("nameInfo").innerHTML=value;
             alert("已成功修改名字为："+ value);
             update_tel();
         }
     }
     function update_tel() {
         var value = prompt("更正电话为:",document.getElementById("telInfo").innerHTML);
         if (value === null) {
             alert("你取消了本次联系方式更改操作！");
         } else if (value === "") {
             alert("你一定要输入一个手机或座机号码才可以！");
             update_tel();
         } else {
             document.getElementById("telInfo").innerHTML=value;
             alert("已成功修改电话为："+ value);
             update_address();
         }
     }
     function update_address() {
         var value = prompt("更正地址为:",document.getElementById("addressInfo").innerHTML);
         if (value === null) {
             alert("你取消了本次地址信息更改操作！");
         } else if (value === "") {
             alert("你一定要输入一个地址才可以！");
             update_address();
         } else {
             document.getElementById("addressInfo").innerHTML=value;
             alert("已成功修改地址为："+ value);
         }
     }   



