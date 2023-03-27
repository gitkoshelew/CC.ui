import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Controller, useController } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import {
  createTopic,
  getAllTopics,
} from '../../../../store/reducers/topic-reducer';
import { PlusIcon } from '../../../../assets/icons/PlusIcon';

type Topic = {
  id: number;
  title: string;
};

type AutocompleteProps = {
  name: string;
  control: any;
};

const CreateTopicComponent: React.FC<AutocompleteProps> = ({
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
  const topics = useAppSelector((state) => state.topics.topicData);
  // const [topics, setTopics] = useState<Topic[]>([]);
  const [newTopicName, setNewTopicName] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAllTopics());
  }, []);

  console.log(topics);

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
  const getTopicTitles = () => {
    const allTopicsTitle = [];
    for (const topic of topics) {
      const topicTitles = topic.title;
      allTopicsTitle.push(topicTitles);
    }
    return allTopicsTitle;
  };
  console.log(getTopicTitles());
  const cher = topics.filter(
    (e) => (e.title && e.title !== '') === newTopicName
  );
  console.log(cher, 'cher');
  return (
    <Box sx={{ width: '19rem' }}>
      <Typography typography='inputTitle'>{t('Test topic')}</Typography>
      <Autocomplete
        value={value}
        loading={isLoading}
        filterOptions={(options, params) => {
          setIsLoading(true);
          const filtered = options.filter((option) =>
            option.title.toLowerCase().includes(params.inputValue.toLowerCase())
          );
          // if (params.inputValue !== '') {
          //   filtered.push({
          //     id: topics.length + 1,
          //     title: params.inputValue,
          //   });
          // }
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          return filtered;
        }}
        selectOnFocus
        handleHomeEndKeys
        options={topics}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        renderInput={(params) => (
          <Controller
            name={name}
            control={control}
            render={() => (
              <Stack>
                <TextField
                  {...params}
                  placeholder='Choose topic or add your own...'
                  size='small'
                  value={newTopicName}
                  onChange={handleNewTopicNameChange}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoading ? (
                          <CircularProgress color='inherit' size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
                {!getTopicTitles().includes(newTopicName) && (
                  <Button
                    sx={{ marginTop: '1rem', width: '15rem' }}
                    variant='outlined'
                    onClick={addNewTopicHandler}
                  >
                    {t('Add New Topic')}
                    <Stack sx={{ marginLeft: '1rem' }}>
                      <PlusIcon />
                    </Stack>
                  </Button>
                )}
              </Stack>
            )}
          />
        )}
        freeSolo
        multiple={false}
        limitTags={1}
        fullWidth
      />
    </Box>
  );
};

export default CreateTopicComponent;
