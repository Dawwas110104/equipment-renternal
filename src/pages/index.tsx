import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ClerkProvider, useUser } from '@clerk/nextjs';
import Sidebar from '../components/sidebar';

const HomePage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App!</h1>
        <p className="text-gray-700">
          This is the homepage content. You can add more content here.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
