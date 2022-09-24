<script setup>
import { ref } from "vue";
import Student from "@/components/StudentComponent/Student.vue";

const props = defineProps(["group"]);
const studentGroups = ref([]);
const isShow = ref(false);

//Bu function ile getirilen veriler üzerinde grup ismine göre json veri güncellendi.
function filterByGroups(data) {
  const groups = data.reduce((currentData, person) => {
    if (!currentData[person.group]) {
      currentData[person.group] = [];
    }
    return currentData;
  }, {});

  Object.keys(groups).forEach((group) => {
    const students = data.filter((person) => person.group == group);
    groups[group] = students;
  });

  return groups;
}
//Tüm verilerin çağrıldığı function
async function fetchData() {
  const data = await fetch(
    "https://raw.githubusercontent.com/Front-End-Bootcamp/vue-bootcamp/main/homework%201/data.json"
  )
    .then((data) => data.json())
    .then((response) => response);

  return data;
}

//Button'a tıklandığında ilgili grup ismine göre student verilerini filtreleyip Student componentine iletilecek verileri dolduran function'dır.
async function getStudentsOnClick(groupName) {
  const requestData = await fetchData();
  const groups = await filterByGroups(requestData);
  studentGroups.value = groups[groupName];
  isShow.value = !isShow.value;
}
</script>

<template>
  <section>
    <button class="primary" @click="getStudentsOnClick(props.group)">
      {{ props.group }}
    </button>
    <div v-if="isShow" class="border">
      <strong>Name of Students</strong>
      <Student
        v-for="student in studentGroups"
        :key="student.id"
        :student="student"
      ></Student>
    </div>
  </section>
</template>

<style scoped>
.primary {
  background-color: aqua;
  text-decoration: solid;
  display: block;
  margin: 5px;
}
.border {
  border: 1px solid red;
}
</style>
