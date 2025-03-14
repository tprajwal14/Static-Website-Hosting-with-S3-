# 🌐 Static Website Hosting with S3

description: |
  This project demonstrates how to **host a static website** on **AWS S3**, enable **static website hosting**, 
  configure **bucket policies**, and integrate **CloudFront** for global content delivery.

steps:
  - step: "Create an S3 Bucket"
    description: |
      Create an S3 bucket named: `my-static-website-bucket-prajwal`
    note: "Bucket names must be globally unique."

  - step: "Upload Website Files"
    files:
      - `index.html` ✅
      - `error.html` ❌
      - `style.css` 🎨
      - `script.js` ⚙️
    tip: "Ensure files are publicly accessible through permissions."

  - step: "Configure Bucket Policy (Public Access)"
    description: |
      Generate and attach the following **Bucket Policy** to make the objects publicly accessible:
    bucket_policy:
      Id: "Policy1741944290230"
      Version: "2012-10-17"
      Statement:
        - Sid: "Stmt1741944289271"
          Effect: "Allow"
          Principal: "*"
          Action: "s3:GetObject"
          Resource: "arn:aws:s3:::my-static-website-bucket-prajwal/*"
    additional_notes:
      - "Replace with your own bucket name if needed."

  - step: "Enable Static Website Hosting"
    description: |
      Go to Properties of the S3 bucket.
      Scroll to Static website hosting.
      Enable it and provide the following details:
      - Index document: `index.html`
      - Error document: `error.html`
    test_url: "http://my-static-website-bucket-prajwal.s3-website-us-east-1.amazonaws.com"
    note: "Copy the Endpoint URL and test it in your browser."

  - step: "Create a CloudFront Distribution"
    description: |
      Create a **CloudFront distribution** to serve your website globally with low latency.
      - Origin Domain: Use your S3 bucket as the origin.
      - Configure Default Root Object as `index.html`.

  - step: "Attach CloudFront Bucket Policy (Restrict Access via CloudFront Only)"
    description: |
      Apply the following **Bucket Policy** to allow CloudFront access only:
    cloudfront_bucket_policy:
      Version: "2008-10-17"
      Id: "PolicyForCloudFrontPrivateContent"
      Statement:
        - Sid: "AllowCloudFrontServicePrincipal"
          Effect: "Allow"
          Principal:
            Service: "cloudfront.amazonaws.com"
          Action: "s3:GetObject"
          Resource: "arn:aws:s3:::my-static-website-bucket-prajwal/*"
          Condition:
            StringEquals:
              AWS:SourceArn: "arn:aws:cloudfront::084828597822:distribution/EFJI44KVSOKT4"

  - step: "Access Your Website via CloudFront"
    description: |
      Copy the **CloudFront DNS** name (example):
      `https://d2w33ifxgmdy45.cloudfront.net/index.html`
      Paste it in your browser to see your static website served by CloudFront! 🚀

folder_structure:
  my-static-website-bucket-prajwal:
    - index.html
    - error.html
    - style.css
    - script.js

references:
  - "AWS S3 Static Website Hosting Docs: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html"
  - "AWS CloudFront Documentation: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
