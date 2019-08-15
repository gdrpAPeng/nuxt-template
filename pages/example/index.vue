<template>
  <div class="container">
    <nuxt-link to="/">
      Home
    </nuxt-link>

    <input v-model="value">
    <button @click="event().testClick()">
      設置 lang
    </button>
    <h1>{{ $t('common.test') }} Lang: {{ locale }}</h1>
    <button @click="event().tokenClick()">
      設置 token
    </button>
    <h1>Token： {{ token }}</h1>
    <van-button type="primary">
      主要按钮
    </van-button>
    <!-- <van-cell-group> -->
    <van-field v-model="value"
               placeholder="请输入用户名"
    />
    <!-- </van-cell-group> -->
    <van-pagination 
      v-model="currentPage" 
      :total-items="24" 
      :items-per-page="5"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { example } from '../../api/api'
export default {
  middleware: ['test'],
  data() {
    return {
      value: 0,
      currentPage: 1
    }
  },
  computed: {
    ...mapState(['locale']),
    ...mapState('auth', ['token']),
  },
  asyncData({ query }) {
    console.log(query, 'asyncData query')
    return {
      value: 'asyncData'
    }
  },
  created() {
    if(process.server) {
      // console.log(this.$store.state, 'server')
      // console.log('server sss')
      // console.log(sessionStorage.getItem('vuex'), 'server')
    }
    if(process.client) {
      console.log(this.$store.state, 'client')
      // console.log(this.$sessionStorage.getItem('vuex'), 'client sss')
      // console.log(sessionStorage.getItem('vuex'), 'client')
      this.network().example()
    }
  },
  beforeMount() {
    // console.log(this.$sessionStorage.getItem('vuex'), 'sss')
    console.log(this.$store.state, 'client beforeMounted')
  },
  mounted() {
    console.log(this.$store.state, 'mounted')
  },
  methods: {
    ...mapActions(['setLang']),
    ...mapActions('auth', ['setToken']),
    // 事件操作
    event() {
      return {
        testClick: () => {
          if (this.locale == 'zh-HK') {
            this.setLang('en-US')
            this.$vantLocale('en-US')
          } else {
            this.setLang('zh-HK')
            this.$vantLocale('zh-HK')
          }
        },
        tokenClick: () => {
          this.setToken(this.value)
        }
      }
    },
    // 处理一些逻辑操作
    handler() {
      return {}
    },
    // 网络操作
    network() {
      return {
        example: async () => {
          let { data } = await example()
          console.log(data)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 50px;
}
</style>

