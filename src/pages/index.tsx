import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to PetChain
        </h1>
      </div>
    </div>
  );
}