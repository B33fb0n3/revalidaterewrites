import React from "react";
import {notFound} from "next/navigation";
import RevalidateButton from "@/app/viewpage/[[...page]]/components/RevalidateButton";
import {unstable_cache} from "next/cache";

export const dynamic = "force-static";

export default async function CustomerPage({ params }) {
  const hostKey = params.page[0];
  const pagePath = params.page.slice(1, params.page.length).join("/");
  const getTime = unstable_cache(
    async () => {
      return await (
        await fetch("https://worldtimeapi.org/api/timezone/America/Chicago")
      ).json();
    },
    [hostKey],
    { tags: [hostKey] }
  );
  if (pagePath !== "helpi" || !(hostKey == "somehost.com" || hostKey == "someotherhost.com"))
    return notFound();
  const data = await getTime();

  // const result = await fetch('https://worldtimeapi.org/api/timezone/America/Chicago', {next: {tags: [hostKey]}});
  // const data = await result.json();

  return (
    <>
      <p>{data.datetime}</p>
      <RevalidateButton />
    </>
  );
}