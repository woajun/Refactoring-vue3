<script setup>
import { defineProps } from "vue";
import Executor from "../../executor";

defineProps({ executor: Executor });
</script>
<template>
  <div>
    {{ executor.name }}
    {{ executor.expect }}
    {{ executor.result }}
  </div>
</template>
