"use client"
import { useEffect, useRef, useState } from "react";
import { StoreModal } from "@/components/modals/store-modal";


export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null
    }

    return (
        <>
            <StoreModal />
        </>
    );
}
