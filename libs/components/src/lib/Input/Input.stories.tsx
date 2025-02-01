import '../theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'atoms/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Outline: Story = {};

export const Underline: Story = {
  args: { appearance: 'underline' },
  render: (args) => (
    <>
      <label htmlFor="underline-input">Underline Input</label>
      <Input id="underline-input" {...args} />
    </>
  ),
};

export const Placeholder: Story = {
  args: { placeholder: 'Enter your name' },
  render: (args) => (
    <>
      <label htmlFor="underline-input">Input with placeholder</label>
      <Input id="underline-input" {...args} />
    </>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Input is disabled',
      },
    },
  },
  args: { disabled: true },
  render: (args) => (
    <>
      <label htmlFor="disabled-input">Disabled Input</label>
      <Input id="disabled-input" {...args} />
    </>
  ),
};

export const Icons: Story = {
  name: 'Icons Before/After',
  args: { placeholder: 'Enter your name' },
  render: (args) => {
    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label htmlFor="before-input">Full Name</label>
          <Input id="before-input" contentBefore="?" {...args} />
          <p>Icons before the input in the contentBefore slot</p>
        </div>

        <div>
          <label htmlFor="before-input">Full Name</label>
          <Input contentAfter="?" {...args} />
          <p>Icons after the input in the contentAfter slot</p>
        </div>

        <div>
          <label htmlFor="before-input">Full Name</label>
          <Input contentBefore="?" contentAfter="#" {...args} />
          <p>
            Icons before and after the input with the contentBefore and
            contentAfter slot
          </p>
        </div>
      </div>
    );
  },
};
