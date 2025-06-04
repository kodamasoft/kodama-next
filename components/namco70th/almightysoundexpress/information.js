import HrefButton from '../href-button';

export default function Information() {
	return (
		<div className="py-4 px-2 flex flex-col gap-8">
			<div>
				<h2 className="font-medium text-xl">Information</h2>
			</div>
			<div className="flex flex-col px-2">
				<HrefButton variant="ase" title="Bandcamp" />
			</div>
		</div>
	);
}
