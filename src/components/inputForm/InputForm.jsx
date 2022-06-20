import "./inputForm.scss";
const InputForm = ({ id, label, type, placeholder, value }) => {
  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        // onChange={handleChange}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
      />
    </div>
  );
};

export default InputForm;
