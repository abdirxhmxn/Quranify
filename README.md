# 🕋 **Quranify**

### ✨ *“Read. Reflect. Remember.”*

Quranify is a minimalist web app that lets users **search, listen, and read** verses from the Qur’an — with both **Arabic recitation** and **English translation** displayed side by side.
It’s designed to make connecting with the Qur’an intuitive, beautiful, and accessible on any device.

---

## 🎯 **Goal**

To combine the power of **two APIs** — one for Arabic recitation and another for English translation — into a single seamless experience where users can:

* Enter a **surah** and **verse number**
* Instantly view the verse in Arabic
* Hear the recitation
* Read the English translation below

---

## ⚙️ **Features**

* 📖 Retrieve any verse by chapter and verse number
* 🔊 Play & pause audio recitations (`Mishary Alafasy`)
* 🌍 View English translation (`Mustafa Khattab - The Clear Quran`)
* ⚡ Fast API chaining between two Qur’an data sources
* 🎨 Simple and clean UI optimized for reflection
* 📱 Fully responsive layout (mobile-ready)

---

## 🧠 **How It Works**

1. The app uses **AlQuran.cloud API** for Arabic text and audio:
   `https://api.alquran.cloud/v1/ayah/{surah}:{ayah}/ar.alafasy`
2. It then fetches the **translation** using Fawaz Ahmed’s GitHub-hosted Quran API:
   `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mustafakhattaba/{surah}/{ayah}.min.json`
3. The verse, translation, and recitation are displayed dynamically in the interface.

---

## 🧩 **Tech Stack**

| Area           | Technology                                   |
| -------------- | -------------------------------------------- |
| **Frontend**   | HTML, CSS, JavaScript                        |
| **APIs Used**  | Al-Qur’an Cloud API, Fawaz Ahmed’s Quran API |
| **Icons**      | Font Awesome                                 |
| **Deployment** | GitHub Pages                                 |

---

## 🚀 **How to Run Locally**

1. **Clone this repository**

   ```bash
   git clone https://github.com/abdirxhmxn/quranify.git
   ```
2. **Open the project folder**

   ```bash
   cd quranify
   ```
3. **Run the app**
   Open `index.html` directly in your browser — no server setup needed.

---

## 🌐 **Live Demo**

> 🔗 [Quranify on GitHub Pages](https://abdirxhmxn.github.io/quranify)
> *(Replace link if your Pages URL is different)*

---

## 🧭 **Future Enhancements**

* 🔍 Search by keyword or theme (e.g., “mercy,” “patience”)
* 🕰️ Recitation playlist with auto-play through surahs
* 🧘‍♂️ Tafsīr integration for deeper study
* 💾 Local storage for saving favorite verses
* 🌙 Dark mode toggle

---

## 💬 **About the Creator**

Created by **Abdirahman Mohamed (MC)** —
a software engineer and educator passionate about building meaningful tools that blend **faith and technology**.

> “Quranify isn’t just code — it’s a bridge between hearts and revelation.
> Every verse should feel close, audible, and alive.”

---

## 🕊️ **License**

This project is open source and distributed under the **MIT License**.
