import { isAuthenticated, logout } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">Intervue</h2>
        </Link>

        {/* Logout Button Form */}
        <form action={logout}>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </form>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
