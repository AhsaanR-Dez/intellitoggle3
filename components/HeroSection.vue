<template>
  <section class="hero">
    <!-- Background glow blobs -->
    <div class="hero__blob hero__blob--right"></div>
    <div class="hero__blob hero__blob--left"></div>

    <div class="hero__content">
      <h1 class="hero__title">
        Control Features. Ship Smarter. Deliver Faster.
      </h1>

      <p class="hero__subtitle">
        Intelli Toggle helps teams launch features safely, run experiments,
        and manage feature flags across environments, without risky deployments.
      </p>

      <div class="hero__buttons">
        <button class="btn btn--white">Get Started</button>
        <button class="btn btn--outline">
          Explore
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFDFF" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10,8 16,12 10,16"/>
          </svg>
        </button>
      </div>

      <p class="hero__trust-label">Trusted by various engineering teams</p>

      <div class="hero__logos">
        <img src="/images/google-cloud.svg"  alt="Google Cloud"        />
        <img src="/images/aws.svg"            alt="Amazon Web Services" />
        <img src="/images/azure.svg"          alt="Microsoft Azure"     />
        <img src="/images/digitalocean.svg"   alt="Digital Ocean"       />
        <img src="/images/ibm.svg"            alt="IBM"                 />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 500px;
  background: #42489E;
  position: relative;
  overflow: hidden;
}

.hero__blob {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 253, 255, 0.2);
  filter: blur(100px);
  border-radius: 50%;
  pointer-events: none;
}
.hero__blob--right { right: 0; top: 100px; }
.hero__blob--left  { left: 0; bottom: 100px; }

.hero__content {
  max-width: 942px;
  margin: 0 auto;
  padding: 60px 24px 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__title {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  color: #FFFDFF;
  font-size: clamp(32px, 5vw, 64px);
  line-height: 1.3;
  margin: 0 0 24px;
}

.hero__subtitle {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  color: #FFFDFF;
  font-size: clamp(16px, 2vw, 24px);
  line-height: 1.5;
  max-width: 700px;
  margin: 0 0 40px;
}

.hero__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
}

.btn {
  height: 40px;
  padding: 0 24px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Merriweather Sans', sans-serif;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn--white   { background: #FFFDFF; border: none; color: #42489E; }
.btn--outline { background: transparent; border: 1px solid #FFFDFF; color: #FFFDFF; font-weight: 300; }

.hero__trust-label {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #FFFDFF;
  margin: 0 0 24px;
}

.hero__logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 480px;
}
.hero__logos img {
  height: 54px;
  width: auto;
}
</style>