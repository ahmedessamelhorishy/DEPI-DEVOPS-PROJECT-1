---

### 2. CONTRIBUTING.md

This file outlines the standards for titles, branching, and commit messages to keep the repository clean.

```markdown
# Contributing to Infrastructure Pipeline

We welcome contributions! Please follow the guidelines below to ensure a smooth workflow for the DevOps team.

## Development Process

### 1. Issue Tracking
Before starting work, please ensure there is an open issue describing the feature or bug.

### 2. Branching Strategy
We use a feature-branch workflow. Create a new branch from `main`:

$git checkout -b feature/add-load-balancer$ git checkout -b fix/terraform-state-lock

### 3. Environment Setup
Refer to the **Quick Start** section in `README.md` to set up your local testing environment.

## Coding Standards

### Terraform
* Run `terraform fmt` before committing.
* Use `snake_case` for resource names.
* All variables must have descriptions.

### Ansible
* Lint your playbooks using `ansible-lint`.
* Run the following to check syntax:
    $ ansible-playbook --syntax-check playbooks/site.yml

## Submitting a Pull Request

1. Push your changes to your fork/branch:
   $ git push origin feature/my-new-feature

2. Open a Pull Request against the `main` branch.
3. Attach relevant screenshots if UI changes were made (place them in `images/`):
   ![](images/pr-screenshot-example.png)

## Commit Message Guidelines

We follow the Conventional Commits specification.

* `feat`: A new feature
* `fix`: A bug fix
* `docs`: Documentation only changes
* `style`: Formatting (terraform fmt, etc)
* `refactor`: Code change that neither fixes a bug nor adds a feature

**Example:**
`feat(aws): add auto-scaling group for web tier`

## Testing

### Local Testing
Run the local test suite before pushing:

$ ./scripts/test_local.sh

### CI/CD Checks
When you push to GitHub, the following checks will run automatically:
1.  `terraform validate`
2.  `tflint`
3.  `ansible-lint`

Ensure all checks pass before requesting a review.