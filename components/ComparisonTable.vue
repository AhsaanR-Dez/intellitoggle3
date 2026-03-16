<template>
  <section class="comparison" aria-label="Why Intelli Toggle comparison">
    <div class="comparison__container">
      <h2 class="comparison__title">Why Intelli Toggle?</h2>

      <div class="comparison__scroll">
        <table class="comparison__table">
          <thead>
            <tr>
              <th class="comparison__th comparison__th--empty"></th>
              <th class="comparison__th comparison__th--it">Intelli Toggle</th>
              <th class="comparison__th comparison__th--ld">LaunchDarkly</th>
              <th class="comparison__th comparison__th--fs">Flagsmith</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.label" class="comparison__row">
              <td class="comparison__label">{{ row.label }}</td>
              <td class="comparison__cell comparison__cell--it">
                <img v-if="row.it === true"  src="/images/black_Check.png" class="comparison__icon" alt="Yes" loading="lazy" />
                <img v-else                  src="/images/black_X.png"     class="comparison__icon" alt="No"  loading="lazy" />
              </td>
              <td class="comparison__cell comparison__cell--ld">
                <img v-if="row.ld === true"  src="/images/black_Check.png" class="comparison__icon" alt="Yes" loading="lazy" />
                <img v-else                  src="/images/black_X.png"     class="comparison__icon" alt="No"  loading="lazy" />
              </td>
              <td class="comparison__cell comparison__cell--fs">
                <img v-if="row.fs === true"  src="/images/black_Check.png" class="comparison__icon" alt="Yes"     loading="lazy" />
                <img v-else-if="row.fs === false" src="/images/black_X.png" class="comparison__icon" alt="No"     loading="lazy" />
                <span v-else class="comparison__limited">{{ row.fs }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { label: 'Dart-native SDK',         it: true,  ld: false, fs: false     },
  { label: 'Affordable for startups', it: true,  ld: false, fs: true      },
  { label: 'A/B testing built-in',    it: true,  ld: false, fs: 'Limited' },
  { label: 'OpenFeature Compatible',  it: true,  ld: true,  fs: true      },
  { label: 'Dev-first UI/UX',         it: true,  ld: false, fs: false     },
]
</script>

<style scoped>
.comparison {
  background: #FFFDFF;
  padding: 48px 0 0;
}
.comparison__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}
.comparison__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  color: #42489E;
  text-align: center;
  margin: 0 0 48px;
}

.comparison__scroll {
  width: 100%;
}

.comparison__table {
  border-collapse: collapse;
  min-width: unset;
  width: 100%;
  font-size: 110%;
}

/* Header row */
.comparison__th {
  height: 49px;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2.5vw, 22px);
  color: #FFFFFF;
  text-align: center;
  padding: 0 8px;
}
.comparison__label {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(13px, 2.5vw, 18px);
  color: #131313;
  padding: 14px 12px 14px 0;
  background: #FFFDFF;
}
.comparison__th--empty { background: transparent; }
.comparison__th--it    { background: #42489E; }
.comparison__th--ld    { background: #BD1C6F; }
.comparison__th--fs    { background: #2D142D; }

/* Body rows */
.comparison__row:last-child .comparison__label,
.comparison__row:last-child .comparison__cell {
  padding-bottom: 20px;
}
.comparison__row:first-child .comparison__label,
.comparison__row:first-child .comparison__cell {
  padding-top: 24px;
}

.comparison__cell {
  text-align: center;
  padding: 15px 12px;
  vertical-align: middle;
}
.comparison__cell--it { background: rgba(66,  72,  158, 0.35); }
.comparison__cell--ld { background: rgba(189, 28,  111, 0.35); }
.comparison__cell--fs { background: rgba(45,  20,  45,  0.35); }

.comparison__icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
.comparison__limited {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #131313;
}
</style>
