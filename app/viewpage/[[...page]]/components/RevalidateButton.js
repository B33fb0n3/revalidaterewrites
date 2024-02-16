'use client'

import {Button} from "@/components/ui/button";
import {log} from "next-axiom";

export default function RevalidateButton() {
    const revalidateIt = async () => {
        const request = await fetch("/api/revalidate", {
            method: "POST"
        });
        const result = await request.json();
        log.debug("result: ", {data: JSON.stringify(result)})
    }

    return (
        <>
            <Button onClick={revalidateIt}>Revalidate</Button>
        </>
    )
}