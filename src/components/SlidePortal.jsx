import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


const SlidePortal = ({ children }) => {

    const elRef = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const portalRoot = document.getElementById('portal');
        portalRoot.appendChild(elRef.current);

        return () => portalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(<div> {children} </div>, elRef.current);
};

export default SlidePortal; 
