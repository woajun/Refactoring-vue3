<script setup>
import { defineProps } from "vue";
import Executor from "../../executor";
import TestBoard from "@/components/TestBoard.vue";

defineProps({ executor: Executor });
</script>
<template>
  <TestBoard :executor="executor" />
</template>
