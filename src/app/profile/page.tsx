"use client";

import { useSupabaseAuth } from '../../hooks/useSupabaseAuth';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { user, loading } = useSupabaseAuth();
  const [password, setPassword] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [subMessage, setSubMessage] = useState('');
  const [subLoading, setSubLoading] = useState(false);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-gray-400 text-lg">Loading...</div>
    </div>
  );
  if (!user) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <div className="text-xl font-semibold mb-2">Please log in to view your profile.</div>
        <a href="/login" className="inline-block mt-4 px-6 py-2 bg-brand-blue text-white rounded hover:bg-brand-blue/90 transition">Go to Login</a>
      </div>
    </div>
  );

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

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-cream py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-brand-blue">Profile</h1>
          <div className="text-gray-700 text-base mb-4">
            <span className="font-semibold">Email:</span>
            <span className="ml-2 font-mono bg-gray-100 px-2 py-1 rounded">{user.email}</span>
          </div>
        </div>

        <form onSubmit={handlePasswordChange} className="flex flex-col gap-3 bg-gray-50 rounded-xl p-4 shadow-sm">
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

        <div className="flex flex-col gap-3 bg-gray-50 rounded-xl p-4 shadow-sm">
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
      </div>
    </div>
  );
} 