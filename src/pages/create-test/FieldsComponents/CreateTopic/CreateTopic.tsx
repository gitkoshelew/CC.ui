import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../store/store';
import { createTopic } from '../../../../store/reducers/topic-reducer';

type Topic = {
  id: number;
  title: string;
};

type AutocompleteProps = {
  name: string;
  control: any;
};

const CreatableAutocomplete: React.FC<AutocompleteProps> = ({
  name,
  control,
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });
  const dispatch = useAppDispatch();
  const { t } = useTranslation('Topic');
  const [topics, setTopics] = useState<Topic[]>([]);
  const [newTopicName, setNewTopicName] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/topic')
      .then((response) => response.json())
      .then((data) => setTopics(data));
  }, []);

  const addNewTopicHandler = () => {
    dispatch(createTopic(newTopicName));
  };

  const handleNewTopicNameChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value !== '') {
      setNewTopicName(event.target.value);
    }
  };

  const handleCreate = (newValue: string) => {
    console.log(newValue);
    // make a POST request to create new topic on the server
    const newTopic = { id: topics.length + 1, title: newValue };
    // update topics with new topic
    topics.push(newTopic);
    onChange(newTopic);
  };
  const cher = topics.filter(
    (e) => (e.title && e.title !== '') === newTopicName
  );
  console.log(cher, 'cher');
  return (
    <Box>
      <Typography typography='inputTitle'>{t('Test topic')}</Typography>
      <Autocomplete
        value={value}
        filterOptions={(options, params) => {
          const filtered = options.filter((option) =>
            option.title.toLowerCase().includes(params.inputValue.toLowerCase())
          );
          // if (params.inputValue !== '') {
          //   filtered.push({
          //     id: topics.length + 1,
          //     title: params.inputValue,
          //   });
          // }
          return filtered;
        }}
        selectOnFocus
        handleHomeEndKeys
        options={topics}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        renderInput={(params) => (
          <Stack>
            <TextField
              {...params}
              placeholder='Choose topic or add your own...'
              size='small'
              value={newTopicName}
              onChange={handleNewTopicNameChange}
            />
            {cher && (
              <Button variant='outlined' onClick={addNewTopicHandler}>
                {t('Add New Topic')}
              </Button>
            )}
          </Stack>
        )}
        freeSolo
        multiple={false}
        limitTags={1}
        fullWidth
      />
    </Box>
  );
};

export default CreatableAutocomplete;
