import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import styled from 'styled-components';
import MessageHeader from "."

const meta: Meta<typeof MessageHeader> = {
  title: 'MessageHeader',
  component: MessageHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof MessageHeader>;

const date = new Date()
const minutesAgoDate = new Date(date)
const hoursAgoDate = new Date(date)
const daysAgoDate = new Date(date)
const monthsAgoDate = new Date(date)

minutesAgoDate.setMinutes(minutesAgoDate.getMinutes() - 10)
hoursAgoDate.setHours(hoursAgoDate.getHours() - 3)
daysAgoDate.setDate(daysAgoDate.getDate() - 10)
monthsAgoDate.setMonth(monthsAgoDate.getMonth() - 2)

export const Default: Story = {
  render: args => <MessageHeader {...args}>Daniel</MessageHeader>,
};

export const WithoutBackIcon: Story = {
  render: args => <MessageHeader {...args} showBack={false}>Daniel</MessageHeader>,
};

export const ActiveNow: Story = {
  render: args => <MessageHeader {...args} lastActive={date}>Daniel</MessageHeader>,
};

export const MinutesAgo: Story = {
  render: args => <MessageHeader {...args} lastActive={minutesAgoDate}>Daniel</MessageHeader>,
};

export const HoursAgo: Story = {
  render: args => <MessageHeader {...args} lastActive={hoursAgoDate}>Daniel</MessageHeader>,
};

export const DaysAgo: Story = {
  render: args => <MessageHeader {...args} lastActive={daysAgoDate}>Daniel</MessageHeader>,
};

export const MonthsAgo: Story = {
  render: args => <MessageHeader {...args} lastActive={monthsAgoDate}>Daniel</MessageHeader>,
};






