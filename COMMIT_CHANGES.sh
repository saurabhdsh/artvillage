#!/bin/bash

# Script to commit all custom domain changes to the repository
# Run this from your cloned repository folder

echo "Adding all changes..."
git add public/CNAME
git add package.json
git add src/components/AboutPage.js
git add src/components/Navigation.js

echo "Committing changes..."
git commit -m "Add custom domain configuration (theartvillage.co.in)

- Add CNAME file for custom domain
- Update package.json homepage to custom domain
- Add missing dependencies (react-slick, slick-carousel)
- Fix ESLint warnings in AboutPage and Navigation components"

echo "Pushing to main branch..."
git push origin main

echo "✅ All changes committed and pushed!"
