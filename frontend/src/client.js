import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'anf9onxr',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  //token:  "Authorization Bearer " + 'skc6xGRIFUQd2tYJNsXYMWpYJ9LpVTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuH9DVs2yeF44FUMumCNGZb19kwJwJItZfU5oO1A6d1DhwoIMrSpc71DiXKFdm7Mz56MZ9NK2EyearMQA0PMp2jo7ErjZCAAunR0zSzujeC0QlutUQU1ZQiV',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);