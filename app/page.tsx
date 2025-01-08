import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-8">
      <div className="text-center bg-white p-10 rounded-xl shadow-xl max-w-xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Hello World, Next.js!
        </h1>

      </div>
    </div>
  );
}
