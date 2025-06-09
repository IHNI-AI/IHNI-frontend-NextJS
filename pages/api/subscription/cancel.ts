import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  // Call Supabase Edge Function to cancel subscription
  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/handle-subscription`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ action: 'cancel' }),
  });

  const data = await response.json();
  if (!response.ok) return res.status(500).json({ error: data.error || 'Failed to cancel subscription' });

  return res.status(200).json({ success: true });
} 