import { createStore } from 'vuex';
// import chat from './modules/chat';
import mode from './modules/mode';
import auth from './modules/auth';
import post from './modules/posts';
import user from './modules/user';
// import content from './modules/content';
// import article from './modules/article';


const store = createStore({
  modules: {
    auth,
    mode,
    post,
    user
  },
});

export default store;