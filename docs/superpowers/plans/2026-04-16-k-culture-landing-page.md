# K-Culture Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark-themed, mobile-first landing page for the Global K-Culture Elite Program with Stripe payment integration at `badabli.com/k-culture.html`.

**Architecture:** Single static HTML page (`k-culture.html`) with inline Tailwind CSS and GSAP animations. Stripe Checkout is handled via a Cloudflare Worker that creates payment sessions. A separate success page (`k-culture-success.html`) handles post-payment redirect.

**Tech Stack:** HTML, Tailwind CSS (CDN), GSAP ScrollTrigger, Stripe Checkout, Cloudflare Worker, Phosphor Icons

**Critical Constraints:**
- `index.html` and `program.html` MUST NOT be modified (except adding a nav link in the final task)
- Every section MUST be fully responsive (320px–1920px)
- Playwright test on both desktop (1280px) and mobile (375px) after each visual task

---

## File Structure

| File | Purpose |
|------|---------|
| `k-culture.html` | Main landing page (new) |
| `k-culture-success.html` | Post-payment thank you page (new) |
| `k-culture/` | Asset directory for K-Culture specific images (new) |
| Cloudflare Worker | `k-culture-checkout` — Stripe session creation (separate deployment) |

---

### Task 1: HTML Skeleton + Head + Hero Section

**Files:**
- Create: `k-culture.html`

- [ ] **Step 1: Create `k-culture.html` with full `<head>` and hero section**

