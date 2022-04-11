import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { mainLinks } from "../../../../utils/data"

type ILink = {
	id: number;
	text: string;
	link: string;
}

type Props = {
	text: string;
	Icon: any;
	hasChild?: Boolean,
	subLinks?: Array<ILink>;
	active?: Boolean;
}

const SidenavLink = ({ text, active, Icon, hasChild, subLinks, }: Props) => {	
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const router = useRouter();
	const path = router.pathname;

	const activeLink = (url: string, pathname: string) => pathname === url ? true : false

	const findParent = () => {
		const index = subLinks?.findIndex((link: any) => link.parent == 'purchases')
			console.log({ index });
			
	}

	useEffect(() => {
		findParent()
	}, [])
	


	return (
		<>
			<div 
				className={`relative w-full flex flex-wrap items-center space-x-10 text-xl cursor-pointer ${ isFocus ? 'font-semibold before:block before:bg-blue-aud before:w-14 before:h-14 before:shadow-md before:rounded-full before:absolute before:-inset-x-4 before: ' : '' }
					${ hasChild ? '' : '' }
				`}
				onClick={() => setIsFocus(!isFocus)}
			>
				<Image
					src={Icon}
					width={22}
					height={22}
				/>

				<span className={`hidden xl:inline font-medium self-start font-poppins text-sm ${ isFocus ? 'text-black' : 'text-gray-300' }`}>{text}</span>
				
				{ hasChild && (
					<svg className={`${ isFocus ? 'rotate-90' : ''}`} width="6" height="12"  viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12L6 6L0 0" fill="#D3D6E4"/>
					</svg>
				)}
			</div>

			{isFocus && (
				<div className="dropdown-options">
					<ul className="pl-[4.5rem] flex flex-col space-y-2">
						{subLinks?.map((link: ILink) => (
							<li
								className={`text-sm font-semibold cursor-pointer ${ activeLink(link.link, path) ? 'text-blue-aud' : 'text-[#8C8C8C]' }`}
								key={link.id}
							>
								<Link href={link.link}>
									<a href="">{ link.text }</a>
								</Link>												
							</li>							
						))}
					</ul>
				</div>				
			)}
		
		</>
	)
}

export default SidenavLink
