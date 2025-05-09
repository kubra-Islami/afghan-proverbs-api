# 📜 Afghan Proverbs & Sayings RESTful API

This is a RESTful API built with Node.js and Express that stores and manages traditional Afghan proverbs and sayings in **Dari**, **Pashto**, and their **English translations**. It supports full CRUD functionality and uses a local `data.json` file as the data store.

## 📌 Project Features

- Create, Read, Update, and Delete (CRUD) proverbs
- Each proverb includes:
  - Unique ID
  - Text in Dari and Pashto
  - English translation
  - Explanation (meaning)
  - Category (e.g., wisdom, advice)

> Optional features like filtering, random proverb, or search were not implemented.

---

## 🚀 How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/afghan-proverbs-api.git
cd afghan-proverbs-api

```
### 2. Clone the repository

```
npm install
```


### 3.Run the server

```
node server.js
```
The server will start at http://localhost:3000.

## 🧾 Endpoints

### ✅ Get all proverbs
```
GET /proverbs
```

 ### ✅  Get a single proverb by ID
```
GET /proverbs/:id

```

 ### ✅ Add a new proverb 
```
POST /proverbs

Request body (JSON):
{
  "id": 3,
  "textDari": "آب که یک‌جا بماند، می‌گندد",
  "textPashto": "اوبه چې ودریږي، خوسا کیږي",
  "translationEn": "Still water becomes stagnant.",
  "meaning": "Stagnation leads to decay — keep moving.",
  "category": "wisdom"
}

```

 ### ✅ Update an existing proverb
```
PUT /proverbs/:id

Request body (JSON):
{
  "textDari": "نو آب اگر نریزد، پاک نمی‌شود",
  "translationEn": "Water must flow to stay clean."
}

```




 ### ✅ Delete a proverb
```
DELETE /proverbs/:id

```

### 📂 Data Storage
#### All data is stored in a local data.json file. Example structure:
```
[
  {
    "id": 1,
    "textDari": "کار از محکم‌کاری عیب نمی‌کند",
    "textPashto": "له احتیاطه کار نه خرابېږي",
    "translationEn": "Precaution never harms the task.",
    "meaning": "Being cautious is never a bad thing.",
    "category": "advice"
  }
]

```

### 🛠 Tech Stack
● Node.js

● Express

● File System (fs)

● JSON for data storage and API responses

## 📫 Author
### Kubra Islami
#### ⚙️Frontend & Backend Developer
