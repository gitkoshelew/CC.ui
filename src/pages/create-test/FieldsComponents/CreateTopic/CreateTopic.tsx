import { useState } from 'react';
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Box } from '@mui/system';

type Props = {
  name: string;
  control: any;
};

type Topic = {
  id: number;
  name: string;
};

const topicOptions: Topic[] = [
  { id: 1, name: 'NodeJS' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Angular' },
];

export default function TopicSelect({ name, control }: Props) {
  const [newTopicName, setNewTopicName] = useState('');
  const [showNewTopicInput, setShowNewTopicInput] = useState(false);
  const [topics, setTopics] = useState(topicOptions);

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
      <FormControl variant='outlined' sx={{ my: 2 }}>
        <InputLabel id={`${name}-label`}>Select a topic</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select labelId={`${name}-label`} label='Topic' {...field}>
              {topics.map((topic) => (
                <MenuItem key={topic.id} value={topic.name}>
                  {topic.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
      {!showNewTopicInput && (
        <Button variant='outlined' onClick={handleNewTopicButtonClick}>
          Add New Topic
        </Button>
      )}
      {showNewTopicInput && (
        <>
          <FormControl variant='outlined' sx={{ my: 2 }}>
            <InputLabel id='new-topic-label'>New Topic</InputLabel>
            <Input
              id='new-topic'
              value={newTopicName}
              onChange={handleNewTopicNameChange}
            />
          </FormControl>
          <Button variant='outlined' onClick={handleNewTopicSave}>
            Save
          </Button>
          <Button variant='outlined' onClick={handleNewTopicCancel}>
            Cancel
          </Button>
        </>
      )}
    </Box>
  );
}
