<template>
  <section class="services">
    <div class="container headingContainer">
      <div class="row d-flex justify-between" style="direction: rtl;">
        <div class="box">
          <h1 style="text-align: right;">قسم الخدمات</h1>
        </div>
        <div class="box">
          <div class="btn">
            <a href="#" style="text-align: right;">عرض الكل</a>
          </div>
        </div>
      </div>
      <p>
        .هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على
        اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر
      </p>
    </div>
    <div class="SwiperContainer contentContainer">
      <!-- Swiper -->
      <div class="swiper mySwiperSerivces" ref="servicesSwiper">
        <div class="swiper-wrapper">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="swiper-slide"
          >
            <div style="text-align: right; direction: rtl;">
              <img
                src="/assets/images/checkIcon.svg"
                alt=""
                class="img-fluid checkIcon"
                style="align-self: flex-end;"
              />
            </div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <div class="smallBox d-flex align-center justify-end">
              <div
                v-for="(tag, tagIndex) in service.tags"
                :key="tagIndex"
                class="box"
                :class="tag.class"
              >
                {{ tag.text }}
              </div>
            </div>
            <div class="gridBtn d-flex">
              <div class="btn">
                <a href="#" class="greenBg">اجراء</a>
              </div>
              <div class="btn">
                <a href="#">اجراء ثانوي</a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

let swiperInstance = null
const servicesSwiper = ref(null)

const services = ref([
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  },
  {
    title: 'عنوان البطاقة',
    description: 'نص إضافي لمحتوى البطاقة',
    tags: [
      { text: 'وسم', class: 'lightGray' },
      { text: 'وسم', class: 'blue' },
      { text: 'وسم', class: 'green' }
    ]
  }
])

onMounted(() => {
  if (servicesSwiper.value) {
    swiperInstance = new Swiper(servicesSwiper.value, {
      modules: [Pagination],
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: true,
      direction: 'horizontal',
      rtl: true,
      pagination: {
        el: servicesSwiper.value.querySelector('.swiper-pagination'),
        clickable: true
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
/* Styles are in main CSS file */
</style>

