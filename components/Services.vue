<script lang="ts" setup>
const config = useRuntimeConfig()
const params = "/products?limit=6&skip=0&select=title,description";
const { data: services, pending } = await useAsyncData(
  "services",
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
const icon = {
  0: 'heartbeat',
  1: 'pills',
  2: 'hospital-user',
  3: 'dna',
  4: 'wheelchair',
  5: 'notes-medical',
}
const route = useRoute()
const title: string = 'Services'
const desc: string = 'Berikut ini layanan yang kami sediakan khusus untuk membantu produktifitas anda'
</script>

<template>
  <!-- ======= Services Section ======= -->
  <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>{{ title }}</h2>
        <p v-text="desc"></p>
      </div>

      <div class="row">
        <div v-if="pending">loading...</div>
        <div v-else v-for="(item, index) in services.products" :key="index"
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 ">
          <div class="icon-box">
            <div class="icon"><i :class="`fas fa-${icon}`"></i></div>
            <h4>
              <NuxtLink :to="`/services/${item.id}`" v-text="item.title"></NuxtLink>
            </h4>
            <p v-text="item.description"></p>
          </div>
        </div>
      </div>

      <div v-show="route.name == '/'">
        <br />
        <NuxtLink to="/services" class="appointment-btn scrollto"><span class="d-none d-md-inline">View All</span>
          Services</NuxtLink>
      </div>

    </div>
  </section><!-- End Services Section -->
</template>

<style scoped></style>
