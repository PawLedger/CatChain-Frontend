# Contributing to PetChain

Thank you for your interest in contributing to PetChain! This guide will help you get started.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- PostgreSQL (for backend)
- Docker (optional)

### Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/petChain-Frontend.git
   cd petChain-Frontend
   ```

2. **Frontend Setup**
   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run start:dev
   ```

## 📋 Issue Selection

### Frontend Issues (Next.js)
- Look for `frontend` and `nextjs` labels
- Work in root directory
- Focus on UI/UX components

### Backend Issues (NestJS)
- Look for `backend` and `nestjs` labels  
- Work in `backend/` directory
- Check `backend/HIGH_QUALITY_ISSUES.md` for detailed tasks

### Difficulty Levels
- 🟢 **Beginner**: Good first issues, basic features
- 🟡 **Intermediate**: Moderate complexity, some experience needed
- 🔴 **Advanced**: Complex features, significant experience required

## 🔧 Development Workflow

### Branch Naming
- `feature/frontend-component-name`
- `feature/backend-api-endpoint`
- `fix/bug-description`
- `docs/update-readme`

### Commit Messages
Use conventional commits:
```
feat(frontend): add pet profile component
fix(backend): resolve authentication bug
docs: update API documentation
test: add unit tests for user service
```

### Code Standards

**Frontend (Next.js)**
- TypeScript strict mode
- Tailwind CSS for styling
- Responsive design (mobile-first)
- Component documentation

**Backend (NestJS)**
- TypeScript strict mode
- DTOs for validation
- Unit tests (80%+ coverage)
- API documentation

## 🧪 Testing

### Frontend
```bash
npm run test
npm run test:watch
npm run build  # Ensure build passes
```

### Backend
```bash
cd backend
npm run test
npm run test:e2e
npm run build
```

## 📝 Pull Request Process

1. **Before Submitting**
   - [ ] Code follows style guidelines
   - [ ] Tests pass locally
   - [ ] Build succeeds
   - [ ] Documentation updated

2. **PR Description**
   - Link to related issue
   - Describe changes made
   - Include screenshots (if UI changes)
   - List breaking changes (if any)

3. **Review Process**
   - Maintainer review required
   - Address feedback promptly
   - Keep PR focused and small

## 🛡️ Security

- Never commit secrets or API keys
- Use environment variables
- Follow security best practices
- Report vulnerabilities privately

## 📞 Getting Help

- **Discord**: [PetChain Community](https://discord.gg/petchain)
- **Telegram**: [@PetChain Telegram Group](https://t.me/+Jw8HkvUhinw2YjE0)
- **Issues**: Create a GitHub issue
- **Email**: Contact [@llins_x](https://t.me/llins_x)

## 🎯 Issue Labels

- `good-first-issue`: Perfect for newcomers
- `help-wanted`: Community help needed
- `priority-high`: Urgent issues
- `frontend`: Next.js related
- `backend`: NestJS related
- `bug`: Something isn't working
- `enhancement`: New feature request
- `documentation`: Documentation improvements

## 📜 Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Follow project guidelines

Thank you for contributing to PetChain! 🐾