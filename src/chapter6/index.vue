<template>
    <div>
        <div>
            <template v-for="(chapter, key) of chapters" :key="key">
                <button @click="currentView = key">{{ key }}</button>
            </template>
            <template v-for="(chapter, key) of chapters" :key="key">
                <div v-show="currentView === key">
                    <component :is="chapter" />
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import first from './6-1Extract-Function/Init.vue'


const currentView = ref("챕터1");
const chapters = {
    "6-1": first,
}
</script>