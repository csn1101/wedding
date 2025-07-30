# Indian Wedding Website - Image Upload Guide 📸

## 📁 First Step: Create Folder Structure

Before uploading any photos, create this exact folder structure in your `wedding_web` directory:

```
wedding_web/
├── images/
│   ├── couple/
│   ├── prewedding/
│   ├── haldi/
│   ├── ring/
│   ├── wedding/
│   ├── reception/
│   ├── family/
│   └── friends/
├── index.html
├── styles.css
└── script.js
```

**How to create folders:**
1. Right-click in your `wedding_web` folder
2. Select "New Folder" 
3. Create `images` folder first
4. Inside `images`, create all the subfolders listed above

## 🎯 Photo Upload Instructions by Section

### 1. � COUPLE PHOTOS → `images/couple/`

Upload these photos to the `couple` subfolder:

#### Main Hero Photo (Most Important!)
- **File Name**: `hero-photo.jpg`
- **Where it appears**: Main page header with your names and timer
- **Recommended size**: Portrait photo (taller than wide)
- **Best choice**: Your best couple photo, professional if available

#### Story Section Photos
- **File Name**: `how-we-met.jpg` → First story card ("How We Met")
- **File Name**: `first-family-visit.jpg` → Second story card ("First Family Visit")
- **File Name**: `first-mountain-together.jpg` → Third story card ("First Mountain Together")
- **File Name**: `first-ocean-together.jpg` → Fourth story card ("First Ocean Together")
- **Recommended size**: Landscape photos (wider than tall)

#### Gallery Photos
- **File Names**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Where they appear**: Main photo gallery under "Couple" filter
- **How many**: Upload 4-8 photos of just you two
- **Recommended size**: Any size, website will auto-resize

### 2. 🎪 EVENT PHOTOS

#### Pre-Wedding → `images/prewedding/`
- **Main photo**: `prewedding-main.jpg` (appears in event cards)
- **Gallery photos**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Where they appear**: Event section + photo gallery under "Pre-Wedding" filter

#### Haldi Ceremony → `images/haldi/`
- **Main photo**: `haldi-main.jpg` (appears in event cards)
- **Gallery photos**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Where they appear**: Event section + photo gallery under "Haldi" filter

#### Ring Ceremony → `images/ring/`
- **Main photo**: `ring-main.jpg` (appears in event cards)
- **Gallery photos**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Where they appear**: Event section + photo gallery under "Ring Ceremony" filter

#### Wedding Ceremony → `images/wedding/`
- **Main photo**: `wedding-main.jpg` (appears in event cards with crown icon)
- **Gallery photos**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Where they appear**: Event section + photo gallery under "Wedding" filter
- **Note**: This is marked as the main event

#### Reception → `images/reception/`
- **Main photo**: `reception-main.jpg` (appears in event cards)
- **Gallery photos**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Where they appear**: Event section + photo gallery under "Reception" filter

### 3. 👨‍👩‍👧‍👦 FAMILY PHOTOS → `images/family/`

Upload individual portrait photos:
- **File Name**: `bride-father.jpg` → Bride's father photo
- **File Name**: `bride-mother.jpg` → Bride's mother photo
- **File Name**: `groom-father.jpg` → Groom's father photo
- **File Name**: `groom-mother.jpg` → Groom's mother photo
- **Recommended size**: Portrait photos (taller than wide)
- **Where they appear**: Family section with labels

### 4. 👫 FRIENDS & RELATIVES → `images/friends/`

Upload group photos with these exact file names:
- **File Name**: `best-friends.jpg` → Your closest friends group
- **File Name**: `college-friends.jpg` → Friends from college
- **File Name**: `relatives-1.jpg` → Close relatives group photo
- **File Name**: `childhood-friends.jpg` → Friends from childhood
- **File Name**: `family-friends.jpg` → Long-time family friends
- **File Name**: `work-friends.jpg` → Colleagues and work friends
- **File Name**: `extended-family.jpg` → Cousins, aunts, uncles
- **File Name**: `mixed-group.jpg` → Mixed friends and family
- **Where they appear**: Friends gallery section with hover captions
- **Recommended size**: Various sizes for natural variety

## 🔧 How to Upload Photos

## 🔧 How to Upload Photos

### Step 1: Prepare Your Photos
1. **Rename your photos** to match the exact file names listed above
2. **Compress large photos** using tools like:
   - Online: TinyPNG.com or CompressJPEG.com
   - Windows: Right-click → Send to → Compressed folder
   - Mac: Use Preview → Export → Reduce file size

