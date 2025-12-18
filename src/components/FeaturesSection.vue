<template>
  <section class="features">
    <div class="container headingContainer">
      <div class="row d-flex justify-between" style="direction: rtl;">
        <div class="box">
          <h1 style="text-align: right;">قسم من نحن</h1>
        </div>
        <div class="box">
          <div class="btn">
            <a href="#" style="text-align: right;">إجراء ثانوي</a>
          </div>
        </div>
      </div>
      <p>
        .هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على
        اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر
      </p>
    </div>
    <div class="container contentContainer">
      <div class="row d-flex">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="box"
        >
          <img :src="feature.icon" alt="" class="img-fluid" />
          <h1>{{ feature.value }}</h1>
          <p>{{ feature.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    icon: '/assets/images/ser-1.svg',
    value: '1.5M',
    label: 'شخص'
  },
  {
    icon: '/assets/images/ser-2.svg',
    value: '1.5M',
    label: 'شخص'
  },
  {
    icon: '/assets/images/ser-3.svg',
    value: '1.5M',
    label: 'شخص'
  },
  {
    icon: '/assets/images/ser-4.svg',
    value: '1.5M',
    label: 'شخص'
  }
])
</script>

<style scoped>
/* Styles are in main CSS file */
</style>

