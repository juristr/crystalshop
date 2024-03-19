import styles from './form-controls.module.css';

/* eslint-disable-next-line */
export interface FormControlsProps {}

export function FormControls(props: FormControlsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormControls!</h1>
    </div>
  );
}

export default FormControls;
