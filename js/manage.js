function setRoute(str){
    if (str == "恒生科技园") {
        document.getElementById("areaSelect").innerHTML = str;
        document.getElementById("spilt1").innerHTML = "&nbsp;&nbsp;>&nbsp;&nbsp;";
    }
    if (str == "梦想小镇") {
        document.getElementById("areaSelect").innerHTML = str;
        document.getElementById("spilt1").innerHTML = "&nbsp;&nbsp;>&nbsp;&nbsp;";
    }
    if (str == "杭师大仓前校区") {
        document.getElementById("areaSelect").innerHTML = str;
        document.getElementById("spilt1").innerHTML = "&nbsp;&nbsp;>&nbsp;&nbsp;";
    }
    if (str == "正在处理") {
        document.getElementById("statusSelect").innerHTML = str;
        document.getElementById("spilt2").innerHTML = "&nbsp;&nbsp;>&nbsp;&nbsp;";
    }
    if (str == "已处理") {
        document.getElementById("statusSelect").innerHTML = str;
        document.getElementById("spilt2").innerHTML = "&nbsp;&nbsp;>&nbsp;&nbsp;";
    }
    if (str == "寄件") {
        document.getElementById("typeSelect").innerHTML = str;
    }
    if (str == "派件") {
        document.getElementById("typeSelect").innerHTML = str;
    }
    getAllProject();
}


function getAllProject()
{
    var area = document.getElementById("areaSelect").innerHTML;
    var status = document.getElementById("statusSelect").innerHTML;
    var type = document.getElementById("typeSelect").innerHTML;
    var countinfo_raw = document.getElementById("countinfo").innerHTML;
    var countinfo = countinfo_raw.replace(/[^0-9]+/ig,"");
    var song = document.getElementById("song");
	if(area=="")
	{
		area="梦想小镇";
	}
    if(status== "")
	{
		status="正在处理";
	}
    if(type== "")
	{
		type="全部";
	}
//    alert(area+status+type);
	$.ajax({
            type: "POST",
            data:"garden="+area+"&status="+status+"&type="+type,
			dataType: "JSON", 
            url:"http://121.40.18.253:8080/mengzhan/orderAdminDeal.jsp",
            success: function(msg) {
                var result_list=eval(msg);
//                alert(result_list[0].tel);
				var tr=document.getElementById("tr_head");
				var table=tr.parentNode.parentNode.getElementsByTagName("tbody")[0];
                if (msg.length > countinfo) {
                    song.setAttribute("src","http://zang.la/mengmengda/msg.mp3");
                }
                
				for(var i=table.rows.length-1;i>=0;i--)
				{
					table.removeChild(table.rows[i]);
				}
				var html="";
			 	if(1>0)
				{
					//msg=msg;result_list.length
					
					for(var i=0;i<result_list.length;i++)
					{// [<a href='#' id='fixed_"+result_list[i].ID+"'>固定号码</a>]
						var IsInFav=result_list[i].IsInFav;
						//result_list[i]=result_list[i].u;
						//result_list[i].IsInFav=IsInFav;

                        if (result_list[i].type == "get") {
                            var typeInfo = "寄件";
                            var remark2 = result_list[i].remark;
                        }
                        if (result_list[i].type == "send") {
                            var typeInfo = "派件";
                            var remark2 = result_list[i].remark + "<br>单号/手机号：" + result_list[i].expsingle;
                        }
                        if (result_list[i].expcompany == "kuaijie ") {
                            var expcompany2 = "快捷"
                        }else if (result_list[i].expcompany == "shentong ") {
                            var expcompany2 = "申通"
                        }else if (result_list[i].expcompany == "yuantong ") {
                            var expcompany2 = "圆通"
                        }else if (result_list[i].expcompany == "zengyi ") {
                            var expcompany2 = "增益"
                        }else if (result_list[i].expcompany == "suer ") {
                            var expcompany2 = "速尔"
                        }else if (result_list[i].expcompany == "quanfeng ") {
                            var expcompany2 = "全峰"
                        }else if (result_list[i].expcompany == "tiantian ") {
                            var expcompany2 = "天天"
                        }else {
                            var expcompany2 = "无"
                        }
						html=result_list[i].id+"\r\n"+
						result_list[i].name+"\r\n"+
						result_list[i].garden+"\r\n"+
						result_list[i].tel+"\r\n"+
                        result_list[i].site+"\r\n"+
                        remark2+"\r\n"+ 
//                        result_list[i].remark+"\r\n"+    
//                        result_list[i].expcompany+"\r\n"+
                        expcompany2+"\r\n"+
                        typeInfo+"\r\n"+
                        result_list[i].ordertime+"\r\n"+
                        result_list[i].sendtime+"\r\n"+
                        result_list[i].status+"\r\n"+
						//getProjectState(result_list[i].State)+"\r\n"+
						"<a href='javascript:void(0)' onclick='changeOrderStatus(this)'  title='"+(IsInFav?'改为已处理':'改为正在处理')+"' id='"+result_list[i].id+"'>"+(IsInFav?'-':'+')+"</a>";

						create_tr(table,"tr_"+result_list[i].id,html);

					}
					create_page_index_tr(msg,table,'getAllProject');
					add_tr_bg(table);
					
				}
				else
				{
					add_no_data_tr(table);
				}
            }
        });

}



