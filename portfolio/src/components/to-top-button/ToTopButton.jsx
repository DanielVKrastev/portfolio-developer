import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function ToTopButton() {
    const [showButton, setShowButton] = useState(false);
    const location = useLocation();

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        if(location.hash != '#home') {
            setShowButton(true);
        }else{
            setShowButton(false);
        }
    }, [location.hash])

    return (
        <>
            <button onClick={goToTop} id="to-top-button" title="Go To Top"
                className={`${!showButton && 'hidden'} fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full cursor-pointer shadow-md bg-default-600 hover:bg-default-700 text-white text-lg font-semibold transition-colors duration-300`}>
                <ArrowUp className="w-6 h-6" />
                <span className="sr-only">Go to top</span>
            </button>
        </>
    );
}