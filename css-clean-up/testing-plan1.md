# Testing Plan 1 — Post‑rename smoke & verification

Purpose: verify UI, JS, assets and responsiveness after class renames and apply small JS fix for mobile menu toggle.

---

## Quick smoke-test (manual)
1. Open `index.html` in browser or start Live Server.
2. Open DevTools (F12) → Console: confirm no errors.
3. Network tab: confirm successful 200 loads for:
   - style.css, lib/*.css, lib/*.js, fonts, images, icons.
4. Visual checks:
   - Hero/banner visible and styled.
   - Services, About, Blog, Footer sections present.
   - Images, icons (fontawesome) and fonts render.
5. Interactive checks:
   - Scroll → `#site-header` toggles `.sticky`.
   - Carousel (`.owl-carousel`) initializes (if present).
   - AOS animations run on scroll.
   - Mobile menu: hamburger opens sidebar and overlay; overlay click closes it.
6. Responsive:
   - Test breakpoints: mobile, tablet, desktop.
7. Links & forms:
   - Click key CTAs, internal links, buttons — no 404s.
8. Final: run Lighthouse (Performance / Accessibility / Best practices / SEO).

---

## Project search for remaining legacy classes
Use VS Code global search or run these PowerShell commands from project root:

```powershell
# find ph- classes in HTML/CSS/JS
Get-ChildItem -Recurse -Include *.html,*.css,*.js |
  Select-String -Pattern 'ph-[\w-]+' |
  Select Path,LineNumber,Line | Out-Host

# find bagels- classes
Get-ChildItem -Recurse -Include *.html,*.css,*.js |
  Select-String -Pattern 'bagels-[\w-]+' |
  Select Path,LineNumber,Line | Out-Host
```

Replace matches in VS Code after review (Ctrl+H). Keep replacements conservative and test per replace.

---

## Automated validation
- HTML validator: https://validator.w3.org/ (or vnu.jar)
- Run Chrome Lighthouse audits
- Accessibility: axe DevTools or axe Chrome extension
- CSS linting in editor

---

## Known JS mismatch & fix
Issue: script expected selectors `.sidebar-toggler` / `.sidebar-overlay` while markup uses `.navbar-menu-toggle` and `.mobile-menu-overlay` / `#left-sidebar` — mobile toggle may not work.

Apply this fixed script (or confirm your `script.js` matches):

```javascript
// snippet: mobile menu + sticky + carousel
AOS.init();

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:true,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:800,
        responsive:{0:{items:1},600:{items:2},1000:{items:3}}
    });

    // Sticky header
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 50) $('#site-header').addClass('sticky');
        else $('#site-header').removeClass('sticky');
    });

    // Mobile menu toggle (supports old & new class names)
    $(document).on('click', '.sidebar-toggler, .navbar-menu-toggle', function(e){
        e.preventDefault();
        var sidebarId = $(this).data('sidebar') || 'left-sidebar';
        $('#' + sidebarId).toggleClass('open');
        $('.mobile-menu-overlay, .sidebar-overlay').toggle();
    });

    // Close on overlay click
    $(document).on('click', '.mobile-menu-overlay, .sidebar-overlay', function(){
        $('.sidebar-nav, #left-sidebar').removeClass('open');
        $('.mobile-menu-overlay, .sidebar-overlay').hide();
    });
});
```

---

## Post-fix verification checklist
1. Console: no JS errors.
2. On mobile widths:
   - Click hamburger → `#left-sidebar` gets `.open`.
   - `.mobile-menu-overlay` becomes visible.
   - Click overlay → sidebar closes and overlay hides.
3. Carousel and AOS function.
4. No broken CSS selectors (use DevTools Elements to inspect renamed class presence).
5. Files load without 404s.

---

## Optional next steps
- Produce a replace-map (old → new) file to apply programmatically.
- Split CSS into modular files and update enqueue map if converting to WordPress theme.
- Run final Lighthouse and address top suggestions.
