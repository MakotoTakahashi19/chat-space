$(document).on('turbolinks:load',function(){
  $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, "fast");   

  // Ajax Send message
  function buildHTML(message){
    var html = `<div class="message" data-id=${ message.id }>
                  <div class="upper-message" id="post-scroll">
                    <div class="message__user">
                      ${ message.user_name }
                    </div>
                    <div class="message__date">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lower-message">
                    <div class="message__text">
                      ${ message.content}
                    </div>
                    <div class= "lower-message__image">
                      ${ message.image = message.image || "" }
                    </div>
                  </div>
                </div>`
                return html;
  }
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, "fast");
    })
    .fail(function(){
      alert('文字もしくは画像を送信してください');
    })
  });

  // Ajax Automatic updating messages
  var reloadMessages = function(){
    last_message_id = $(".message:last").data('id');
    $.ajax({
      url: '/groups/:group_id/api/messages',
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      $.each(messages, function(i, message){
        var html = buildHTML(message);
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, "fast");   
      });
    })
    .fail(function(){
      alert("自動更新に失敗しました");
    });
  };
  setInterval(reloadMessages, 5000);
});
