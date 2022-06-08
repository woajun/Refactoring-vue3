<template>
  <template v-for="example in examples" :key="example">
    <button @click="doResult(example.method)">{{example.name}}</button>
  </template>
  <br/>
    {{result}}
</template>
<script setup>
import example from "./ex";
import solution from "./solution";
import {ref} from "vue";
let result = ref();


const examples = [
  {name:"example",method:example},
  {name:"solution",method:solution},
];

function doResult(method){
  result.value = method();
  console.log(result);
}
</script>
