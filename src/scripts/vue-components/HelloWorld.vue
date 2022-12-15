<script setup>
import { ref } from 'vue';

const props = defineProps({
    info: {
        type: Object,
        default() {
            return { craftVersion: 'Unknown' };
        },
    },
});

const message = ref('Hello World!');
</script>

<template>
    <h1>{{ message }}</h1>
    Craft version: {{ props.info.craftVersion }}
</template>
