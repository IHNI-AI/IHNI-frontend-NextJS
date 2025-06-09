import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from './ui/button';

interface ProfileSidebarProps {
  open: boolean;
  onClose: () => void;
  user: { email: string };
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ open, onClose, user }) => {
  const [password, setPassword] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [subMessage, setSubMessage] = useState('');
  const [subLoading, setSubLoading] = useState(false);

  if (!open) return null;

  // Change password handler
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwMessage('');
    if (!password) return setPwMessage('Enter a new password.');
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setPwMessage(error.message);
    else setPwMessage('Password updated!');
    setPassword('');
  };

  // Cancel subscription handler
  const handleCancelSubscription = async () => {
    setSubLoading(true);
    setSubMessage('');
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    const res = await fetch('/api/subscription/cancel', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    if (res.ok) setSubMessage('Subscription cancelled.');
    else setSubMessage('Failed to cancel subscription.');
    setSubLoading(false);
  };

  // Upgrade subscription handler
  const handleUpgradeSubscription = async () => {
    setSubLoading(true);
    setSubMessage('');
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    const res = await fetch('/api/subscription/upgrade', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    if (res.ok) setSubMessage('Subscription upgraded!');
    else setSubMessage('Failed to upgrade subscription.');
    setSubLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 transition-opacity" onClick={onClose} />
      {/* Sidebar */}
      <aside className="ml-auto w-full max-w-md h-full bg-white shadow-2xl flex flex-col p-8 animate-slide-in-right">
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close profile sidebar"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-brand-blue mb-2">Profile</h2>
        <div className="text-gray-700 text-base mb-6">
          <span className="font-semibold">Email:</span>
          <span className="ml-2 font-mono bg-gray-100 px-3 py-1 rounded">{user.email}</span>
        </div>

        <form onSubmit={handlePasswordChange} className="flex flex-col gap-3 bg-gray-50 rounded-xl p-4 shadow-sm mb-6">
          <label className="text-sm font-medium text-gray-700">Change Password</label>
          <input
            type="password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            placeholder="New password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-fit">Update Password</Button>
          {pwMessage && <div className="text-xs text-gray-500 mt-1">{pwMessage}</div>}
        </form>

        <div className="flex flex-col gap-3 bg-gray-50 rounded-xl p-4 shadow-sm mb-6">
          <label className="text-sm font-medium text-gray-700">Subscription</label>
          <div className="flex gap-2 flex-wrap">
            <Button
              className="bg-red-100 text-red-700 border border-red-200 hover:bg-red-200"
              onClick={handleCancelSubscription}
              disabled={subLoading}
              type="button"
            >
              {subLoading ? 'Processing...' : 'Cancel Subscription'}
            </Button>
            <Button
              className="bg-brand-blue text-white hover:bg-brand-blue/90"
              onClick={handleUpgradeSubscription}
              disabled={subLoading}
              type="button"
            >
              {subLoading ? 'Processing...' : 'Upgrade'}
            </Button>
          </div>
          {subMessage && <div className="text-xs text-gray-500 mt-1">{subMessage}</div>}
        </div>

        <Button
          className="bg-gray-200 text-gray-700 hover:bg-gray-300 mt-auto"
          onClick={handleLogout}
          type="button"
        >
          Log out
        </Button>
      </aside>
      <style jsx global>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default ProfileSidebar; 