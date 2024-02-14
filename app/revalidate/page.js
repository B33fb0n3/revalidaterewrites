import {revalidatePath} from "next/cache";

export default function Page() {
    revalidatePath(`/viewpage/somehost.com/helpi`)
    return <p>Revalidated</p>;
}