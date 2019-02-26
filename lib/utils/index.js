import {
  SOCIAL_NETWORK_LINKS,
  SOCIAL_NETWORK_ICONS,
} from 'lib/enums'

export const boilerplate = (
  string: string,
  pattern: string,
  value: string,
): string => (string || '').replace(pattern, value)

export const getSocialLink = (type: string, username: string): string | null => {
  const typeParsed = type && type.toUpperCase()

  const link = SOCIAL_NETWORK_LINKS[typeParsed]
  if (!link) return null

  return boilerplate(link, '{username}', username);
}

export const getSocialIcon = (type: string): string | null => {
  const typeParsed = type && type.toUpperCase()
  const icon = SOCIAL_NETWORK_ICONS[typeParsed]
  return icon
}

export const classnames = (...rest): string => rest.filter(Boolean).join(' ')
