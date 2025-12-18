<template>
  <div id="app" dir="rtl">
    <TopHeader />
    <MainHeader />
    <HeroSection />
    <FeaturesSection />
    <ServicesSection />
    <BlogSection />
    <SponsorsSection />
    <main>
      <div style="max-width: 1230px; margin: 0 auto; padding: 1rem">
        <p
          style="
            color: #161616;
            line-height: 1.8;
            font-size: 14px;
            font-weight: 400;
            text-align: right;
          "
        >
          تاريخ آخر تعديل: 04/12/2020 - 4:13 م بتوقيت السعودية
        </p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import TopHeader from './components/TopHeader.vue'
import MainHeader from './components/MainHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import BlogSection from './components/BlogSection.vue'
import SponsorsSection from './components/SponsorsSection.vue'
import Footer from './components/Footer.vue'
</script>

