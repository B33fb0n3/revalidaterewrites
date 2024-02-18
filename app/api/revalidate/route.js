import {revalidatePath, revalidateTag} from "next/cache";
import {NextResponse} from "next/server";

export async function POST() {
    revalidatePath(`/helpi`)
    revalidateTag(`somehost.com`)
    return NextResponse.json({
        now: Date.now(),
        revalidated: true,
    }, {status: 200})
}