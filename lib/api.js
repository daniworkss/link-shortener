const linkshortenerUrl = process.env.NEXT_PUBLIC_LINK_SHORTENER_URL
const contentType = process.env.NEXT_PUBLIC_CONTENT_TYPE
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const apiHost = process.env.NEXT_PUBLIC_API_HOST


export const linkOptions = {
    method: 'POST',
    url: linkshortenerUrl,
    headers: {
        'content-type': contentType,
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    },
}