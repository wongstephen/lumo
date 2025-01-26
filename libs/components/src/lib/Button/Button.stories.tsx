import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'atoms/Button',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Click Me!' },
};

export const Secondary: Story = {
  args: { children: 'Click Me!', variant: 'secondary' },
};

export const Disabled: Story = {
  args: { children: 'Click Me!', variant: 'secondary', disabled: true },
};
