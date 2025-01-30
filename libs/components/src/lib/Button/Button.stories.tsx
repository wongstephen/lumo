import '../theme.css';

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import ArrowIcon from '../Icons/ArrowIcon';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'atoms/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const DEFAULT_CHILDREN = 'Submit';

export const Primary: Story = {
  args: { children: DEFAULT_CHILDREN },
};

export const Secondary: Story = {
  args: { children: DEFAULT_CHILDREN, appearance: 'secondary' },
};

export const Outline: Story = {
  args: { children: DEFAULT_CHILDREN, appearance: 'outline' },
};

export const Transparent: Story = {
  args: { children: DEFAULT_CHILDREN, appearance: 'transparent' },
};

export const Disabled: Story = {
  args: { children: DEFAULT_CHILDREN, appearance: 'secondary', disabled: true },
};

export const Icons: Story = {
  name: 'Icon Before/After',
  args: {
    children: DEFAULT_CHILDREN,
    type: 'button',
  },
  render: (args) => {
    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <Button
            {...args}
            iconPosition="before"
            icon={<ArrowIcon variant="left" />}
          />
          <p>Icons before the button with the iconBefore slot</p>
        </div>
        <div>
          <Button
            {...args}
            iconPosition="after"
            icon={<ArrowIcon variant="right" />}
          />
          <p>
            Icons before and after the button with the iconBefore and iconAfter
            slot
          </p>
        </div>
      </div>
    );
  },
};
