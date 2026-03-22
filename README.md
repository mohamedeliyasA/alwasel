# AL Wasel Engineering Consultancy — Website

A premium Next.js website for AL Wasel Engineering Consultancy, Fujairah UAE.
Designed for deployment on Cloudflare Pages with automatic GitHub-based updates.

---

## 📁 Folder Structure

```
alwasel/
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (Navbar + Footer wrap every page)
│   ├── page.js                 # Homepage (assembles all sections)
│   ├── globals.css             # Global styles + Tailwind imports
│   ├── about/page.js           # About page
│   ├── services/page.js        # Services page
│   ├── projects/page.js        # Projects / Portfolio page
│   └── contact/page.js         # Contact page
│
├── components/                 # Reusable UI components
│   ├── Navbar.js               # Sticky responsive navigation
│   ├── Hero.js                 # Full-width hero with image slider
│   ├── Services.js             # Services grid section
│   ├── ProjectShowcase.js      # Interactive project slider
│   ├── AboutPreview.js         # About preview section
│   ├── ContactSection.js       # Contact form + info
│   └── Footer.js               # Site footer
│
├── public/                     # Static assets (images, logo)
│   ├── logo.png                ← PUT YOUR LOGO HERE
│   ├── project_photos_1.jpg    ← PUT YOUR PHOTOS HERE
│   ├── project_photos_2.jpg
│   └── ...
│
├── next.config.js              # Next.js config (static export for Cloudflare)
├── tailwind.config.js          # Tailwind CSS config with custom colors/fonts
├── postcss.config.js           # PostCSS config
├── jsconfig.json               # Path aliases (@/ = root)
├── package.json                # Dependencies
└── .gitignore                  # Git ignore rules
```

---

## 🚀 Step 1 — Initial Setup (Run Once)

### Prerequisites
Make sure you have these installed on your computer:
- **Node.js** (version 18 or higher): https://nodejs.org
- **Git**: https://git-scm.com
- **VS Code**: https://code.visualstudio.com

Check they're installed by opening a terminal and running:
```bash
node --version    # Should show v18.x.x or higher
git --version     # Should show git version x.x.x
```

### Install project dependencies

Open VS Code, open the `alwasel` folder, then open a terminal (Terminal → New Terminal):

```bash
npm install
```

This downloads all required packages. It may take 1–2 minutes.

---

## 💻 Step 2 — Run Locally (Development)

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You'll see the website live. Any changes you save in VS Code will instantly refresh the browser.

---

## 🖼️ Step 3 — Add Your Assets

### Add your logo
Copy your `logo.png` into the `/public/` folder.

Then in `components/Navbar.js`, find this comment and replace the `<div>` with:
```jsx
// BEFORE (remove this):
<div className="w-10 h-10 border border-gold flex items-center justify-center">
  <span className="text-gold font-display font-bold text-sm">AW</span>
</div>

// AFTER (use this):
<Image src="/logo.png" alt="AL Wasel Logo" width={48} height={48} />
```

### Add your project photos
Copy your photos into `/public/` with these exact names:
```
project_photos_1.jpg
project_photos_2.jpg
project_photos_3.jpg
project_photos_4.jpg
project_photos_5.jpg
```

Then in `components/Hero.js`, find the comment `{/* Uncomment below when you have actual images */}`:
1. Delete the gradient `<div>` above it
2. Uncomment the `<Image>` tag

Do the same in `components/ProjectShowcase.js`.

### Update project details
In `components/ProjectShowcase.js` and `app/projects/page.js`, update the `projects` array with your real project names, categories, locations, and years.

---

## 🌐 Step 4 — Deploy to Cloudflare Pages

### 4A — Create a GitHub account (if you don't have one)
Go to https://github.com and sign up for free.

### 4B — Create a new GitHub repository

1. Go to https://github.com/new
2. Repository name: `alwasel-website`
3. Keep it **Private** (recommended)
4. Click **Create repository**

### 4C — Push your code to GitHub

In your VS Code terminal (make sure you're in the `alwasel` folder):

```bash
# Initialize git (only do this once)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit — AL Wasel website"

# Connect to your GitHub repository
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/alwasel-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ Your code is now on GitHub.

### 4D — Create a Cloudflare account (if you don't have one)
Go to https://dash.cloudflare.com/sign-up and sign up for free.

### 4E — Connect GitHub to Cloudflare Pages

1. Log in to the Cloudflare Dashboard: https://dash.cloudflare.com
2. In the left sidebar, click **Workers & Pages**
3. Click **Create application**
4. Click the **Pages** tab
5. Click **Connect to Git**
6. Click **Connect GitHub** and authorize Cloudflare
7. Select your `alwasel-website` repository
8. Click **Begin setup**

### 4F — Configure Build Settings

Fill in these exact settings:

| Setting | Value |
|---|---|
| Project name | `alwasel-website` |
| Production branch | `main` |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `18` |

> **Important:** To set Node.js version:
> Scroll down to **Environment variables**, click **Add variable**:
> - Variable name: `NODE_VERSION`
> - Value: `18`

9. Click **Save and Deploy**

Cloudflare will now build your site. This takes 2–5 minutes the first time.

### 4G — Your site is live! 🎉

Once the build completes, Cloudflare will give you a URL like:
`https://alwasel-website.pages.dev`

---

## 🔄 Step 5 — Automatic Deployment (Every Push = Live Update)

After the initial setup, **every time you push code to GitHub, your site auto-updates**. No manual steps needed.

```bash
# Make your changes in VS Code, then:
git add .
git commit -m "Update project photos"
git push
```

Cloudflare detects the push → rebuilds → deploys automatically (usually within 2 minutes).

---

## 🌍 Step 6 — Add a Custom Domain (Optional)

To use `www.alwaselfuj.com` instead of `.pages.dev`:

1. In Cloudflare Dashboard → **Workers & Pages** → your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `www.alwaselfuj.com`
5. Follow Cloudflare's DNS instructions

If your domain is registered elsewhere (GoDaddy, Namecheap, etc.), you'll need to either:
- Transfer DNS to Cloudflare (recommended — free)
- Or add a CNAME record pointing to your `.pages.dev` URL

---

## 🎨 Customization Reference

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  gold: {
    DEFAULT: '#C8A96E',  // Main gold — change to match your logo
    light: '#DEC48E',
    dark: '#A8893E',
  },
  charcoal: {
    DEFAULT: '#0A0A0F',  // Main background
    ...
  }
}
```

### Contact Information
Update in `components/ContactSection.js` and `components/Footer.js`:
```js
const contactInfo = [
  { label: 'Office Address', value: 'YOUR ADDRESS HERE' },
  { label: 'Phone', value: '+971 XX XXX XXXX', href: 'tel:+971XXXXXXXX' },
  { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
]
```

### Stats (Hero section)
Update in `components/Hero.js`:
```js
const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  ...
]
```

---

## ❓ Common Issues

**Build fails with "out of memory"**
Add this to your Cloudflare environment variables:
- `NODE_OPTIONS` = `--max-old-space-size=4096`

**Images not showing**
Make sure images are in `/public/` and filenames match exactly (case-sensitive).

**Font not loading**
The fonts are loaded from Google Fonts. Ensure your deployment has internet access during build.

**Local changes not showing**
Stop the dev server (Ctrl+C) and restart with `npm run dev`.

---

## 📞 Technical Support

For website updates and technical modifications, provide this README to your developer.
All source code is in the GitHub repository connected to Cloudflare Pages.
