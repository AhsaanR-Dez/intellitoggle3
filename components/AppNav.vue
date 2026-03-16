<template>
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav__inner">

      <NuxtLink to="/" class="nav__logo" aria-label="Intelli Toggle home">
        <img src="/images/logo.svg" alt="Intelli Toggle" width="140" height="40" />
      </NuxtLink>

      <div class="nav__links" role="menubar">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="nav__link"
          :class="{ 'nav__link--active': link.active }"
          :aria-current="link.active ? 'page' : undefined"
          role="menuitem"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="nav__auth">
        <button class="nav__btn nav__btn--outline" aria-label="Log in to your account">Login</button>
        <button class="nav__btn nav__btn--solid" aria-label="Sign up for Intelli Toggle">Signup</button>
      </div>

      <!-- Hamburger -->
      <button
        class="nav__hamburger"
        @click="open = !open"
        :aria-expanded="open"
        :aria-controls="'mobile-menu'"
        aria-label="Toggle mobile menu"
      >
        <span class="nav__bar" :class="{ 'nav__bar--top-open': open }"></span>
        <span class="nav__bar" :class="{ 'nav__bar--mid-open': open }"></span>
        <span class="nav__bar" :class="{ 'nav__bar--bot-open': open }"></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div
      id="mobile-menu"
      class="nav__drawer"
      :class="{ 'nav__drawer--open': open }"
      role="menu"
      :aria-hidden="!open"
    >
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="nav__drawer-link"
        role="menuitem"
        :aria-current="link.active ? 'page' : undefined"
        @click="open = false"
      >
        {{ link.label }}
      </a>
      <div class="nav__drawer-auth">
        <button class="nav__btn nav__btn--outline" style="flex:1;" aria-label="Log in">Login</button>
        <button class="nav__btn nav__btn--solid" style="flex:1;" aria-label="Sign up">Signup</button>
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
.nav {
  background: #42489E;
  width: 100%;
}
.nav__inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo img {
  height: 40px;
  width: auto;
  display: block;
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__link {
  color: #FFFDFF;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  transition: opacity 0.2s;
}
.nav__link:hover,
.nav__link:focus-visible { opacity: 0.8; outline: 2px solid #FFFDFF; outline-offset: 4px; border-radius: 2px; }
.nav__link--active { font-weight: 700; }
.nav__auth {
  display: flex;
  align-items: center;
  gap: 16px;
}
.nav__btn {
  height: 43px;
  padding: 0 24px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Merriweather Sans', sans-serif;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.nav__btn:hover,
.nav__btn:focus-visible { opacity: 0.85; outline: 2px solid #FFFDFF; outline-offset: 3px; }
.nav__btn--outline { background: transparent; border: 1px solid #FFFDFF; color: #FFFDFF; }
.nav__btn--solid   { background: #FFFDFF; border: none; color: #42489E; }
.nav__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
}
.nav__hamburger:focus-visible { outline: 2px solid #FFFDFF; outline-offset: 4px; }
.nav__bar {
  display: block;
  width: 24px;
  height: 2px;
  background: #FFFDFF;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
}
.nav__bar--top-open { transform: translateY(7px) rotate(45deg); }
.nav__bar--mid-open { opacity: 0; transform: scaleX(0); }
.nav__bar--bot-open { transform: translateY(-7px) rotate(-45deg); }
.nav__drawer {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
  background: #42489E;
  border-top: 1px solid rgba(255,253,255,0.15);
}
.nav__drawer--open { max-height: 400px; }
.nav__drawer-link {
  display: block;
  color: #FFFDFF;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  padding: 14px 24px;
  border-bottom: 1px solid rgba(255,253,255,0.08);
  transition: background 0.2s;
}
.nav__drawer-link:hover,
.nav__drawer-link:focus-visible { background: rgba(255,253,255,0.08); outline: none; }
.nav__drawer-auth {
  display: flex;
  gap: 12px;
  padding: 16px 24px 24px;
}
@media (max-width: 768px) {
  .nav__links,
  .nav__auth   { display: none; }
  .nav__hamburger { display: flex; }
}
</style>
