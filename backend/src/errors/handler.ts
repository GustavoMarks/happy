import { ErrorRequestHandler, request } from 'express';
import { ValidationError } from 'yup';

interface ValidationErros {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErros = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'validation fails', errors })
  }

  console.log(error);

  return response.status(500).json({ message: 'internal server error' })
}

export default errorHandler