import { useEffect, MutableRefObject } from 'react';

const checkIsContains = (targetClassName: string, classNames: string[]) => {
  if (!classNames) return true;

  let isContains = true;

  for (let i = 0; i < classNames.length; i += 1) {
    if (classNames[i] === targetClassName) isContains = false;
  }

  return isContains;
};

export const useOutsideAlerter = (
  ref: MutableRefObject<any>,
  onClose: () => void,
  targetClassName?: string,
) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (targetClassName) {
          if (checkIsContains(targetClassName, event.target.classList)) {
            event.preventDefault();
            onClose();
          }
        } else {
          event.preventDefault();
          onClose();
        }
      }
    }
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref]);
};
