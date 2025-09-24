
import { useState, useCallback, useEffect } from 'react';

export const useCopyToClipboard = (timeout = 2000): [boolean, (text: string) => void] => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback((text: string) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard not supported');
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
    });
  }, []);

  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => {
        clearTimeout(hide);
      };
    }
    return undefined;
  }, [isCopied, timeout]);

  return [isCopied, copy];
};
