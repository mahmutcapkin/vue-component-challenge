<script setup>
const props = defineProps(["student"]);
</script>

<template>
  <tr :class="{ red: props.student.type == 'assistant' }">
    <th scope="row">{{ props.student.id }}</th>
    <td>{{ props.student.name }}</td>
  </tr>
</template>

<style scoped>
.red {
  background-color: red;
  color: white;
}
</style>
