<template>
  <q-chip :class="`base ${props.type} ${props.class}`" :outline="props.outline" :size="props.size">
    <div class="row items-center">{{ props.text }}</div>
  </q-chip>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  outline: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: String,
    required: false,
    default: 'md'
  },
  class: {
    type: String,
    required: false,
  }
})

onMounted(() => {
  if (props.type === undefined) throw new Error('Missing type for Tag prop')
})
</script>

<style scoped>
.base {
  border-radius: 4px;
  text-transform: uppercase;
}
.error {
  background-color: #fdecea;
  color: #e74c3c;
}

.info {
  background-color: #e0f7fa;
  color: #00796b;
}

.warn {
  background-color: #fff3e0;
  color: #f57c00;
  border: 1px solid #f57c00;
}

.success {
  background-color: #e6f9eb;
  color: #28a745;
}
</style>
