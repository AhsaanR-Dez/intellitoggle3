<template>
  <section class="stand-for" aria-label="What We Stand For">
    <div class="stand-for__container">
      <h2 class="stand-for__title">What We Stand For</h2>
      <p class="stand-for__subtitle">The modern feature flag platform for product teams and developers.</p>

      <!-- Desktop: flex row | Mobile: scroll-snap carousel -->
      <div class="stand-for__track" ref="track" @scroll="onScroll">
        <div v-for="card in cards" :key="card.title" class="stand-for__card">
          <h3 class="stand-for__card-title">{{ card.title }}</h3>
          <p class="stand-for__card-desc">{{ card.desc }}</p>
        </div>
      </div>

      <!-- Dots (mobile only) -->
      <div class="stand-for__dots">
        <button
          v-for="(_, i) in cards"
          :key="i"
          class="stand-for__dot"
          :class="{ 'stand-for__dot--active': activeIndex === i }"
          @click="scrollTo(i)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const track = ref<HTMLElement | null>(null)
const activeIndex = ref(0)

function onScroll() {
  if (!track.value) return
  const w = track.value.offsetWidth
  activeIndex.value = Math.round(track.value.scrollLeft / w)
}
function scrollTo(i: number) {
  if (!track.value) return
  track.value.scrollTo({ left: i * track.value.offsetWidth, behavior: 'smooth' })
}

const cards = [
  {
    title: 'Smart Feature Management',
    desc: 'Create, manage, and rollout features without redeploying code.',
  },
  {
    title: 'Targeted Rollouts',
    desc: 'Release new features to specific users, environments, or percentages with precision.',
  },
  {
    title: 'Built for Developers',
    desc: 'Lightweight SDKs, powerful APIs, and easy integrations for any tech stack.',
  },
]
</script>

<style scoped>
.stand-for {
  background: #FFFDFF;
  padding: 64px 24px;
}
.stand-for__container {
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
}
.stand-for__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  color: #42489E;
  margin: 0 0 16px;
}
.stand-for__subtitle {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #131313;
  opacity: 0.7;
  margin: 0 0 48px;
}

/* Track — flex on desktop, scroll-snap on mobile */
.stand-for__track {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.stand-for__card {
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  flex: 1;
  min-width: 260px;
  max-width: 350px;
  text-align: left;
}
.stand-for__card-title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin: 0 0 8px;
  color: #131313;
}
.stand-for__card-desc {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 27px;
  color: #737373;
  margin: 0;
}

/* Dots — hidden on desktop */
.stand-for__dots {
  display: none;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
.stand-for__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D0D5DD;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, width 0.2s;
}
.stand-for__dot--active {
  background: #42489E;
  width: 24px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .stand-for {
    padding: 48px 0;
  }
  .stand-for__container {
    padding: 0 24px;
  }
  .stand-for__track {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 0;
    justify-content: flex-start;
    padding: 0 24px;
    margin: 0 -24px;
    scrollbar-width: none;
  }
  .stand-for__track::-webkit-scrollbar { display: none; }
  .stand-for__card {
    flex: 0 0 85vw;
    max-width: 85vw;
    min-width: unset;
    scroll-snap-align: center;
    margin-right: 16px;
  }
  .stand-for__dots { display: flex; }
}
</style>
