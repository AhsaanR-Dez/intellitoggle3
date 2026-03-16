<template>
  <section class="use-cases">
    <div class="use-cases__container">
      <h2 class="use-cases__title">Use Cases</h2>

      <!-- Desktop: 2x2 grid | Mobile: scroll-snap carousel -->
      <div class="use-cases__track" ref="track" @scroll="onScroll">
        <div v-for="card in cases" :key="card.title" class="use-cases__card">
          <div class="use-cases__image-wrap">
            <img :src="card.img" :alt="card.title" class="use-cases__image" />
          </div>
          <div class="use-cases__text">
            <p class="use-cases__card-title">{{ card.title }}</p>
            <p class="use-cases__card-desc">{{ card.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Dots (mobile only) -->
      <div class="use-cases__dots">
        <button
          v-for="(_, i) in cases"
          :key="i"
          class="use-cases__dot"
          :class="{ 'use-cases__dot--active': activeIndex === i }"
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

const cases = [
  { title: 'For Developers',    desc: 'Deploy with less fear. Toggle risky features and rollback without a redeploy.',              img: '/images/developers.png'   },
  { title: 'For Product Teams', desc: 'Release when ready, test features on live traffic, and control rollout strategies.',         img: '/images/product-teams.png'},
  { title: 'For Enterprises',   desc: 'Role-based access, audit logs, and custom environments make it secure at scale.',            img: '/images/enterprises.png'  },
  { title: 'For Startups',      desc: 'Fast to integrate, free to start, powerful as you grow.',                                    img: '/images/startups.png'     },
]
</script>

<style scoped>
.use-cases {
  background: #FFFDFF;
  padding: 64px 24px;
}
.use-cases__container {
  max-width: 860px;
  margin: 0 auto;
}
.use-cases__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  color: #42489E;
  text-align: center;
  margin: 0 0 48px;
}

/* Desktop: 2x2 grid */
.use-cases__track {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.use-cases__card {
  background: #FDFDFF;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0px 7px 7px rgba(0,0,0,0.04), 0px 2px 4px rgba(0,0,0,0.05);
  border: 2px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  cursor: pointer;
}
.use-cases__card:hover {
  border-color: #42489E;
  box-shadow: 0px 12px 24px rgba(66,72,158,0.15), 0px 4px 8px rgba(66,72,158,0.1);
  transform: translateY(-3px);
}
.use-cases__image-wrap {
  border-radius: 15px;
  overflow: hidden;
  background: #D9D9D9;
  aspect-ratio: 351 / 188;
}
.use-cases__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.use-cases__card-title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  color: #131313;
}
.use-cases__card-desc {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #737373;
  margin: 0;
  line-height: 1.5;
}

/* Dots */
.use-cases__dots {
  display: none;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
.use-cases__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D0D5DD;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, width 0.2s;
}
.use-cases__dot--active {
  background: #42489E;
  width: 24px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .use-cases {
    padding: 48px 0;
  }
  .use-cases__container {
    padding: 0 24px;
  }
  .use-cases__track {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 0;
    padding: 0 24px;
    margin: 0 -24px;
    scrollbar-width: none;
  }
  .use-cases__track::-webkit-scrollbar { display: none; }
  .use-cases__card {
    flex: 0 0 85vw;
    scroll-snap-align: center;
    margin-right: 16px;
    transform: none !important;
  }
  .use-cases__dots { display: flex; }
}
</style>