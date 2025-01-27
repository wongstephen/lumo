import '../theme.css';

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
