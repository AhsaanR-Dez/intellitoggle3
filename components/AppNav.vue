<template>
  <nav class="w-full" style="background: #42489E;">
    <div class="flex items-center justify-between" style="max-width: 1240px; margin: 0 auto; padding: 20px 24px;">

      <!-- Logo -->
      <NuxtLink to="/">
        <img src="/images/logo.svg" alt="Intelli Toggle" style="height: 40px; width: auto;" />
      </NuxtLink>

      <!-- Desktop nav links -->
      <div class="hidden md:flex items-center" style="gap: 28px;">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="no-underline"
          :style="{
            color: '#FFFDFF',
            fontSize: '18px',
            fontWeight: link.active ? '700' : '300',
            fontFamily: '\'Merriweather Sans\', sans-serif'
          }"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Desktop auth buttons -->
      <div class="hidden md:flex items-center" style="gap: 16px;">
        <button class="nav-btn nav-btn--outline">Login</button>
        <button class="nav-btn nav-btn--solid">Signup</button>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col justify-center items-center"
        style="gap: 5px; background: transparent; border: none; padding: 4px; cursor: pointer;"
        @click="open = !open"
      >
        <span style="display: block; width: 24px; height: 2px; background: #FFFDFF; border-radius: 2px;"></span>
        <span style="display: block; width: 24px; height: 2px; background: #FFFDFF; border-radius: 2px;"></span>
        <span style="display: block; width: 24px; height: 2px; background: #FFFDFF; border-radius: 2px;"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="md:hidden" style="background: #42489E; padding: 16px 24px 24px; border-top: 1px solid rgba(255,253,255,0.2);">
      <div class="flex flex-col" style="gap: 20px;">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="no-underline"
          style="color: #FFFDFF; font-size: 18px; font-weight: 300; font-family: 'Merriweather Sans', sans-serif;"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <div class="flex" style="gap: 12px; margin-top: 8px;">
          <button class="nav-btn nav-btn--outline" style="flex: 1;">Login</button>
          <button class="nav-btn nav-btn--solid" style="flex: 1;">Signup</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const navLinks = [
  { label: 'Home',    href: '/',        active: true  },
  { label: 'About',  href: '/about',   active: false },
  { label: 'Pricing', href: '#pricing', active: false },
]
</script>

<style scoped>
.nav-btn {
  height: 43px;
  padding: 0 24px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Merriweather Sans', sans-serif;
  cursor: pointer;
  white-space: nowrap;
}
.nav-btn--outline {
  background: transparent;
  border: 1px solid #FFFDFF;
  color: #FFFDFF;
}
.nav-btn--solid {
  background: #FFFDFF;
  border: none;
  color: #42489E;
}
</style>