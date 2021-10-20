import { useStae } from "react";
const Checkbox = () => {
  const [checked, SetCheck] = useStae(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => SetCheck(e.target.checked)}
      />
    </div>
  );
};

export default Checkbox;
