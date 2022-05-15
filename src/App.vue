<template>
  <div class="container">
    <h1>{{ t("hello") }}</h1>
    <button @click="changeLanguage">change</button>
    <h2>{{t("home")}}</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useI18n }  from 'vue-i18n'
export default {
  name: 'App',
  setup(){
    const {t, locale} = useI18n()
    let changeLanguage = () => locale.value === 'en' ? locale.value = 'zh' :locale.value = 'en';
    onMounted(() => {
      localStorage.setItem('language', 'zh')
    })
    return {
      changeLanguage,
      t
    }
  },

}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>