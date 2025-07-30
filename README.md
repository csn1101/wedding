# Beautiful Indian Wedding Website - Nidhi & Chandan 🎉

A stunning post-wedding celebration website for Nidhi & Chandan who got married on February 22, 2023 in Kolkata. The website perfectly blends traditional Indian wedding elements with modern web design, featuring a "Happily Married Since" timer and beautiful gallery showcasing their wedding journey.

## ✨ Features

### 🎨 Design Elements
- **Traditional + Modern**: Perfect blend of Indian wedding aesthetics with contemporary design
- **Responsive Design**: Looks beautiful on all devices (desktop, tablet, mobile)
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Elegant Typography**: Mix of decorative and readable fonts
- **Post-Marriage Focus**: Celebrates their married life journey

### 📸 Image Management
- **Auto-Resize System**: All images automatically resize based on their dimensions
- **Smart Placeholders**: Pre-configured placeholders for different image types
- **Image Categories**: Organized sections for couple, family, friends, and ceremony photos
- **Gallery Filters**: Interactive filtering by ceremony type (Haldi, Mehendi, Wedding, Reception)

### 🎪 Wedding Sections
- **Hero Section**: Beautiful couple photo with "Happily Married Since" timer
- **Our Story**: Timeline of their relationship journey  
- **Celebrations**: Beautiful showcase of all wedding ceremonies (without timing details)
- **Gallery**: Interactive photo gallery with modal view
- **Family**: Dedicated sections for both families and friends

### 🎯 Interactive Features
- **Married Since Timer**: Real-time display showing years, months, days, and hours since February 22, 2023
- **Image Modal**: Click to enlarge gallery photos
- **Scroll Animations**: Smooth animations as you scroll
- **Mobile Touch**: Swipe gestures on mobile devices

## 🖼️ Image Size Guidelines

The website automatically applies the following size classes based on your image dimensions:

### Auto-Resize Classes Available:
- `.img-small` - 150x150px (for thumbnails)
- `.img-medium` - 300x200px (for standard photos)
- `.img-large` - 400x300px (for feature photos)
- `.img-xl` - 500x400px (for hero images)
- `.img-portrait` - 300x400px (for portrait photos)
- `.img-landscape` - 400x250px (for landscape photos)
- `.img-square` - 300x300px (for square photos)
- `.img-cover` - 100% width, 300px height (for banners)

### Recommended Image Sizes:
- **Couple Hero Photo**: 600x800px
- **Story Images**: 400x300px
- **Event Cards**: 350x250px
- **Gallery Photos**: 400x500px (various sizes work)
- **Family Photos**: 200x250px
- **Friend Photos**: 150x150px (circular crop)

## 🎨 Customization Guide

### 1. Personal Information
Edit the following in `index.html`:

```html
<!-- Update bride and groom names -->
<span class="bride-name">Your Bride's Name</span>
<span class="groom-name">Your Groom's Name</span>

<!-- Update wedding date (already married) -->
<p class="wedding-date">Married on 22nd February 2023</p>
<p class="wedding-location">📍 Your Venue Name, Your City</p>
```

### 2. Wedding Date for Married Timer
Edit in `script.js`:

```javascript
// Wedding date: February 22, 2023 (already set for married couple)
const weddingDate = new Date('2023-02-22T00:00:00').getTime();
```

### 3. Your Story
Update the story section in `index.html`:

```html
<div class="story-text">
    <h3>How We Met</h3>
    <p>Replace with your actual love story...</p>
    <span class="story-date">Date: MM/YYYY</span>
</div>
```

### 4. Event Details
For each event in `index.html`, update:

```html
<div class="event-details">
    <h3>Your Event Name</h3>
    <p class="event-date">📅 Your Date</p>
    <p class="event-time">🕐 Time: Your Time</p>
    <p class="event-venue">📍 Your Venue</p>
    <p class="event-description">Your event description</p>
</div>
```

### 5. Family Information
Replace placeholder family members:

