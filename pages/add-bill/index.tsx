import React, { ReactNode } from 'react'
import Head from 'next/head'

// layout
import DashboardLayout from '../../layout/Dashboard';
import BaseFieldInput from '../../components/Base/BaseFieldInput';
import BaseSelect from '../../components/Base/BaseSelect';

const Index = () => {
	return (
		<DashboardLayout>
			<div className="p-10">
				<h4 className="font-semibold text-2xl">Add bill</h4>

				<div className="w-full flex justify-between mt-8">
					<div className="flex flex-col mt-8 w-7/12">
						<div className="w-full flex space-x-20">
							<BaseSelect
								label="Vendor"
								placeholder="Choose"
							/>

							<BaseFieldInput
								type="date"
								label="Date"
							/>
						</div>

						<div className="flex w-full space-x-20">
							<BaseSelect
								label="Currency"
								placeholder="USD - U.S dollar"
							/>

							<BaseFieldInput
								type="date"
								label="Date"
							/>
						</div>
						<div className="flex w-full space-x-20">
							{/* <BaseSelect
								label="Upload Copy of Bill"
								placeholder="Upload file"
							/> */}
							<div className="w-full">
								<label className="block mb-2 text-xs font-medium text-gray-700">Upload Copy of Bill</label>
								
								<div className="block w-48 py-3 px-4 pr-8 relative bg-white appearance-none border border-gray-300 rounded-md hover:shadow-outline-gray">
									<input type="file" name="files" className="absolute inset-0  outline-none w-full h-full opacity-0 bg-gray-200 text-gray-500 text-sm  shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-40" />
									<div className="flex items-center">
										<p className="text-gray-400">Upload file</p>
									</div>
									<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
										<svg className="fill-current h-4 w-4" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.3134 0.700841C10.0457 0.433053 9.61149 0.433053 9.3437 0.700841L5.68656 4.35798C5.41877 4.62577 5.41877 5.05994 5.68656 5.32773C5.95434 5.59552 6.38851 5.59552 6.6563 5.32773L9.14286 2.84118V12.1571C9.14286 12.5359 9.44986 12.8429 9.82857 12.8429C10.2073 12.8429 10.5143 12.5359 10.5143 12.1571V2.84118L13.0008 5.32773C13.2686 5.59552 13.7028 5.59552 13.9706 5.32773C14.2384 5.05994 14.2384 4.62577 13.9706 4.35798L10.3134 0.700841Z" fill="#B3C0CE"/>
											<path d="M1.37143 8.5C1.37143 8.12129 1.06442 7.81429 0.685715 7.81429C0.307005 7.81429 1.1831e-07 8.12129 1.1831e-07 8.5V11.7244C-4.48677e-06 12.3427 -8.2033e-06 12.8415 0.0276893 13.2474C0.0561699 13.6649 0.116214 14.034 0.260985 14.3835C0.608964 15.2236 1.27642 15.891 2.11651 16.239C2.46602 16.3838 2.83513 16.4438 3.25255 16.4723C3.6585 16.5 4.1573 16.5 4.77564 16.5H14.8815C15.4998 16.5 15.9986 16.5 16.4046 16.4723C16.822 16.4438 17.1911 16.3838 17.5406 16.239C18.3807 15.891 19.0482 15.2236 19.3962 14.3835C19.5409 14.034 19.601 13.6649 19.6295 13.2474C19.6572 12.8415 19.6571 12.3427 19.6571 11.7244V8.5C19.6571 8.12129 19.3501 7.81429 18.9714 7.81429C18.5927 7.81429 18.2857 8.12129 18.2857 8.5V11.7C18.2857 12.3484 18.2853 12.8003 18.2612 13.1541C18.2375 13.5017 18.1931 13.7041 18.1291 13.8587C17.9203 14.3627 17.5199 14.7632 17.0158 14.972C16.8613 15.036 16.6588 15.0803 16.3112 15.1041C15.9575 15.1282 15.5055 15.1286 14.8571 15.1286H4.8C4.15161 15.1286 3.69966 15.1282 3.34591 15.1041C2.99831 15.0803 2.79589 15.036 2.64134 14.972C2.13728 14.7632 1.73681 14.3627 1.52802 13.8587C1.464 13.7041 1.41965 13.5017 1.39594 13.1541C1.3718 12.8003 1.37143 12.3484 1.37143 11.7V8.5Z" fill="#B3C0CE"/>
										</svg>

									</div>
								</div>
							</div>

							<BaseFieldInput
								type="text"
								label="P.O./S.O"
							/>
						</div>
					</div>

					<div className="flex flex-col mt-8 w-1/3">
						<BaseFieldInput
							type="text"
							label="Bill #"
						/>

						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-700">Note</label>
							
							<textarea
								name="" 
								id=""
								rows={3}
								placeholder=""
								className="border border-gray-200 rounded min-h-[130px] focus:outline-none w-full text-lg placeholder:text-gray-500 tracking-wide"
							></textarea>
						</div>
					</div>
				</div>


				<div className="border rounded border-gray-200 mt-14 p-2">
					<div>
						{/* Table needs to scroll for best data display */}
						<table className="table-auto overflow-x-auto w-full">
							<thead className="border-b border-gray-200">
								<tr>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-3/12">Item</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-3/12">Expense Category</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-2/12">Description</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-18">Qty</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-3/12">Price</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-2/12">Tax</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500 w-3/5">Amount</th>
									<th className="p-2 text-sm text-left font-semibold text-slate-500"></th>
								</tr>
							</thead>

							<tbody>
								<tr className="border-b border-slate-200">
									<td className="p-2 text-sm text-slate-400">
										<BaseSelect
											placeholder="Choose"
										/>
									</td>
									<td className="p-2 text-sm text-slate-400">
										<BaseSelect
											placeholder="Choose"
										/>
									</td>
									<td className="p-2 text-sm text-slate-400">
										<BaseFieldInput />
									</td>
									<td className="p-2 text-sm text-slate-400">
										<BaseFieldInput placeholder="1" />
									</td>
									<td className="p-2 text-sm text-slate-400">
										<BaseFieldInput type="number" placeholder="0" />
									</td>
									<td className="p-2 text-sm text-slate-400">
										<span className="flex items-center">
											<BaseFieldInput />
											<span >
												<svg className="w-4 h-4 ml-2" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 20H19" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												<path d="M2.5 12.5L12.5 2.50002C13.3284 1.67159 14.6716 1.67159 15.5 2.50002C16.3284 3.32845 16.3284 4.67159 15.5 5.50002L5.5 15.5L1.5 16.5L2.5 12.5Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</span>
										</span>
									</td>
									<td className="p-2 text-sm text-slate-400">N0.00</td>
									<td className="p-2 text-sm text-slate-400">
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" className="text-[#081494] h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
												<path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="flex flex-col items-end justify-end px-14 py-4">
						<div className="flex space-x-2 items-center text-gray-500">
							<span>Subtotal:</span>
							<span>N0.00</span>
						</div>
						<div className="flex space-x-2 items-center text-gray-500">
							<span>Total(NGN):</span>
							<span>N0.00</span>
						</div>
					</div>
				</div>

				<div className="flex justify-end space-x-4 py-6">
					<button className="border border-gray-300 px-4 py-2 rounded text-gray-400 text-sm">Cancel</button>
					<button className="bg-[#3DB0FF] text-white px-4 py-2 rounded text-sm ">Save</button>
				</div>
			</div>
		</DashboardLayout> 
	)
}
export default Index;