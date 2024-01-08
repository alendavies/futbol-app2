function Select({ options }: { options: string[] }) {
    return (
        <select className="select select-bordered bg-base-300 select-lg text-white w-full max-w-xs">
            {options.map((option, idx) => (
                <option key={idx}>{option}</option>
            ))}
        </select>
    );
}

export default Select;
