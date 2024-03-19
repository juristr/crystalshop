import styles from './form-controls.module.css';

import { Buttons } from '@crystalshop/shared/ui/react/buttons';

/* eslint-disable-next-line */
export interface FormControlsProps {}

export function FormControls(props: FormControlsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormControls!</h1>
      <Buttons />
    </div>
  );
}

export default FormControls;
