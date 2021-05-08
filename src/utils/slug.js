import slugify from 'slugify';

export function slug(value, prefix = '') {
  return `${prefix}${slugify(value, { strict: true, lower: true })}`;
}
