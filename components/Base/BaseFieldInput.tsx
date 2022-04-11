import React from 'react'

type IProps = {
	[key: string]: string;
}

const BaseFieldInput = ({ id, type, placeholder, label }: IProps) => {
	return (
		<div className="w-full mb-4">
			{ label && (
				<label className="block tracking-wide text-gray-700 text-xs font-medium mb-2">
					{label}
				</label>
			)}

			<input className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-base placeholder:font-normal placeholder:text-grey-soft"
				id={id}
				type={type}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default BaseFieldInput;