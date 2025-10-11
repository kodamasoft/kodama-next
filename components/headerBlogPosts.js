import { WEBSITE_NAME } from '../lib/constants';
import LocaleSwitcher from './locale-switcherBlogPosts';
import headerStyles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/logo_white.png';
import useTranslation from 'next-translate/useTranslation';
import { Disclosure, Transition } from '@headlessui/react';

export default function Header({ slug, twinSlug }) {
	const { t, lang } = useTranslation();

	let links = [
		{ href: '/', label: 'Home' },
		{ href: '/kodamasoft', label: 'KodamaSoft' },
		{ href: '/discography', label: 'Discography' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/staff', label: 'Staff' },
		{
			href: 'https://counterfest.kodamasoft.net',
			label: 'COUNTERFEST RECORDS',
		},
		// { href: '/blog', label: 'Blog' }
	];

	let canDisplayM3Banner = true; // Always show M3-2025 banner for now

	return (
		<header className="relative w-full h-auto text-white text-center flex flex-col select-none bg-[url('/assets/big_01_space_g.png')] bg-center bg-cover">
			{canDisplayM3Banner && (
				<Link
					className="bg-violet-600 text-white p-3 text-center block"
					href={
						lang === 'jp'
							? '/jp/posts/kodamanews-aug25-jp'
							: '/posts/kodamanews-aug25'
					}
				>
					<p className="text-sm whitespace-nowrap">
						{t('common:m3_2025_fall_banner')}
					</p>
					<button
						id="close-m3"
						className="absolute top-0 right-0 p-2 text-white hover:bg-violet-700"
						onClick={() =>
							(document.getElementById(
								'close-m3'
							).parentElement.style.display = 'none')
						}
					>
						×
					</button>
				</Link>
			)}

			<h1 className={headerStyles.header_title}>
				<Link href="/" className="cursor-pointer">
					<Image
						src={logo}
						alt={WEBSITE_NAME}
						height={150}
						className="cursor-pointer mx-auto max-w-full drop-shadow-sm"
					/>
				</Link>
			</h1>

			{/* MOBILE NAVBAR */}
			<Disclosure
				as="nav"
				className="bg-purple-900/30 backdrop-blur-sm text-white sm:hidden"
			>
				{({ open }) => (
					<>
						<Disclosure.Button>
							<div className="flex justify-center items-center p-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{open ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16m -16 6h16"
										/>
									)}
								</svg>
							</div>
						</Disclosure.Button>
						<Transition
							show={open}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Disclosure.Panel static>
								<div
									id="navbar"
									className="flex flex-col sm:flex-row justify-center p-4 gap-4 items-center"
								>
									{links.map((link, index) => (
										<Link
											href={link.href}
											key={index}
											className="text-gray-300 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-hidden transition"
										>
											{link.label}
										</Link>
									))}

									<LocaleSwitcher
										slug={slug}
										twinSlug={twinSlug}
										className="w-fit m-0 text-gray-300 bg-gray-900/50 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-hidden transition"
									></LocaleSwitcher>
								</div>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>

			{/* DESKTOP NAVBAR */}
			<nav className="bg-purple-900/30 backdrop-blur-sm text-white hidden sm:block">
				<div
					id="navbar"
					className="flex flex-col sm:flex-row justify-center p-4 gap-4 items-center"
				>
					{links.map((link, index) => (
						<Link
							href={link.href}
							key={index}
							className="text-gray-300 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-hidden transition"
						>
							{link.label}
						</Link>
					))}

					<LocaleSwitcher
						slug={slug}
						twinSlug={twinSlug}
						className="w-fit m-0 text-gray-300 bg-gray-900/50 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-hidden transition"
					></LocaleSwitcher>
				</div>
			</nav>
		</header>
	);
}
