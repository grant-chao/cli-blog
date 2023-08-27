import {useEffect} from "react";

export const useThemeMode = (callback) => {
    useEffect(() => {
        const themeModeEvent = event =>{
            callback(event.mode)
        };
        const matchMediaEvent = event => {
            if (event.matches) { // dark mode
                callback('dark');
            } else {
                callback('light');
            }
        };
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        window.addEventListener('theme-mode', themeModeEvent)
        media.addEventListener('change', matchMediaEvent);
        return () => {
            window.removeEventListener('theme-mode', themeModeEvent);
            media.removeEventListener('change', matchMediaEvent);
        }
    }, []);
}
