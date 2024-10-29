<script lang="ts" setup></script>

<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="w-full px-4 text-center lg:w-7/12">
        <h6 class="uppercase">Adopt A Pet</h6>
        <h3 class="capitalize">Small Gesture For A Big Impact</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          congue tortor.
        </p>
      </div>
    </div>
    <div class="relative px-4 pt-8 mx-auto -mt-4">
      <div class="flex flex-wrap items-center justify-center mb-4 -mx-4">
        <div class="container relative px-4 mx-auto">
          <div class="flex flex-wrap justify-center -mx-4">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
