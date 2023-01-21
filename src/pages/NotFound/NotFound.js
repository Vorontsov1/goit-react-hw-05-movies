import s from './NotFound.module.scss';

const PageNotFound = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.messege}>Page not found!</div>
      </div>
    </>
  );
};

export default PageNotFound;