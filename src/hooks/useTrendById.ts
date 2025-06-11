import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { Trend } from './useTrends';

export function useTrendById(id: string | undefined) {
  const [trend, setTrend] = useState<Trend | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    supabase
      .from('trends')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setTrend(data);
        setLoading(false);
      });
  }, [id]);

  return { trend, loading, error };
} 