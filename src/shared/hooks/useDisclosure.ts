import { useState, useCallback } from 'react';

interface UseDisclosureProps {
  defaultIsOpen?: boolean;
}

/**
 * Custom hook for managing disclosure state (open/closed)
 * Useful for modals, dropdowns, etc.
 */
export function useDisclosure({ defaultIsOpen = false }: UseDisclosureProps = {}) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
