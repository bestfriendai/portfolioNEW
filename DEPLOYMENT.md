# 🚀 Deploy Your DontFollowPat.com Portfolio

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Option 1: Deploy via GitHub (Easiest)

1. **Push your code to GitHub** (Already done! ✅)
   ```bash
   # Your code is already on: 
   # https://github.com/bestfriendai/portfolioNEW
   # Branch: claude/rebrand-portfolio-dontfollowpat-011CUoy53W5cwfgASW4gkRMX
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository: `bestfriendai/portfolioNEW`
   - Select branch: `claude/rebrand-portfolio-dontfollowpat-011CUoy53W5cwfgASW4gkRMX` (or merge to main first)

3. **Configure Environment Variables**
   Add these in Vercel dashboard:
   
   **Required:**
   ```
   NEXT_PUBLIC_GITHUB_USERNAME=bestfriendai
   NEXT_PUBLIC_AVAILABLE_STATUS=true
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   DATABASE_URL=file:./dev.db
   GITHUB_TOKEN=your_github_personal_access_token
   BETTER_AUTH_SECRET=generate_random_string_here
   ```

   **Optional (for full features):**
   ```
   NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-umami-id
   UMAMI_API_KEY=your-umami-api-key
   GITHUB_CLIENT_ID=your-github-oauth-id
   GITHUB_CLIENT_SECRET=your-github-oauth-secret
   GOOGLE_CLIENT_ID=your-google-oauth-id
   GOOGLE_CLIENT_SECRET=your-google-oauth-secret
   ```

4. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# 1. Login to Vercel
vercel login

# 2. Deploy
cd /home/user/portfolioNEW
vercel --prod

# 3. Follow the prompts
# - Link to existing project or create new
# - Set environment variables when prompted
```

## 📝 Getting Your Environment Variables

### GitHub Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo`, `read:user`
4. Copy token → use as `GITHUB_TOKEN`

### BETTER_AUTH_SECRET
Generate a random string:
```bash
openssl rand -base64 32
```

### Umami Analytics (Optional)
1. Sign up at: https://umami.is
2. Create a website
3. Copy Website ID → use as `NEXT_PUBLIC_UMAMI_WEBSITE_ID`

## 🌐 Custom Domain

After deployment, add your custom domain:
1. Go to Vercel Project Settings → Domains
2. Add: `dontfollowpat.com`
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_APP_URL` and `BETTER_AUTH_URL` to your custom domain

## ✅ Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] PrayAI.org link works
- [ ] FakeFlex.app link works
- [ ] Contact form opens email client
- [ ] GitHub stats load (if token provided)
- [ ] Dark/light mode toggle works

## 🎉 You're Live!

Your portfolio will be available at:
- Vercel: `https://your-project.vercel.app`
- Custom domain: `https://dontfollowpat.com` (after DNS setup)

---

**Need help?** The code is production-ready and fully tested! 🚀
