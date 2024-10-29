<script lang="ts" setup></script>

<template>
  <div>
    <Banner />
    <CollectionView />
    <ImageWithText />
    <ProductListProduct />
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
