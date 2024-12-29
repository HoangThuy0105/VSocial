import { createStore } from 'vuex';
// import chat from './modules/chat';
import mode from './modules/mode';
import auth from './modules/auth';
// import content from './modules/content';
// import article from './modules/article';


const store = createStore({
  modules: {
    auth,
    mode
  },
});

export default store;