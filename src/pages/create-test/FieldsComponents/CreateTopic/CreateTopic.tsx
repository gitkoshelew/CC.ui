import React, { ChangeEvent, useState } from 'react';
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Box } from '@mui/system';
import { InputField } from '../InputFieald';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { getOneQuizes } from '../../../../store/reducers/quizzes-reducer';
import { createTopic } from '../../../../store/reducers/topic-reducer';
import { selectOneQuizes, selectTopic } from '../../../../store/selectors';

type Props = {
  name: string;
  control: any;
};

type Topic = {
  id: number;
  name: string;
};

const topicOptions: Topic[] = [
  { id: 1, name: 'Select topic...' },
  { id: 2, name: 'NodeJS' },
  { id: 3, name: 'React' },
  { id: 4, name: 'Angular' },
];

export default function TopicSelect({ name, control }: Props) {
  const [newTopicName, setNewTopicName] = useState('');
  const [showNewTopicInput, setShowNewTopicInput] = useState(false);
  const [topics, setTopics] = useState(topicOptions);
  const dispatch = useAppDispatch();
  const topic = useAppSelector(selectTopic);

  const addNewTopicHandler = () => {
    dispatch(createTopic(newTopicName));
  };

  const handleNewTopicNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTopicName(event.target.value);
  };

  const handleNewTopicButtonClick = () => {
    setShowNewTopicInput(true);
  };

  const handleNewTopicCancel = () => {
    setShowNewTopicInput(false);
    setNewTopicName('');
  };

  const handleNewTopicSave = () => {
    const newId = topics.length + 1;
    const newTopic = { id: newId, name: newTopicName };
    setTopics([...topics, newTopic]);
    handleNewTopicCancel();
  };

  return (
    <Box>
      <Typography typography='inputTitle'>Choose a topic :</Typography>
      <Stack spacing={3} marginBottom='1rem'>
        <TextField
          value={newTopicName}
          placeholder='Type new topic...'
          onChange={(e) => setNewTopicName(e.currentTarget.value)}
        />
      </Stack>
      <Box>
        {!showNewTopicInput && (
          <Button variant='outlined' onClick={addNewTopicHandler}>
            Add New Topic
          </Button>
        )}
      </Box>
      {showNewTopicInput && (
        <>
          <Stack spacing={3}>
            <TextField
              id='new-topic'
              value={newTopicName}
              placeholder='Type new topic...'
              onChange={handleNewTopicNameChange}
            />
          </Stack>
          <Button sx={{margin:"1rem"}} onClick={handleNewTopicSave}>
            Save
          </Button>
          <Button onClick={handleNewTopicCancel}>
            Cancel
          </Button>
        </>
      )}
    </Box>
  );
}
