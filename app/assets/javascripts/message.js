$(function(){ 
  var buildHTML = function(message) {
    console.log(message);
    if (message.content && message.image) {
      //data-idが反映されるようにしている
      // 最初と最後のバッククウォーテーション以外を除きましょう！
      var html = `<div class="message" data-id="${message.id}" >
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
          <img src="${message.image}" class="lower-message__image" >
        </div>
      </div>`
    } else if (message.content) {
      //同様に、data-idが反映されるようにしている
      var html = `<div class="message" data-id= "${message.id}" >
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    } else if (message.image) {
      //同様に、data-idが反映されるようにしている
      var html = `<div class="message" data-id= "${message.id}">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <img src=" ${message.image} " class="lower-message__image" >
                    </div>
                  </div>`
    };
    return html;
  };

$('.new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);  
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
    $('form')[0].reset();
  })
   .fail(function(){
     alert('error');
   });
   return false;
 });


 var reloadMessages = function() {
  //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
  if(window.location.href.match(/\/groups\/\d+\/messages/))
  last_message_id = $('.message').last().data('id')
  $.ajax({
    //ルーティングで設定した通りのURLを指定
    url: "api/messages",
    //ルーティングで設定した通りhttpメソッドをgetに指定
    type: 'get',
    dataType: 'json',
    //dataオプションでリクエストに値を含める
    data: {id: last_message_id}
  })
  .done(function(messages) {
    //追加するHTMLの入れ物を作る
    var insertHTML = '';
    //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
    $.each(messages, function(i, message) {
      insertHTML += buildHTML(message)
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    })
  .fail(function() {
    alert('error');
  });
};
setInterval(reloadMessages, 7000);
});