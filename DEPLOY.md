# Pitha Post — Git setup
# Run these commands to push to GitHub then deploy on Vercel

# 1. Initialise git (already in d:\SaaS\pitha-post)
git init
git add .
git commit -m "feat: initial Pitha Post e-business site"

# 2. Create a repo on GitHub (github.com → New repository → pitha-post)
# Then link and push:
git remote add origin https://github.com/YOUR_USERNAME/pitha-post.git
git branch -M main
git push -u origin main

# 3. Go to vercel.com → Add New Project → Import the pitha-post repo
# Framework preset auto-detects as Vite — just click Deploy.
# No environment variables needed yet.
