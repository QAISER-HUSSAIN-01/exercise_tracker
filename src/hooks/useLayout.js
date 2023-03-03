import { useState,useEffect } from "react";

export default function useLayout(){
    const [windowSize, setWindowSize] = useState();
    const [windowResize, setWindowResize] = useState();
    const [hide, setHide] = useState('none');
    const [left, setLeft] = useState('-500px');
  
    const handleSidebar = () => {
      if (windowSize < 600 || windowResize < 600 ) {
        if (left === '-500px') {
          setLeft('0');
          setHide('block');
        } else {
          setLeft('-500px');
          setHide('none');
        }
      } else{
        if (hide === 'block') {
          setHide('none');
        } else {
          setHide('block');
        }
      }
    }
    
    const handleSidebarLinks = () => {
      if (windowSize < 600 || windowResize < 600 ) {
        if (left === '-500px') {
          setLeft('0');
          setHide('block');
        } else {
          setLeft('-500px');
          setHide('none');
        }
      }
    }

    const handleResize = () => {
      const { innerWidth } = window;
      setWindowResize(innerWidth);
      setWindowSize(innerWidth);
    }
  
    const handleLoad = () => {
      if (window.innerWidth < 600) {
        setHide('block');
      } else {
        setHide('none');
      }
      setWindowSize(window.innerWidth);
    }
  
    useEffect(() => {
      handleLoad();
      window.addEventListener('resize', handleResize);
    }, []);

    return [handleSidebar,handleSidebarLinks,left,hide]
  
}