<script setup lang="ts">
import { PluginModel } from '../model/PluginModel'

defineProps<{ model: PluginModel }>();
</script>

<template>
   <h1>{{ model.BaseMessage }}</h1>
   <h1>{{ model.PluginMessage }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
