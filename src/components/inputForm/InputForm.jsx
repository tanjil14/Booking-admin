import "./inputForm.scss";
const InputForm = ({ id, label, type, value, onChange }) => {
  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} type={type} id={id} value={value} />
    </div>
  );
};

export default InputForm;
