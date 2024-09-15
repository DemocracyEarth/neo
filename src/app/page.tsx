import GovComponent from "./components/govComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">GOV AI Interface</h1>
        <GovComponent />
      </main>
    </div>
  );
}
