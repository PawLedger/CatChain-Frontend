

##  Overview
PetChain is a decentralized platform on Stellar that securely manages pet medical records.
Today, health data is often scattered, lost, or stuck in outdated systemsmaking it hard to track vaccinations, manage treatments, or respond quickly in emergencies.

By making records tamper-proof and universally accessible, PetChain keeps vets and pet owners alignedno matter where the pet is or whos treating them.
Pets get a scannable tag for quick access to key medical details. This tag can act as a tracker if pet goes missing.

##  Features
**1. Scannable Pet Tags:** Each pet gets a unique QR code and tag linked to its medical historyinstantly scannable by vets or emergency responders. The tag displays key info and a customizable message from the owner, doubling as a tracker if the pet goes missing.

**2. Always-Available Records:** Medical history is stored on Stellar, ensuring records are tamper-proof, permanent, and accessible anytime.

**3. Controlled Access:** Pet owners control who sees what, share vaccination status publicly or give full access to a vet when needed.

**4. Smart Notifications:** Get automatic alerts for upcoming vaccinations and routine check-ups, so you never miss a date.

**5. Vet-Ready Integration:** Designed to plug into existing vet or hospital software with minimal friction.

**6. Offline Mode**  View essential info even without internet.

**7. Privacy:** Uses advanced cryptography (like ZKPs) to keep sensitive data secure, even on-chain.

##  Tech Stack
* **Frontend:** 
  - Framework: Next.js (React + TypeScript)
  - Styling: Tailwind CSS
  - Hosting: Vercel
* **Backend:** NestJS, AWS, Heroku
* **Database:** PostgreSQL, TypeORM
* **BlockChain:** Rust, StellarJs

##  Getting Started

### Frontend Development (Next.js)
This repository serves as the main repo for **FRONTEND** contributions to the PetChain project.

To get the frontend running locally:

- Node.js (v16 or higher)
- npm or yarn
- Git

### Backend Development (NestJS)
**IMPORTANT:** This repository also contains a `backend/` folder with a complete NestJS API.

**For Backend Contributors:**
- Navigate to `backend/` folder
- See `backend/HIGH_QUALITY_ISSUES.md` for 17 open NestJS development issues
- Follow `backend/README.md` for setup instructions
- Requires PostgreSQL, Redis, and Docker

**Note:** Please distinguish between:
- **Frontend issues:** Next.js/React (root folder)
- **Backend issues:** NestJS/API (backend/ folder)

##  Contributing 

### Frontend Contributions (Next.js)
For frontend development, read our [**Contribution Guide**](./contributing.md)

### Backend Contributions (NestJS)
**NEW:** We have 17 high-quality backend issues available!
- Check `backend/HIGH_QUALITY_ISSUES.md` for detailed NestJS development tasks
- Issues include authentication, medical records, Stellar integration, and more
- Each issue has clear acceptance criteria and technical specifications

**Important:** Make sure you're working on the correct technology:
- **Frontend:** Next.js issues (root folder)
- **Backend:** NestJS issues (backend/ folder)

##  Related Repositories
To work on other parts of the project, you can find the related repositories below:
* Backend  [GitHub Link](https://github.com/DogStark/petchain_api)
* Smart Contracts  [GitHub Link](https://github.com/DogStark/PetMedTracka-Contracts)
* Mobile App  [GitHub Link](https://github.com/DogStark/PetMedTracka-MobileApp)


##  Contact & Support
For feedback, questions or collaboration:

* Contact project lead: [@llins_x](https://t.me/llins_x)
* Join Community Chat: [@PetChain Telegram Group](https://t.me/+Jw8HkvUhinw2YjE0) 
*  Report Issues: Submit bug reports or feature requests via [GitHub Issues](https://github.com/DogStark/PetMedTracka-Contracts/issues).

 Star our [GitHub Repository](https://github.com/DogStark/pet-medical-tracka) to stay updated on new features and releases.

##  License
PetChain is licensed under the MIT License.
