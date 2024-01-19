import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './accordion';
import * as icons from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta: Meta<AccordionProps> = {
  component: Accordion,

  parameters: {
    controls: { expanded: true },
    docs: {
      description: 'Accordion component',
    },
  },
  title: 'Accordion',
  argTypes: {
    title: { control: 'text', description: 'Accordion title' },
    icon: {
      description: 'Icon displayed to the left of the title text',
      control: {
        type: 'select',
      },
      options: Object.keys(icons).filter(key => key.endsWith('Icon')),
    },
    iconOpen: {
      description: 'Icon displayed to the right of the accordion whe open',
      control: {
        type: 'select',
      },
      options: Object.keys(icons).filter(key => key.endsWith('Icon')),
    },
    iconClosed: {
      description: 'Icon displayed to the right of the accordion whe closed',
      control: {
        type: 'select',
      },
      options: Object.keys(icons).filter(key => key.endsWith('Icon')),
    },
    children: {
      description: 'Content of the accordion',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  name: 'Accordion',

  args: {
    title: 'Accordion',
    icon: 'PhoneIcon',
    iconOpen: 'ChevronUpIcon',
    iconClosed: 'ChevronDownIcon',
    children: (
      <div>
        <h1 className='size-24 font-bold w-full h-auto pb-5'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
          arcu, fermentum eu sem id, finibus ullamcorper nisl. Nunc lacinia nec
          dui id aliquet. Mauris ullamcorper diam elit. Cras tincidunt neque eu
          ante fringilla bibendum. Maecenas laoreet sagittis neque non tempor.
          Sed vestibulum vitae ex eget tempus. Cras sem mi, ullamcorper nec ex
          commodo, ultrices dignissim diam. Mauris tristique arcu quis felis
          pellentesque, vestibulum sollicitudin sem consectetur. Vivamus dictum
          lorem risus, ultricies aliquam libero gravida quis. Etiam tempus felis
          leo, ut fringilla urna tincidunt at. Morbi ullamcorper vestibulum
          sapien, nec malesuada urna. Sed malesuada ut nisl eget ultricies.
        </p>

        <p className='pb-5'>
          Fusce et fringilla diam, et convallis mauris. Duis quis dignissim mi.
          Cras sapien libero, pulvinar eu nibh et, varius pulvinar sem. Nullam
          dapibus nisl ac nulla vestibulum commodo. Suspendisse at finibus arcu.
          Aenean tempor, arcu non dictum porttitor, tellus nulla eleifend risus,
          id fringilla orci elit nec nisi. Donec bibendum odio sit amet rutrum
          aliquam. Proin ac ligula ac quam posuere tempor non id dolor. Nulla
          commodo a velit id ullamcorper. Donec ligula dolor, sollicitudin at
          tincidunt faucibus, laoreet nec sapien. Praesent vitae nisi tellus.
          Vestibulum sagittis sollicitudin justo, at suscipit justo bibendum
          nec.
        </p>
      </div>
    ),
  },
};
