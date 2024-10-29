<script lang="ts" setup></script>

<template>
  <div class="py-12">
    <div class="container relative px-4 mx-auto">
      <div class="container relative pt-4 pl-12 pr-8 mx-auto">
        <div class="px-8">
          <div class="flex flex-wrap lg:justify-between">
            <div class="w-full py-4 text-center lg:w-fit">
              <a href="/adopt" class=""
                ><button
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center"
                  type="button"
                >
                  <!----><span>&lt;- Go Back</span
                  ><!---->
                </button></a
              >
            </div>
            <div class="w-full text-center lg:w-fit">
              <h3 class="capitalize">Duke</h3>
              <h6 class="uppercase">Animal ID: 1</h6>
            </div>
            <div
              class="flex items-center justify-center w-full py-4 space-x-4 text-center lg:w-fit"
            >
              <span
                class="i-material-symbols-mark-email-unread-outline"
                style="width: 28px; height: 28px; display: inline-block"
              ></span
              ><span
                class="i-logos-whatsapp-icon"
                style="width: 28px; height: 28px; display: inline-block"
              ></span
              ><span
                class="i-logos-facebook"
                style="width: 28px; height: 28px; display: inline-block"
              ></span
              ><span
                class="i-logos-twitter"
                style="width: 28px; height: 28px; display: inline-block"
              ></span>
            </div>
          </div>
          <div class="flex flex-wrap w-full pt-8 lg:flex-nowrap">
            <div
              class="flex flex-wrap justify-center w-full text-center lg:flex-nowrap lg:text-left"
            >
              <div class="w-full">
                <img
                  alt="Duke"
                  data-nuxt-img=""
                  srcset="
                    https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDJ8fGRvZ3xlbnwwfHx8fDE2MzA0NjQwNjg&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=600&amp;fit=crop 1x,
                    https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDJ8fGRvZ3xlbnwwfHx8fDE2MzA0NjQwNjg&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=600&amp;fit=crop 2x
                  "
                  class="w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDJ8fGRvZ3xlbnwwfHx8fDE2MzA0NjQwNjg&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=600&amp;fit=crop"
                />
              </div>
              <div class="w-full py-8 sm:px-16">
                <ul>
                  <li class="mb-4">
                    <span class="font-semibold">Breed:</span
                    ><span class="ml-2">Rottweiler</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Age:</span
                    ><span class="ml-2">20/01/2013</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Gender:</span
                    ><span class="ml-2">Male</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Microchip No:</span
                    ><span class="ml-2">234985798247598</span>
                  </li>
                  <li
                    class="flex items-center justify-center mb-4 lg:justify-start"
                  >
                    <span
                      class="-ml-1 font-semibold i-material-symbols-add-location-alt-outline-rounded"
                      style="width: 28px; height: 28px; display: inline-block"
                    ></span
                    ><span class="ml-2">Burwood</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Includes:</span
                    ><span class="ml-2">Vaccination</span>
                  </li>
                </ul>
              </div>
              <div
                class="w-full max-w-xs py-8 text-white rounded-xl sm:px-8 bg-primary-600 dark:bg-primary-200 dark:text-primary-800"
              >
                <ul>
                  <li class="flex items-center justify-center lg:justify-start">
                    <span
                      class="i-material-symbols-check-box-outline"
                      style="width: 28px; height: 28px; display: inline-block"
                    ></span
                    ><span class="inline-block ml-2">Done</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <span
                      class="i-twemoji-sparkling-heart"
                      style="width: 24px; height: 24px; display: inline-block"
                    ></span
                    ><span class="ml-2">Health Check</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <span
                      class="i-bx-bxs-microchip text-tertiary-600 dark:text-tertiary-200"
                      style="width: 24px; height: 24px; display: inline-block"
                    ></span
                    ><span class="ml-2">Microchipped</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <span
                      class="i-twemoji-worm"
                      style="width: 24px; height: 24px; display: inline-block"
                    ></span
                    ><span class="ml-2">De-wormed</span>
                  </li>
                  <li
                    class="flex items-center justify-center mt-4 lg:justify-start"
                  >
                    <span
                      class="text-indigo-600 i-healthicons-sexual-reproductive-health-outline"
                      style="width: 24px; height: 24px; display: inline-block"
                    ></span
                    ><span class="ml-2">De-sexed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="px-8 mt-8 text-center lg:text-left">
            <p>
              To adopt
              <span class="mx-1 text-primary-600 dark:text-primary-200"
                >Duke</span
              ><span>or learn more, please visit our adoption centre at </span
              ><span class="mx-1 text-primary-600 dark:text-primary-200"
                >Burwood.</span
              ><span
                >Appointments are not required and walk-ins are welcome.</span
              >
            </p>
            <p class="mt-2">
              Alternatively, please contact our Burwood team directly on
              <span class="text-primary-600 dark:text-primary-200"
                >03 2394 3284</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
