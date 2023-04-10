import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import DegreeLiveCodding from './DegreeLiveCodding';
import CodeEditor from './SolutionLiveCodding';

const LiveCodding = () => (
  <Layout>
    <Stack direction='row' spacing={2}>
      <Box sx={{ flexGrow: 1 }}>
        <StylizedPaper title='What’s the degree?'>
          <DegreeLiveCodding
            tabs={[
              { label: 'Description', content: 'Description' },
              { label: 'Drafts', content: 'Drafts' },
              { label: 'Solutions', content: 'Solutions' },
            ]}
          />
        </StylizedPaper>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <StylizedPaper title='Live Coding'>
          <CodeEditor />
        </StylizedPaper>
      </Box>
    </Stack>
  </Layout>
);

export default LiveCodding;
