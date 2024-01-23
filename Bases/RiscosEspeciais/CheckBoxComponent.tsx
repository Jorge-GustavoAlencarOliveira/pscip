import Form from 'react-bootstrap/Form';
import styles from '../../src/pages/home.module.css'

type CheckBoxRiscoEspeciaisProps = {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  list?: string[];
};

const CheckBoxRiscoEspeciais = ({
  name,
  handleChange,
  disabled,
  list,
}: CheckBoxRiscoEspeciaisProps) => {
  return (
    <div>
      <Form.Check
        type="checkbox"
        id={name}
        label={name}
        value={name}
        onChange={handleChange}
        disabled={disabled}
        checked={list.includes(name)}
        className={styles.checkboxComponent}
      />
    </div>
  );
};

export default CheckBoxRiscoEspeciais;
