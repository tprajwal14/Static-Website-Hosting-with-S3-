# 🌐 Static Website Hosting with S3

This project demonstrates how to **host a static website** on **AWS S3**, enable **static website hosting**, configure **bucket policies**, and integrate **CloudFront** for global content delivery.

---

## 🚀 Steps to Host a Static Website

### 1️⃣ Create an S3 Bucket
Create an S3 bucket named:my-static-website-bucket-prajwal 

> ✅ **Note:** Bucket names must be globally unique.

---

### 2️⃣ Upload Website Files
Add the following objects to your bucket:

- `index.html` ✅  
- `error.html` ❌  
- `style.css` 🎨  
- `script.js` ⚙️  

> ✅ **Tip:** Ensure files are publicly accessible through permissions.

---

### 3️⃣ Configure Bucket Policy (Public Access)
Generate and attach the following **Bucket Policy** to make the objects publicly accessible:

```json
{
  "Id": "Policy1741944290230",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1741944289271",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-static-website-bucket-prajwal/*"
    }
  ]
}
Enable Static Website Hosting
Go to Properties of the S3 bucket.
Scroll to Static website hosting.
Enable it and provide the following:
Index document: index.html
Error document: error.html
📎 Copy the Endpoint URL and test it in your browser!
