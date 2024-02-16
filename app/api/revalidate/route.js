import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";

export async function POST() {
    revalidatePath(`/viewpage/somehost.com/helpi`)
    return NextResponse.json({
        now: Date.now(),
        revalidated: true,
    }, {status: 200})
}