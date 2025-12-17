<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>تابعنا على</h3>
          <ul class="footer-links">
            <div class="social-icons d-flex align-center flex-d-row-r">
              <a href="#">
                <img
                  src="/assets/images/instagram.svg"
                  alt=""
                  class="img-fluid"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/images/linkedin.svg"
                  alt=""
                  class="img-fluid"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/images/twitter.svg"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </ul>

          <div class="tools-section">
            <h3 class="tools-title">أدوات الإتاحة والوصول</h3>
            <div class="tools-icons">
              <a href="#" class="tool-icon" aria-label="تشغيل قارئ الشاشة">
                <img src="/assets/images/eye.svg" alt="" class="img-fluid" />
              </a>
              <a href="#" class="tool-icon" aria-label="البحث">
                <img src="/assets/images/zoom.svg" alt="" class="img-fluid" />
              </a>
              <a href="#" class="tool-icon" aria-label="إمكانية الوصول">
                <img src="/assets/images/hand.svg" alt="" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer-column">
          <h3>الإتصال والدعم</h3>
          <ul class="footer-links">
            <li v-for="(link, index) in contactLinks" :key="index">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>روابط مهمة</h3>
          <ul class="footer-links">
            <li v-for="(link, index) in importantLinks" :key="index">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>ملخص</h3>
          <ul class="footer-links">
            <li v-for="(link, index) in summaryLinks" :key="index">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-logos">
          <div class="footer-logo">
            <img
              src="/assets/images/footerLogo.svg"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="footer-logo">
            <img
              src="/assets/images/footerLogo.svg"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>

        <div class="footer-info">
          <p>تاريخ آخر تحديث: 04/12/2020</p>
          <p>تم تطويره وصيانته بواسطة [الجهة اسم الجهة]</p>
          <p class="boldtext">
            جميع الحقوق محفوظة لجامعة الحكومة الرقمية © 2024
          </p>
          <div class="footer-links-bottom">
            <a href="#">خريطة الموقع</a>
            <a href="#">RSS</a>
            <a href="#">تطبيق الجوال</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const contactLinks = ref([
  'مركز المساعدة',
  'تواصل معنا',
  'شارك معنا',
  'تقديم شكوى',
  'الإبلاغ عن الفساد'
])

const importantLinks = ref([
  'بوابة الاتحاد الوطنية',
  'البيانات الحكومية المفتوحة',
  'الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي',
  'بوابة البيانات المفتوحة',
  'بوابة المشاريع الإلكترونية'
])

const summaryLinks = ref([
  'حول الاسم الرمزي',
  'المخصوصية ونموذج الاستخدام',
  'كيفية استخدام [الاسم الرمزي]',
  'الأخبار والإنجازات',
  'إحصائيات الكفاءة لمبادئ المحدثة'
])
</script>

<style scoped>
/* Styles are in main CSS file */
</style>

