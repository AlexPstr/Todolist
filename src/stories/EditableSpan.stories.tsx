import type { Meta, StoryObj } from '@storybook/react';
import {fn} from "@storybook/test";
import {EditableSpan} from "../EditableSpan";

const meta:Meta<typeof EditableSpan> = {
    title: 'Component/EditableSpan',
    component: EditableSpan,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes

    args: {
        changeTitle: fn()
    }
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args

}
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export let EditableSpanStory: Story;
EditableSpanStory = {
    args: {
        title: 'string',

    }
};
export default meta;
