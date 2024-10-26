<template>
  <div class="feed">
    <PostInput />
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :authorImage="post.authorImage"
      :authorName="post.authorName"
      :timePosted="post.timePosted"
      :content="post.content"
      :postImage="post.postImage"
    />
  </div>
</template>

<script>
import PostInput from "../post/PostInput.vue";
import PostItem from "../post/PostItem.vue";

export default {
  components: { PostInput, PostItem },
  data() {
    return {
      posts: [
        { id: 1, authorImage: '...', authorName: 'User1', timePosted: '1 hr', content: 'Content here', postImage: '...' },
        { id: 2, authorImage: '...', authorName: 'User2', timePosted: '2 hrs', content: 'Another post', postImage: '...' },
      ],
    };
  },
};
</script>
    