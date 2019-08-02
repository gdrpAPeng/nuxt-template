<template>
  <div class="container">
      <input v-model="value" />
      <button @click="testClick">設置vuex</button>
      <h1>{{$t('common.test')}}</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { example } from '../../api/api'
export default {
 data() {
     return {
         value: 0,
     }
 },
 computed: {
     ...mapState(['locale'])
 },
 created() {
     this.network().example()
 },
 methods: {
     ...mapActions(['setLang']),
     testClick() {
         this.setLang('en-US')
     },
     network() {
         return {
             example: async () => {
                 let { data } = await example()
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

