<template>
  <section class="features">
    <div class="features__header">
      <h2 class="features__title">Features</h2>
      <p class="features__subtitle">
        Intelli Toggle gives you full control over your feature releases.<br>
        Here's what you get:
      </p>
    </div>

    <!-- Desktop: zigzag diagram -->
    <div class="features__desktop">
      <div class="features__scroll">
        <div class="features__diagram">
          <div class="features__line">
            <svg width="1016" height="192" viewBox="0 0 1016 192" fill="none">
              <path
                d="M0.4 0.73L142.9 190.73L312.9 0.73L502.9 190.73L665.9 0.73L878.9 190.73L1014.9 0.73"
                stroke="#B0B0CC" stroke-width="1.5"
              />
            </svg>
          </div>
          <div
            v-for="feat in row1" :key="feat.label"
            class="features__icon"
            :style="{ left: (feat.cx + 60 - 40) + 'px', top: '0px' }"
          >
            <div class="features__icon-circle">
              <img :src="feat.img" :alt="feat.label" class="features__icon-img" />
            </div>
            <span class="features__icon-label">{{ feat.label }}</span>
          </div>
          <div
            v-for="feat in row2" :key="feat.label"
            class="features__icon"
            :style="{ left: (feat.cx + 60 - 40) + 'px', top: '190px' }"
          >
            <div class="features__icon-circle">
              <img :src="feat.img" :alt="feat.label" class="features__icon-img" />
            </div>
            <span class="features__icon-label">{{ feat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile: simple 3-column grid -->
    <div class="features__mobile">
      <div class="features__grid">
        <div v-for="feat in allFeatures" :key="feat.label" class="features__grid-item">
          <div class="features__icon-circle">
            <img :src="feat.img" :alt="feat.label" class="features__icon-img" @error="(e) => (e.target as HTMLImageElement).style.opacity = '0.2'" />
          </div>
          <span class="features__icon-label">{{ feat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const row1 = [
  { label: 'A/B Testing',         img: '/images/A_B_Testing.png',        cx: 0      },
  { label: 'Team Collaboration',  img: '/images/TeamCollaboration.png',  cx: 312.9  },
  { label: 'CI/CD Integration',   img: '/images/CI_CD_Integration.png',  cx: 665.9  },
  { label: 'Real-time Analytics', img: '/images/RealTimeAnalytics.png',  cx: 1014.9 },
]
const row2 = [
  { label: 'Kill Switches',  img: '/images/KillSwitches.png',  cx: 142.9 },
  { label: 'Access Control', img: '/images/AccessControl.png', cx: 502.9 },
  { label: 'Feature Flags',  img: '/images/FeatureFlags.png',  cx: 878.9 },
]

// Mobile grid order: 3 columns, balanced rows
const allFeatures = [
  { label: 'A/B Testing',         img: '/images/A_B_Testing.png'       },
  { label: 'Feature Flags',       img: '/images/FeatureFlags.png'      },
  { label: 'Kill Switches',       img: '/images/KillSwitches.png'      },
  { label: 'Access Control',      img: '/images/AccessControl.png'     },
  { label: 'CI/CD Integration',   img: '/images/CI_CD_Integration.png' },
  { label: 'Team Collaboration',  img: '/images/TeamCollaboration.png' },
  { label: 'Real-time Analytics', img: '/images/RealTimeAnalytics.png' },
]
</script>

<style scoped>
.features {
  background: #FFFDFF;
  padding: 48px 0;
}
.features__header {
  text-align: center;
  padding: 0 24px;
  margin-bottom: 32px;
}
.features__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  color: #42489E;
  margin: 0 0 12px;
}
.features__subtitle {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #131313;
  margin: 0;
  line-height: 1.5;
}

/* Desktop diagram */
.features__desktop { display: block; }
.features__mobile  { display: none; }

.features__scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
}
.features__diagram {
  width: 1016px;
  height: 340px;
  position: relative;
  margin: 0 auto;
  padding: 0 60px;
  box-sizing: content-box;
}
.features__line {
  position: absolute;
  left: 60px;
  top: 40px;
  pointer-events: none;
}
.features__icon {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 80px;
  z-index: 1;
}
.features__icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0px 5px 2px rgba(0,0,0,0.01),
    0px 3px 2px rgba(0,0,0,0.05),
    0px 1px 1px rgba(0,0,0,0.09),
    0px 0px 1px rgba(0,0,0,0.10);
}
.features__icon-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.features__icon-label {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #131313;
  text-align: center;
  white-space: nowrap;
  background: #FFFDFF;
  padding: 2px 4px;
  position: relative;
  z-index: 2;
}

/* Mobile grid */
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 16px;
  padding: 0 24px;
}
.features__grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.features__grid-item .features__icon-label {
  font-size: 13px;
  white-space: normal;
  text-align: center;
}

@media (max-width: 768px) {
  .features__desktop { display: none; }
  .features__mobile  { display: block; }
}
</style>