<template>
  <div class="search-overlay" :class="{ active: isSearchOpen }" @click="closeSearch"></div>

  <div class="search-container" :class="{ active: isSearchOpen }">
    <div class="search-wrapper">
      <input
        type="text"
        class="search-input"
        placeholder="ابحث هنا..."
        ref="searchInputRef"
        v-model="searchQuery"
      />
      <button class="close-search-btn" @click="closeSearch">
        <svg class="close-icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    </div>
  </div>

  <header class="header">
    <div class="header-container">
      <div class="header-actions">
        <button class="action-btn" @click="openSearch">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
          <span>البحث</span>
        </button>

        <div class="lang-selector">
          <span>English</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
            />
          </svg>
        </div>

        <button class="action-btn">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          <span>تسجيل الدخول</span>
        </button>

        <div class="mobile-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav class="nav-menu" :class="{ active: isMobileMenuOpen }" id="navMenu">
          <div
            v-for="(item, index) in navItems"
            :key="index"
            class="nav-item"
            :class="{ active: activeDropdown === index }"
            @click="toggleDropdown(index)"
          >
            <a href="#" class="nav-link">
              <span>{{ item.title }}</span>
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="dropdown-menu">
              <a
                v-for="(subItem, subIndex) in item.subItems"
                :key="subIndex"
                href="#"
                class="dropdown-item"
              >
                {{ subItem }}
              </a>
            </div>
          </div>
      </nav>

    
      <div class="logo">
        <a href="/" class="logo-icon">
          <img src="/assets/images/logo.svg" alt="" class="img-fluid" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const searchQuery = ref('')
const searchInputRef = ref(null)

const navItems = ref([
  { title: 'تبويب 1', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] },
  { title: 'تبويب 2', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] },
  { title: 'تبويب 3', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] },
  { title: 'تبويب 4', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] },
  { title: 'تبويب 5', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] },
  { title: 'تبويب 6', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] },
  { title: 'تبويب 7', subItems: ['خيار 1', 'خيار 2', 'خيار 3'] }
])

const toggleDropdown = (index) => {
  if (window.innerWidth <= 968) {
    activeDropdown.value = activeDropdown.value === index ? null : index
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const openSearch = () => {
  isSearchOpen.value = true
  setTimeout(() => {
    if (searchInputRef.value) {
      searchInputRef.value.focus()
    }
  }, 300)
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && isSearchOpen.value) {
    closeSearch()
  }
}

const handleClickOutside = (e) => {
  const navMenu = document.getElementById('navMenu')
  const mobileToggle = document.querySelector('.mobile-toggle')
  if (navMenu && mobileToggle && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Styles are in main CSS file */
</style>

