# CSS Class Renaming Guide - For Clarity & WordPress Best Practices

## 📋 Current vs Recommended Names

### **Header & Navigation**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `#site-header` | `#site-header` | ✅ Already clear | Keep |
| `#main-navbar` | `#main-navbar` | ✅ Already clear | Keep |
| `.navbar-brand` | `.navbar-brand` | ✅ Bootstrap standard | Keep |
| `.nav-links` | `.nav-links` | ✅ Already clear | Keep |
| `.header-ham-icon` | `.header-menu-toggle`✅ | More descriptive | Easy |
| `.contact-info-bar` | `.header-contact-bar`✅ | More semantic | Easy |
| `.sidebar-nav` | `.mobile-menu`✅ | Clearer purpose | Easy |
| `.sidebar-overlay` | `.mobile-menu-overlay`✅ | More descriptive | Easy |

---

### **Banner/Hero Section**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `.banner-text` | `.banner-content`✅ | More semantic | Easy |
| `.banner-text-1` | `.banner-main-text`✅ | Clearer hierarchy | Medium |
| `.banner-text-2` | `.banner-secondary-text`✅ | Clearer hierarchy | Medium |
| `.banner-text-title` | `.banner-title`✅ | Shorter, clearer | Easy |
| `.banner-text-descr` | `.banner-description`✅ | Full word | Easy |
| `.banner-text-tagline` | `.banner-tagline`✅ | More specific | Easy |
| `.ph-header-section` | `.banner-section`✅ | Shorter, clearer | Easy |

---

### **Services Section**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `.ph-services` | `.services-section`✅ | More readable | Easy |
| `.ph-svs-heading` | `.services-heading`✅ | Clearer prefix | Easy |
| `.ph-svs-s-single` | `.service-card`✅ | Much clearer | Medium |
| `.ph-svs-s-s-title` | `.service-card-title`✅ | Hierarchical | Easy |
| `.ph-svs-s-s-dscr` | `.service-card-description✅` | Full word | Easy |
| `.ph-svs-s-s-icon` | `.service-card-icon`✅ | More semantic | Easy |
| `.ph-svs-s-s-icon-large` | `.service-card-icon-large`✅ | Standard suffix | Easy |
| `.ph-svs-s-s-link` | `.service-card-link`✅ | Clearer | Easy |
| `.ph-svs-s-s-l-icon` | `.service-card-link-icon`✅ | More specific | Easy |
| `.ph-svs-read-more` | `.service-read-more`✅ | Shorter | Easy |
| `.ph-svs-bg-img` | `.services-bg-image`✅ | More clear | Easy |

---

### **About Section**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `.ph-about-us` | `.about-section`✅ | Shorter, clearer | Easy |
| `.ph-au-1` | `.about-wrapper`✅ | More semantic | Easy |
| `.ph-au-l-1` | `.about-left`✅ | Simpler | Easy |
| `.ph-au-l-image` | `.about-image`✅ | Shorter | Easy |
| `.ph-au-l-text-box` | `.about-content`✅ | More semantic | Easy |
| `.ph-au-l-tb-vertical-strip` | `.about-accent-strip`✅ | More descriptive | Medium |
| `.ph-au-l-tb-vs-1` | `.about-accent-strip-item`✅ | Clearer hierarchy | Easy |

---

### **Blog Section**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `.ph-blogs` | `.blog-section`✅ | Shorter, clearer | Easy |
| `.ph-bl-bb-b-1` | `.blog-card`✅ | Much clearer | Medium |
| `.ph-bl-bb-b-title` | `.blog-card-title❌🛑` | Hierarchical | Easy |
| `.ph-bl-bb-b-img` | `.blog-card-image`❌🛑 | Full word | Easy |
| `.ph-bl-bb-b-date` | `.blog-card-date`❌🛑 | More specific | Easy |
| `.ph-bl-bb-b-excerpt` | `.blog-card-excerpt`❌🛑 | More semantic | Easy |
| `.ph-bl-bb-b-read-more` | `.blog-read-more`❌🛑 | Clearer | Easy |

---

### **Footer Section**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `.footer-cta-banner` | `.footer-cta`✅ | Shorter | Easy |
| `#footer-widget-area` | `#footer-widgets`✅ | Shorter | Easy |
| `#footer-bottom` | `#footer-copyright`✅ | More specific | Easy |
| `.cta-1` | `.cta-content`✅ | More semantic | Easy |

---

### **Utility Classes**

