<script setup>
import { ref } from 'vue';

const props = defineProps(['info']);

const message = ref('Hello World!');
</script>

<template>
    <h1>{{ message }} coucou</h1>
    {{ props.info.craftVersion }}
</template>
