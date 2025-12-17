<template>
  <section class="sponsers">
    <div class="container headingContainer">
      <div class="row d-flex justify-end">
        <div class="box">
          <h1>قسم الشركاء</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- Swiper -->
        <div class="swiper mySwiperSponser" ref="sponsorsSwiper">
          <div class="swiper-wrapper">
            <div
              v-for="(sponsor, index) in sponsors"
              :key="index"
              class="swiper-slide"
            >
              <img :src="sponsor.image" alt="" class="img-fluid" />
              <p>{{ sponsor.name }}</p>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

let swiperInstance = null
const sponsorsSwiper = ref(null)

const sponsors = ref([
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' },
  { image: '/assets/images/tree.svg', name: 'شعار المنصة' }
])

onMounted(() => {
  if (sponsorsSwiper.value) {
    swiperInstance = new Swiper(sponsorsSwiper.value, {
      modules: [Navigation, Autoplay, Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: sponsorsSwiper.value.querySelector('.swiper-pagination'),
        clickable: true
      },
      breakpoints: {
        240: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 18
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 18
        },
        1024: {
          slidesPerView: 10,
          spaceBetween: 18
        }
      },
      navigation: {
        prevEl: sponsorsSwiper.value.querySelector('.swiper-button-next'),
        nextEl: sponsorsSwiper.value.querySelector('.swiper-button-prev')
      }
    })
  }
})

onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
  }
})
</script>

<style scoped>
.mySwiperSponser {
  width: 95%;
  height: 100%;
}
</style>

