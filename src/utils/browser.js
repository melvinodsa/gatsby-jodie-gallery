import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
    const [size, setSize] = useState(defaultScreenSize);
    useLayoutEffect(() => {
        if (!isBrowser()) {
            return
        }
        function updateSize() {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export const useWindowSizeChanged = () => {
    const [oldSize, setOldSize] = useState(defaultScreenSize);
    const size = useWindowSize();
    const newSize = Object.assign({}, size, { changed: size.width !== oldSize.width || size.height !== oldSize.height });
    if (newSize.changed) {
        setOldSize(size);
    }
    return newSize;
}

export const useIsLargeScreen = () => {
    const size = useWindowSizeChanged();
    return isSizeLargeScreen(size);
}

export const isSizeLargeScreen = (size) => {
    return size.width > 768;
}

export const defaultScreenSize = { width: 1440, height: 821 };

export const isBrowser = () => typeof window !== "undefined";

export const isIndexLocation = () => isBrowser() && (
    window.location.pathname === '/' || window.location.pathname === ''
);