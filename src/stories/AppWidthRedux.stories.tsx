import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

import AppWidthRedux from "../AppWidthRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {reduxStoreProviderDecorator} from "../model/reduxStoreProviderDecorator";


const meta:Meta<typeof AppWidthRedux> = {
    title: 'Component/AppWidthRedux',
    component: AppWidthRedux,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    args: {

    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    decorators: [reduxStoreProviderDecorator]
}
type Story = StoryObj<typeof meta>;
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export let AppWidthReduxStories: Story;
AppWidthReduxStories = {
};