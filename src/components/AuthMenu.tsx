"use client";

import { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import { useState } from 'react';

import ProfileSidebar from './ProfileSidebar';

export function AuthMenu() {
  const { user, loading } = useSupabaseAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = async () => {
    window.location.href = '/login';
  };

  if (loading) return null;

  if (!user) {
    return (
      <button
        className="px-4 py-2 bg-brand-blue text-white rounded"
        onClick={handleLogin}
      >
        Get Started
      </button>
    );
  }

  return (
    <>
      <button
        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium hover:bg-gray-200 transition"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open profile settings"
      >
        {user.email}
      </button>
      <ProfileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} user={user} />
    </>
  );
} 