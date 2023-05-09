import {createClient} from '@sanity/client'


export const sanityClient = createClient({
    projectId: 'rm0e1feu',
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2021-10-21', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

