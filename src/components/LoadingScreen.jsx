import React from 'react';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
 


const LoadingScreen = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setLoading(false)},1000); 
        
        router.events.on('routeChangeStart',handleStart);
        router.events.on('routeChangeComplete',handleComplete);
        router.events.on('routeChangeError',handleComplete);

        return () => {
        router.events.off('routeChangeStart',handleStart);
        router.events.off('routeChangeComplete',handleComplete);
        router.events.off('routeChangeError',handleComplete);
        }
    }, [router.events, router.asPath])
    return (loading && (
        <div className="spinnerWrapper">
            <div className="spinner">
            <i className="fa fa-spinner fa-spin" style={{fontSize:"24px",color:"white"}}></i>
            </div>
        </div>
    ));
}

export default LoadingScreen;
