import type {Meta, StoryObj} from "@storybook/react";
import {Task} from "../Task";
import {fn} from "@storybook/test";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

const meta:Meta<typeof Task> = {
    title: 'Component/Task',
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args:{
    changeTaskStatus: fn(),
        removeTask: fn(),
        tdId: '1',
        taskId: '1',
        changeTaskTitle: fn()
}
}
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export let TaskNotIsDoneStory: Story;
TaskNotIsDoneStory = {
    args: {
        tdId: 'id1',
        task: {id: '1', title: 'Task 1', isDone: false},
    }
};

export let TaskIsDoneStory: Story;
TaskIsDoneStory = {
    args: {
        task: {id: '1', title: 'Task 1', isDone: true},
    }
};
export default meta;
const ToggleTask = () => {
    const [task, setTask] = useState({id:'1', title: 'task1', isDone: false});
    const changeTaskStatus = (tdId: string,taskId: string, value: boolean) => {
        setTask({...task, isDone: value});
    }
    const changeTaskTitle = (tdId: string, taskId: string, title: string) => {
        setTask({...task, title: title})
    }
    return <Task taskId={'1'} task={task} changeTaskTitle={changeTaskTitle} changeTaskStatus={changeTaskStatus} removeTask={action('removeTask')} tdId={'1'} />
}
export const toggleTaskStories: Story = {
    render: () => <ToggleTask/>
}