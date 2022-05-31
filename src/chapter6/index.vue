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
import init from './6-1Extract-Function/init/Init.vue'
import jun1 from './6-1Extract-Function/jun1/Init.vue'
import forward from './6-1Extract-Function/forward/Init.vue'


const currentView = ref("챕터1");
const chapters = {
    "init": init,
    "forward": forward,
    "jun1": jun1,
}
</script>