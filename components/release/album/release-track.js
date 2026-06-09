import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { useRouter } from 'next/router';

export default function ReleaseTrack({ track }) {
	const { locale } = useRouter();

	function Track({ track, locale }) {
		return (
			<div className="container max-w-(--breakpoint-sm) mx-auto mb-4 flex content-start items-start px-2 md:px-8">
				<div className="text-xl mr-2 text-[color:var(--release-color)] tabular-nums font-semibold">
					{track[0].padStart(2, '0')}
				</div>
				<div>
					<div className="text-xl grow font-bold text-left select-none">
						{/* check if title is an object,
							if so print the title depending on the locale
							is not print the title */}
						{typeof track[1].title === 'object'
							? track[1].title[locale]
							: track[1].title}
					</div>

					{track[1].artist && (
						<>
							<div className="text-sm grow text-left select-none text-current/50">
								{typeof track[1].artist === 'object'
									? track[1].artist[locale]
									: track[1].artist}
							</div>
						</>
					)}
				</div>
			</div>
		);
	}

	if (track[1].description === undefined) {
		return <Track track={track} locale={locale} />;
	}
	return (
		<Disclosure className="accordion mb-4" as="div">
			<Disclosure.Button className="w-full flex max-w-(--breakpoint-md) mx-auto">
				<Track track={track} locale={locale} />
				<ChevronRightIcon className="ui-open:rotate-90 ui-open:transform transition inline-block h-9 w-9 relative top-0.5 justify-self-end shrink-0 ml-2" />
			</Disclosure.Button>

			<Transition
				enter="transition duration-100 ease-out origin-top"
				enterFrom="transform scale-y-0 opacity-0 height-0"
				enterTo="transform scale-y-100 opacity-100 height-auto"
				leave="transition duration-100 ease-out origin-top"
				leaveFrom="transform scale-y-100 opacity-100 height-auto"
				leaveTo="transform scale-y-0 opacity-0 height-0"
			>
				<Disclosure.Panel className="accordian-body bg-[#18191b] text-white shadow-inner-xl py-4 px-4 mb-4 ">
					<div className="container max-w-(--breakpoint-sm) mt-2 mx-auto">
						{track[1].description.map((descParagraph, index) => {
							return descParagraph === '' ? (
								<br key={`br-${index}`} />
							) : (
								<p key={index} className="mb-2 text-sm">
									{descParagraph}
								</p>
							);
						})}
					</div>
				</Disclosure.Panel>
			</Transition>
		</Disclosure>
	);
}
