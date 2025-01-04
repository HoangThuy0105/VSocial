<template>
    <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
        <AppHeader :isDarkMode="isDarkMode" />
        <AppSidebar :isDarkMode="isDarkMode" />

        <div class="main-content" style="height: 100vh;">
            <div class="search-main p-5">
                <div class="result-box">
                    <h5>Mọi người</h5>
                    <div v-for="(item, index) in data" :key="index" style="margin-top: 20px;">
                        <div class="result-item">
                            <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_ohc=t7g1DMhtyCMQ7kNvgG88pcZ&_nc_oc=Adgst3fzzSYsDBya6g65p-yi7FLQlTw8OL6ByUrJVcE-WOhCJ23RJuXkGzy1t8bOpKY&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=ANkKsSDetUu7rninnf3ogbA&oh=00_AYAB9OH5ey6qZtqFjUacugL-ibFufG5EV1bmudnpttrZEg&oe=679DA8FA"
                                alt="avatar" class="avatar">
                            <div class="result-info">
                                <p style="margin: 0px; font-weight: 500;">{{ item.username }}</p>
                                <span style="color: gray; font-size: 16px;">{{ item.email }}</span>
                            </div>
                            <div>
                                <button @click="handleAddFriend({ receiverId: item.accountId, status: item.status })"
                                    :class="[
                                        item.status == 'FRIEND'
                                            ? 'disabled-button'
                                            : item.status == 'REQUEST' ? 'delete-button' : 'add-button'
                                    ]" :disabled="item.status == 'FRIEND'">
                                    {{ item.status == "NONE" ? 'Thêm bạn bè' : item.status == "REQUEST" ? "Hủy lời mời"
                                        :
                                        item.status == "FRIEND" ? "Bạn bè" : "Đã chặn" }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "../components/layout/AppHeader.vue";
import AppSidebar from "../components/layout/AppSidebar.vue";
import { searchUsers, addFriend, unFriend } from "@/service/userService"
import { mapState, mapGetters } from "vuex";

export default {
    name: 'SearchResultView',
    data() {
        return {
            data: [],
            keyword: ''
        };
    },
    components: {
        AppHeader,
        AppSidebar
    },
    computed: {
        ...mapState("mode", {
            isDarkMode: (state) => state.darkMode,
        }),
        ...mapGetters('user', ['getResultSearchUser']),
        ...mapGetters('auth', ['getAccountId']),
    },
    methods: {
        async handleSearch(keyword) {
            const accountId = this.getAccountId
            const response = await searchUsers({ accountId, keyword })
            if (response && response.status === 200) {
                this.data = response.data.result
            } else {
                console.log('Thất bại, hãy thử lại')
            }
        },
        async handleAddFriend({ receiverId, status }) {
            const senderId = this.getAccountId
            let response = null;
            if (status == "REQUEST") {
                response = await unFriend({ senderId, receiverId })
            } else {
                response = await addFriend({ senderId, receiverId })
            }
            if (response && response.status === 200) {
                console.log(response.data.result)
                this.handleSearch(this.keyword)
            } else {
                console.log('Thất bại, hãy thử lại')
            }
        }
    },
    watch: {
        '$route.query.keyword'(newVal) {
            this.keyword = newVal;
            this.handleSearch(newVal);
        }
    },
    mounted() {
        const keyword = this.$route.query.keyword;
        this.keyword = keyword
        this.handleSearch(keyword)
    }
}
</script>