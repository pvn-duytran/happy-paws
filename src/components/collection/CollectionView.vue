<script lang="ts" setup>
import InfoBlock from "../InfoBlock.vue";
</script>

<template>
  <section class="container px-4 py-12 mx-auto">
    <InfoBlock
      title="Get Involved"
      subtitle="Small gesture for a big impact"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      :isCentered="true"
    />
    <div class="flex flex-wrap justify-center mt-12 -mx-4">
      <CollectionItem />
    </div>
  </section>
</template>
