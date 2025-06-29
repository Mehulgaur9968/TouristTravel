export const DIARIES = `
  query {
    Diaries {
      docs {
        id
        title
        description
        image {
          url
        }
        region
        interest
      }
    }
  }
`; 