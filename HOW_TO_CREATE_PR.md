# 📌 How to Push Code & Create a Pull Request (PR)

Hey! Here's a step-by-step guide to push your code to the GitHub repo and open a PR (Pull Request).

---

## ✅ 1. Install Git (if not already)
- Download from: https://git-scm.com/downloads
- Follow the install steps for your OS (Windows/Mac/Linux)

---

## ✅ 2. Clone the Repository
In your terminal or command prompt:

```bash
git clone https://github.com/<USERNAME>/<REPO-NAME>.git
```
In your case:
```bash
https://github.com/Local-Narratives/ln-challenge.git
```

Then move into the folder:

```bash
cd ln-challenge
```

---

## ✅ 3. Create a New Branch
Give your branch a short name describing what you’re working on (you can name it anything):

```bash
git checkout -b your-branch-name
```

Example:

```bash
git checkout -b add-hosts-configuration
```

---

## ✅ 4. Add Your Code
- Make your changes inside the project folder. (Copy & paste in your case since you have already worked on it)
- Save everything.

---

## ✅ 5. Stage & Commit Your Changes

```bash
git add .
git commit -m "added host configurations"
```

---

## ✅ 6. Push Your Branch to GitHub

```bash
git push origin your-branch-name
```

Example:

```bash
git push origin add-hosts-configuration
```

You’ll be asked to log in to GitHub the first time.

---

## ✅ 7. Open the Pull Request
1. Go to the GitHub repo in your browser.
2. You’ll see a message: _“Compare & pull request”_ — click it.
3. Add a short title and description for what you did.
4. Click **Create pull request**.

---

That’s it! Let me know if you get stuck at any step — I’ll help you out 😄