function create_page_index_tr(msg,table,fname)
{
//    if (msg.length == 0) {
//        html = "<a href='#" + 1 + "' name='page_a'  onclick='goto(" + msg.FirstPage + "," + fname + ")'> 首页 </a> <a href='#" + (currentPageIndex == 1 ? 1 : (currentPageIndex - 1)) + "' name='page_a' id='page_go_pre' onclick='goto(" +( currentPageIndex == 1 ? 1 : (currentPageIndex - 1) )+ "," + fname + ")'> 上一页 </a> ";
//
//        var startIndex = 1;
//        if (currentPageIndex > 4) {
//            startIndex = currentPageIndex - 4;
//        }
//        
//        var endIndex = startIndex + 9;
//        
//        for (var i = startIndex; i < endIndex; i++) {
//            if (currentPageIndex == i) {
//                html += "<a href='#" + i + "' name='page_a' class='current_page' onclick='goto(" + i + "," + fname + ")'> " + i + " </a>";
//            }
//            else {
//                html += "<a href='#" + i + "' name='page_a' onclick='goto(" + i + "," + fname + ")'> " + i + " </a>";
//            }
//        }
//        html += " <a href='#" + (currentPageIndex + 1) + "' name='page_a'  id='page_go_next'  onclick='goto(" + (currentPageIndex + 1) + "," + fname + ")'> 下一页 </a> ";
//        //alert(html);
//        $("#page").html(html);
//        //$("#page_go_pre").click(function () { goto(current_page - 1, fname); });
//        //$("#page_go_next").click(function () { goto(current_page + 1, fname); });
//        
//    }
//    else {
//        html = "<span class='pageinfo'>总" + msg.length + "条"  + "</span> <a href='#" + msg.FirstPage + "' name='page_a'  onclick='goto(" + msg.FirstPage + "," + fname + ")'> 首页 </a> <a href='#" + msg.PrevPage + "' name='page_a'  onclick='goto(" + msg.PrevPage + "," + fname + ")'> 上一页 </a> ";
        html = "<span class='pageinfo' id='countinfo'>本页总记录数目为" + msg.length + "条";
//        var startIndex = 1;
//
//        if (msg.IndexPage > 5) {
//            startIndex = msg.IndexPage - 5;
//        }
//        if (msg.PageCount - msg.IndexPage < 5) {
//            startIndex = msg.PageCount - 9;
//        }
//        var endIndex = startIndex + 9;
//        if (msg.PageCount < 10) {
//            startIndex = 1;
//            endIndex = msg.PageCount;
//        }
//        for (var i = startIndex; i <= endIndex; i++) {
//            if (msg.IndexPage == i) {
//                html += "<a href='#" + i + "' name='page_a' class='current_page' onclick='goto(" + i + "," + fname + ")'> " + i + " </a>";
//            }
//            else {
//                html += "<a href='#" + i + "' name='page_a' onclick='goto(" + i + "," + fname + ")'> " + i + " </a>";
//            }
//        }
//        html += " <a href='#" + msg.NextPage + "' name='page_a' onclick='goto(" + msg.NextPage + "," + fname + ")' > 下一页 </a>  <a href='#" + msg.Lastpage + "' name='page_a'  onclick='goto(" + msg.Lastpage + "," + fname + ")'> 尾页 </a>";
        //alert(html);
        $("#page").html(html);
//    }
}

function add_tr_bg(obj)
{
    var table=obj;
   for(var i=3;i<table.rows.length;i+=2)
	{
		table.rows[i].setAttribute("class","odd");
	}
}

function add_no_data_tr(table,colspan)
{
	create_tr(table,"tr_nodata","没有数据");
}
function evalmsg(msg)
{
	if(msg=='not_login')
	{
//		alert('请先登录');
//		window.location.href="/login.html?r="+window.location.href;
	}
	else if(msg=="vcode_error")
	{
		vcode_error();
		return true;
	}


	else if(msg=="unknow_error")
	{
		alert('发生错误,请重试');
		return true;
	}


	else if(msg=="parameter_error")
	{
		alert('参数错误');
		return true;
	}


	else if(msg.indexOf("message|")==0)
	{
		alert(msg.replace("message|",""));
		return true;
	}
	return false;
}

