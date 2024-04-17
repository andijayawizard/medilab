<script lang="ts" setup></script>

<template>
  <Topbar />
  <Header />
  <main id="main">
    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{{ $route.name }}</h2>
          <ol>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>{{ $route.name }}</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs Section -->

    <section class="inner-page">
      <div class="container">
        <slot />
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped></style>
