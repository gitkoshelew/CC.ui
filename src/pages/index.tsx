import Container from '@mui/material/Container';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { CardsWithQuizes } from '../components/cards/CardsWithQuizes';
import { categories, sort } from '../Mocs/NavigationMoc';
import { wrapper } from '../store/store';
import { quizesApi } from '../api/quizesApi';
import { fetchQuizesAC, postQuizesAc } from '../store/reducers/quizes-reducer';
import { QuizesType } from '../components/common/types';
import {useEffect} from "react";

export default function Home({ quizes }: { quizes: QuizesType[] }) {
    useEffect(() => {
        const sendData = async () => {
            const postRes = await quizesApi.postQuizes();
              console.log(postRes.data)
            };
        sendData()
    },[])
  // const sendData = async () => {
  //   const postRes = await quizesApi.postQuizes();
  //   return postRes;
  // };
  // sendData();
  return (
    <Layout headerType='full'>
      <Container>
        <Navigation sort={sort} categories={categories} />
        <CardsWithQuizes quizes={quizes} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await quizesApi.getQuizes();
    store.dispatch(fetchQuizesAC(res.data));

    return {
      props: {
        quizes: res.data,
      },
    };
  }
);
