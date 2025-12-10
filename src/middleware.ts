import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('firebaseAuthToken'); 
  const { pathname } = request.nextUrl;

  // Se o usuário tentar acessar a página de login/cadastro mas já está logado,
  // redirecione para o dashboard.
  if (token && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Se o usuário tentar acessar o dashboard sem estar logado,
  // redirecione para a página de login.
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};
