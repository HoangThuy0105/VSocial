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
                            <img src="https://imgs.search.brave.com/jHvPz8xR7Ye_p7tUm3dobzOBj00escWN8ThPrmigRnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dm50cmlwLnZuL2Nh/bS1uYW5nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzAzL3Zh/bi1sb25nLW5pbmgt/YmluaC5qcGc"
                                alt="avatar" class="avatar">
                            <div class="result-info">
                                <p style="margin: 0px; font-weight: 500;">{{ item.username }}</p>
                                <span style="color: gray; font-size: 16px;">{{ item.email }}</span>
                            </div>
                            <div>
                                <button @click="handleAddFriend(item.accountId)" :class="[
                                    item.status == 'FRIEND'
                                        ? 'disabled-button'
                                        : 'add-button'
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
import { searchUsers, addFriend } from "@/service/userService"
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
        async handleAddFriend(receiverId) {
            const senderId = this.getAccountId
            const response = await addFriend({ senderId, receiverId })
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