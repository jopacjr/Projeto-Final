import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Exemplo de verificação de autenticação via localStorage.
  // Adapte 'token' ou a lógica para a chave/método utilizado na sua aplicação.
  const isAuthenticated = !!localStorage.getItem('token');

  if (isAuthenticated) {
    return true;
  }

  // Se não estiver autenticado, redireciona para a página de auth/login
  return router.createUrlTree(['/auth']);
};