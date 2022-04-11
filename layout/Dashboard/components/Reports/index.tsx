import React from 'react'
import type { NextPage } from 'next'

type IProps = {
	active?: Boolean;
	isNew?: Boolean;
}

const ReportItem = ({ active, isNew }: IProps) => {
	return (
		<div className="w-full flex items-center justify-between px-6 py-3 cursor-pointer border-b border-gray-200 last:border-b-0">
			<div className="flex items-center justify-between space-x-12">
				<div className="flex items-center w-52 space-x-6">
					<input type="checkbox" className="border border-gray-100" />
					<div className="flex items-center space-x-2">
						<span className={`"font-medium text-sm ${ active ? 'text-blue-aud' : 'text-[#304156]'}"`}>February Report</span>
						{isNew && (
							<span className="rounded-full bg-[#39DA8A] bg-opacity-40 text-green-500 uppercase text-[10px] px-2">new</span>						
						)}
					</div>
				</div>

				<span className="font-medium text-sm text-gray-400">4th, October 2021  11:20am</span>
			</div>

			{/* action */}
			<div className="flex items-center space-x-8">
				<button className="bg-[#3DB0FF] text-white px-8 py-2 rounded ">View</button>

				<span>
					<svg className="text-blue-aud w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V16.5858L4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H3ZM0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H17C17.7957 0 18.5587 0.31607 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V13C20 13.7957 19.6839 14.5587 19.1213 15.1213C18.5587 15.6839 17.7957 16 17 16H5.41421L1.70711 19.7071C1.42111 19.9931 0.990991 20.0787 0.617317 19.9239C0.243642 19.7691 0 19.4045 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868Z" fill="#081494"/>
					</svg>
				</span>
			</div>
		</div>
	)
}

export default ReportItem;