import Link from 'next/link';
import Trans from 'next-translate/Trans';

const PHYSICAL_STORE_NAMES = [
	'AKIBA-HOBBY',
	'Diverse Direct',
	'Bandcamp (Physical)',
];

// A store's own `physical` flag wins; otherwise it is sorted by name.
function isPhysical(store) {
	return store.physical ?? PHYSICAL_STORE_NAMES.includes(store.name);
}

const BUTTON_STYLES = {
	outline:
		'text-[color:var(--release-color)] border-[color:var(--release-color)] hover:text-white hover:bg-[color:var(--release-color)]',
	filled: 'text-white bg-[color:var(--release-color)] border-[color:var(--release-color)] hover:opacity-80',
};

export default function ReleaseCallToAction({ store, buttonStyle }) {
	const stores = Object.entries(store);
	const groups = [
		['PHYSICAL', stores.filter(([, item]) => isPhysical(item))],
		['DIGITAL', stores.filter(([, item]) => !isPhysical(item))],
	];
	const buttonClass = BUTTON_STYLES[buttonStyle] || BUTTON_STYLES.outline;

	return (
		<section className="bg-current/5 mt-16 py-8">
			<h2 className="text-2xl text-center uppercase mb-6 font-black">
				<Trans i18nKey="release:available_now" />
			</h2>

			<div className="text-center">
				{groups.map(
					([label, items]) =>
						items.length > 0 && (
							<div key={label}>
								<span className="text-2xl block font-bold p-2">
									{label}
								</span>
								{items.map(([key, item]) => (
									<Link
										key={key}
										href={item.link}
										className={`inline-block text-center text-lg rounded border-2 py-3 px-8 m-1 transition ${buttonClass}`}
									>
										{item.name}
									</Link>
								))}
							</div>
						)
				)}
			</div>
		</section>
	);
}
