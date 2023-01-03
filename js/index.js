let template = `
<div class="card text-bg-light mb-3 align-self-end">
  <div class="card-header">
    Автор
  </div>
  <div class="card-body">
    <p class="card-text">
      Сообщение
    </p>
  </div>
</div>
`;


let usernameInput = document.querySelector(`#username`);
let messageInput = document.querySelector(`#message`);
let messagesNode = document.querySelector(`#messages`);
let sendButton = document.querySelector(`#send`);
let errorNode = document.querySelector(`#error`);
sendButton.addEventListener(`click`, function(){
let newMessage = `
  <div class="card text-bg-light mb-3 align-self-end">
    <div class="card-header">
      ${usernameInput.value}
    </div>
    <div class="card-body">
      <p class="card-text">
        ${messageInput.value}
      </p>
    </div>
  </div>
`;
messagesNode.innerHTML += newMessage;
messageInput.value = ``;
});


