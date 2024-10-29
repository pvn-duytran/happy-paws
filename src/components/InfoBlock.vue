<template>
  <div :class="[isCentered ? 'text-center' : '']">
    <h6 v-if="title" class="uppercase text-primary-600 dark:text-primary-200">
      {{ title }}
    </h6>
    <h3 v-if="subtitle" class="mt-3 capitalize">{{ subtitle }}</h3>
    <p v-if="content" class="mt-4">{{ content }}</p>
    <a
      v-if="link"
      :href="link"
      class="inline-flex items-center flex-shrink-0 px-4 py-3 mt-6 text-base font-medium text-white rounded-full shadow-sm focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 gap-x-2 dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400"
    >
      {{ linkText }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  content: {
    type: String,
  },
  isCentered: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    required: false,
  },
  linkText: {
    type: String,
    default: "Learn More",
  },
});
</script>

<style scoped>
/* Thêm các style tùy chỉnh nếu cần */
</style>
