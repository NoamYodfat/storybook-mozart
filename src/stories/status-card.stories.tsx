import type { Meta, StoryObj } from '@storybook/react';
import StatusCard from "../components/status-card"
const meta: Meta<typeof StatusCard> = {
  title: 'Components/StatusCard',
  component: StatusCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    route: { control: 'text' },
    coordinates: { control: 'text' },
    isReady: { control: 'boolean' },
    connections: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof StatusCard>;

export const Default: Story = {
  args: {
    route: 'מסלול 1',
    coordinates: '276909.655437 x,y',
    isReady: true,
    connections: ['לא מחובר', 'לא מחובר', 'לא מחובר'],
  },
};

export const NotReady: Story = {
  args: {
    ...Default.args,
    isReady: false,
  },
};

export const WithConnections: Story = {
  args: {
    ...Default.args,
    connections: ['מחובר', 'לא מחובר', 'מחובר'],
  },
};

export const LongRouteName: Story = {
  args: {
    ...Default.args,
    route: 'מסלול ארוך מאוד עם הרבה מילים',
  },
};

