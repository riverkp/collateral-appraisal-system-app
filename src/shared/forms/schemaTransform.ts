import { z, type ZodTypeAny } from 'zod';

export function coercedNumber(number: ZodTypeAny) {
  return z.preprocess((val) => val === "" ? undefined : Number(val), number );
}