import styles from "./WarningMessage.module.css";

const WarningMessage = ({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) => {
  return (
    <div className={styles.warning_message_container}>
      <p className={error ? styles.error : styles.warning}>{message}</p>
    </div>
  );
};

export { WarningMessage };
