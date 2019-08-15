<template>
  <div class="container">
    <button @click="login">
      登录
    </button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('auth', ['token'])
  },
  created() {

  },
  methods: {
    ...mapActions('auth', ['setToken']),
    login() {
      const TOKEN = 'APeng'
      this.setToken(TOKEN)
      Cookie.set('token', TOKEN)
      const origin = this.$route.query.origin || ''

      this.$router.push({
        path: origin
      })
    },
    // 事件操作
    event() {
      return {

      }
    },
    // 处理一些逻辑操作
    handler() {
      return {}
    },
    // 网络操作
    network() {
      return {

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

