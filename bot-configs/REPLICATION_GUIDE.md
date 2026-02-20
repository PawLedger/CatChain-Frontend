# Bot Replication Guide

## Quick Setup for All Repos

### 1. Backend Repo (petchain_api)

**Copy these files to `.github/workflows/`:**
```bash
cd /path/to/petchain_api
mkdir -p .github/workflows

# Copy bot files
cp /path/to/petChain-Frontend/.github/workflows/auto-merge.yml .github/workflows/
```

**Create `.github/workflows/pr-review-bot.yml`:**
```yaml
name: PR Review Bot - Backend

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: read
  pull-requests: write

jobs:
  backend-review:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: test
          POSTGRES_DB: petchain_test
        ports:
          - 5432:5432
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    
    - run: npm ci
    - run: npm run lint
      id: lint
      continue-on-error: true
    
    - run: npm run test
      id: test
      continue-on-error: true
    
    - run: npm run build
      id: build
      continue-on-error: true
    
    - uses: actions/github-script@v7
      with:
        script: |
          const checks = {
            lint: '${{ steps.lint.outcome }}' === 'success',
            test: '${{ steps.test.outcome }}' === 'success',
            build: '${{ steps.build.outcome }}' === 'success'
          };
          
          const passed = Object.values(checks).every(v => v);
          const comment = `## 🤖 Backend Review\n\n${
            checks.lint ? '✅' : '❌'} Linting\n${
            checks.test ? '✅' : '❌'} Tests\n${
            checks.build ? '✅' : '❌'} Build\n\n${
            passed ? '✅ APPROVED' : '❌ NEEDS WORK'}`;
          
          await github.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.issue.number,
            body: comment
          });
          
          await github.rest.issues.addLabels({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.issue.number,
            labels: [passed ? 'ready-for-review' : 'needs-work']
          });
```

**Commit and push:**
```bash
git add .github/
git commit -m "Add PR review bot"
git push
```

---

### 2. Smart Contracts Repo (PetMedTracka-Contracts)

**Create `.github/workflows/pr-review-bot.yml`:**
```yaml
name: PR Review Bot - Smart Contracts

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: read
  pull-requests: write

jobs:
  rust-review:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions-rs/toolchain@v1
      with:
        toolchain: stable
    
    - run: cargo fmt --check
      id: fmt
      continue-on-error: true
    
    - run: cargo clippy -- -D warnings
      id: clippy
      continue-on-error: true
    
    - run: cargo test
      id: test
      continue-on-error: true
    
    - run: cargo build --release
      id: build
      continue-on-error: true
    
    - uses: actions/github-script@v7
      with:
        script: |
          const checks = {
            fmt: '${{ steps.fmt.outcome }}' === 'success',
            clippy: '${{ steps.clippy.outcome }}' === 'success',
            test: '${{ steps.test.outcome }}' === 'success',
            build: '${{ steps.build.outcome }}' === 'success'
          };
          
          const passed = Object.values(checks).every(v => v);
          const comment = `## 🤖 Smart Contract Review\n\n${
            checks.fmt ? '✅' : '❌'} Formatting\n${
            checks.clippy ? '✅' : '❌'} Clippy\n${
            checks.test ? '✅' : '❌'} Tests\n${
            checks.build ? '✅' : '❌'} Build\n\n${
            passed ? '✅ APPROVED' : '❌ NEEDS WORK'}`;
          
          await github.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.issue.number,
            body: comment
          });
          
          await github.rest.issues.addLabels({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.issue.number,
            labels: [passed ? 'ready-for-review' : 'needs-work']
          });
```

**Commit and push:**
```bash
git add .github/
git commit -m "Add PR review bot for Rust"
git push
```

---

### 3. Mobile App Repo (PetMedTracka-MobileApp)

**Create `.github/workflows/pr-review-bot.yml`:**
```yaml
name: PR Review Bot - Mobile

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: read
  pull-requests: write

jobs:
  mobile-review:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    
    - run: npm ci
    
    - run: npm run lint
      id: lint
      continue-on-error: true
    
    - run: npm run test
      id: test
      continue-on-error: true
    
    - run: npm run build
      id: build
      continue-on-error: true
    
    - uses: actions/github-script@v7
      with:
        script: |
          const checks = {
            lint: '${{ steps.lint.outcome }}' === 'success',
            test: '${{ steps.test.outcome }}' === 'success',
            build: '${{ steps.build.outcome }}' === 'success'
          };
          
          const passed = Object.values(checks).every(v => v);
          const comment = `## 🤖 Mobile App Review\n\n${
            checks.lint ? '✅' : '❌'} Linting\n${
            checks.test ? '✅' : '❌'} Tests\n${
            checks.build ? '✅' : '❌'} Build\n\n${
            passed ? '✅ APPROVED' : '❌ NEEDS WORK'}`;
          
          await github.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.issue.number,
            body: comment
          });
          
          await github.rest.issues.addLabels({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.issue.number,
            labels: [passed ? 'ready-for-review' : 'needs-work']
          });
```

**Commit and push:**
```bash
git add .github/
git commit -m "Add PR review bot"
git push
```

---

## One-Command Setup

For each repo, run:

```bash
# Backend
cd petchain_api
mkdir -p .github/workflows
# Copy the backend YAML above to .github/workflows/pr-review-bot.yml
# Copy auto-merge.yml from frontend repo
git add .github/ && git commit -m "Add bots" && git push

# Smart Contracts
cd PetMedTracka-Contracts
mkdir -p .github/workflows
# Copy the Rust YAML above to .github/workflows/pr-review-bot.yml
# Copy auto-merge.yml from frontend repo
git add .github/ && git commit -m "Add bots" && git push

# Mobile App
cd PetMedTracka-MobileApp
mkdir -p .github/workflows
# Copy the Mobile YAML above to .github/workflows/pr-review-bot.yml
# Copy auto-merge.yml from frontend repo
git add .github/ && git commit -m "Add bots" && git push
```

## Verification

After pushing, check:
1. Go to repo → Actions tab
2. Should see workflows listed
3. Open a test PR to verify bot works

## Cost Estimate

- 4 repos × 40 PRs = 160 PRs/month
- ~5 min per PR = 800 minutes/month
- **Still within free tier!** ✅
