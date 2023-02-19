import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/layout/Layout';
import { wrapper } from '../../store/store';
import { TestQuestionsType } from '../../Types/TestQuestionsType';

export default function TestPage({
  questions,
  isEmptyQuestions,
}: {
  questions: TestQuestionsType[];
  isEmptyQuestions: boolean;
}) {
  const { t } = useTranslation('testPage');

  return (
    <Layout>
      {/* <ButtonBackHome /> */}
      {/* <Id questions={questions} isEmptyQuestions={isEmptyQuestions} /> */}
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'testPage'])),
    },
  }));
