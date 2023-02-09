import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function Preloader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };

    // <Remark?>
    // if I am not mistaken, then it should be
    // Router.events in dependency array
    // of useEffect hook
  });

  return loading ? <LinearProgress /> : null;
}
