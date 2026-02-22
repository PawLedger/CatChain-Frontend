# Developer Checklist

Quick reference checklist for PetChain developers.

## 🚀 Initial Setup

- [ ] Clone the repository
- [ ] Install Node.js v20.19.0 (or use `nvm use`)
- [ ] Run `npm install` in root directory
- [ ] Run `npm install` in backend directory
- [ ] Copy `.env.example` to `.env.local`
- [ ] Read [SETUP.md](./SETUP.md)
- [ ] Read [CODE_STYLE.md](./CODE_STYLE.md)

## ✅ Before Starting Work

- [ ] Pull latest changes: `git pull origin main`
- [ ] Install/update dependencies: `npm install`
- [ ] Verify build works: `npm run build`
- [ ] Start dev server: `npm run dev`

## 💻 During Development

- [ ] Follow code style guide ([CODE_STYLE.md](./CODE_STYLE.md))
- [ ] Use TypeScript types (no `any`)
- [ ] Write self-documenting code
- [ ] Keep components small and focused
- [ ] Use Tailwind CSS for styling
- [ ] Test your changes locally

## 🔍 Before Committing

- [ ] Run type check: `npm run type-check`
- [ ] Run linter: `npm run lint`
- [ ] Check formatting: `npm run format:check`
- [ ] Or run all checks: `npm run validate`
- [ ] Test production build: `npm run build`
- [ ] Remove console.logs and debug code
- [ ] Update documentation if needed

## 📝 Commit Guidelines

- [ ] Use conventional commit format
- [ ] Write clear, descriptive messages
- [ ] Reference issue numbers if applicable
- [ ] Keep commits focused and atomic

### Commit Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

### Examples
```bash
feat(pet-records): add medical history timeline
fix(auth): resolve token expiration issue
docs(readme): update setup instructions
```

## 🚢 Before Pushing

- [ ] All tests pass (if applicable)
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] No ESLint warnings: `npm run lint`
- [ ] Code is formatted: `npm run format`
- [ ] Commits are clean and descriptive
- [ ] Branch is up to date with main

## 📋 Pull Request Checklist

- [ ] PR title follows commit convention
- [ ] Description explains what and why
- [ ] Screenshots/videos for UI changes
- [ ] Tests added/updated (if applicable)
- [ ] Documentation updated (if needed)
- [ ] No merge conflicts
- [ ] Linked to related issue(s)
- [ ] Requested reviewers

## 🐛 Bug Fix Checklist

- [ ] Reproduce the bug
- [ ] Identify root cause
- [ ] Write test to catch the bug (if applicable)
- [ ] Implement fix
- [ ] Verify fix works
- [ ] Check for similar issues elsewhere
- [ ] Update documentation if needed

## ✨ New Feature Checklist

- [ ] Feature is discussed/approved
- [ ] Design is clear
- [ ] Break down into small tasks
- [ ] Implement incrementally
- [ ] Write tests (if applicable)
- [ ] Update documentation
- [ ] Add to changelog (if applicable)

## 🔧 Code Review Checklist

### As Author
- [ ] Self-review your code
- [ ] Check for typos and formatting
- [ ] Ensure all checks pass
- [ ] Respond to feedback promptly
- [ ] Make requested changes

### As Reviewer
- [ ] Understand the context
- [ ] Check code quality
- [ ] Look for potential bugs
- [ ] Verify tests are adequate
- [ ] Check documentation
- [ ] Be constructive and respectful

## 📊 Quality Standards

### TypeScript
- [ ] No `any` types
- [ ] Proper interfaces/types defined
- [ ] No TypeScript errors
- [ ] No unused variables/imports

### React/Next.js
- [ ] Functional components
- [ ] Proper prop types
- [ ] Hooks used correctly
- [ ] No unnecessary re-renders
- [ ] Proper error handling

### Styling
- [ ] Tailwind CSS classes
- [ ] Responsive design
- [ ] Consistent spacing
- [ ] Accessible (a11y)

### Performance
- [ ] Images optimized
- [ ] No unnecessary API calls
- [ ] Proper loading states
- [ ] Error states handled

## 🛠️ Useful Commands

### Development
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
```

### Code Quality
```bash
npm run validate         # Run all checks
npm run type-check       # TypeScript check
npm run lint             # ESLint check
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code
npm run format:check     # Check formatting
```

### Maintenance
```bash
npm run clean            # Clean build artifacts
npm run clean:all        # Clean everything
npm run audit:fix        # Fix vulnerabilities
./verify-build.sh        # Verify entire project
```

### Backend
```bash
cd backend
npm run start:dev        # Start backend dev server
npm run build            # Build backend
npm run test             # Run tests
npm run lint             # Lint backend code
```

## 📚 Documentation

- [README.md](./README.md) - Project overview
- [SETUP.md](./SETUP.md) - Setup instructions
- [CODE_STYLE.md](./CODE_STYLE.md) - Coding standards
- [PROJECT_STATUS.md](./PROJECT_STATUS.md) - Current status
- [contributing.md](./contributing.md) - Contribution guide

## 🆘 Troubleshooting

### Build Fails
1. Clean build: `npm run clean`
2. Reinstall: `npm run clean:all && npm install`
3. Check Node version: `node -v` (should be v20.19.0)
4. Use correct version: `nvm use`

### Type Errors
1. Run: `npm run type-check`
2. Fix reported errors
3. Restart TypeScript server in IDE

### Linting Errors
1. Run: `npm run lint:fix`
2. Fix remaining issues manually
3. Check ESLint config if needed

### Formatting Issues
1. Run: `npm run format`
2. Check `.prettierrc` config
3. Restart IDE if needed

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

## 📞 Getting Help

- **Documentation**: Check docs folder
- **Telegram**: [@PetChain Group](https://t.me/+Jw8HkvUhinw2YjE0)
- **Issues**: [GitHub Issues](https://github.com/DogStark/petChain-Frontend/issues)
- **Lead**: [@llins_x](https://t.me/llins_x)

## 🎯 Quick Validation

Run this before committing:
```bash
npm run validate && npm run build
```

If this passes, you're good to commit! ✅

---

**Remember**: Quality over speed. Take time to write clean, maintainable code.
