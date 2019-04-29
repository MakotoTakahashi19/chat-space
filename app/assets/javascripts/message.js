$(document).on('turbolinks:load',function(){
  // Ajax messages
  function buildHTML(message){
    var html = `<div class="message">
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
});
