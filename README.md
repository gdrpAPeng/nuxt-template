# nuxt-template (express + ssr)

- 引入 vuex-persistedstate 做 vuex 持久化存储
- 引入 @nuxtjs/proxy 处理跨域
- 封装 axios 拦截器
- 使用 i18n 做多语言包

## 注意

> 因为在 nuxt 中 vuex 的持久化存储及 server 状态下取值会出现只取到初始值的情况，所以页面间的通信统一转到 sessionStorage 上。
>
> store 只能在 client 环境才能取到值
>
> 尽量将 vue 生态中需要在 created 处理的转移到 beforeMount 上，或者在 created 利用 process.client 做判断