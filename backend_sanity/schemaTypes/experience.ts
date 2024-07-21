import { defineField, defineType } from 'sanity';

const experiences = defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'workExperience' } }],
    }),
  ],
});

export default experiences;