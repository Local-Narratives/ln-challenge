# Local Narratives Challenge

Welcome! This is a challenge to help us get to know how you think, build, and solve real-world problems using code.

## 🧠 Prompt
You're given some data files in  `src/components/experiencesData/` folder that contains details of travel experiences across different states in India.

Your goal is to build a mini frontend app using this data.

### 1️⃣ Explore All Experiences Page

Create a page that displays **all experiences on one page**.

#### Features to include:
- A **Filter** button at the top that filters experiences by:
  - `State`
  - `Best Time to Visit`

- A **Sort** button to sort the results by:
  - `Price`
  - `Month` (based on the **starting month** in `Best Time to Visit`)

- A **Search Bar** that allows searching by:
  - `Experience Name`
  - `Keywords` (partial match)
    
- All Filters and Sort results should be **combinable** and update results in real-time (no page refresh).

- When a user clicks an experience card:
  - Redirect to the relevant `metaDesc.url` from the Local Narratives website (if available), **or**
  - Keep the card unclickable with a tooltip like “Coming Soon”

✅ **(Optional) Make it mobile-friendly and responsive**

---

### 2️⃣  Add a New Experience

Create a form that lets you add a new experience.

#### Fields:
- `Name`
- `State`
- `Best Time to Visit`
- `Description`
- `Tags` (comma-separated if any)
- `Price`
- `Host Details`
- `Capacity`
- `Duration`

On submission, update the experience list **on the same page** (locally).
(no need to persist — update in memory is fine). 

---

## 🚀 Getting Started
This is a basic Next code template
Clone this repo, install dependencies, and run:
```bash
npm install
npm run dev
```

Start building on top of this started repo

## 📦 What to Submit

- A Pull Request with your code to this repo
- *(Optional)* A short video walkthrough explaining what you have worked on

---

Thanks for being creative and exploring the world of Local Narratives with us! Look forward to working with you 🌿
