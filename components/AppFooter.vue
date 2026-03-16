<template>
  <footer class="footer">
    <div class="footer__container">

      <!-- Brand column -->
      <div class="footer__brand">
        <img src="/images/logo-dark.svg" alt="Intelli Toggle" class="footer__logo" />
        <p class="footer__desc">
          Intelli Toggle is built by AORTEM, a company focused on powering
          scalable, multi-platform developer tools.
        </p>
        <div class="footer__socials">
          <a href="#" class="footer__social-link" aria-label="Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>

      <!-- Company links -->
      <div class="footer__links-col">
        <p class="footer__col-heading">Company</p>
        <a v-for="link in companyLinks" :key="link" href="#" class="footer__link">{{ link }}</a>
      </div>

      <!-- Support links -->
      <div class="footer__links-col">
        <p class="footer__col-heading">Customer Support</p>
        <a v-for="link in supportLinks" :key="link" href="#" class="footer__link">{{ link }}</a>
      </div>

      <!-- Newsletter -->
      <div class="footer__newsletter">
        <p class="footer__newsletter-label">Subscribe to Newsletter</p>
        <div class="footer__newsletter-form">
          <input type="email" placeholder="Enter email address" class="footer__newsletter-input" />
          <button class="footer__newsletter-btn">Join</button>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const companyLinks = ['Pricing', 'Blog']
const supportLinks = ['Customer Support', 'Terms & conditions', 'Privacy Policy']
</script>

<style scoped>
.footer {
  background: #E6E7F3;
}
.footer__container {
  max-width: 1236px;
  margin: 0 auto;
  padding: 48px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

/* Brand */
.footer__brand {
  flex: 1;
  min-width: 220px;
  max-width: 339px;
}
.footer__logo {
  height: 48px;
  width: auto;
  margin-bottom: 16px;
  display: block;
}
.footer__desc {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #667085;
  margin: 0 0 16px;
}
.footer__socials {
  display: flex;
  gap: 10px;
}
.footer__social-link {
  width: 30px;
  height: 30px;
  background: #4B4B4B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Link columns */
.footer__links-col {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer__col-heading {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #98A2B3;
  margin: 0;
}
.footer__link {
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #667085;
  text-decoration: none;
}

/* Newsletter */
.footer__newsletter {
  flex: 1;
  min-width: 220px;
  max-width: 340px;
}
.footer__newsletter-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #A3ABBA;
  margin: 0 0 16px;
}
.footer__newsletter-form {
  display: flex;
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
}
.footer__newsletter-input {
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  outline: none;
  min-width: 0;
}
.footer__newsletter-btn {
  background: #42489E;
  color: #FAFAFA;
  border: none;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}
</style>