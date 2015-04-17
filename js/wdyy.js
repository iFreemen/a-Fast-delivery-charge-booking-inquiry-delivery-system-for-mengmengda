function getZZYYOrder() {
    var id_l = getCookie("id");
    $.ajax({
        type: "POST",
        //                async:false,
        data: "id=" + id_l +"&status="+"正在处理",
        dataType: "JSON",
        url: "http://121.40.18.253:8080/mengzhan/orderCheckDeal.jsp",
        success: function (data) {
            var msg = data;
            //var type = msg[0].type;
            for(var i=0;i<msg.length;i++) {
                var j=i+1;
//                var newBlock =$('#oldBlock').clone();
//                $(newBlock).attr("id")=$('#oldBlock').attr("id")+i;
//                $("#contentBlock").append(newBlock);
               
                var obj = $("#block_0").clone(true).attr("id",'block_'+j).insertAfter($("#block_0"));
                var block = "#" + "block_" + j;
                $(block).find("span").html(msg[i].ordertime);
                //$(block).find("li").eq(0).html(msg[i].type);
//                $(block).find("li").eq(1).html(msg[i].expcompany);
                $(block).find("li").eq(2).html(msg[i].sendtime);
                $(block).find("li").eq(3).html("消费萌币：5");
                $(block).find("li").eq(4).html("备注：" + msg[i].remark);
            
            if (msg[i].type == "get") {
                $(block).find("li").eq(0).html("预约类型：寄件");

                if (msg[i].expcompany === "kuaijie ") {
                    $(block).find("li").eq(1).html("快递公司：快捷");
                } else if (msg[i].expcompany == "shentong ") {
                    $(block).find("li").eq(1).html("快递公司：申通");
                } else if (msg[i].expcompany == "yuantong ") {
                    $(block).find("li").eq(1).html("快递公司：圆通");
                } else if (msg[i].expcompany == "zengyi ") {
                    $(block).find("li").eq(1).html("快递公司：增益");
                } else if (msg[i].expcompany == "suer ") {
                    $(block).find("li").eq(1).html("快递公司：速尔");
                } else if (msg[i].expcompany == "quanfeng ") {
                    $(block).find("li").eq(1).html("快递公司：全峰");
                }else if (msg[i].expcompany == "tiantian ") {
                    $(block).find("li").eq(1).html("快递公司：天天");
                } else {
                    $(block).find("li").eq(1).html("快递公司:未知");
                }
                
            }
            if (msg[i].type == "send") {
                $(block).find("li").eq(0).html("预约类型：派件");
                $(block).find("li").eq(1).html("快递单号："+msg[i].expsingle);
            }
                
                


            }
             $("#block_0").hide();
            
            

            
  
//            if (msg[0].type == "get") {
//                var type = "预约类型：寄件";
//            }
//            if (msg[0].expcompany === "kuaijie ") {
//                var expcompany = "快递公司：快捷";
//            } else if (msg[0].expcompany == "shentong ") {
//                var expcompany = "快递公司：申通";
//            } else if (msg[0].expcompany == "yuantong ") {
//                var expcompany = "快递公司：圆通";
//            } else if (msg[0].expcompany == "zengyi ") {
//                var expcompany = "快递公司：增益";
//            } else if (msg[0].expcompany == "suer ") {
//                var expcompany = "快递公司：速尔";
//            } else if (msg[0].expcompany == "quanfeng ") {
//                var expcompany = "快递公司：全峰";
//            }else if (msg[0].expcompany == "tiantian ") {
//                var expcompany = "快递公司：天天";
//            } else {
//                var expcompany = "快递公司:未知"
//            }
//            OrderShowToLocal(ordertime, type, expcompany, sendtime, remark);
            
        }
    })
    getYYYOrder();
}