The `<head>` must include: GA4 tag, SEO meta tags, OG tags, Tailwind CDN, GSAP CDN, Phosphor Icons, and a dark-theme Tailwind config. The hero section uses the sample image as background with overlay text.

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4X4L6N4JJ7"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4X4L6N4JJ7');
    </script>
    <title>Global K-Culture Elite Program | Bada BLI x Dongyang University</title>
    <meta name="description" content="Transform your K-Culture passion into a career. 4-year degree program with HYBE, SM, YG, JYP partnerships. Apply now — limited spots available.">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="canonical" href="https://badabli.com/k-culture.html">
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://badabli.com/k-culture.html">
    <meta property="og:title" content="Global K-Culture Elite Program | Bada BLI">
    <meta property="og:description" content="4-year degree + industry training with HYBE, SM, YG, JYP. From audition to global stage.">
    <meta property="og:image" content="https://badabli.com/bada%20bli%20hero%20sample%20pic.png">
    <meta property="og:site_name" content="Bada BLI">
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Global K-Culture Elite Program | Bada BLI">
    <meta name="twitter:description" content="4-year degree + industry training with HYBE, SM, YG, JYP. From audition to global stage.">
    <meta name="twitter:image" content="https://badabli.com/bada%20bli%20hero%20sample%20pic.png">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Phosphor Icons -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        kc: {
                            bg: '#0A0A0A',
                            card: '#111111',
                            border: 'rgba(255,255,255,0.1)',
                            accent: '#A855F7',
                            'accent-glow': '#C084FC',
                            blue: '#23508e',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .kc-glow { box-shadow: 0 0 30px rgba(168, 85, 247, 0.3); }
        .kc-glow-hover:hover { box-shadow: 0 0 40px rgba(168, 85, 247, 0.5); }
        .kc-text-gradient { background: linear-gradient(135deg, #A855F7, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .kc-reveal { opacity: 0; transform: translateY(40px); }
    </style>
</head>
<body class="bg-kc-bg text-white font-sans">
    <!-- HERO -->
    <section id="hero" class="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <!-- Background Image (will be replaced with video later) -->
        <img src="/bada%20bli%20hero%20sample%20pic.png" alt="K-Culture Program"
            class="absolute inset-0 w-full h-full object-cover object-center">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-kc-bg"></div>
        <!-- Top Logos -->
        <div class="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
            <a href="/" class="opacity-80 hover:opacity-100 transition">
                <img src="/logo-white.png" alt="Bada BLI" class="h-8 md:h-10">
            </a>
            <span class="text-white/50 text-xs tracking-widest uppercase">x Dongyang University</span>
        </div>
        <!-- Hero Content -->
        <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p class="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6">From Global Audition to Global Stage</p>
            <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-6 md:mb-8">
                Global<br>K-Culture<br>
                <span class="kc-text-gradient">Elite Program</span>
            </h1>
            <a href="#apply"
                class="inline-block bg-kc-accent hover:bg-kc-accent-glow text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full tracking-wider uppercase transition-all duration-300 kc-glow-hover">
                Apply Now
            </a>
        </div>
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <a href="#partners" class="text-white/40 text-xs tracking-widest uppercase flex flex-col items-center gap-2">
                <span>Scroll</span>
                <i class="ph ph-caret-down text-lg"></i>
            </a>
        </div>
    </section>

    <!-- Sections will be added in subsequent tasks -->

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify hero displays correctly**

Run: Open `k-culture.html` locally or via `python3 -m http.server 8080`
Verify:
- Full-screen hero image visible
- Title text "GLOBAL K-CULTURE ELITE PROGRAM" readable over image
- "Apply Now" button visible with purple glow
- Dark gradient overlay from top to bottom
- Mobile: text scales down, still readable at 375px

- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture.html 기본 구조 + Hero 섹션"
```

---

### Task 2: Industry Partners Section

**Files:**
- Modify: `k-culture.html` (add section after hero)

- [ ] **Step 1: Add Industry Partners section after the hero closing `</section>` tag**

Insert before the `<!-- Sections will be added -->` comment:

```html
    <!-- INDUSTRY PARTNERS -->
    <section id="partners" class="py-20 md:py-32 bg-kc-bg">
        <div class="container mx-auto px-6 md:px-12">
            <div class="text-center mb-12 md:mb-16 kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">Trusted By The Best</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">Industry Partners</h2>
            </div>
            <!-- Partner Logos Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto mb-16 kc-reveal">
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-lg tracking-wider">HYBE</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-lg tracking-wider">SM</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-lg tracking-wider">YG</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-lg tracking-wider">JYP</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-sm tracking-wider">ADOR</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-sm tracking-wider">THE BLACK LABEL</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-sm tracking-wider">STARSHIP</span>
                </div>
                <div class="bg-kc-card border border-kc-border rounded-2xl p-6 flex items-center justify-center h-20 hover:border-kc-accent/30 transition-colors">
                    <span class="text-white/70 font-bold text-sm tracking-wider">PLEDIS</span>
                </div>
            </div>
            <!-- Collaboration Types -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto kc-reveal">
                <div class="text-center p-6">
                    <i class="ph ph-buildings text-3xl text-kc-accent mb-3"></i>
                    <h3 class="text-white font-semibold mb-2">Field Training</h3>
                    <p class="text-white/50 text-sm">Embedded placements within partner agencies at the highest level.</p>
                </div>
                <div class="text-center p-6">
                    <i class="ph ph-briefcase text-3xl text-kc-accent mb-3"></i>
                    <h3 class="text-white font-semibold mb-2">Internships</h3>
                    <p class="text-white/50 text-sm">Structured programs coordinated directly with HR at major labels.</p>
                </div>
                <div class="text-center p-6">
                    <i class="ph ph-lightbulb text-3xl text-kc-accent mb-3"></i>
                    <h3 class="text-white font-semibold mb-2">Joint R&D</h3>
                    <p class="text-white/50 text-sm">Collaborative research bridging academic insight with industry innovation.</p>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Verify in browser — desktop and mobile**

Check: 8 partner logo cards in 4×2 grid (desktop) / 2×4 grid (mobile). 3 collaboration cards below. All text readable on both.

- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Industry Partners 섹션 추가"
```

---

### Task 3: Program Overview Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add Program Overview section after Partners**

```html
    <!-- PROGRAM OVERVIEW -->
    <section id="program" class="py-20 md:py-32 bg-kc-card">
        <div class="container mx-auto px-6 md:px-12">
            <div class="text-center mb-12 md:mb-16 kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">The Program</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-6">4-Year Degree. 5 Industry Tracks.<br class="hidden md:block"> <span class="kc-text-gradient">1 Global Stage.</span></h2>
                <p class="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">An audition-based degree and practical training programme designed to transform global talent into South Korean entertainment industry professionals.</p>
            </div>
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto kc-reveal">
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 text-center">
                    <p class="text-3xl md:text-5xl font-black kc-text-gradient mb-2">4</p>
                    <p class="text-white/50 text-xs md:text-sm uppercase tracking-wider">Years</p>
                </div>
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 text-center">
                    <p class="text-3xl md:text-5xl font-black kc-text-gradient mb-2">5</p>
                    <p class="text-white/50 text-xs md:text-sm uppercase tracking-wider">Tracks</p>
                </div>
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 text-center">
                    <p class="text-3xl md:text-5xl font-black kc-text-gradient mb-2">8+</p>
                    <p class="text-white/50 text-xs md:text-sm uppercase tracking-wider">Partners</p>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Verify — stats cards responsive, gradient text renders**
- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Program Overview 섹션 추가"
```

---

### Task 4: Director's Message Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add Director's Message section after Program Overview**

```html
    <!-- DIRECTOR'S MESSAGE -->
    <section id="message" class="py-20 md:py-32 bg-kc-bg">
        <div class="container mx-auto px-6 md:px-12 max-w-4xl">
            <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 kc-reveal">
                <!-- Photo -->
                <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-kc-accent/30 flex-shrink-0">
                    <img src="/New%20Ricky%20Lee%20PIC.png" alt="Ricky Lee, Director"
                        class="w-full h-full object-cover object-top">
                </div>
                <!-- Quote -->
                <div>
                    <i class="ph ph-quotes text-3xl text-kc-accent/40 mb-4 block"></i>
                    <p class="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                        This programme isn't just education — it's a launchpad. We're connecting the world's most passionate young talents directly with the architects of K-Pop. If you've dreamed of being part of this industry, this is your door.
                    </p>
                    <div>
                        <p class="text-white font-semibold">Ricky Lee</p>
                        <p class="text-white/40 text-sm">Director, Bada BLI</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Verify — photo + quote layout, mobile stacks vertically**
- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Director's Message 섹션 추가"
```

---

### Task 5: 5 Tracks Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add 5 Tracks section with card grid + roadmap timeline**

```html
    <!-- 5 TRACKS -->
    <section id="tracks" class="py-20 md:py-32 bg-kc-card">
        <div class="container mx-auto px-6 md:px-12">
            <div class="text-center mb-12 md:mb-16 kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">Specializations</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">5 Industry Tracks</h2>
            </div>
            <!-- Track Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 kc-reveal">
                <!-- Track 1 -->
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 hover:border-kc-accent/40 transition-all duration-300 kc-glow-hover group">
                    <i class="ph ph-music-notes text-3xl text-kc-accent mb-4 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-xl font-bold text-white mb-3">K-Pop Business</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Artist management, fandom business, and global production strategy.</p>
                </div>
                <!-- Track 2 -->
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 hover:border-kc-accent/40 transition-all duration-300 kc-glow-hover group">
                    <i class="ph ph-microphone-stage text-3xl text-kc-accent mb-4 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-xl font-bold text-white mb-3">K-Performance</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Concert planning, stage production, and performance branding.</p>
                </div>
                <!-- Track 3 -->
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 hover:border-kc-accent/40 transition-all duration-300 kc-glow-hover group">
                    <i class="ph ph-sparkle text-3xl text-kc-accent mb-4 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-xl font-bold text-white mb-3">K-Beauty Business</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Global beauty marketing, e-commerce, and brand launching.</p>
                </div>
                <!-- Track 4 -->
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 hover:border-kc-accent/40 transition-all duration-300 kc-glow-hover group">
                    <i class="ph ph-video-camera text-3xl text-kc-accent mb-4 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-xl font-bold text-white mb-3">K-Fusion Media & Content</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Content planning, SNS marketing, and YouTube business.</p>
                </div>
                <!-- Track 5 -->
                <div class="bg-kc-bg border border-kc-border rounded-2xl p-6 md:p-8 hover:border-kc-accent/40 transition-all duration-300 kc-glow-hover group sm:col-span-2 lg:col-span-1">
                    <i class="ph ph-rocket-launch text-3xl text-kc-accent mb-4 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-xl font-bold text-white mb-3">Global Entertainment Startup</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Business modelling, IP business, and platform entrepreneurship.</p>
                </div>
            </div>
            <!-- 4-Year Roadmap Timeline -->
            <div class="max-w-4xl mx-auto kc-reveal">
                <h3 class="text-center text-xl md:text-2xl font-bold text-white mb-10">4-Year Roadmap</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="relative bg-kc-bg border border-kc-border rounded-2xl p-6">
                        <div class="w-10 h-10 rounded-full bg-kc-accent/20 flex items-center justify-center mb-4">
                            <span class="text-kc-accent font-bold">1</span>
                        </div>
                        <h4 class="text-white font-semibold mb-2">Fundamentals</h4>
                        <p class="text-white/40 text-sm">Intensive Korean language + K-Culture foundation in English.</p>
                    </div>
                    <div class="relative bg-kc-bg border border-kc-border rounded-2xl p-6">
                        <div class="w-10 h-10 rounded-full bg-kc-accent/20 flex items-center justify-center mb-4">
                            <span class="text-kc-accent font-bold">2</span>
                        </div>
                        <h4 class="text-white font-semibold mb-2">Exploration</h4>
                        <p class="text-white/40 text-sm">Choose your track. Project-based learning begins.</p>
                    </div>
                    <div class="relative bg-kc-bg border border-kc-border rounded-2xl p-6">
                        <div class="w-10 h-10 rounded-full bg-kc-accent/20 flex items-center justify-center mb-4">
                            <span class="text-kc-accent font-bold">3</span>
                        </div>
                        <h4 class="text-white font-semibold mb-2">Deepening</h4>
                        <p class="text-white/40 text-sm">Living Lab + industry collaborative projects. Build your portfolio.</p>
                    </div>
                    <div class="relative bg-kc-bg border border-kc-border rounded-2xl p-6">
                        <div class="w-10 h-10 rounded-full bg-kc-accent/20 flex items-center justify-center mb-4">
                            <span class="text-kc-accent font-bold">4</span>
                        </div>
                        <h4 class="text-white font-semibold mb-2">Career Entry</h4>
                        <p class="text-white/40 text-sm">Internships, capstone projects, and job placement support.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Verify — 5 cards grid (3 cols desktop, 1 col mobile), roadmap 4 cols → 1 col**
- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture 5 Tracks + 4-Year Roadmap 섹션 추가"
```

---

### Task 6: Career Safety Net Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add Career Safety Net section**

```html
    <!-- CAREER SAFETY NET -->
    <section id="career" class="py-20 md:py-32 bg-kc-bg">
        <div class="container mx-auto px-6 md:px-12">
            <div class="text-center mb-12 md:mb-16 kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">After Graduation</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">Your Career, <span class="kc-text-gradient">Guaranteed</span></h2>
                <p class="text-white/50 max-w-xl mx-auto">No graduate is left without direction. Our 3-tier career safety net maps out every possible trajectory.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto kc-reveal">
                <!-- Plan A -->
                <div class="bg-kc-card border border-kc-border rounded-2xl p-8 text-center hover:border-kc-accent/40 transition-colors">
                    <div class="w-14 h-14 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-6">
                        <span class="text-kc-accent font-black text-xl">A</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Direct Entry</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Gain direct employment at major Korean agencies as an A&R specialist, artist manager, media PD, or global marketing professional.</p>
                </div>
                <!-- Plan B -->
                <div class="bg-kc-card border border-kc-border rounded-2xl p-8 text-center hover:border-kc-accent/40 transition-colors">
                    <div class="w-14 h-14 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-6">
                        <span class="text-kc-accent font-black text-xl">B</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Global Expansion</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Secure roles at international branches of Korean entertainment companies, or launch your own venture in your home country.</p>
                </div>
                <!-- Plan C -->
                <div class="bg-kc-card border border-kc-border rounded-2xl p-8 text-center hover:border-kc-accent/40 transition-colors">
                    <div class="w-14 h-14 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-6">
                        <span class="text-kc-accent font-black text-xl">C</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Academic Path</h3>
                    <p class="text-white/50 text-sm leading-relaxed">Progress to graduate school specialising in Arts Management, or pursue roles within cultural foundations and institutions.</p>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Verify — 3 cards side by side (desktop), stacked (mobile)**
- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Career Safety Net 섹션 추가"
```

---

### Task 7: Scholarship Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add Scholarship section**

```html
    <!-- SCHOLARSHIP -->
    <section id="scholarship" class="py-20 md:py-32 bg-kc-card">
        <div class="container mx-auto px-6 md:px-12 text-center">
            <div class="max-w-3xl mx-auto kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">Financial Support</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-6">Invest in Your Future</h2>
                <div class="bg-kc-bg border border-kc-accent/20 rounded-3xl p-8 md:p-12 mb-8 kc-glow">
                    <p class="text-5xl md:text-7xl font-black kc-text-gradient mb-4">100%</p>
                    <p class="text-white/70 text-lg md:text-xl">Tuition Waiver Available</p>
                    <p class="text-white/40 text-sm mt-2">For the full 4-year duration, based on audition performance</p>
                </div>
                <p class="text-white/50 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                    We invest in top-tier global talent. Scholarships are awarded based on your audition results and potential.
                    Graduate with an accredited 4-year degree, industry connections, and zero financial burden.
                </p>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Verify — "100%" large text with gradient, glow card**
- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Scholarship 섹션 추가"
```

---

### Task 8: FAQ Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add FAQ section with accordion**

```html
    <!-- FAQ -->
    <section id="faq" class="py-20 md:py-32 bg-kc-bg">
        <div class="container mx-auto px-6 md:px-12 max-w-3xl">
            <div class="text-center mb-12 md:mb-16 kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">Questions</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">FAQ</h2>
            </div>
            <div class="space-y-4 kc-reveal">
                <!-- FAQ Item 1 -->
                <div class="border border-kc-border rounded-2xl overflow-hidden">
                    <button onclick="this.parentElement.classList.toggle('faq-open')"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                        <span class="text-white font-medium text-sm md:text-base pr-4">Do I need to speak Korean to apply?</span>
                        <i class="ph ph-caret-down text-white/40 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300">
                        <p class="px-6 pb-6 text-white/50 text-sm leading-relaxed">No. Year 1 includes intensive Korean language courses. All introductory education is delivered in English. You'll build language skills progressively throughout the programme.</p>
                    </div>
                </div>
                <!-- FAQ Item 2 -->
                <div class="border border-kc-border rounded-2xl overflow-hidden">
                    <button onclick="this.parentElement.classList.toggle('faq-open')"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                        <span class="text-white font-medium text-sm md:text-base pr-4">How do I get a student visa for South Korea?</span>
                        <i class="ph ph-caret-down text-white/40 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300">
                        <p class="px-6 pb-6 text-white/50 text-sm leading-relaxed">Once accepted, Dongyang University will provide the necessary documents for your D-2 student visa application. Our team will guide you through the entire process.</p>
                    </div>
                </div>
                <!-- FAQ Item 3 -->
                <div class="border border-kc-border rounded-2xl overflow-hidden">
                    <button onclick="this.parentElement.classList.toggle('faq-open')"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                        <span class="text-white font-medium text-sm md:text-base pr-4">Is accommodation provided?</span>
                        <i class="ph ph-caret-down text-white/40 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300">
                        <p class="px-6 pb-6 text-white/50 text-sm leading-relaxed">Dongyang University offers on-campus dormitories and assists international students in finding suitable housing. Details are provided upon acceptance.</p>
                    </div>
                </div>
                <!-- FAQ Item 4 -->
                <div class="border border-kc-border rounded-2xl overflow-hidden">
                    <button onclick="this.parentElement.classList.toggle('faq-open')"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                        <span class="text-white font-medium text-sm md:text-base pr-4">Is the $20 application fee refundable?</span>
                        <i class="ph ph-caret-down text-white/40 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300">
                        <p class="px-6 pb-6 text-white/50 text-sm leading-relaxed">The application fee covers audition processing and is non-refundable. However, it guarantees your spot in the global audition review process.</p>
                    </div>
                </div>
                <!-- FAQ Item 5 -->
                <div class="border border-kc-border rounded-2xl overflow-hidden">
                    <button onclick="this.parentElement.classList.toggle('faq-open')"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                        <span class="text-white font-medium text-sm md:text-base pr-4">What does the audition process look like?</span>
                        <i class="ph ph-caret-down text-white/40 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300">
                        <p class="px-6 pb-6 text-white/50 text-sm leading-relaxed">Submit a 3-minute performance video online. Shortlisted candidates are invited to an in-person evaluation where Korean entertainment professionals assess your potential directly.</p>
                    </div>
                </div>
                <!-- FAQ Item 6 -->
                <div class="border border-kc-border rounded-2xl overflow-hidden">
                    <button onclick="this.parentElement.classList.toggle('faq-open')"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                        <span class="text-white font-medium text-sm md:text-base pr-4">Can I audition online?</span>
                        <i class="ph ph-caret-down text-white/40 transition-transform duration-300 flex-shrink-0"></i>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300">
                        <p class="px-6 pb-6 text-white/50 text-sm leading-relaxed">Yes. The first round is entirely online — submit your video and application form after payment. In-person evaluations are only for shortlisted candidates in select countries.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Add FAQ accordion CSS to the `<style>` block in `<head>`**

Add inside the existing `<style>` tag:

```css
.faq-open .max-h-0 { max-height: 200px; }
.faq-open .ph-caret-down { transform: rotate(180deg); }
```

- [ ] **Step 3: Verify — click FAQ items to expand/collapse, mobile touch works**
- [ ] **Step 4: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture FAQ 아코디언 섹션 추가"
```

---

### Task 9: Apply + Countdown + Payment Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add Apply section with countdown timer and Stripe button**

```html
    <!-- APPLY + PAYMENT -->
    <section id="apply" class="py-20 md:py-32 bg-kc-card relative overflow-hidden">
        <!-- Subtle glow background -->
        <div class="absolute inset-0 bg-gradient-to-b from-kc-accent/5 to-transparent"></div>
        <div class="container mx-auto px-6 md:px-12 relative z-10">
            <div class="text-center mb-12 md:mb-16 kc-reveal">
                <p class="text-kc-accent text-sm tracking-[0.3em] uppercase mb-3">Limited Spots</p>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">Your Journey <span class="kc-text-gradient">Starts Here</span></h2>
            </div>
            <!-- Countdown Timer -->
            <div class="max-w-lg mx-auto mb-12 kc-reveal">
                <p class="text-center text-white/50 text-sm mb-4 uppercase tracking-wider">Application Deadline</p>
                <div id="countdown" class="grid grid-cols-4 gap-3 md:gap-4">
                    <div class="bg-kc-bg border border-kc-accent/20 rounded-2xl p-4 md:p-6 text-center">
                        <p id="cd-days" class="text-3xl md:text-5xl font-black text-white">--</p>
                        <p class="text-white/40 text-xs uppercase tracking-wider mt-1">Days</p>
                    </div>
                    <div class="bg-kc-bg border border-kc-accent/20 rounded-2xl p-4 md:p-6 text-center">
                        <p id="cd-hours" class="text-3xl md:text-5xl font-black text-white">--</p>
                        <p class="text-white/40 text-xs uppercase tracking-wider mt-1">Hours</p>
                    </div>
                    <div class="bg-kc-bg border border-kc-accent/20 rounded-2xl p-4 md:p-6 text-center">
                        <p id="cd-mins" class="text-3xl md:text-5xl font-black text-white">--</p>
                        <p class="text-white/40 text-xs uppercase tracking-wider mt-1">Mins</p>
                    </div>
                    <div class="bg-kc-bg border border-kc-accent/20 rounded-2xl p-4 md:p-6 text-center">
                        <p id="cd-secs" class="text-3xl md:text-5xl font-black text-white">--</p>
                        <p class="text-white/40 text-xs uppercase tracking-wider mt-1">Secs</p>
                    </div>
                </div>
            </div>
            <!-- Process Steps -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 kc-reveal">
                <div class="text-center">
                    <div class="w-12 h-12 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-3">
                        <i class="ph ph-video-camera text-kc-accent text-xl"></i>
                    </div>
                    <p class="text-white text-sm font-medium">Prepare</p>
                    <p class="text-white/40 text-xs mt-1">3-min video</p>
                </div>
                <div class="text-center">
                    <div class="w-12 h-12 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-3">
                        <i class="ph ph-credit-card text-kc-accent text-xl"></i>
                    </div>
                    <p class="text-white text-sm font-medium">Pay</p>
                    <p class="text-white/40 text-xs mt-1">$20 USD</p>
                </div>
                <div class="text-center">
                    <div class="w-12 h-12 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-3">
                        <i class="ph ph-paper-plane-tilt text-kc-accent text-xl"></i>
                    </div>
                    <p class="text-white text-sm font-medium">Submit</p>
                    <p class="text-white/40 text-xs mt-1">Form + Video</p>
                </div>
                <div class="text-center">
                    <div class="w-12 h-12 rounded-full bg-kc-accent/10 flex items-center justify-center mx-auto mb-3">
                        <i class="ph ph-check-circle text-kc-accent text-xl"></i>
                    </div>
                    <p class="text-white text-sm font-medium">Review</p>
                    <p class="text-white/40 text-xs mt-1">Results notified</p>
                </div>
            </div>
            <!-- CTA Button -->
            <div class="text-center kc-reveal">
                <button id="checkout-btn" onclick="handleCheckout()"
                    class="inline-block bg-kc-accent hover:bg-kc-accent-glow text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 rounded-full tracking-wider uppercase transition-all duration-300 kc-glow-hover">
                    Apply Now — $20 USD
                </button>
                <p class="text-white/30 text-xs mt-4 flex items-center justify-center gap-2">
                    <i class="ph ph-lock-simple"></i> Secure payment powered by Stripe
                </p>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Add countdown JavaScript before `</body>`**

```html
    <script>
    // Countdown Timer — Deadline: May 31, 2026
    (function() {
        const deadline = new Date('2026-05-31T23:59:59+10:00').getTime();
        function updateCountdown() {
            const now = new Date().getTime();
            const diff = deadline - now;
            if (diff <= 0) {
                document.getElementById('cd-days').textContent = '0';
                document.getElementById('cd-hours').textContent = '0';
                document.getElementById('cd-mins').textContent = '0';
                document.getElementById('cd-secs').textContent = '0';
                return;
            }
            document.getElementById('cd-days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById('cd-hours').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('cd-mins').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('cd-secs').textContent = Math.floor((diff % (1000 * 60)) / 1000);
        }
        updateCountdown();
        setInterval(updateCountdown, 1000);
    })();

    // Stripe Checkout (placeholder — will connect to Cloudflare Worker)
    function handleCheckout() {
        // TODO: Replace with actual Cloudflare Worker endpoint
        alert('Stripe Checkout will be connected in the next task. Redirecting to payment...');
        // Production: fetch('/api/k-culture-checkout').then(r => r.json()).then(d => window.location.href = d.url);
    }

    // GSAP Scroll Reveal
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.kc-reveal').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        });
    });
    </script>
```

- [ ] **Step 3: Verify — countdown ticking, process steps visible, button clickable, GSAP scroll animations working**
- [ ] **Step 4: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Apply 섹션 + 카운트다운 + GSAP 애니메이션"
```

---

### Task 10: Footer Section

**Files:**
- Modify: `k-culture.html`

- [ ] **Step 1: Add Footer before closing `</body>` (above `<script>` tags)**

```html
    <!-- FOOTER -->
    <footer class="py-12 bg-kc-bg border-t border-kc-border">
        <div class="container mx-auto px-6 md:px-12">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <!-- Logos -->
                <div class="flex items-center gap-4">
                    <img src="/logo-white.png" alt="Bada BLI" class="h-6 opacity-60">
                    <span class="text-white/20">×</span>
                    <span class="text-white/60 text-sm font-medium">Dongyang University</span>
                </div>
                <!-- Contact -->
                <a href="mailto:global@badaglobal-bli.com" class="text-white/40 text-sm hover:text-kc-accent transition-colors">
                    global@badaglobal-bli.com
                </a>
                <!-- Copyright -->
                <p class="text-white/20 text-xs">
                    &copy; 2026 Bada BLI x Dongyang University. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
```

- [ ] **Step 2: Verify — footer centered on mobile, row on desktop**
- [ ] **Step 3: Commit**

```bash
git add k-culture.html
git commit -m "feat: k-culture Footer 섹션 추가"
```

---

### Task 11: Success Page + Stripe Worker Setup

**Files:**
- Create: `k-culture-success.html`

- [ ] **Step 1: Create success page**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Submitted | Global K-Culture Elite Program</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: { extend: { colors: { kc: { bg: '#0A0A0A', accent: '#A855F7' } }, fontFamily: { sans: ['Inter', 'sans-serif'] } } }
        }
    </script>
</head>
<body class="bg-kc-bg text-white font-sans min-h-screen flex items-center justify-center">
    <div class="text-center px-6 max-w-lg">
        <div class="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
            <svg class="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Application Received!</h1>
        <p class="text-white/60 mb-8 leading-relaxed">
            Thank you for applying to the Global K-Culture Elite Program.
            You will receive a confirmation email at the address you provided.
            Our team will review your submission and get back to you within 7 business days.
        </p>
        <a href="/k-culture.html" class="inline-block bg-kc-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-500 transition-colors">
            Back to Program
        </a>
    </div>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add k-culture-success.html
git commit -m "feat: k-culture 결제 성공 페이지 추가"
```

---

### Task 12: Stripe Cloudflare Worker

**Files:**
- New Cloudflare Worker: `k-culture-checkout`

- [ ] **Step 1: Create Stripe account**

사용자가 직접 https://dashboard.stripe.com/register 에서 가입. 가입 후 API 키(Secret Key) 확인.

- [ ] **Step 2: Create Cloudflare Worker via dashboard**

Cloudflare 대시보드 → Workers & Pages → 새 Worker 생성 → 이름: `k-culture-checkout`

Worker 코드:

```javascript
export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://badabli.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'mode': 'payment',
          'line_items[0][price_data][currency]': 'usd',
          'line_items[0][price_data][product_data][name]': 'Global K-Culture Elite Program — Application Fee',
          'line_items[0][price_data][unit_amount]': '2000',
          'line_items[0][quantity]': '1',
          'success_url': 'https://badabli.com/k-culture-success.html',
          'cancel_url': 'https://badabli.com/k-culture.html#apply',
        }),
      });

      const session = await response.json();
      return new Response(JSON.stringify({ url: session.url }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Payment session creation failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
```

- [ ] **Step 3: Add STRIPE_SECRET_KEY as Worker environment variable**

Cloudflare 대시보드 → Worker 설정 → Environment Variables → `STRIPE_SECRET_KEY` = Stripe 대시보드의 Secret Key

- [ ] **Step 4: Update `handleCheckout()` in k-culture.html**

Replace the placeholder function:

```javascript
async function handleCheckout() {
    const btn = document.getElementById('checkout-btn');
    btn.textContent = 'Processing...';
    btn.disabled = true;
    try {
        const res = await fetch('https://k-culture-checkout.melbada1974.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        if (data.url) {
            window.location.href = data.url;
        } else {
            throw new Error('No checkout URL');
        }
    } catch (err) {
        alert('Payment system is temporarily unavailable. Please try again or contact global@badaglobal-bli.com');
        btn.textContent = 'Apply Now — $20 USD';
        btn.disabled = false;
    }
}
```

- [ ] **Step 5: Commit**

```bash
git add k-culture.html
git commit -m "feat: Stripe Checkout 결제 연동"
```

---

### Task 13: Update sitemap + Navigation Link

**Files:**
- Modify: `sitemap.xml` (add k-culture page)
- Modify: `index.html` (add nav link — ONLY the navigation menu, nothing else)
- Modify: `program.html` (add nav link — ONLY the navigation menu, nothing else)

- [ ] **Step 1: Add k-culture.html to sitemap.xml**

Add before closing `</urlset>`:

```xml
  <url>
    <loc>https://badabli.com/k-culture.html</loc>
    <lastmod>2026-04-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
```

- [ ] **Step 2: Add "K-Culture" nav link in index.html and program.html navigation menus**

Find the navigation `<a>` tags and add one more link. This is the ONLY change to existing files — navigation link text and href only.

- [ ] **Step 3: Commit**

```bash
git add sitemap.xml index.html program.html
git commit -m "feat: K-Culture 페이지 sitemap 추가 + 네비게이션 링크"
```

---

### Task 14: Full Responsive Test + Deploy

**Files:**
- No new files

- [ ] **Step 1: Test desktop (1280px) with Playwright**

Navigate to `https://badabli.com/k-culture.html`, take full-page screenshot. Verify:
- All 10 sections render
- Countdown timer ticking
- FAQ accordion works
- No horizontal overflow

- [ ] **Step 2: Test mobile (375px) with Playwright**

Resize to 375px width, take full-page screenshot. Verify:
- All text readable, no overflow
- Cards stack vertically
- Buttons minimum 48px touch target
- Hero image covers full viewport

- [ ] **Step 3: Test existing pages are unaffected**

Navigate to `https://badabli.com/` and `https://badabli.com/program.html`. Verify identical to before (only nav link added).

- [ ] **Step 4: Push to deploy**

```bash
git push origin main
```

- [ ] **Step 5: Verify live site**

Navigate to `https://badabli.com/k-culture.html` and confirm all sections work on production.
