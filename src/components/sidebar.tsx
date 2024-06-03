import { HiOutlineHome, HiOutlineCube, HiOutlineBookOpen, HiOutlineLogout } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SignOutButton } from "@clerk/nextjs";

interface MenuItem {
  label: string;
  href: string;
  icon: any;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <HiOutlineHome /> },
  { label: 'Our Product', href: '/barang/ourproduct', icon: <HiOutlineCube /> },
  { label: 'Manage Equipment', href: '/barang/managepeminjaman', icon: <HiOutlineBookOpen /> },
];

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-[#A34343] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#A34343] dark:bg-gray-800">
          <button
            className="absolute top-0 right-0 p-2 text-gray-500 dark:text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <ul className="space-y-2 font-medium">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a
                  href={menuItem.href}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                >
                  <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {menuItem.icon}
                  </span>
                  <span className="flex-1 ml-3">{menuItem.label}</span>
                </a>
              </li>
            ))}
            <li>
              <SignOutButton>
                <button className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                  <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <HiOutlineLogout />
                  </span>

                  <span className="flex-1 ml-3">Logout</span>
                </button>
              </SignOutButton>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className={`p-4 ${isOpen ? 'ml-64' : 'sm:ml-0'}`}>
        {/* Your main content here */}
      </div>

      {/* Toggle button */}
      <button
        className="fixed top-3 left-3 sm:hiddenbg-gray-200 p-2 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default Sidebar;