```html
<div class="family-member">
    <img src="path/to/your/image.jpg" alt="Family Member Name">
    <h4>Actual Name</h4>
    <p>Relationship</p>
</div>
```

### 6. Color Scheme
Main colors used (edit in `styles.css`):
- Primary Pink: `#e84393`
- Secondary Pink: `#fd79a8` 
- Yellow/Gold: `#fdcb6e`
- Background Gradients: Various warm tones

To change colors, search and replace these hex codes in `styles.css`.

## 📱 Adding Your Photos

### Step 1: Prepare Your Images
1. **Optimize file sizes**: Keep images under 1MB for web performance
2. **Use common formats**: JPG for photos, PNG for graphics
3. **Maintain aspect ratios**: The auto-resize system will handle sizing

### Step 2: Replace Placeholder Images
Replace the placeholder URLs with your actual image paths:

```html
<!-- Before -->
<img src="https://via.placeholder.com/600x800/f4f4f4/333?text=Bride+%26+Groom+Photo" alt="Bride and Groom">

<!-- After -->
<img src="images/couple-photo.jpg" alt="Bride and Groom">
```

### Step 3: Organize Your Images
Recommended folder structure:
```
wedding_web/
├── images/
│   ├── couple/
│   ├── haldi/
│   ├── mehendi/
│   ├── wedding/
│   ├── reception/
│   ├── family/
│   └── friends/
├── index.html
├── styles.css
└── script.js
```

## 🎪 Event Types Included

The website includes sections for traditional Indian wedding ceremonies:

1. **Haldi Ceremony** - Turmeric application ritual
2. **Mehendi Ceremony** - Henna application celebration  
3. **Sangam/Cocktail Party** - Pre-wedding celebration
4. **Wedding Ceremony** - Main marriage ritual
5. **Reception** - Grand celebration dinner
6. **Post-Wedding Function** - Additional celebration

Each event card can be customized with specific details, timings, and venues.

## 🔧 Technical Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Touch-friendly interface
- Optimized for all screen sizes

### Performance Optimizations
- Lazy loading for images
- Debounced scroll events
- Optimized CSS animations
- Compressed and minified assets

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Graceful degradation of features

## 🚀 Deployment

### Option 1: Simple Hosting
1. Upload all files to your web hosting service
2. Make sure `index.html` is in the root directory
3. Update image paths to match your hosting structure

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repositoryname`

### Option 3: Netlify (Recommended)
1. Drag and drop your project folder to Netlify
2. Automatic deployment and free hosting
3. Custom domain support available

## 🎨 Customization Tips

### Adding More Ceremonies
To add new ceremony types:

1. **Add HTML section**:
```html
<div class="event-card">
    <div class="event-image">
        <img src="your-image.jpg" alt="New Ceremony">
    </div>
    <div class="event-details">
        <h3>New Ceremony Name</h3>
        <!-- Add details -->
    </div>
</div>
```

2. **Add gallery filter**:
```html
<button class="filter-btn" data-filter="newceremony">New Ceremony</button>
```

3. **Add gallery items**:
```html
<div class="gallery-item newceremony">
    <img src="ceremony-photo.jpg" alt="New Ceremony Photo">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

### Changing Fonts
The website uses Google Fonts:
- **Dancing Script**: For decorative text
- **Playfair Display**: For headings
- **Poppins**: For body text

To change fonts, update the Google Fonts link in `index.html` and the font-family properties in `styles.css`.

## 🎉 Final Notes

This wedding website template is designed to be:
- **Easy to customize**: Clear structure and commented code
- **Beautiful by default**: Professional design that works immediately
- **Culturally appropriate**: Respectful blend of traditional and modern elements
- **Performance optimized**: Fast loading and smooth interactions
- **Mobile friendly**: Perfect experience on all devices

## 💝 Support

If you need help customizing your website:
1. Check the HTML comments for guidance
2. Use browser developer tools to test changes
3. Keep backups of your files before making major changes
4. Test on multiple devices and browsers

**Congratulations on your upcoming wedding! 🎊**

Enjoy your beautiful new wedding website, and may your special day be everything you've dreamed of! ✨
