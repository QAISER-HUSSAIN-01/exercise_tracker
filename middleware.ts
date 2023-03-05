import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const config = {
    matcher: ['/dashboard/:path*']
}

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://exercise-tracker-three-psi.vercel.app/'

export function middleware(req: NextRequest, res: NextResponse) {
    const token = req.cookies.get('token')?.value    
    if (token) {
        return NextResponse.next();
    } else {
       return NextResponse.redirect(`${url}signin`)
    }
}
