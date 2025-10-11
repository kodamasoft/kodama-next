import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useTranslation from 'next-translate/useTranslation';

function DtKodama({ children }) {
	return (
		<>
			<dt className="relative mb-2 w-full flex items-center">
				<span className="relative inline-block pr-4 z-10 uppercase font-bold shrink-0">
					{children}
				</span>
				<hr className="w-full h-px border-[currentColor] opacity-40" />
			</dt>
		</>
	);
}

function DdKodama({ children }) {
	return <dd className="relative mb-8">{children}</dd>;
}

export default function ReleaseDescription({
	cover,
	title,
	circle,
	specification,
	release_date,
	catalog,
	price,
	store,
	booth,
}) {
	const { t } = useTranslation('release');
	const { locale } = useRouter();

	// Handle localized title with fallback
	const getLocalizedTitle = (title) => {
		if (typeof title === 'object' && title !== null) {
			return (
				title[locale] || title.en || title.jp || Object.values(title)[0]
			);
		}
		return title;
	};

	return (
		<div className="container mx-auto my-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
			<div className="relative max-w-xs md:max-w-xl lg:max-w-3xl mx-auto mb-4">
				<Link href={cover} target="_blank" rel="noopener noreferrer">
					<Image
						src={cover}
						className="rounded cursor-pointer transition duration-200 ease-in-out relative hover:opacity-70"
						height="768"
						width="768"
						alt="Logo"
						quality={100}
						priority={true}
						onClick={(e) => {
							if (e.button === 1) {
								// 1 is the middle mouse button
								e.preventDefault();
							}
						}}
					/>
				</Link>
			</div>

			<dl className="flex-grow px-4">
				<DtKodama>{t('title')}</DtKodama>
				<DdKodama>{getLocalizedTitle(title)}</DdKodama>

				<DtKodama>{t('circle')}</DtKodama>
				<DdKodama>
					<Link
						href={circle.link}
						className="hover:underline hover:underline-offset-1 focus:underline focus:underline-offset-1 text-[color:var(--release-color)]"
					>
						{circle.name}
					</Link>
				</DdKodama>

				<DtKodama>{t('specification')}</DtKodama>
				<DdKodama>{specification}</DdKodama>

				<DtKodama>{t('release_date')}</DtKodama>
				<DdKodama>{release_date}</DdKodama>

				{booth && (
					<>
						<DtKodama>{t('booth')}</DtKodama>
						<DdKodama>
							{booth.link ? (
								<Link
									href={booth.link}
									className="hover:underline hover:underline-offset-1 focus:underline focus:underline-offset-1 text-[color:var(--release-color)]"
								>
									{booth.name}
								</Link>
							) : (
								<span>{booth.name}</span>
							)}
							<span>{booth.other}</span>
						</DdKodama>
					</>
				)}

				<DtKodama>{t('catalog')}</DtKodama>
				<DdKodama>{catalog}</DdKodama>

				<DtKodama>{t('price')}</DtKodama>
				<DdKodama>{price}</DdKodama>

				<DtKodama>{t('store')}</DtKodama>
				<DdKodama>
					{/* parse store object with name and link and put them into Link elements */}
					<ul className="block list-disc mb-4 pl-10">
						{Object.entries(store).map((storeItem) => {
							return (
								<li key={storeItem[0]} className="list-item">
									<Link
										href={storeItem[1].link}
										className="hover:underline hover:underline-offset-1 focus:underline focus:underline-offset-1 text-[color:var(--release-color)]"
									>
										{storeItem[1].name}
									</Link>
								</li>
							);
						})}
					</ul>
				</DdKodama>
			</dl>
		</div>
	);
}
