import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      foo: 'bar',
      // Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  return next(req);
};
