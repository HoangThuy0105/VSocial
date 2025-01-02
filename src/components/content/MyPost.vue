<template>
    <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']" style="background-color: #f8f9fa;">
        <div v-for="(post, index) in posts" :key="index" :class="[
            isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark',
            'card mt-4  mb-3',
        ]">
            <div class="card-header d-flex align-items-center">
                <div v-if="post.createdBy.avatar">
                    <img :src="post.createdBy.avatar" class="rounded-circle me-2"
                        style="width: 50px; height: 50px; cursor: pointer" alt="User Avatar" />
                </div>
                <div v-else>
                    <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_ohc=t7g1DMhtyCMQ7kNvgG88pcZ&_nc_oc=Adgst3fzzSYsDBya6g65p-yi7FLQlTw8OL6ByUrJVcE-WOhCJ23RJuXkGzy1t8bOpKY&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=ANkKsSDetUu7rninnf3ogbA&oh=00_AYAB9OH5ey6qZtqFjUacugL-ibFufG5EV1bmudnpttrZEg&oe=679DA8FA"
                        class="rounded-circle me-2" style="width: 50px; height: 50px; cursor: pointer"
                        alt="User Avatar" />
                </div>
                <div class="me-auto">
                    <h6 class="mb-0 cursor-pointer">{{ post.createdBy.username }}</h6>
                    <small class="text-muted">{{ formatDateTime(post.createdAt) }}</small>
                </div>

                <!-- Menu dropdown -->
                <div class="dropdown">
                    <button class="btn btn-link p-0" @click="toggleOptions(index)">
                        <i class="fa-solid fa-ellipsis text-secondary"></i>
                    </button>
                </div>
            </div>

            <!-- Content -->
            <div class="card-body">
                <p class="card-text">{{ post.content }}</p>

                <!-- Image Display Logic -->
                <div v-if="post.postImages.length === 1" class="image-container-single">
                    <img :src="post.postImages[0]" alt="Content Image" class="content-image" />
                </div>

                <div v-else-if="post.postImages.length === 4" class="image-container-grid">
                    <img v-for="(image, imgIndex) in post.postImages" :key="imgIndex" :src="image" alt="Content Image"
                        class="content-image" />
                </div>

                <div v-else class="image-container-gallery">
                    <img v-for="(image, imgIndex) in post.postImages.slice(0, 3)" :key="imgIndex" :src="image"
                        alt="Content Image" class="content-image cursor-pointer" />
                    <div v-if="post.postImages.length > 3" class="more-images-overlay cursor-pointer">
                        +{{ post.postImages.length - 3 }}
                    </div>
                </div>
            </div>

            <!-- Reactions -->
            <div class="card-footer d-flex justify-content-between align-items-center">
                <div>
                    <button class="btn btn-link me-2 p-0 like-button" @click="toggleLike(post)"
                        :class="{ liked: post.liked }">
                        <i class="fas fa-thumbs-up me-1"></i>
                    </button>
                    <!-- <small class="text-muted">{{ post.likes }}K</small> -->
                </div>
                <div>
                    <span class="me-3 cursor-pointer" @click="openCommentModal(post)">
                        <i class="fas fa-comment"></i>
                        <!-- {{ post.comments.length }} Comment -->
                    </span>

                    <span class="cursor-pointer" @click="openSharePost">
                        <i class="fas fa-share"></i>
                        <!-- {{ post.shares }} Share -->
                    </span>

                    <!-- Share Post Component -->
                    <PostShare v-if="isSharePostVisible" @close="closeSharePost" />
                </div>
            </div>
            <PostComment v-if="isModalOpen" :isVisible="isModalOpen" @close="isModalOpen = false" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import PostShare from "../post/PostShare.vue";
import PostComment from "../post/PostComment.vue";
import { getMyPost } from "@/service/ArticleService"
import { formatDateTime } from '@/utils/index';


export default {
    name: "UserPost",
    components: {
        PostShare,
        PostComment,
    },
    data() {
        return {
            isModalOpen: false,
            posts: [],
            isSharePostVisible: false,
            isDropdownVisible: false,
        };
    },

    computed: {
        ...mapState("mode", {
            isDarkMode: (state) => state.darkMode,
        }),
        ...mapGetters("auth", ["getAccountId"]),
    },

    methods: {
        ...mapActions('post', ['selectedPost']),
        formatDateTime,
        async getPost() {
            const accountId = this.getAccountId
            const response = await getMyPost(accountId);
            this.posts = response.data.result
        },
        toggleOptions(index) {
            this.posts.forEach((post, i) => {
                post.showOptions = i === index ? !post.showOptions : false;
            });
        },
        toggleDropdown(event) {
            event.stopPropagation();
            this.isDropdownVisible = !this.isDropdownVisible;
        },
        closeDropdown(event) {
            const dropdownMenu = this.$refs.dropdownMenu
                ? this.$refs.dropdownMenu.$el
                : null;
            if (dropdownMenu && !dropdownMenu.contains(event.target)) {
                this.isDropdownVisible = false;
            }
        },

        reportPost(post) {
            console.log("Report post:", post);
            this.closeDropdowns();
        },
        hidePost(post) {
            console.log("Hide post:", post);
            this.closeDropdowns();
        },
        toggleSave(index) {
            const post = this.posts[index];
            post.saved = !post.saved;
        },
        toggleLike(post) {
            post.liked = !post.liked;
            post.likes = post.liked
                ? (parseFloat(post.likes) + 0.1).toFixed(1)
                : (parseFloat(post.likes) - 0.1).toFixed(1);

            if (post.likes < 0) {
                post.likes = "0.0";
            }
        },
        openCommentModal(post) {
            this.selectedPost(post);
            this.isModalOpen = true;
        },
        openSharePost() {
            this.isSharePostVisible = true;
            console.log("Share Post opened", this.isSharePostVisible);
        },

        closeSharePost() {
            this.isSharePostVisible = false;
        },
        toggleDarkMode() {
            this.$store.dispatch("toggleDarkMode");
        },
        close() {
            this.$emit("close");
        },
    },
    mounted() {
        this.getPost();
        document.addEventListener("click", this.closeDropdown);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.closeDropdown);
    },
};
</script>

<style src="@/assets/css/style.css"></style>