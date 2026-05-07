import * as v from 'valibot';

const REGEX_PHONE = /^([+]?(\d{9,15}))$/;

const isNotEmptyString = () =>
  v.pipe(
    v.literal(''),
    v.transform(() => undefined)
  );

export const isOptionalEmail = (m?: string) =>
  v.optional(v.union([isNotEmptyString(), v.pipe(v.string(), v.nonEmpty(), v.email(m))]));

export const isOptionalString = () => v.optional(v.string());

export const isRequiredEmail = (m?: string) => v.pipe(v.string(), v.nonEmpty(m), v.email(m));

export const isRequiredString = (m?: string) => v.pipe(v.string(m), v.minLength(1, m));

