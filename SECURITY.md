# Security Policy

## Supported Versions

We actively maintain and support the following versions of this project:

| Version | Supported |
|---------|-----------|
| main    | ✅        |
| feature branches | ⚠️ (best effort) |

## Reporting a Vulnerability

If you discover a security vulnerability in this project:

1. **Do not open a public issue.**  
   Security issues should be reported privately to avoid exploitation.

2. **Contact the maintainer directly:**    
   - GitHub: [@ahmedessamelhorishy](https://github.com/ahmedessamelhorishy)

3. **Provide details:**  
   - Steps to reproduce the vulnerability  
   - Potential impact  
   - Suggested fix (if known)  

We will acknowledge receipt within **72 hours** and provide a timeline for resolution.

## Security Best Practices

- Keep dependencies updated (`npm`, `Docker`, `Terraform`, etc.)  
- Use least‑privilege IAM roles in AWS  
- Rotate credentials regularly  
- Avoid committing secrets to GitHub (use `.gitignore` and environment variables)  
- Run `terraform plan` before `terraform apply` to validate changes  
- Use HTTPS and secure registries for container images (ECR or Nexus with TLS)  

## Responsible Disclosure

We appreciate responsible disclosure. Please allow us time to investigate and patch before sharing details publicly.
