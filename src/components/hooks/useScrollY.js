import {useState, useEffect} from 'react'

export function useScrollY (){
    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY)
    }
    useEffect(()=>{
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);
        return () => {
        window.addEventListener('scroll', handleScrollY);
        }
    },[])
    return ([scrollY]);
}