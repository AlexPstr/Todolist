import type {Meta, StoryObj} from "@storybook/react";
import {TaskWidthRedux} from "../TaskWidthRedux";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {TasksType, TaskType} from "../App";
import {reduxStoreProviderDecorator} from "../model/reduxStoreProviderDecorator";
import {v1} from "uuid";

const meta:Meta<typeof TaskWidthRedux> = {
    title: 'Component/TaskWidthRedux',
    component: TaskWidthRedux,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
   decorators: [reduxStoreProviderDecorator],

}
type Story = StoryObj<typeof meta>;


const Task = () => {
    let task = useSelector<AppRootStateType, TaskType>(state => state.tasks['id1'][0])

    if(!task){
        task = {id: v1(), title: 'JS', isDone: true}
    }
    return <TaskWidthRedux tdId={'id1'} taskId={task.id} task={task} />
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export let TaskStory: Story;
TaskStory = {
   render: () => <Task />
}

export default meta;
