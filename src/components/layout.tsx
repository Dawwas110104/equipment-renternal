import React from 'react';
import Link from 'next/link';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto py-4 px-8">
          <Link href="/">
            <a className="text-2xl font-bold cursor-pointer">Header Situs</a>
          </Link>
          <nav className="mt-2">
            <ul className="flex">
              <li className="mr-4">
                <Link href="/">
                  <span className="hover:text-gray-300 cursor-pointer">Beranda</span>
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/barang">
                  <span className="hover:text-gray-300 cursor-pointer">Daftar Barang</span>
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <span className="hover:text-gray-300 cursor-pointer">Admin</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/">
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                  </svg>
                  <span className="ms-3">Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Our Products</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/manage-equipment">
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v1H9V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H2v2H1a1 1 0 0 0 0 2h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6h1a1 1 0 0 0 0-2zM5 17H3v-2h2zm0-4H3v-2h2zm0-4H3V7h2zm0-4H3V3h2zm4 12h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2zm0-4h-2V3h2z"/>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Manage Equipment</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Content goes here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Site. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;