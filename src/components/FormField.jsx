import React from "react";

const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}) => (
    <div>
        <div className="flex items-center gap-2 mb-2 ">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-900 dark:text-[#ffff]"
            >
                {labelName}
            </label>
            {isSurpriseMe && (
                <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="font-semibold text-xs bg-[#EcECF1] dark:bg-[#838383] py-1 px-2 rounded-[5px] text-black dark:text-[#ffff]"
                >
                    Surprise me
                </button>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:placeholder-zinc-400 text-sm rounded-lg focus:ring-2 focus:ring-[#6469ff] dark:focus:ring-[#8286ff] focus:border-transparent outline-none block w-full p-3 transition-all duration-200"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

export default FormField;
