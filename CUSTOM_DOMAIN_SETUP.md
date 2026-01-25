# Custom Domain Setup Guide for theartvillage.co.in

## ✅ Code Changes Completed

I've made the following changes to your codebase:
1. ✅ Created `public/CNAME` file with your domain: `theartvillage.co.in`
2. ✅ Updated `package.json` homepage to use your custom domain

## 📋 Next Steps to Complete Setup

### Step 1: Configure DNS at GoDaddy

1. Log in to your GoDaddy account
2. Go to **My Products** → **Domains** → Click on **theartvillage.co.in**
3. Click on **DNS** or **Manage DNS**
4. Add/Update the following DNS records:

   **For Apex Domain (theartvillage.co.in):**
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `185.199.108.153`
   - **TTL:** 600 (or default)
   
   Add 3 more A records with the same name but different values:
   - **Type:** A, **Name:** @, **Value:** `185.199.109.153`
   - **Type:** A, **Name:** @, **Value:** `185.199.110.153`
   - **Type:** A, **Name:** @, **Value:** `185.199.111.153`

   **For www subdomain (optional but recommended):**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `saurabhdsh.github.io`
   - **TTL:** 600 (or default)

   > **Note:** These are GitHub Pages IP addresses. If you want to use www.theartvillage.co.in, you'll need to add a CNAME record for www pointing to your GitHub Pages URL.

### Step 2: Configure GitHub Pages Settings

1. Go to your GitHub repository: `https://github.com/saurabhdsh/artvillage`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Custom domain**, enter: `theartvillage.co.in`
5. Check the box **"Enforce HTTPS"** (this will be available after DNS propagates)
6. Click **Save**

### Step 3: Deploy the Changes

After making the code changes, you need to rebuild and redeploy:

```bash
npm run deploy
```

This will:
- Build your React app with the new homepage URL
- Deploy to the `gh-pages` branch with the CNAME file

### Step 4: Wait for DNS Propagation

- DNS changes can take **24-48 hours** to fully propagate
- You can check DNS propagation status at: https://www.whatsmydns.net/#A/theartvillage.co.in
- Once DNS is propagated, GitHub will automatically detect your domain

### Step 5: Verify Everything Works

1. Visit `https://theartvillage.co.in` (may take a few minutes to hours after DNS propagates)
2. Check that GitHub shows "DNS check successful" in Pages settings
3. Enable "Enforce HTTPS" in GitHub Pages settings (available after DNS check passes)

## 🔍 Troubleshooting

### If the domain doesn't work after 48 hours:

1. **Verify DNS records** are correct in GoDaddy
2. **Check GitHub Pages settings** - make sure the custom domain is saved
3. **Clear browser cache** or try incognito mode
4. **Check DNS propagation** using online tools

### Common Issues:

- **"DNS check failed"**: Wait longer for DNS propagation or verify DNS records
- **"Site not secure"**: Enable "Enforce HTTPS" in GitHub Pages settings after DNS propagates
- **404 errors**: Make sure you've run `npm run deploy` after the changes

## 📝 Important Notes

- The CNAME file must be in the `public` folder (which gets deployed to gh-pages branch)
- The homepage in package.json must match your custom domain
- DNS changes can take up to 48 hours to propagate globally
- GitHub Pages will automatically create SSL certificates once DNS is configured

## 🎉 After Setup

Once everything is configured:
- Your site will be accessible at `https://theartvillage.co.in`
- The old GitHub Pages URL will redirect to your custom domain
- HTTPS will be automatically enabled by GitHub
