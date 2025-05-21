import DateFormatter from '../components/date-formatter';
import Link from 'next/link';

export default function PostPreview({ title, date, author, slug }) {
	return (
		<Link
			href={`/posts/${slug}`}
			passHref
			className="block bg-violet-900/20 hover:bg-violet-900/70 transition p-4  rounded-md no-underline"
		>
			<h3 className="mt-0 font-bold text-lg md:prose-xl lg:prose-2xl ">
				{title}
			</h3>
			<div className="">
				{author} · <DateFormatter dateString={date} />
			</div>
		</Link>
	);
}
