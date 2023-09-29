<script setup lang="ts">
import { FrameworkModel } from '../model/FrameworkModel';

defineProps<{ model: FrameworkModel }>();
</script>

<template>
  <h1>{{ model.BaseMessage }}</h1>
</template>

<style scoped>
</style>
