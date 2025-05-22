import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher({ className }) {
	const { locale, locales, asPath } = useRouter();

	return (
		<div className={className}>
			<div className="flex flex-row flex-wrap justify-center gap-4">
				{locales.map((l, i) => {
					return (
						<span
							key={i}
							className={l === locale ? 'font-bold' : ''}
						>
							{/* to uppercase locale*/}
							<Link href={asPath} locale={l}>
								{l === 'jp' ? '日本語' : 'EN'}
							</Link>
						</span>
					);
				})}
			</div>
		</div>
	);
}
