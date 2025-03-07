# 🚀 QuasarTag

✨ A clean, modern, and highly customizable tag component for Quasar Framework. Perfect for showcasing tags, stats, or alerts in your Vue.js Vite applications.

---

## ❓ Purpose
Quasar's vanilla Chips align with the Google Material Design Guide style, but I have always personally found
them boring and uninteresting.

I have created this component to bring a more modern look to the applications I develop in Quasar.

This component will be actively improved over time.

---

## 📦 Installation

Install the package via npm:

```bash
npm i quasar-tag
```

---

## 🛠️ Usage
1. Import the component into your Vue file:

```bash
import { QTag } from 'q-tag'
```
2. Use it in your template:

```bash
<QTag
    text="3 Found"
    type="info"
/>
```

---

## 🎨 Props

| Prop     | Type   | Note                                        |  
|----------|--------|---------------------------------------------|
| text     | String | ---                                         |
| type     | String | Either use `info`, `error` or `success`     |

---

## 🤝 Contributions
Contributions are welcomed. If you'd like to improve this component, please follow these steps:
1. Fork the repo.
2. Create a new branch `git checkout -b feature/AmazingFeature`.
3. Commit your changes `git commit -m 'Add some AmazingFeature'`.
4. Pull to the branch `git push origin feature/AmazingFeature`.
5. Open a pull request.