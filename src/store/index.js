import { createStore } from 'vuex';
import chat from './modules/chat';
import mode from './modules/mode';
import auth from './modules/auth';


export default createStore({
  modules: {
    chat, 
    mode,
    auth,
  },
});