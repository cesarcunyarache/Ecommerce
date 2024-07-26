"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { SignUp, UserButton } from "@clerk/nextjs";
import { useEffect} from "react";

const SetupPage = ({ children }: { children: React.ReactNode }) => {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div className="p-4">
      <UserButton />
      
    </div>
  );
};

export default SetupPage;
