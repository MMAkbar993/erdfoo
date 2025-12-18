<template>
  <section class="blog">
    <div class="container headingContainer">
      <div class="row d-flex justify-between" style="direction: rtl;">
        <div class="box">
          <h1 style="text-align: right;">قسم الاخبار والمقالات</h1>
        </div>
        <div class="box">
          <div class="btn">
            <a href="#" style="text-align: right;">عرض الكل</a>
          </div>
        </div>
      </div>
      <p>هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة.</p>
    </div>
    <div class="container contentContainer">
      <div class="row d-flex">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="col-1"
        >
          <div class="imgBox">
            <img :src="article.image" alt="" class="img-fluid" />
          </div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <div class="btn d-flex align-end justify-end" style="direction: rtl;">
            <a href="#" style="text-align: right;">قراءة المزيد</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const articles = ref([
  {
    image: '/assets/images/blogImage.svg',
    title: 'عنوان بطاقة الأخبار في سطرين',
    description:
      'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.'
  },
  {
    image: '/assets/images/blogImage.svg',
    title: 'عنوان بطاقة الأخبار في سطرين',
    description:
      'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.'
  },
  {
    image: '/assets/images/blogImage.svg',
    title: 'عنوان بطاقة الأخبار في سطرين',
    description:
      'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.'
  }
])
</script>

<style scoped>
/* Styles are in main CSS file */
</style>

