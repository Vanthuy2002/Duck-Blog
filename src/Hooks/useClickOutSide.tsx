import { useEffect, useRef, useState } from 'react';

export function useClickOutSide(dom = 'button') {
  const [hide, setHide] = useState<boolean>(false);
  const nodeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutSide(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        nodeRef.current &&
        !nodeRef.current.contains(target) &&
        !target.matches(dom)
      ) {
        setHide(false);
      }
    }
    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [dom]);

  return {
    hide,
    setHide,
    nodeRef,
  };
}
