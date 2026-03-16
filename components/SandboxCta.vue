<template>
  <div class="sandbox">
    <div class="sandbox__container">
      <div class="sandbox__card">
        <div class="sandbox__text">
          <h3 class="sandbox__title">Start your 7-days free Sandbox Plan</h3>
          <p class="sandbox__subtitle">Join over 1,000+ startups already growing with Intelli Toggle.</p>
        </div>
        <div class="sandbox__actions">
          <button class="sandbox__btn sandbox__btn--outline">Learn more</button>
          <button class="sandbox__btn sandbox__btn--solid">Get started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sandbox {
  padding: 0 24px 64px;
}
.sandbox__container {
  max-width: 1240px;
  margin: 0 auto;
}
.sandbox__card {
  background: #E6E7F4;
  border-radius: 16px;
  padding: 40px 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.sandbox__text {
  flex: 1;
  min-width: 240px;
}
.sandbox__title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(20px, 3vw, 30px);
  color: #42489E;
  margin: 0 0 12px;
  line-height: 1.3;
}
.sandbox__subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 20px);
  color: #42489E;
  margin: 0;
  line-height: 1.5;
}
.sandbox__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.sandbox__btn {
  height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
}
.sandbox__btn--outline {
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  color: #344054;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
.sandbox__btn--solid {
  background: #42489E;
  border: none;
  color: #FFFFFF;
}
</style>