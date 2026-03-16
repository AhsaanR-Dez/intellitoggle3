<template>
  <section id="pricing" class="pricing" aria-label="Pricing plans">
    <div class="pricing__container">
      <h2 class="pricing__title">Choose A Plan That Works For You</h2>

      <!-- Desktop: flex row | Mobile: scroll-snap carousel -->
      <div class="pricing__track" ref="track" @scroll="onScroll">
        <div v-for="plan in plans" :key="plan.name" class="pricing__card">

          <!-- Popular badge -->
          <div v-if="plan.popular" class="pricing__badge">Popular</div>

          <!-- Icon -->
          <img src="/images/GreenSun.png" alt="" class="pricing__icon" loading="lazy" />

          <!-- Plan name -->
          <p class="pricing__plan-name">{{ plan.name }}</p>

          <!-- Price -->
          <div class="pricing__price">
            <template v-if="plan.price !== null">
              <span class="pricing__amount">${{ plan.price }}</span>
              <span class="pricing__per-month">/month</span>
            </template>
            <span v-else class="pricing__amount">Custom</span>
          </div>

          <!-- Divider -->
          <hr class="pricing__divider" />

          <!-- Features -->
          <div class="pricing__features">
            <p class="pricing__features-label">Features</p>
            <ul class="pricing__features-list">
              <li v-for="feat in plan.features" :key="feat" class="pricing__feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="pricing__tick">
                  <path d="M5 12L10 17L19 8" stroke="#42489E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <button class="pricing__subscribe">Subscribe</button>
        </div>
      </div>

      <!-- Dots (mobile only) -->
      <div class="pricing__dots">
        <button
          v-for="(_, i) in plans"
          :key="i"
          class="pricing__dot" :aria-label="`Go to slide ${i + 1}`"
          :class="{ 'pricing__dot--active': activeIndex === i }"
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

const plans = [
  {
    name: 'Standard Plan', price: 10, popular: false,
    features: [
      'Core Feature Flags API', 'Targeting Rules Engine', 'Percentage Rollouts',
      'Kill Switch / Instant Rollback', 'Flutter Client SDK',
      'Dart Server SDK (OpenFeature)', 'API Management Access',
      'OpenFeature Compliance', 'SDK Caching and Offline Mode',
    ],
  },
  {
    name: 'Enhance Plan', price: 149, popular: true,
    features: [
      'Core Feature Flags API', 'Targeting Rules Engine', 'Multi-Environment Support',
      'Percentage Rollouts', 'Kill Switch / Instant Rollback',
      'Analytics Hooks (Flag Metrics)', 'A/B Testing / Experimentation',
      'Flutter & Vue Client SDK', 'Dart Server SDK (OpenFeature)',
      'Multi-Tenant Architecture', 'API Management Access',
      'Audit Logs (Flag Changes)', 'OpenFeature Compliance',
      'Environment-Specific Flags', 'SDK Caching and Offline Mode',
      'Cloud Hosting Ready', 'Streaming Flag Updates (Realtime)',
    ],
  },
  {
    name: 'Enterprise Plan', price: null, popular: false,
    features: [
      'Core Feature Flags API', 'Targeting Rules Engine', 'Multi-Environment Support',
      'Percentage Rollouts', 'Kill Switch / Instant Rollback',
      'Analytics Hooks (Flag Metrics)', 'A/B Testing / Experimentation',
      'Flutter & Vue Client SDK', 'Dart Server SDK (OpenFeature)',
      'Multi-Tenant Architecture', 'API Management Access',
      'Audit Logs (Flag Changes)', 'OpenFeature Compliance',
      'Environment-Specific Flags', 'SDK Caching and Offline Mode',
      'Cloud Hosting Ready', 'Streaming Flag Updates (Realtime)',
    ],
  },
]
</script>

<style scoped>
.pricing {
  background: #FFFDFF;
  padding: 48px 24px;
}
.pricing__container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}
.pricing__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  color: #42489E;
  text-align: center;
  text-transform: capitalize;
  margin: 0;
}

/* Desktop: flex row */
.pricing__track {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
  filter:
    drop-shadow(0px 35px 35px rgba(4,36,137,0.04))
    drop-shadow(0px 9px 19px rgba(4,36,137,0.05));
}

.pricing__card {
  background: #FFFFFF;
  border-radius: 20px;
  width: 370px;
  min-width: 300px;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  cursor: pointer;
}
.pricing__card:hover {
  border-color: #42489E;
  box-shadow: 0px 16px 32px rgba(66,72,158,0.15), 0px 4px 8px rgba(66,72,158,0.1);
  transform: translateY(-4px);
}
.pricing__badge {
  position: absolute;
  top: 37px;
  right: 32px;
  background: #F9A71E;
  border-radius: 42px;
  padding: 6px 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #131313;
}
.pricing__icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 16px;
}
.pricing__plan-name {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin: 0 0 32px;
  color: #131313;
}
.pricing__price {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 32px;
}
.pricing__amount {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  color: #42489E;
}
.pricing__per-month {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #42489E;
  padding-bottom: 6px;
}
.pricing__divider {
  border: none;
  border-top: 1px solid rgba(19,19,19,0.1);
  margin: 0 0 24px;
}
.pricing__features {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}
.pricing__features-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  margin: 0;
}
.pricing__features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.pricing__feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  min-height: 30px;
}
.pricing__tick { flex-shrink: 0; }
.pricing__subscribe {
  width: 100%;
  height: 56px;
  background: #42489E;
  color: #FFFFFF;
  border: none;
  border-radius: 46px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin-top: auto;
}

/* Dots */
.pricing__dots {
  display: none;
  justify-content: center;
  gap: 8px;
}
.pricing__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D0D5DD;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, width 0.2s;
}
.pricing__dot--active {
  background: #42489E;
  width: 24px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .pricing {
    padding: 48px 0;
  }
  .pricing__container {
    padding: 0 24px;
    gap: 24px;
  }
  .pricing__track {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 0;
    padding: 16px 24px;
    margin: 0 -24px;
    scrollbar-width: none;
    filter: none;
    justify-content: flex-start;
  }
  .pricing__track::-webkit-scrollbar { display: none; }
  .pricing__card {
    flex: 0 0 85vw;
    min-width: unset;
    width: 85vw;
    scroll-snap-align: center;
    margin-right: 16px;
    transform: none !important;
    box-shadow: 0px 8px 24px rgba(0,0,0,0.08);
  }
  .pricing__dots { display: flex; }
}
</style>
