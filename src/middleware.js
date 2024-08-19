import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // if(request.nextUrl.pathname==="/business-dashboard/1"){
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
//   return NextResponse.redirect(new URL('/', request.url))

//    const path= request.nextUrl.pathname;

//    const isPublic= path==="/login" || path===""  
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/business-dashboard/1', 
// }