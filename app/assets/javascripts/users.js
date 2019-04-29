$(document).on('turbolinks:load',function(){
  //Ajax incremental-search 
  function appendFindUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${ user.id } data-user-name="${ user.name }">追加</div>
                </div>`
    $("#user-search-result").append(html);
  }
  var group_user_ids = [];
  $(".group-user-id").each(function(){
    group_user_id = $(this).val();
    group_user_ids.push(group_user_id);
  });
  $("#user-search-field").on("input",function(){
    var input = $("#user-search-field").val(); 
    input != 0 ?
      $.ajax({
        url: "../../users",
        type: 'GET',
        data: {keyword: input},
        dataType: 'json',
        contentType: false,
      })
      .done(function(users){
        var user_ids =[];
        for(key in users){
          user_ids.push(users[key].id);
        }
        $("#user-search-result").empty();
        users.length !== 0 ? 
          users.forEach(function(user){
            var user_id_i = user.id;
            user_id = user_id_i.toString();
            if(group_user_ids.indexOf(user_id) >=0 ){
            }else{ appendFindUser(user) };
          })
        : $("#user-search-result").append("一致するユーザーはいません")
      })
      .fail(function(){
        $("#user-search-result").empty();
        alert('nnnn');
      })
    : $("#user-search-result").empty();
  });

  //choose group-member
  function appendAddUser(user_name, user_id){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                  <p class='chat-group-user__name'>${user_name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn value="${user_id}"'>削除</div>
                </div>`
    $(".js-add-user").append(html);
  }
  //add group-member
  $(".chat-group-form__field").on("click",".user-search-add",(function(){
    var choose_user_name = $(this).attr("data-user-name");
    var choose_user_id = $(this).attr("data-user-id");
    appendAddUser(choose_user_name, choose_user_id);
    group_user_ids.push(user_id)
  }));
  //delete group-member
  $(".js-add-user").on("click",".js-remove-btn",function(e){
    console.log(e);
    var delete_user_id = $(".js-add-user").val(); 
    var user_id = $("js-remove-btn").val();
      group_user_ids = group_user_ids.filter(function(a){
        return e !== user_id;
    });
    $(".js-chat-member").remove();
    
  })
});

