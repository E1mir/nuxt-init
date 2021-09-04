// Store all your util functions here

/**
 * Truncate string function
 * @param {String} string - text
 * @param {Number} length - length
 * @param {Boolean} appendDots - add ellipsis flag
 */
export function truncateString (string, length, appendDots = true) {
  if (typeof string === 'string' && string.length > length) {
    return string.substring(0, length) + (appendDots ? '...' : '')
  } else {
    return string
  }
}
