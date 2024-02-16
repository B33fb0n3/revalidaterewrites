import React from "react";
import {notFound} from "next/navigation";
import RevalidateButton from "@/app/viewpage/[[...page]]/components/RevalidateButton";

export const dynamic = 'force-static'

export default async function CustomerPage({params}) {
    const hostKey = params.page[0];
    const pagePath = params.page.slice(1, params.page.length).join("/");

    if(pagePath !== "helpi" || hostKey !== "somehost.com")
        return notFound()

    const result = await fetch('https://worldtimeapi.org/api/timezone/America/Chicago');
    const data = await result.json();

    return (
        <>
            <p>{data.datetime}</p>
            <RevalidateButton />
        </>
    )
}