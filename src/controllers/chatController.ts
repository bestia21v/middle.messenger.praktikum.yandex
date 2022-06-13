import { OptionsType } from '../services/HTTPRequests';
import chatAPI from '../services/chatAPI';
import store from '../utils/store';

class ChatController {
  async createChat(options: OptionsType) {
    const chat = await chatAPI.createChat(options);
    return chat;
  }

  async getChats(options: OptionsType) {
    try {
      const result = await chatAPI.getChats(options);
      const { response, status } = result;
      if (status === 200) {
        store.set('chats', response);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getChatToken(chatId: string, options: OptionsType) {
    const result = await chatAPI.getChatToken(chatId, options);
    const { response } = result;
    store.set('token', response.token);
  }

  async addUserToChat(options: OptionsType) {
    await chatAPI.addUserToChat(options);
  }
}

export default new ChatController();
