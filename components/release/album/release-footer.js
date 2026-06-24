import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ReleaseNav({ title, slug, footer_string }) {
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

	const getLocalizedFooter = (footer) => {
		if (typeof footer === 'object' && footer !== null) {
			return (
				footer[locale] ||
				footer.en ||
				footer.jp ||
				Object.values(footer)[0]
			);
		}
		return footer;
	};

	const localizedFooter = getLocalizedFooter(footer_string);

	return (
		<footer className="container mx-auto mt-16 mb-8 px-2 flex flex-wrap text-current/60 text-sm justify-between align-middle items-end">
			<div>
				<Link href={'/releases/' + slug}>
					{getLocalizedTitle(title)}
				</Link>
				<br />
				<span>©2021–{new Date().getFullYear()} </span>
				<Link href="/"> KodamaSounds</Link>
				{localizedFooter && (
					<p className="mt-4 max-w-xl text-xs">{localizedFooter}</p>
				)}
			</div>

			<span>
				Design inspired by{' '}
				<Link href="https://sanographix.github.io/tokusetsu3/">
					SANOGRAPHIX.NET
				</Link>
			</span>
		</footer>
	);
}
