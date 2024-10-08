<script lang="ts" setup></script>

<template>
  <div class="container relative px-4 py-12 mx-auto">
    <div class="flex flex-wrap items-center -mx-4">
      <div class="w-full p-4 lg:w-6/12">
        <img
          onerror="this.setAttribute('data-error', 1)"
          alt="Our Mission"
          data-nuxt-img=""
          srcset="
            https://images.unsplash.com/photo-1528301725143-1ba694832e77?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDExfHxraWRzJTIwYW5pbWFsfGVufDB8fHx8MTYzMDQ2NTQwOQ&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=1000&amp;h=650&amp;fit=crop 1x,
            https://images.unsplash.com/photo-1528301725143-1ba694832e77?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDExfHxraWRzJTIwYW5pbWFsfGVufDB8fHx8MTYzMDQ2NTQwOQ&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=1000&amp;h=650&amp;fit=crop 2x
          "
          class="w-full rounded-3xl"
          src="https://images.unsplash.com/photo-1528301725143-1ba694832e77?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDExfHxraWRzJTIwYW5pbWFsfGVufDB8fHx8MTYzMDQ2NTQwOQ&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=1000&amp;h=650&amp;fit=crop"
        />
      </div>
      <div class="w-full p-4 mx-auto lg:w-5/12">
        <InfoBlock
          title="Our Mission"
          subtitle="Life changing experience for a valuable cause"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet."
          :isCentered="false"
          link="/articles"
          linkText="Learn More"
        />
      </div>
    </div>
  </div>
</template>
