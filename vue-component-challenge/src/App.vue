<script setup>
import { onMounted, ref } from "vue";
import BootcampLogo from "@/assets/svg/BootcampLogo.vue";
import ButtonComp from "@/components/ButtonComponent/Button.vue";
import DATA from "@/assets/data/data.json";
import getGroupNames from "@/assets/scripts/option.one";

//sayfa render edildiğinde çalışması için onMounted'da group isimleri çağrıldı.
const groupNames = ref({});
onMounted(() => {
  groupNames.value = getGroupNames(DATA);
});
</script>

<template>
  <section>
    <div>
      <BootcampLogo />
      <br />
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <ButtonComp
      v-for="groupName in groupNames"
      :group="groupName"
      :key="groupName"
    ></ButtonComp>
  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
