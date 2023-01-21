import Link from 'next/link'
import { useRouter } from 'next/router'
import LinkIcon from '../../../components/link-icon'

import collaboratorsJson from '/_collaborators.json'


export default function ReleaseTracklist({ credits }) {
	const { locale } = useRouter()

	return (
		<section className="container mx-auto my-16">
			<h2 className="text-2xl text-center uppercase mb-8 font-black">
				{' '}
				credit{' '}
			</h2>
			<table class="table-auto w-full">
				<thead className='hidden md:table-header-group'>
					<tr>
						<th className="px-4 py-2">Name</th>
						<th className="px-4 py-2">Role</th>
						<th className="px-4 py-2">Link</th>
					</tr>
				</thead>
				<tbody className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 md:table-row-group md:p-0 md:border-t border-[#666]">
					{Object.entries(credits).map((creditJSON) => {
						let collaboratorInfo =
							collaboratorsJson[creditJSON[1].id]

						const tdClass = 'md:border-b border-[#666] md:p-4 md:pl-8'
						return (
							<tr key={creditJSON[0]} className="flex flex-col gap-4 w-auto pb-4 mb-4 border-b border-[#666] sm:border-0 md:m-0 md:table-row md:w-full">
								<td className={tdClass}>
									{typeof collaboratorInfo.name === 'object' ? collaboratorInfo.name[locale] : collaboratorInfo.name}
								</td>
								<td className={`text-white/50 ${tdClass}`}>
									{creditJSON[1].role}
								</td>
								<td className={tdClass}>
									<div className="flex flex-wrap gap-4">
										{collaboratorInfo.links &&
											Object.entries(
												collaboratorInfo.links
											).sort((a, b) => {
												if (a[0] < b[0]) { return -1 }
												if (a[0] > b[0]) { return 1 }
												return 0
											}).map((link) => {
												return (
													<Link
														href={link[1]}
														passHref
														target="_blank"
														key={link[0]}
													>
														<LinkIcon
															className="min-w-6 w-auto fw-bold h-6 hover:text-[color:var(--release-color)] focus:text-[color:var(--release-color)] transition-all duration-300 ease-in-out"
															linkObj={link[1]}
														/>
													</Link>
												)
											})}
									</div>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</section>
	)
}
