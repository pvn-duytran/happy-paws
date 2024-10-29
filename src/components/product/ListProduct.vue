<script lang="ts" setup></script>

<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pt-12 pb-24">
      <div class="container relative px-4 mx-auto">
        <div
          class="flex flex-col flex-wrap items-center justify-center mx-4 mb-4"
        >
          <div class="w-full px-4 text-center">
            <InfoBlock
              title="Adopt A Pet"
              subtitle="Small Gesture For A Big Impact"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet."
              :isCentered="true"
              link="/adopt"
              linkText="Meet Them All &gt;"
            />
          </div>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <ProductItem />
        </div>
      </div>
    </div>
  </div>
</template>
