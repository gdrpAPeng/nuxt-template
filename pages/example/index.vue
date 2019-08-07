<template>
  <div class="container">
    <input v-model="value" />
    <button @click="event().testClick()">設置 lang</button>
    <h1>{{$t('common.test')}} {{ locale }}</h1>
    <button @click="event().tokenClick()">設置 token</button>
    <h1>{{ token }}</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { example } from "../../api/api";
export default {
  data() {
    return {
      value: 0
    };
  },
  computed: {
    ...mapState(["locale"]),
    ...mapState('auth', ['token'])
  },
  created() {
    this.network().example();
  },
  methods: {
    ...mapActions(["setLang"]),
    ...mapActions('auth', ['setToken']),
    // 事件操作
    event() {
      return {
        testClick: () => {
          if (this.locale == "zh-CN") {
            this.setLang("en-US");
          } else {
            this.setLang("zh-CN");
          }
        },
        tokenClick: () => {
          this.setToken(this.value)
        }
      };
    },
    // 处理一些逻辑操作
    handler() {
      return {};
    },
    // 网络操作
    network() {
      return {
        example: async () => {
          let { data } = await example();
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 50px;
}
</style>

