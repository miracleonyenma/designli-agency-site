export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL || "http://localhost:1337/api",
  url: process.env.STRAPI_URL || "http://localhost:1337/",
})
