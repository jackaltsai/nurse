// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant-TW' },
      title: '特別護士 Elite Care｜專業特別護理師・居家及住院照護',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '特別護士由三位資深臨床護理師創立，提供特別護理師、住院陪病、術前術後照護、就醫陪同等 24 小時全天候專業照護服務。',
        },
        { name: 'theme-color', content: '#3F7299' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${process.env.NUXT_APP_BASE_URL ?? '/'}favicon.svg` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700&display=swap',
        },
      ],
    },
  },
})