| Current Name | Recommended Name | Reason | Difficulty |
|-------------|-----------------|--------|------------|
| `.bagels-pos-relative` | `.util-relative`✅ | Shorter, clearer prefix | Medium |
| `.bagels-pos-absolute` | `.util-absolute`✅ | Standard naming | Medium |
| `.bagels-flex-center-xy` | `.util-flex-center`✅ | Shorter | Medium |
| `.bagels-flex` | `.util-flex`✅ | Clearer | Medium |
| `.bagels-flex-dir-col-rev` | `.util-flex-col-reverse`❌🛑 | More readable | Medium |
| `.bagels-justify-center` | `.util-justify-center`❌🛑 | Bootstrap-like | Medium |
| `.bagels-cover-img` | `.util-cover-image`✅ | Full words | Medium |
| `.bagels-align-center` | `.util-align-center`✅ | Consistent | Medium |
| `.bagels-overlay` | `.util-overlay`✅ | Clearer | Medium |
| `.bagels-overlay-hover-elem` | `.util-overlay-hover`❌ | Shorter | Medium |
| `.bagels-trans-p-2` | `.util-transition`✅ | More clear | Medium |
| `.bagels-float-on-hover` | `.util-float-on-hover`✅ | Clearer | Medium |
| `.bagels-vp-height` | `.util-full-height`✅ | More descriptive | Medium |
| `.bagels-sprite` | `.util-sprite`✅ | Keep as-is | Keep |
| `.bagels-ff-gilroy-bold` | `.util-font-gilroy-bold`✅ | More semantic | Easy |
| `.bagels-ff-gilroy-bold-alt` | `.util-font-gilroy-alt`🛑 | Shorter | Easy |
| `.bagels-filter-black-to-red` | `.util-filter-red`✅ | Shorter | Easy |
| `.bagels-before-pos-absolute` | `.util-pseudo-absolute`✅ | More clear | Easy |
| `.bagels-after-pos-absolute` | `.util-pseudo-absolute`🛑 | More clear | Easy |
| `.h-p-ul-m-0` | `.util-reset-spacing`✅ | Much clearer! | Easy |

---

### **Bootstrap Defaults (Keep As-Is)**

```css
.container              ✅ Keep
.row                    ✅ Keep
.collapse               ✅ Keep
.navbar-collapse        ✅ Keep
.navbar-nav             ✅ Keep
.navbar-right           ✅ Keep
.visible-xs             ✅ Keep
.visible-sm             ✅ Keep
.hidden-xs              ✅ Keep
.hidden-sm              ✅ Keep
```

---

## 🛠️ Renaming Strategy

### **Step 1: Easy Renames (10 minutes)**
Start with these - single section, no dependencies:

````css
/* BANNER SECTION */
.banner                 → .hero-banner
.banner-text            → .hero-content
.banner-text-title      → .hero-title
.banner-text-descr      → .hero-description
.banner-text-tagline    → .hero-tagline
.banner-container       → .hero-container
.ph-header-section      → .banner-section

/* FOOTER SECTION */
.footer-cta-banner      → .footer-cta
#footer-widget-area     → #footer-widgets
#footer-bottom          → #footer-copyright
.cta-1                  → .cta-content
````

### **Step 2: Medium Renames (15 minutes)**

````css
/*These require updating multiple CSS rules:*/
/* SERVICES SECTION */
.ph-services            → .services-section
.ph-svs-heading         → .services-heading
.ph-svs-s-single        → .service-card
.ph-svs-s-s-title       → .service-card-title
.ph-svs-s-s-dscr        → .service-card-description
.ph-svs-s-s-icon        → .service-card-icon
.ph-svs-read-more       → .service-read-more

/* ABOUT SECTION */
.ph-about-us            → .about-section
.ph-au-l-image          → .about-image
.ph-au-l-text-box       → .about-content
.ph-au-l-tb-vertical-strip → .about-accent-strip

/* BLOG SECTION */
.ph-blogs               → .blog-section
.ph-bl-bb-b-1           → .blog-card
.ph-bl-bb-b-title       → .blog-card-title
.ph-bl-bb-b-img         → .blog-card-image
````

### **Step 3: Utility Class Renames (20 minutes)**
````css
/*Bulk replace all bagels-* and h-p-ul-m-0:*/
.bagels-pos-relative    → .util-relative
.bagels-pos-absolute    → .util-absolute
.bagels-flex-center-xy  → .util-flex-center
.bagels-flex            → .util-flex
.bagels-cover-img       → .util-cover-image
.h-p-ul-m-0             → .util-reset-spacing

/****************************************************************************************/
````

### Classes to Rename
General Classes
````css
.ph-main-sec → .main-section✅ (more descriptive)
.ph-bl-1 → .blog-section-wrapper🛑 (more descriptive)
.ph-bl-heading → .blog-heading ✅(more concise)

Service Section Classes
.ph-svs-services → .services-list✅ (more descriptive)
.ph-svs-s-1 → .service-carousel🛑 (clarifies purpose)
.ph-svs-s-single → .service-card❌🛑 (already renamed, but ensure consistency)
.service-read-more → .service-more-info✅ (clarifies its purpose)

About Section Classes
.ph-au-title → .about-title✅ (more concise)
.ph-au-l-tb-title → .about-title-container✅ (more descriptive)
.about-wrapper → .about-content-wrapper✅ (more descriptive)
.ph-au-left → .about-left-column✅ (more descriptive)
.ph-au-r-title → .about-right-title✅ (more concise)
.ph-au-r-descr → .about-right-description✅ (more concise)

Blog Section Classes
.ph-bl-blog-boxes → .blog-boxes🛑 (more concise)
.ph-bl-bb-1 → .blog-carousel (clarifies purpose)
.ph-bl-1 → .blog-section❌🛑 (more descriptive)
.ph-bl-heading → .blog-heading❌🛑 (more concise)
.ph-bl-bb-box → .blog-card (more concise)🛑



Footer Classes
.fwb-contact-info → .footer-contact-info✅ (more descriptive)
.fwb-menu → .footer-menu ✅(more descriptive)
````