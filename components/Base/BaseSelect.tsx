import React from 'react'
import type { NextPage } from 'next'

type IProps = {
	[key: string]: string;
}

const BaseSelect = ({ type, placeholder, label }: IProps) => {
	return (
		<div className="w-full mb-4">
			{label && (
				<label className="block tracking-wide text-gray-700 text-xs font-medium mb-2">
					{label}
				</label>
			)}
			<div className="relative">
				<select defaultValue={placeholder} className="block appearance-none w-full bg-transparent border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
					{/* pass array of objects */}
					{/* <option value="" selected>{ placeholder }</option> */}
					<option>Value 1</option>
					<option>Value 2</option>
					<option>Value 3</option>
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
					<svg className="fill-current h-4 w-4 rotate-90" width="6" height="12"  viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12L6 6L0 0" fill="#091E46"/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default BaseSelect;