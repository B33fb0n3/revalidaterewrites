import { NextResponse } from 'next/server'

export function middleware(request) {
    let host = request.nextUrl.host;
    host = "somehost.com";
    return NextResponse.rewrite(new URL('/viewpage/' + host + request.nextUrl.pathname, request.url))
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static file)
         * - _next/image (image optimization file)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|revalidate|viewpage).*)',
    ],
}