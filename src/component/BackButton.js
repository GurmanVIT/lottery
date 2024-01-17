import { useEffect } from 'react';

const BackButtonHandler = ({ history }) => {
    useEffect(() => {
        const handlePopState = () => {
            // Reload the current page when the back button is pressed
            window.location.reload();
        };

        // Add the event listener
        window.addEventListener('popstate', handlePopState);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [history]);

    return null;
};