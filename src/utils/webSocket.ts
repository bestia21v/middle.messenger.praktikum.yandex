import store from './store';

export class Socket {
  socket: WebSocket;

  messages: string[];

  constructor(id: string, chatId: string, token: string) {
    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${id}/${chatId}/${token}`);

    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      store.set('messages', []);
      this.socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    });

    this.socket.addEventListener('message', (event) => {
      const state = store.getState();
      const { messages } = state;
      const isExist = Array.isArray(messages)
          && messages.length > 0;

      const messageParsed = JSON.parse(event.data);
      const isArray = Array.isArray(messageParsed);
      const nextMessages = isArray ? messageParsed : [messageParsed];
      store.set('messages', isExist ? [...nextMessages, ...messages] : nextMessages);

      const contentBody = document.querySelector('.content__body');
      if (contentBody) {
        contentBody.scrollTo(0, contentBody.scrollHeight);
      }
    });
  }

  sendData(text: string) {
    this.socket.send(JSON.stringify({
      content: text,
      type: 'message',
    }));
  }
}
