import s from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <h2 className={s.notification}>{message}</h2>
    </>
  );
}
