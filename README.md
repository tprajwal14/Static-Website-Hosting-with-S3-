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

4️⃣ Enable Static Website Hosting on S3
Go to your S3 Bucket and navigate to Properties.
Scroll down to Static website hosting and enable it.
Provide the following details:
Index document: index.html
Error document: error.html
📎 Copy the Endpoint URL and test it in your browser
    http://my-static-website-bucket-prajwal.s3-website-us-east-1.amazonaws.com

5️⃣ Create a CloudFront Distribution
Create a CloudFront distribution to serve your website globally with low latency.
Origin Domain: Use your S3 bucket as the origin.
Configure Default Root Object as index.html.

6️⃣ Attach CloudFront Bucket Policy (Restrict Access via CloudFront Only)
Apply this Bucket Policy to allow CloudFront only access:
    {
  "Version": "2008-10-17",
  "Id": "PolicyForCloudFrontPrivateContent",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-static-website-bucket-prajwal/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::084828597822:distribution/EFJI44KVSOKT4"
        }
      }
    }
  ]
}
7️⃣ Access Your Website via CloudFront
Copy the CloudFront DNS name (example):
    https://d2w33ifxgmdy45.cloudfront.net/index.html


/:my-static-website-bucket-prajwal/
│
├── index.html
├── error.html
├── style.css
└── script.js

