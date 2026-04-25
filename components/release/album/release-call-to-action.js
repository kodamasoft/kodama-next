import Link from 'next/link';
import Trans from 'next-translate/Trans';

export default function ReleaseCallToAction({ store }) {
	return (
		<section className="bg-current/5 mt-16 py-8">
			<h2 className="text-2xl text-center uppercase mb-6 font-black">
				<Trans i18nKey="release:available_now" />
			</h2>

			<div className="text-center">
				<span className="text-2xl block font-bold p-2">PHYSICAL</span>
				{Object.entries(store).map((storeItem) => {
					if (storeItem[1].name === 'AKIBA-HOBBY' || storeItem[1].name === 'Diverse Direct' || storeItem[1].name === 'Bandcamp (Physical)') return (
						<Link
							key={storeItem[0]}
							href={storeItem[1].link}
							className="inline-block text-center text-lg rounded border-2 py-3 px-8 m-1 transition text-[color:var(--release-color)] border-[color:var(--release-color)] hover:text-white hover:bg-[color:var(--release-color)]"
						>
							{storeItem[1].name}
						</Link>
					)
					return null;
				})}
				<span className="text-2xl font-bold block p-2">DIGITAL</span>
				{Object.entries(store).map((storeItem) => {
					if (storeItem[1].name === 'AKIBA-HOBBY' || storeItem[1].name === 'Diverse Direct' || storeItem[1].name === 'Bandcamp (Physical)') return null;
					return (
						<Link
							key={storeItem[0]}
							href={storeItem[1].link}
							className="inline-block text-center text-lg rounded border-2 py-3 px-8 m-1 transition text-[color:var(--release-color)] border-[color:var(--release-color)] hover:text-white hover:bg-[color:var(--release-color)]"
						>
							{storeItem[1].name}
						</Link>
					)
				})}
			</div>
		</section>
	);
}
