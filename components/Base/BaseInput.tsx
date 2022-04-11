import React from 'react'
import type { NextPage } from 'next'

type IProps = {
	[key: string]: string;
}

const BaseInput = ({ type, placeholder, label }: IProps) => {
	return (
		<div className="flex flex-col w-full mb-6">
			<label className="text-[#82869A] font-normal text-sm mb-1">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className="border-b-2 border-b-grey-soft py-1.5 block text-[#373C56] font-semibold bg-white w-full 
					placeholder:text-base placeholder:font-normal placeholder:text-grey-soft
					focus:outline-none focus:border-b-[3px] focus:border-b-gray-700"
			/>
		</div>
	)
}

export default BaseInput;