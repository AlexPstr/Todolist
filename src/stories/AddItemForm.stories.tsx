import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {AddItemForm, AddItemPropsType} from '../AddItemForm';
import {fn} from "@storybook/test";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";


const meta:Meta<typeof AddItemForm> = {
  title: 'Component/AddItemForm',
  component: AddItemForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    addItem: {
      description: 'Button clicked',
      //action: 'clicked'
    }
  },
  args: {
    addItem: fn()
  }
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args

}
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export let AddItemFormStory: Story;
AddItemFormStory = {
  args: {
    addItem: action('addItem'),
  }
};
export default meta;
const  AddItemFormError = React.memo(({addItem,text}: AddItemPropsType): JSX.Element =>  {

  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<null | string>('Please enter title.')
  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setError(null)
  }
  const addItemHandler = () => {

    if(title.trim() === '') {
      setError("Please enter title.")
      return
    }
    addItem(title)
    setTitle('')

  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      if(title.trim() === '') {
        setError("Please enter title.")
        return
      }
      addItem(title)
      setTitle('')
    }
  }
  return <>
    <TextField
        id="standard-basic"
        label={text}
        value={title}
        variant="outlined"
        size="small"
        helperText={error}
        error={!!error}
        onChange={changeTitleHandler}
        onKeyPress={onKeyPressHandler}
    />
    <IconButton color={"primary"} onClick={addItemHandler}>
      <AddCircleOutlineIcon />
    </IconButton>
  </>
})

export let AddItemFormErrorStory: Story;
AddItemFormErrorStory = {
  render: (args) => <AddItemFormError addItem={args.addItem} text={'title'}/>,
};