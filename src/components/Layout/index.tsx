import React, { PropsWithChildren } from "react";
import Navbar from "@src/components/Navbar";
export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};