### Step 2: Copy Photos to Correct Folders
1. Open your `wedding_web/images/` folder
2. For each photo, copy it to the correct subfolder:
   - Couple photos → `couple/` folder
   - Event main photos → respective event folders (`haldi/`, `wedding/`, etc.)
   - Family photos → `family/` folder
   - Friends photos → `friends/` folder

### Step 3: Update Website Code
Once photos are in place, you need to update the HTML file:

1. **Open `index.html` in a text editor** (Notepad, VS Code, etc.)
2. **Find and Replace** placeholder URLs with your photo paths:

#### Example Replacements:
```html
<!-- Replace this placeholder -->
https://via.placeholder.com/600x800/f4f4f4/333?text=Bride+%26+Groom+Photo

<!-- With your photo path -->
images/couple/hero-photo.jpg
```

#### Quick Find & Replace List:
- Hero photo: Replace `https://via.placeholder.com/600x800/f4f4f4/333?text=Bride+%26+Groom+Photo` with `images/couple/hero-photo.jpg`
- How we met: Replace `https://via.placeholder.com/400x300/ffeaa7/2d3436?text=How+We+Met` with `images/couple/how-we-met.jpg`
- First family visit: Replace `https://via.placeholder.com/400x300/a29bfe/ffffff?text=First+Family+Visit` with `images/couple/first-family-visit.jpg`
- First mountain together: Replace `https://via.placeholder.com/400x300/74b9ff/ffffff?text=First+Mountain+Together` with `images/couple/first-mountain-together.jpg`
- First ocean together: Replace `https://via.placeholder.com/400x300/00cec9/ffffff?text=First+Ocean+Together` with `images/couple/first-ocean-together.jpg`
- Haldi main: Replace `https://via.placeholder.com/350x250/fdcb6e/2d3436?text=Haldi+Ceremony` with `images/haldi/haldi-main.jpg`
- Wedding main: Replace `https://via.placeholder.com/350x250/e84393/ffffff?text=Wedding+Ceremony` with `images/wedding/wedding-main.jpg`

## � Complete Upload Checklist

### ✅ Priority 1 - Must Have Photos:
- [ ] `images/couple/hero-photo.jpg` - Main couple photo
- [ ] `images/wedding/wedding-main.jpg` - Main wedding ceremony photo
- [ ] `images/couple/how-we-met.jpg` - How you met story photo

### ✅ Priority 2 - Important Photos:
- [ ] All 5 event main photos (prewedding, haldi, ring, wedding, reception)
- [ ] 4 family photos (both parents)
- [ ] Story section photos (how we met, first family visit, first mountain together, first ocean together)

### ✅ Priority 3 - Nice to Have:
- [ ] Gallery photos for each event (2-5 photos per event)
- [ ] 8 friends & relatives group photos
- [ ] Additional couple gallery photos

## 🚨 Common Mistakes to Avoid

1. **Wrong file names** - Use exact names listed above (case-sensitive!)
2. **Wrong folders** - Photos must be in correct subfolders
3. **Large file sizes** - Compress photos to under 1MB each
4. **Spaces in names** - Use hyphens instead of spaces in file names
5. **Forgetting to update HTML** - Must replace placeholder URLs in index.html

## 📐 Photo Size Guidelines

### Recommended Dimensions:
- **Hero photo**: 600x800px (portrait)
- **Story photos**: 400x300px (landscape)  
- **Event main photos**: 350x250px (landscape)
- **Family photos**: 200x250px (portrait)
- **Friends photos**: 300x250px to 300x400px (various)
- **Gallery photos**: Any size (auto-resized)

### File Size Limits:
- **Individual photos**: Under 1MB each
- **Total photos**: Keep under 50MB for fast loading

## 🎯 Testing Your Photos

After uploading and updating HTML:
1. **Open `index.html` in a web browser**
2. **Check each section** to see if photos appear
3. **Test on mobile** by resizing browser window
4. **Check gallery filters** work correctly

## 💡 Pro Tips

1. **Start with hero photo** - This makes the biggest visual impact
2. **Use consistent photo style** - Similar lighting/filters look professional
3. **Mix photo orientations** - Don't use all landscape or all portrait
4. **Include candid shots** - Not just posed photos
5. **Test loading speed** - If site loads slowly, compress photos more

## 🆘 Troubleshooting

**Photo not showing?**
- Check file name spelling exactly matches
- Verify photo is in correct subfolder
- Make sure HTML was updated with correct path

**Photo looks stretched/weird?**
- Try a different photo with better dimensions
- Crop photo to recommended aspect ratio

**Website loads slowly?**
- Compress photos more (aim for 200-500KB each)
- Reduce number of gallery photos temporarily
