import { BaseAPI } from './baseAPI';
import { HTTPRequests, OptionsType } from './HTTPRequests';

const chat = new HTTPRequests('/chats');

class ChatAPI extends BaseAPI {
  createChat(options: OptionsType): Promise<any> {
    return chat.post('', options);
  }

  getChats(options: OptionsType): Promise<any> {
    return chat.get('', options);
  }

  getChatToken(chatId: string, options: OptionsType): Promise<any> {
    return chat.post(`/token/${chatId}`, options);
  }
}

export default new ChatAPI();
