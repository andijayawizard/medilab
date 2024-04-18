// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.apiUrl,
      apiKey: process.env.apiKey,
    },
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1' },
        { name: 'author', content: 'author' },
        { name: 'keywords', content: 'keywords' },
        { name: 'description', content: 'description' },
      ],
      link: [
        { rel: 'icon', href: '/assets/img/favicon.png' },
        { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
        { rel: 'stylesheet', href: '/assets/vendor/fontawesome-free/css/all.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/animate.css/animate.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/bootstrap-icons/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/assets/vendor/boxicons/css/boxicons.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/glightbox/css/glightbox.min.css' },
        { rel: 'stylesheet', href: '/assets/vendor/remixicon/remixicon.css' },
        { rel: 'stylesheet', href: '/assets/vendor/swiper/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      script: [
        { src: '/assets/vendor/purecounter/purecounter_vanilla.js', body: true },
        { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
        { src: '/assets/vendor/glightbox/js/glightbox.min.js', body: true },
        { src: '/assets/vendor/swiper/swiper-bundle.min.js', body: true },
        { src: '/assets/vendor/php-email-form/validate.js', body: true },
        { src: '/assets/js/main.js', body: true },
      ]
    }
  }
})
