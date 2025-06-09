import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export type Trend = {
  id: string;
  keyword: string;
  description: string | null;
  categories: string[] | null;
  growth: number | null;
  volume: number | null;
  channel_breakdown: any | null;
  search_history: any | null;
  brand: boolean | null;
  sentiment_indicator: string | null;
  timeframe: string | null;
  url: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export function useTrends(limit = 20) {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrends() {
      setLoading(true);
      const { data, error } = await supabase
        .from('trends')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) setError(error.message);
      else setTrends(data || []);
      setLoading(false);
    }
    fetchTrends();
  }, [limit]);

  return { trends, loading, error };
} 