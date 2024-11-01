import { createStore } from 'vuex';
import chat from './modules/chat';
import mode from './modules/mode';


export default createStore({
  modules: {
    chat, 
    mode,
  },
});