import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: 'keq6c4vf',
    dataset: 'production',
    apiVersion: '2023-08-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});
const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}