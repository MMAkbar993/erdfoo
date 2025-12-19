<template>
  <section class="sponsers">
    <div class="container headingContainer">
      <div class="row d-flex" style="direction: rtl;">
        <div class="box">
          <h1 style="text-align: right;">قسم الشركاء</h1>
        </div>
      </div>
    </div>
    <div class="container sponsors-container">
      <div class="row sponsors-row">
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
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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
      modules: [Navigation, Autoplay],
      direction: 'horizontal',
      rtl: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
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
        // Swiper automatically handles RTL direction when rtl: true is set
        nextEl: sponsorsSwiper.value.querySelector('.swiper-button-next'),
        prevEl: sponsorsSwiper.value.querySelector('.swiper-button-prev')
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
.sponsors-container {
  padding: 50px 50px !important;
  overflow: hidden;
  max-width: 100%;
}

.sponsors-row {
  position: relative;
  overflow: visible;
  width: 100%;
  max-width: 100%;
}

.mySwiperSponser {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
}

.mySwiperSponser :deep(.swiper-wrapper) {
  align-items: center;
}

.mySwiperSponser :deep(.swiper-slide) {
  flex-shrink: 0;
  width: 98px !important;
  height: 100px;
}

/* Ensure navigation buttons are visible and properly positioned */
.mySwiperSponser :deep(.swiper-button-next),
.mySwiperSponser :deep(.swiper-button-prev) {
  position: absolute;
  z-index: 10;
}

@media (max-width: 1024px) {
  .sponsors-container {
    padding: 50px 30px !important;
  }
}

@media (max-width: 768px) {
  .sponsors-container {
    padding: 50px 20px !important;
  }
}

@media (max-width: 480px) {
  .sponsors-container {
    padding: 50px 10px !important;
  }
}
</style>

