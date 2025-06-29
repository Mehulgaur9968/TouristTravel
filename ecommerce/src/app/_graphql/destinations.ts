export const DESTINATIONS = `
  query Destinations {
    Destinations {
      docs {
        id
        title
        description
        image {
          url
        }
        location
      }
    }
  }
`; 