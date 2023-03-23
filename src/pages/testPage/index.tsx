import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/layout/Layout';
import { wrapper } from '../../store/store';
import { getQuestions } from '../../store/reducers/questions-reducer';

export default function TestPage() {
  return (
    <Layout>
      {/* <ButtonBackHome /> */}
      {/* <Id questions={questions} isEmptyQuestions={isEmptyQuestions} /> */}
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    await store.dispatch(getQuestions());
    const { questions } = store.getState().questions;
    return {
      props: {
        questions,
        ...(await serverSideTranslations(locale as string, [
          'home',
          'testPage',
        ])),
      },
    };
  });