function create_tr(table,id,html)
{
	var tr=document.createElement("tr");
	tr.id=id;
	var tds=html.split('\r\n');
	for(var i=0;i<tds.length;i++)
	{
		var td=document.createElement("td");
		if(!(tds[i].indexOf("<")>=0&&tds[i].indexOf(">")>=0)&&tds[i].length>40)
		{
			td.innerHTML="<td><span  title='"+tds[i]+"'>"+tds[i].substring(0,40)+"</span></td>";
		}
		else
		{
			td.innerHTML="<td>"+tds[i]+"</td>";	
		}
		tr.appendChild(td);
	}
	table.appendChild(tr);
	if(tds.length==1)
	{
		$("#"+id+" td").attr("colspan",table.parentNode.getElementsByTagName("thead")[0].rows[0].cells.length);
	}
}

//function goto(index,fname)
//{
//    if (currentPageIndex == index)
//        return;
//    currentPageIndex = index;
//	fname(index);
//}



//function searchKey() {
//    var keyInput = eval(document.getElementById("keyInput")).value;
//        var key = keyInput.split('>'); 
//    for (var i=0; i<key.length; i++) { 
//        var rng = document.body.createTextRange(); 
//        while (rng.findText(key[i])) 
//        rng.pasteHTML(rng.text.fontcolor('#FF9900')); 
//    }   
//}
//
//        $(function(){  
//            findText(keyInput);  
//        }); 


//          $("#mytable td").click(function() {
//                //td的id 
//                alert($(this).attr("id"));
//                //tr的id  
//                alert($(this).parent().attr("id"));
//            });





function changeOrderStatus(idClick){ 
//    var hang = this.substring(4,this.length);
    var trs=$("table#myTable tr");
//    var tds=$("table#myTable td");
    var hang=trs.index($(idClick).closest("tr"));
    var gettime =$("table#myTable tr").eq(hang).find("td").eq(8).text();
    var id =$("table#myTable tr").eq(hang).find("td").eq(0).text();
    var type =$("table#myTable tr").eq(hang).find("td").eq(7).text();
    var status = "已处理";
  
//    var gettime = $(uid).parent().prev().prev().prev().html();
//    var status = $(uid).parent().prev().html();
//    var type = $(uid).parent().prev().prev().prev().prev().html();
    var ordertime =gettime.substring(0,gettime.length-2);
    
//    alert(id+gettime+ordertime+status+type);
 
     
//            var id= "#fav_" + prompt("请输入该ID来确认操作","")

            var z = confirm("请确认👇这个订单信息——<br>"+"ID:"+id+"<br>下单时间："+ordertime+"<br>预约类型："+type+"<br>当前状态："+status+"<br>点击确认将改变状态为已预约");
        if(z){
                
            $.ajax({
type: "POST",
data:"id="+id +"&ordertime="+ordertime+"&status="+status+"&type="+type,
dataType: "JSON", 
url:"http://121.40.18.253:8080/mengzhan/statusChangeDeal.jsp",
success: function(msg) {
if (msg == "200") {
    var success_msg = "<font color=#00e079 size=15>√已修改为: 已处理状态</font>";
ui.success(success_msg,3000);
//    ui.notice("正在向服务器发送请求。。。",1000);
} else {
var fail_msg = "<font color=red size=15>修改失败，请联系柳</font>";
ui.error(fail_msg,3000);
}
}

})
            getAllProject();
        }else{
            var cancle_msg = "<font size=15>你已取消本次操作</font>";
            ui.success(cancle_msg,3000); 
            getAllProject();
        }
}
function wantRefresh () {
    var refresh_switch = document.getElementById("refresh_switch").innerHTML;
    var refreshStart_msg = "<font size=15>√刷新已开启，每30秒更新本页面订单列表</font>";
    if (refresh_switch == "刷新已关闭"){
        getAllProject();
        refresh_start = window.setInterval("refresh()",1000*30);
        document.getElementById("refresh_switch").innerHTML = "刷新已开启";
        ui.success(refreshStart_msg,3000);
    }
    
    if (refresh_switch == "刷新已开启") {
        refresh_end();
    }
    
}

function refresh_end () {
        window.clearInterval(refresh_start);
        document.getElementById("refresh_switch").innerHTML = "刷新已关闭";
}

function refresh () {
    var refresh_msg = "<font color=#00e079 size=15>√已刷新</font>";
    getAllProject();
    ui.success(refresh_msg,1000);
}



//$(document).ready(function(){
//    var trs=$("table#myTable tr");
//      $("a[name='idClick']").click(function(){
//        var index=trs.index($(this).closest("tr"));
//        alert(index);
//    });



//function password() {
//var testV = 1;
//var pass1 = prompt('请输入密码:（ 密码：meng）','');
//while (testV < 30) {
//if (!pass1) 
//history.go(-1);
//if (pass1 == "meng") {
////alert('密码正确!欢迎进入！');
//break;
//} 
//testV+=1;
//var pass1 = prompt('密码已输错'+testV+'次!请重新输入:');
//}
//if (pass1!="password" & testV ==3)               
//history.go(-1);
//return " ";
//ui.error("现在要格式化你的硬盘！！！")
//}						

