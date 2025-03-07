<template>
  <q-chip :class="`base ${props.type}`" :outline="props.outline">
    <div class="row items-center poppins-bold">{{ props.text }}</div>
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

.success {
  background-color: #e6f9eb;
  color: #28a745;
}
</style>
