import Hero from '../../components/namco70th/ironfist/hero';
import Layout from '../../components/namco70th/ironfist/layout';

export default function IronFist() {
	return (
		<Layout>
			<div>
				<div className="flex flex-col">
					<Hero className="overflow-hidden" />
				</div>
			</div>
		</Layout>
	);
}
