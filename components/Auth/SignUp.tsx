import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import Link from 'next/link'

// component
import BaseInput from '../Base/BaseInput'

const SignUp: NextPage = () => {
	return (
		<div className="w-full min-h-screen relative">
			<div className="flex w-full relative">
				<div className="w-1/2 min-h-screen relative bg-slate-900 bg-signup-page object-cover
					before:block before:absolute before:inset-0 before:bg-gray-600 before:opacity-20
				">
					<div className="absolute bottom-8 font-normal text-2xl text-white translate-x-72 w-64">
						Building exceptional services with Back Office Support and Business Perfomance
					</div>
				</div>

				<div className="pt-8 px-28">
					<div className="mb-10">
						<h4 className="font-poppins font-bold mb-2 text-3xl text-[#272262]">Create Account</h4>
						<p className="text-gray-400 font-normal text-base">Build an exceptional business</p>
					</div>

					{/* Form  */}
					<div className="">
						<div className="flex space-x-12">
							<BaseInput
								type="text"
								placeholder="Enter your first name"
								label="First Name"
							/>
							<BaseInput
								type="text"
								placeholder="Enter your last name"
								label="Last Name"
							/>
						</div>
						<BaseInput
							type="text"
							placeholder="Enter your phone number"
							label="Phone Number"
						/>
						<BaseInput
							type="text"
							placeholder="Enter your email"
							label="Email Address"
						/>
						<BaseInput
							type="password"
							placeholder="Enter your password"
							label="Password"
						/>

						<div className="flex justify-between">
							<div>
								<label className="flex items-center" htmlFor="checkbox">
									<input type="checkbox" className="accent-slate-400 border border-b-gray-200 rounded h-5 w-5 mr-2.5" />
									<span className="text-sm text-gray-400">Remember me</span>
								</label>
							</div>

							<a href="#" className="text-sm text-blue-400">Forgot Password?</a>
						</div>
						
						<div className="flex flex-col w-100 mt-8 space-y-6 relative">
							<button className="bg-secondary text-white font-semibold text-xl text-center py-4 rounded-md shadow-lg w-100">
								<Link href="/add-bill">
									<a>Sign Up</a>
								</Link>
							</button>

							<span
								className="text-center text-gray-400 relative
									before:block before:bg-[#C4C4C4] before:w-[120px] before:absolute before:inset-y-3 before:h-[1px]
									after:block after:bg-[#C4C4C4] after:w-[120px] after:absolute after:right-0 after:inset-y-3 after:h-[1px]
								">
								Got an Account?
								<a href="#" className="text-sm font-normal text-blue-400 ml-2">Sign In</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp;