<script lang="ts" setup>
const config = useRuntimeConfig()
const params = "/users?limit=4&skip=0&select=firstName,lastName,maidenName,image,email";
const { data: doctors, pending } = await useAsyncData(
  "doctors",
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
const route = useRoute()</script>

<template>
  <!-- ======= Doctors Section ======= -->
  <section id="doctors" class="doctors">
    <div class="container">

      <div class="section-title">
        <h2>Doctors</h2>
        <p>Dokter spesialis kami yang berkompeten di bidang nya</p>
      </div>

      <div class="row">
        <div v-if="pending">loading...</div>

        <div v-else v-for="(item, index) in doctors.users" :key="index" class="col-lg-6 mt-4">
          <div class="member d-flex align-items-start">
            <div class="pic"><img :src="`${item.image}`" class="img-fluid" alt=""></div>
            <div class="member-info">
              <h4>{{ item.firstName }} {{ item.lastName }}</h4>
              <span>{{ item.maidenName }}</span>
              <p>{{ item.email }}</p>
              <div class="social">
                <a href=""><i class="ri-twitter-fill"></i></a>
                <a href=""><i class="ri-facebook-fill"></i></a>
                <a href=""><i class="ri-instagram-fill"></i></a>
                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="route.name === '/'" class="text-center">
        {{ route.name }}
        <br />
        <NuxtLink to="/doctors" class="appointment-btn scrollto"><span class="d-none d-md-inline">View All</span>
          Doctors</NuxtLink>
      </div>

    </div>
  </section><!-- End Doctors Section -->
</template>

<style scoped></style>
