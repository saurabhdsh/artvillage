# Instructions to Commit Changes

Since we can't initialize git in the Downloads folder due to permissions, please follow these steps:

## Option 1: If you have the repository cloned elsewhere

1. **Navigate to your cloned repository:**
   ```bash
   cd /path/to/your/artvillage-repo
   ```

2. **Copy the changed files from Downloads:**
   ```bash
   cp /Users/saurabhdubey/Downloads/artvillage-main/public/CNAME ./public/
   cp /Users/saurabhdubey/Downloads/artvillage-main/package.json ./
   cp /Users/saurabhdubey/Downloads/artvillage-main/src/components/AboutPage.js ./src/components/
   cp /Users/saurabhdubey/Downloads/artvillage-main/src/components/Navigation.js ./src/components/
   ```

3. **Commit and push:**
   ```bash
   git add public/CNAME package.json src/components/AboutPage.js src/components/Navigation.js
   git commit -m "Add custom domain configuration (theartvillage.co.in)"
   git push origin main
   ```

## Option 2: Clone the repository fresh

1. **Clone the repository:**
   ```bash
   cd ~
   git clone https://github.com/saurabhdsh/artvillage.git
   cd artvillage
   ```

2. **Copy the changed files:**
   ```bash
   cp /Users/saurabhdubey/Downloads/artvillage-main/public/CNAME ./public/
   cp /Users/saurabhdubey/Downloads/artvillage-main/package.json ./
   cp /Users/saurabhdubey/Downloads/artvillage-main/src/components/AboutPage.js ./src/components/
   cp /Users/saurabhdubey/Downloads/artvillage-main/src/components/Navigation.js ./src/components/
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add custom domain configuration (theartvillage.co.in)

   - Add CNAME file for custom domain
   - Update package.json homepage to custom domain  
   - Add missing dependencies (react-slick, slick-carousel)
   - Fix ESLint warnings in AboutPage and Navigation components"
   git push origin main
   ```

## Files that were changed:

1. ✅ `public/CNAME` - Custom domain configuration
2. ✅ `package.json` - Updated homepage and added dependencies
3. ✅ `src/components/AboutPage.js` - Fixed unused variable warning
4. ✅ `src/components/Navigation.js` - Fixed unused import warning

## Quick Command (if you're in your repo folder):

```bash
# Make the script executable and run it
chmod +x /Users/saurabhdubey/Downloads/artvillage-main/COMMIT_CHANGES.sh
/path/to/your/repo/COMMIT_CHANGES.sh
```

Or manually:
```bash
git add public/CNAME package.json src/components/AboutPage.js src/components/Navigation.js
git commit -m "Add custom domain configuration (theartvillage.co.in)"
git push origin main
```
