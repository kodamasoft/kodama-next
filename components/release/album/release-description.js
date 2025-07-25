import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import useTranslation from 'next-translate/useTranslation';

function DtKodama({ children }) {
	return (
		<dt className="relative mb-2 after:content-[''] after:absolute after:top-1/2 after:left-0 after:z-[1] after:w-full after:bg-[#666] after:h-px after:block">
			<span className="relative inline-block pr-4 z-10 uppercase bg-[color:var(--background-color)]">
				{children}
			</span>
		</dt>
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

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="container mx-auto my-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
			<div className="relative max-w-xs md:max-w-xl lg:max-w-3xl mx-auto mb-4">
				<Image
					src={cover}
					className="rounded cursor-pointer"
					height="768"
					width="768"
					alt="Logo"
					quality={100}
					priority={true}
					onClick={() => setShowModal(true)}
				/>

				{showModal && (
					<div
						onClick={() => setShowModal(false)}
						className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-[1000]"
					>
						<Image
							src={cover}
							alt={title}
							unoptimized
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
				)}
			</div>

			<dl className="flex-grow px-4">
				<DtKodama>{t('title')}</DtKodama>
				<DdKodama>{title}</DdKodama>

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
						<DdKodama>{booth}</DdKodama>
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
