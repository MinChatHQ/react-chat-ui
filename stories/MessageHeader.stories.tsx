import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import MessageHeader, { Props } from "../src/message-header"

const meta: Meta = {
  title: 'MessageHeader',
  component: MessageHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const date = new Date()
const minutesAgoDate = new Date(date)
const hoursAgoDate = new Date(date)
const daysAgoDate = new Date(date)
const monthsAgoDate = new Date(date)



minutesAgoDate.setMinutes(minutesAgoDate.getMinutes() - 10)
hoursAgoDate.setHours(hoursAgoDate.getHours() - 3)
daysAgoDate.setDate(daysAgoDate.getDate() - 10)
monthsAgoDate.setMonth(monthsAgoDate.getMonth() - 2)





const Template: Story<Props> = args => <MessageHeader >Daniel</MessageHeader>
const NoBackTemplate: Story<Props> = args => <MessageHeader showBack={false} >Daniel</MessageHeader>
const ActiveNowTemplate: Story<Props> = args => <MessageHeader lastActive={date}>Daniel</MessageHeader>
const MinutesAgoTemplate: Story<Props> = args => <MessageHeader lastActive={minutesAgoDate}>Daniel</MessageHeader>
const HoursAgoTemplate: Story<Props> = args => <MessageHeader lastActive={hoursAgoDate}>Daniel</MessageHeader>
const DaysAgoTemplate: Story<Props> = args => <MessageHeader lastActive={daysAgoDate}>Daniel</MessageHeader>
const MonthsAgoTemplate: Story<Props> = args => <MessageHeader lastActive={monthsAgoDate}>Daniel</MessageHeader>










// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithoutBackIcon = NoBackTemplate.bind({});
export const ActiveNow = ActiveNowTemplate.bind({});
export const MinutesAgo = MinutesAgoTemplate.bind({});
export const HoursAgo = HoursAgoTemplate.bind({});
export const DaysAgo = DaysAgoTemplate.bind({});
export const MonthsAgo = MonthsAgoTemplate.bind({});






