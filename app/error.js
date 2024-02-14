'use client'

import {useEffect} from "react";
import {useLogger} from "next-axiom";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Error({error, reset}) {
    const log = useLogger();

    useEffect(() => {
        log.error(error.message, {
            data: JSON.stringify({
                error
            })
        })
    }, [error])

    return (
        <div className={"flex flex-col gap-y-6 min-h-[500px] items-center py-8 px-2"}>
            <Image src={"/failure.png"} alt={"failed"} height={100} width={100}/>
            <div className={"flex flex-col gap-y-2 items-center text-center"}>
                <h1 className={"text-2xl"}>Irgendwas ist kaputt :(</h1>
                <p>#{error.digest}</p>
            </div>
            <Button onClick={reset}>
                Nochmal versuchen
            </Button>
        </div>
    )
}