/* https://github.com/samselikoff/2022-06-09-resizable-panel/commit/fe04a842367657b4acb1058c454d3eca739c419d */

import { FaEnvelope, FaBook } from 'react-icons/fa';

import Link from 'next/link';

export default function CtaButton({ children, icon, link }) {
	switch (icon) {
		case 'envelope':
			icon = <FaEnvelope className="inline-block mr-2 " />;
			break;
		case 'book':
			icon = <FaBook className="inline-block " />;
			break;
		default:
			icon = null;
	}

	return (
		<div className="">
			<Link
				href={link}
				className="kodama_btn kodama_btn--primary kodama_btn--lg mx-auto my-2 no-underline text-xl"
			>
				{icon}
				{children}
			</Link>
		</div>
	);
}
