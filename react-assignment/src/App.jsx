import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <div className="mt-6 space-y-6 max-w-md mx-auto">
        <Profile name="John Doe" email="john.doe@example.com" />
        <Counter />
      </div>
    </div>
  );
}