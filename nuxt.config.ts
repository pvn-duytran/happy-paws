// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Happy Paws",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap",
        },
      ],
    },
  },
  srcDir: "src/",
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/assets/css/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
});
