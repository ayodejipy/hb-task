import React, { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'

// components
import SidenavLink from './SidenavLink'

// Image
import Dashboard from "../../../../public/assets/icons/dashboard.svg"
import Shuttle from "../../../../public/assets/icons/shuttle.svg"
import Wallet from "../../../../public/assets/icons/wallet.svg"
import Cart from "../../../../public/assets/icons/cart.svg"
import Accounting from "../../../../public/assets/icons/account.svg"
import Bank from "../../../../public/assets/icons/bank.svg"
import Invoice from "../../../../public/assets/icons/invoice.svg"
import Tab from "../../../../public/assets/icons/tab.svg"
import Users from "../../../../public/assets/icons/users.svg"
import Settings from "../../../../public/assets/icons/settings.svg"

import { PurchasesLinks, AnalyticsLink } from '../../../../utils/data'

const Sidenav = () => {
	const [active, setIsActive ] = useState<boolean>(false)
	const router = useRouter();
	const path = router.pathname

	const activeLink = (url: string, pathname: string) => {
		pathname === url ? "active" : "";
	}
	
	return (
		<aside className="flex items-start w-88 h-full py-8 px-8 sticky inset-0 top-[104px]">
			<div className="w-52 flex flex-col space-y-16">
				<div className="w-full flex flex-col space-y-8">
					<SidenavLink text="Welcome" Icon={Shuttle} />
					<SidenavLink text="Dashboard" Icon={Dashboard} />
					<SidenavLink text="Sales" Icon={Wallet} hasChild />
					<SidenavLink text="Purchases" Icon={Cart} active hasChild subLinks={PurchasesLinks} />
					<SidenavLink text="Accounting" Icon={Accounting} active hasChild />
					<SidenavLink text="Banking" Icon={Bank} active hasChild />
					<SidenavLink text="Payroll" Icon={Invoice} hasChild />
					<SidenavLink text="Reports" Icon={Tab} />
					<SidenavLink text="Analytics" Icon={Users} hasChild subLinks={AnalyticsLink} />
					<SidenavLink text="Settings" Icon={Settings} />
				</div>

				<div className="w-full flex flex-col space-y-8">
					<button className="flex items-center space-x-12 border-b py-4 border-b-gray-200">
						<span>
							<svg className="h-6 w-6" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.6536 30.3633H20.4803C14.5603 30.3633 11.7069 28.03 11.2136 22.8033C11.1603 22.2566 11.5603 21.7633 12.1203 21.71C12.6536 21.6566 13.1603 22.07 13.2136 22.6166C13.6003 26.8033 15.5736 28.3633 20.4936 28.3633H20.6669C26.0936 28.3633 28.0136 26.4433 28.0136 21.0166V12.3233C28.0136 6.89662 26.0936 4.97662 20.6669 4.97662H20.4936C15.5469 4.97662 13.5736 6.56329 13.2136 10.83C13.1469 11.3766 12.6803 11.79 12.1203 11.7366C11.5603 11.6966 11.1603 11.2033 11.2003 10.6566C11.6536 5.34996 14.5203 2.97662 20.4803 2.97662H20.6536C27.2003 2.97662 30.0003 5.77662 30.0003 12.3233V21.0166C30.0003 27.5633 27.2003 30.3633 20.6536 30.3633Z" fill="#EF4444"/>
							<path d="M20.3335 17.6699H5.16016C4.61349 17.6699 4.16016 17.2166 4.16016 16.6699C4.16016 16.1233 4.61349 15.6699 5.16016 15.6699H20.3335C20.8802 15.6699 21.3335 16.1233 21.3335 16.6699C21.3335 17.2166 20.8802 17.6699 20.3335 17.6699Z" fill="#EF4444"/>
							<path d="M8.1335 22.1365C7.88017 22.1365 7.62683 22.0432 7.42683 21.8432L2.96017 17.3765C2.5735 16.9899 2.5735 16.3499 2.96017 15.9632L7.42683 11.4965C7.8135 11.1099 8.4535 11.1099 8.84017 11.4965C9.22683 11.8832 9.22683 12.5232 8.84017 12.9099L5.08017 16.6699L8.84017 20.4299C9.22683 20.8165 9.22683 21.4565 8.84017 21.8432C8.6535 22.0432 8.38683 22.1365 8.1335 22.1365Z" fill="#EF4444"/>
							</svg>
						</span>
						<span className="text-black font-medium">Logout</span>
					</button>
					<button className="bg-blue-aud text-white px-6 py-2 rounded-md flex items-center space-x-4">
						<span>
							<svg className="w-8 h-8" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_944_16)">
								<path d="M0.216797 12.753C0.216797 11.0618 0.888605 9.43993 2.08443 8.2441C3.28026 7.04827 4.90215 6.37646 6.5933 6.37646H44.8523C46.5435 6.37646 48.1654 7.04827 49.3612 8.2441C50.557 9.43993 51.2288 11.0618 51.2288 12.753V15.9412H0.216797V12.753ZM0.216797 22.3177V38.259C0.216797 39.9501 0.888605 41.572 2.08443 42.7679C3.28026 43.9637 4.90215 44.6355 6.5933 44.6355H44.8523C46.5435 44.6355 48.1654 43.9637 49.3612 42.7679C50.557 41.572 51.2288 39.9501 51.2288 38.259V22.3177H0.216797ZM9.78156 28.6942H12.9698C13.8154 28.6942 14.6263 29.0301 15.2242 29.6281C15.8222 30.226 16.1581 31.0369 16.1581 31.8825V35.0707C16.1581 35.9163 15.8222 36.7273 15.2242 37.3252C14.6263 37.9231 13.8154 38.259 12.9698 38.259H9.78156C8.93598 38.259 8.12503 37.9231 7.52712 37.3252C6.92921 36.7273 6.5933 35.9163 6.5933 35.0707V31.8825C6.5933 31.0369 6.92921 30.226 7.52712 29.6281C8.12503 29.0301 8.93598 28.6942 9.78156 28.6942Z" fill="white"/>
								</g>
								<defs>
								<clipPath id="clip0_944_16">
								<rect width="51.012" height="51.012" fill="white" transform="translate(0.216797)"/>
								</clipPath>
								</defs>
							</svg>
						</span>

						<span className="text-white font-normal text-xs">Accept Payments</span>
					</button>
				</div>
			</div>
		</aside>
	)
}
export default Sidenav;