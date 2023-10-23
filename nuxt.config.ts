// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Toxin",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#00aba9" },
        { name: "theme-color", content: "#ffffff" },
      ],
    },
  },

  css: ["@/app/styles/index.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/app/styles/variables.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxtjs/svg-sprite", "nuxt-icon", "@pinia/nuxt"],

  svgSprite: {
    input: "~/app/sprite/svg",
    output: "~/app/sprite/gen",
  },

  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },

  devtools: {
    enabled: true,
  },
});
