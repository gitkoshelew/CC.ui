import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../components/layout/Layout';
import { addNot } from '../../store/reducers/errorHandler-reducer';

const ProfilePage = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(111);
    dispatch(addNot({ noticeText: 'hello', noticeStatus: 'error' }));
  }, []);

  return (
    <Layout>
      <h1> Profile Page </h1>
    </Layout>
  );
});

export default ProfilePage;
