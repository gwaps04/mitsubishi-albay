# How to Place Your 3 Hero Section Images

You have 2 easy options to place your 3 images:

---

### Option 1: Place Image Files in this `public` Folder (Recommended)
1. Copy or upload your 3 image files into this `public/` directory with these filenames:
   - `public/hero-1.jpg` (or .png / .webp)
   - `public/hero-2.jpg` (or .png / .webp)
   - `public/hero-3.jpg` (or .png / .webp)

2. In `src/lib/vehiclesData.ts`, update lines 173-195 to:
   ```typescript
   export const HERO_CAROUSEL_SLIDES: HeroSlide[] = [
     {
       id: 'slide-1',
       image: '/hero-1.jpg', // <-- your first image
       title: 'Drive Your Ambition Across Albay & Bicolandia',
       ...
     },
     {
       id: 'slide-2',
       image: '/hero-2.jpg', // <-- your second image
       title: 'Command Every Road in the Montero Sport',
       ...
     },
     {
       id: 'slide-3',
       image: '/hero-3.jpg', // <-- your third image
       title: 'Unmatched 4x4 Rally Power Built for Bicol Terrain',
       ...
     },
   ];
   ```

3. Git commit and push to your GitHub / Vercel repository. Vercel will immediately deploy and display your 3 images!

---

### Option 2: Use Online Image Links (CDN, Cloudinary, Imgur, etc.)
If your images are already hosted online, simply open `src/lib/vehiclesData.ts` and paste the URLs directly:
```typescript
image: 'https://your-domain.com/path-to-image-1.jpg',
```

---

### Auto Transition Effects:
- The carousel automatically transitions between all 3 images every 5 seconds.
- It includes a luxury crossfade opacity effect, subtle Ken-Burns zoom, and a live progress indicator.
- Any image aspect ratio (16:9, 4:3, widescreen) will automatically fill the background without stretching or distorting.