function getYYYOrder() {
    var id_l = getCookie("id");
    $.ajax({
        type: "POST",
        //                async:false,
        data: "id=" + id_l +"&status="+"已处理",
        dataType: "JSON",
        url: "http://121.40.18.253:8080/mengzhan/orderCheckDeal.jsp",
        success: function (data) {
            var msg = data;
            //var type = msg[0].type;
            for(var i=0;i<msg.length;i++) {
                var j=i+1;
//                var newBlock =$('#oldBlock').clone();
//                $(newBlock).attr("id")=$('#oldBlock').attr("id")+i;
//                $("#contentBlock").append(newBlock);
               
                var obj = $("#quote_0").clone(true).attr("id",'quote_'+j).insertAfter($("#quote_0"));
                var quote = "#" + "quote_" + j;
                $(quote).find("span").html(msg[i].ordertime);
                //$(block).find("li").eq(0).html(msg[i].type);
//                $(block).find("li").eq(1).html(msg[i].expcompany);
                $(quote).find("li").eq(2).html(msg[i].sendtime);
                $(quote).find("li").eq(3).html("消费萌币：5");
                $(quote).find("li").eq(4).html("备注：" + msg[i].remark);
            
            if (msg[i].type == "get") {
                $(quote).find("li").eq(0).html("预约类型：寄件");

                if (msg[i].expcompany === "kuaijie ") {
                    $(quote).find("li").eq(1).html("快递公司：快捷");
                } else if (msg[i].expcompany == "shentong ") {
                    $(quote).find("li").eq(1).html("快递公司：申通");
                } else if (msg[i].expcompany == "yuantong ") {
                    $(quote).find("li").eq(1).html("快递公司：圆通");
                } else if (msg[i].expcompany == "zengyi ") {
                    $(quote).find("li").eq(1).html("快递公司：增益");
                } else if (msg[i].expcompany == "suer ") {
                    $(quote).find("li").eq(1).html("快递公司：速尔");
                } else if (msg[i].expcompany == "quanfeng ") {
                    $(quote).find("li").eq(1).html("快递公司：全峰");
                }else if (msg[i].expcompany == "tiantian ") {
                    $(quote).find("li").eq(1).html("快递公司：天天");
                } else {
                    $(quote).find("li").eq(1).html("快递公司:未知");
                }
                
            }
            if (msg[i].type == "send") {
                $(quote).find("li").eq(0).html("预约类型：派件");
                $(quote).find("li").eq(1).html("快递单号："+msg[i].expsingle);
            }
                
                


            }
             $("#quote_0").hide();
            
            

            
  
//            if (msg[0].type == "get") {
//                var type = "预约类型：寄件";
//            }
//            if (msg[0].expcompany === "kuaijie ") {
//                var expcompany = "快递公司：快捷";
//            } else if (msg[0].expcompany == "shentong ") {
//                var expcompany = "快递公司：申通";
//            } else if (msg[0].expcompany == "yuantong ") {
//                var expcompany = "快递公司：圆通";
//            } else if (msg[0].expcompany == "zengyi ") {
//                var expcompany = "快递公司：增益";
//            } else if (msg[0].expcompany == "suer ") {
//                var expcompany = "快递公司：速尔";
//            } else if (msg[0].expcompany == "quanfeng ") {
//                var expcompany = "快递公司：全峰";
//            }else if (msg[0].expcompany == "tiantian ") {
//                var expcompany = "快递公司：天天";
//            } else {
//                var expcompany = "快递公司:未知"
//            }
//            OrderShowToLocal(ordertime, type, expcompany, sendtime, remark);
            
        }
    })
}

function OrderShowToLocal(ordertime, type, expcompany, sendtime, remark) {
    document.getElementById("xdsj").innerHTML = ordertime;
    document.getElementById("typeInfo").innerHTML = type;
    document.getElementById("exp_companyInfo").innerHTML = expcompany;
    document.getElementById("sendTimeInfo").innerHTML = "预约时间："+sendtime;
    document.getElementById("remarkInfo").innerHTML = "备注："+remark;

}

function OrderShowToLocal2(j){

}

function cloneBlock () {
    
//

}