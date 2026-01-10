export default function SelectBox({ label, value, options, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-semibold">{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">Select {label}</option>

        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
