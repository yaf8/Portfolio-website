import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'anf9onxr',
  dataset: 'production',
  //token: 'Authorization Bearer: skQUgQfMZPtipuFUuMskzW200pLFTcnudks0wuZ63egfbdi4rEnIncixXBxpIxpzoAf5YMS9Erivnjo6pBKUqPi54YBAMSwAStaLdJRrfcb4eirjFTNwrNuBvLUiOeLhc1aF05UH2rjMIe97w3a65pcrVICeS4nRukTsg88jBA3gYOs8rHKL',
  //token: 'Authorization Bearer skL3MMgTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHzPLz7wcKzxOJpKGzWCCON72TDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHtzqNrCKlReAqraHcOMFEfxbIX7mWHOf9b0EuvZHMJjC6GNJrFU3vitIZDwtwffo1UbjM7k3KBjx8joqK1A',
  //token:  "Authorization Bearer " + 'skc6xGRIFUQd2tYJNsXYMWpYJ9LpVTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuH9DVs2yeF44FUMumCNGZb19kwJwJItZfU5oO1A6d1DhwoIMrSpc71DiXKFdm7Mz56MZ9NK2EyearMQA0PMp2jo7ErjZCAAunR0zSzujeC0QlutUQU1ZQiV',
  apiVersion: '2023-05-03',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);