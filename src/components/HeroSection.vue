<template>
  <section class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Swiper -->
          <div class="swiper mySwiper" ref="heroSwiper">
            <div class="swiper-wrapper">
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="swiper-slide"
              >
                <h1>{{ slide.title }}</h1>
                <p>{{ slide.description }}</p>
                <div class="btn">
                  <a href="#">{{ slide.buttonText }}</a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

let swiperInstance = null
const heroSwiper = ref(null)

const slides = ref([
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  },
  {
    title: 'القسم الرئيسي',
    description:
      'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر',
    buttonText: 'إجراء رئيسي'
  }
])

onMounted(() => {
  if (heroSwiper.value) {
    swiperInstance = new Swiper(heroSwiper.value, {
      modules: [Pagination, Autoplay],
      pagination: {
        el: heroSwiper.value.querySelector('.swiper-pagination')
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
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
.mySwiper {
  width: 100%;
  height: 100%;
}
</style>

