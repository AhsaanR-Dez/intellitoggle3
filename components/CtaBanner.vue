<template>
  <div class="cta">
    <div class="cta__container">
      <div class="cta__card">
        <!-- Background glow -->
        <div class="cta__glow"></div>

        <div class="cta__content">
          <h2 class="cta__title">Toggle smarter. Deploy safer. Grow fast</h2>
          <p class="cta__subtitle">
            Whether you're a startup scaling fast or an enterprise moving carefully,
            Intelli Toggle helps you deliver better software, safely.
          </p>
          <button class="cta__btn">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta {
  padding: 0 24px 64px;
}
.cta__container {
  max-width: 1240px;
  margin: 0 auto;
}
.cta__card {
  background: #42489E;
  border-radius: 16px;
  padding: 64px 32px;
  min-height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cta__glow {
  position: absolute;
  width: 600px;
  height: 600px;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #FFFFFF, transparent);
  opacity: 0.15;
  filter: blur(80px);
  border-radius: 50%;
  pointer-events: none;
}
.cta__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
  text-align: center;
}
.cta__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 4vw, 36px);
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;
}
.cta__subtitle {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 18px);
  color: #FAFAFA;
  opacity: 0.9;
  margin: 0;
  line-height: 1.6;
}
.cta__btn {
  height: 47px;
  padding: 0 32px;
  background: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  cursor: pointer;
}
</style>