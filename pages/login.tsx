import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import { supabase } from '../src/lib/supabaseClient';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_17_40)">
      <path d="M47.5 24.5C47.5 22.6 47.3 20.8 47 19H24V29.1H37.4C36.7 32.2 34.7 34.7 31.8 36.4V42.1H39.5C44 38.1 47.5 32.1 47.5 24.5Z" fill="#4285F4"/>
      <path d="M24 48C30.6 48 36.1 45.9 39.5 42.1L31.8 36.4C29.9 37.6 27.3 38.4 24 38.4C17.7 38.4 12.2 34.3 10.3 28.7H2.3V34.6C5.7 41.1 14.1 48 24 48Z" fill="#34A853"/>
      <path d="M10.3 28.7C9.7 26.9 9.4 24.9 9.4 23C9.4 21.1 9.7 19.1 10.3 17.3V11.4H2.3C0.8 14.3 0 17.6 0 21C0 24.4 0.8 27.7 2.3 30.6L10.3 28.7Z" fill="#FBBC05"/>
      <path d="M24 9.6C27.7 9.6 30.7 10.9 32.8 12.8L39.7 6C36.1 2.7 30.6 0 24 0C14.1 0 5.7 6.9 2.3 13.4L10.3 17.3C12.2 11.7 17.7 9.6 24 9.6Z" fill="#EA4335"/>
    </g>
    <defs>
      <clipPath id="clip0_17_40">
        <rect width="48" height="48" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const LoginPage: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (tab === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        if (error) throw error;
        setSuccess('Logged in! Redirecting...');
        setTimeout(() => router.push('/'), 1000);
      } else {
        const { error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });
        if (error) throw error;
        setSuccess('Signup successful! Check your email for confirmation.');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResetSent(false);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail);
      if (error) throw error;
      setResetSent(true);
    } catch (err: any) {
      setError(err.message || 'Password reset failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="text-brand-blue">Welcome</span> to IHNI
          </h2>
          <Tabs value={tab} onValueChange={v => setTab(v as 'login' | 'signup')} className="mb-6">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
          </Tabs>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} required minLength={6} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              {success && <div className="text-green-600 text-sm">{success}</div>}
              <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-700 text-white" disabled={loading}>
                {tab === 'login' ? 'Login' : 'Sign Up'}
              </Button>
            </form>
          </Form>
          <div className="my-4 flex items-center justify-center">
            <span className="text-gray-400 text-xs">OR</span>
          </div>
          <Button
            onClick={handleGoogle}
            className="w-10 h-10 p-0 flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 shadow-sm mx-auto"
            disabled={loading}
            type="button"
          >
            <GoogleIcon />
          </Button>
          <div className="mt-6 text-center">
            <form onSubmit={handlePasswordReset} className="flex flex-col gap-2 items-center">
              <Input
                type="email"
                placeholder="Email for password reset"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                className="w-full"
                required
              />
              <Button type="submit" className="w-full bg-gray-200 text-gray-700" disabled={loading}>
                Send Password Reset Email
              </Button>
            </form>
            {resetSent && <div className="text-green-600 text-sm mt-2">Password reset email sent!</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 