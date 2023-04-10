import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button, Container, Grid, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { StylizedPaper } from '../../../components/common/StylizedPaper/StylizedPaper';
import { resultApi } from '../../../api/liveCodingApi';
import { resultDataType } from '../../../types/liveCodingTypes';

const MonacoEditor = () => {
  const [code, setCode] = useState<string>('console.log("Hello World!");');
  const [output, setOutput] = useState<any>('');
  const { handleSubmit, control } = useForm<resultDataType>();

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleRunCode = () => {
    try {
      setOutput(eval(code));
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const handleResultData = async (resultData: resultDataType) => {
    const payload = {
      ...resultData,
      codeResult: output
    }
    await resultApi.postResult(payload)
  }

  return (
    <Container>
      <Stack>
        <form onSubmit={handleSubmit(handleResultData)}>
          <Box sx={{ marginBottom: '2rem' }}>
            <StylizedPaper title='' i18nName=''>
              <Editor
                height='30vh'
                defaultLanguage='javascript'
                defaultValue={code}
                onChange={handleEditorChange}
              />
            </StylizedPaper>
          </Box>
          <Stack direction='row' spacing={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Button variant='contained' onClick={handleRunCode}>
                Run Code
              </Button>
            </Box>
            <Box sx={{ flexGrow: 3 }}>
              <Controller
                name='codeResult'
                control={control}
                render={() => (
                  <TextField
                    label=''
                    multiline
                    rows={5}
                    disabled
                    value={output}
                    variant='outlined'
                    fullWidth
                  />
                )}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Button variant='contained' type='submit'>
                Check result
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default MonacoEditor;
