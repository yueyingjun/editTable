// 查询
$(function(){

var table=$("table");
$.ajax({
    url:"select.php",
    dataType:"json",
    success:function(data){
        for(var i=0;i<data.length;i++){
            var tr=$("<tr num='"+data[i].id+"'>");
            var td="";
            td+="<td>"+data[i].id+"</td>";
            td+="<td attr='name'>"+data[i].name+"</td>";
            td+="<td attr='sex'>"+data[i].sex+"</td>";
            td+="<td attr='age'>"+data[i].age+"</td>";
            td+="<td class='removetd'>  <button class='btn bg-danger remove'>删除</button></td>";
            tr.html(td);
            table.append(tr);

        }
    }
})

    //添加

    $(".add").click(function(){
        $.ajax({
            url:"add.php",
            success:function(data){
                if(data>0){
                    $("<tr num='"+data+"'><td>"+data+"</td><td attr='name'></td><td attr='sex'></td><td attr='age'></td><td class='removetd'><button class='btn bg-danger remove'>删除</button></td></tr>").appendTo(table);

                }
            }
        })
    })

    //删除

   $(table).delegate(".remove","click",function(){
       var that=$(this);
      $.ajax({
            url:"del.php",
            data:{id:$(this).parents("tr").attr("num")},
            success:function(data){
                if(data==="ok"){

                    that.parents("tr").remove();
                }
            }
      })
   })

    //编辑

    $("table").delegate("td:not(.removetd)","dblclick",function(){
        var td=$(this);
        var oldv=$(this).html();
        $(this).html("");

        var input=$("<input>").appendTo($(this)).focus().val(oldv);

        input.blur(function(){
            var inputObj=$(this);
            var newv=$(this).val();
            if(newv===oldv){
                $(this).remove();
                td.html(newv);

            }else{
                var id=td.parents("tr").attr("num");
                var attr=td.attr("attr");

                $.ajax({
                    url:"edit.php",
                    data:{id:id,attr:attr,val:newv},
                    success:function(data){
                        if(data=="ok"){
                            inputObj.remove();
                            td.html(newv);
                        }
                    }
                })

            }
        })


    })






})