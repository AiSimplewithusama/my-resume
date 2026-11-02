# My Resume Website

A one-page resume website in plain HTML, CSS and JavaScript. Nothing to install, nothing to build.

## Files

| File | What it does |
|---|---|
| `index.html` | The page structure |
| `style.css` | Colours, fonts and layout (light, dark and print) |
| `script.js` | **Your content.** Name, jobs, skills, projects and links are all at the top. This is the only file you need to edit. |
| `README.md` | This guide |
| `.gitignore` | Tells GitHub which system files to skip |
| `CV.pdf` | Your CV (you add this) — the "Download CV" button gives it to visitors |
| `photo.jpg` | Your photo (you add this) — use a square image |

## 1. Save the files (Windows)

1. On your desktop, right-click → **New** → **Folder**. Name it `my-resume` (small letters, no spaces).
2. For each file: click **Copy** on the code, open **Notepad**, paste.
3. Click **File** → **Save As**. At the bottom set **Save as type** to **All files**, type the exact name (for example `index.html`) and save it into `my-resume`.
   - If "Save as type" stays on *Text documents*, Windows adds `.txt` and the site will not load.
4. To check the names: open File Explorer → **View** → **Show** → turn on **File name extensions**.

## 2. Add your CV and photo

- Save your CV as a PDF named `CV.pdf` in the folder.
  No CV yet? Open the site in your browser, press **Ctrl + P** and choose **Save as PDF** — the site prints as a clean CV.
- Add a square photo named `photo.jpg`. Then open `script.js`, find the `photo:` line and change the link to `"photo.jpg"`.
- Double-click `index.html` to check everything on your computer.

## 3. Put it on GitHub

Create a free account at github.com, then click **+** → **New repository**, name it `my-resume`, set it to **Public** and click **Create repository**.

**Option A — Command Prompt** (needs Git from git-scm.com, default settings):

Open your `my-resume` folder, click the address bar, type `cmd`, press Enter. First time only:

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then, one at a time:

```
git init
git add .
git commit -m "First version of my resume site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-resume.git
git push -u origin main
```

A window asks you to sign in to GitHub the first time. Your empty repository page shows these same commands with your link filled in.

**Option B — In the browser:** on your repository page click **uploading an existing file**, select all the files inside `my-resume` and drag them in (the files, not the folder — `index.html` must be at the top level). Click **Commit changes**.

## 4. Put it live on Netlify

1. Go to netlify.com → **Sign up** → **Sign up with GitHub**.
2. **Add new project** → **Import an existing project** → **GitHub** → approve access → pick `my-resume`.
3. Leave all build settings **empty** (the site is plain HTML) and click **Deploy**. After about a minute it says **Published**.
4. To change the address: **Site configuration** → **Change site name** → type your name as one word, e.g. `alexmorgan`. Your site is now at `alexmorgan.netlify.app`.

## Making changes later

Edit a file on GitHub (pencil icon) and click **Commit changes**. Netlify updates the live site within a minute.
