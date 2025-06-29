export const MEDIA_FIELDS = `
mimeType
filename
width
height
alt
caption
`

export const MEDIA = `
  query Media {
    allMedia(limit: 100) {
      docs {
        id
        filename
        url
        mimeType
        alt
        caption
      }
    }
  }
`;
