import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
        <span className="text-4xl font-extrabold text-black font-mono">404</span>
        <h1 className="text-xl font-bold text-gray-900 mt-2">Page Not Found</h1>
        <p className="text-xs text-gray-600 mt-2 mb-6">
          The requested system route does not exist or has been relocated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft size={14} />
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}

