'use client';

import { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  /*   models can provide hidration errors, so we do not want them to be opened  when were are at  server rendering. How to prevent this? the trick is bellow, we just need to check when the component is rendered */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
