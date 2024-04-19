<script lang="ts" setup>
const config = useRuntimeConfig()
const params = "/users?limit=6&skip=0&select=firstName,lastName,maidenName,image,email";
const { data: data, pending } = await useAsyncData(
  "data",
  () =>
    $fetch(`${params}`, {
      // method: "get",
      baseURL: `${config.public.apiUrl}`,
      lazy: true,
      server: false,
      // params: {
      //   page: page.value,
      //   search: search.value,
      // },
      // headers: {
      //   "x-api-key": config.public.apiKey,
      // },
    })
  // { watch: [page, search] }
);
</script>

<template>
  <!-- ======= Testimonials Section ======= -->
  <section id="testimonials" class="testimonials">
    <div class="container">

      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          <div v-if="pending">loading...</div>
          <div v-else v-for="(item, index) in data.users" :key="index" class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img :src="`${item.image}`" class="testimonial-img" alt="">
                <h3>{{ item.firstName }} {{ item.lastName }}</h3>
                <h4>{{ item.maidenName }}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  {{ item.email }}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div><!-- End testimonial item -->
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </section><!-- End Testimonials Section -->
</template>

<style scoped></style>
