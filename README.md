# 🚀 Funds Reaper  
### A Patreon / Buy Me a Coffee alternative built with **Next.js, React, Tailwind CSS, and Razorpay**

Funds Reaper is a modern micro-funding platform that enables creators, developers, artists, and freelancers to receive one-time payments from supporters.  
It is fast, minimal, secure, and built to be a clean alternative to complex platforms like Patreon.

---

## 🌟 Features

- 🔐 Secure Razorpay payment gateway integration  
- ⚛️ Built with **Next.js 16**  
- 🎨 Fully responsive UI using **Tailwind CSS**  
- 👤 Creator profile pages  
- 💳 One-time payment support (no subscription complexity)  
- 🔄 Automatic Razorpay signature verification  
- 🗄️ MongoDB + Mongoose backend  
- 🚀 Fast, SEO-friendly, and scalable architecture  

---

## 🖥️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Next.js 16, Tailwind CSS |
| Backend | Next.js API Routes, MongoDB, Mongoose |
| Payments | Razorpay Orders API + Signature Verification |
| Deployment | Vercel |
| Styling | Tailwind CSS |

---
## 💳 How Payments Work

- User enters an amount
- Razorpay order is generated server-side
- User completes payment
- Razorpay returns payment_id, order_id, and signature
- Backend verifies signature using Razorpay utils
- Payment is marked as done in database
-User is redirected to success page
---
## 🛡️ Security

Funds Reaper uses:
- Razorpay’s official signature verification
- FormData-based secure callback parsing
- HTTPS-only production environment
- Client never touches secret keys
- Safe redirections
---
## 📸 Screenshots
![screenshot](https://github.com/user-attachments/assets/3bb95887-304f-476b-a084-218449ef7a61)

![screenshot](https://github.com/user-attachments/assets/e109c52b-6b06-44d6-8378-81c93a644a0c)

![screenshot](https://github.com/user-attachments/assets/510a69f3-2aee-407e-81ee-a6fda7154f61)
![screenshot](https://github.com/user-attachments/assets/cd4d0086-6ac8-4b8b-8798-a9dbf5b5e969)

## Live Preview Link 
https://funds-reaper.vercel.app/

If you like it then you can motivate me with a ⭐.

