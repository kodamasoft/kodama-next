export default function ProseContainer({ children, className }) {
	return (
		<section
			className={
				'prose md:prose-md prose-invert max-w-4xl mx-auto font-medium ' +
				className
			}
		>
			{children}
		</section>
	);
}
