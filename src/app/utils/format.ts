import slugify from "slugify"

export const slug = (text: string) => {
  return slugify(text, {
    lower: true
  })
}

export const title = (text: string, ommitFirstWord = true) => {
  const textSplit = text.split('-').map(word => `${word[0].toLocaleUpperCase()}${word.substring(1)}`)
  const textFormated = textSplit.length > 1 && ommitFirstWord ? textSplit.slice(1).join(" ") : textSplit.join(" ")
  return textFormated
}

export const decodeBase64UTF8 = (encoded: string) => {
  return decodeURIComponent(Array.prototype.map.call(atob(encoded), function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}