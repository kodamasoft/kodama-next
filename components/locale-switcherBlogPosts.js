import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher({className, slug, twinSlug}) {
	const { locale, locales, asPath } = useRouter()

    return (
        <div className={className}>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {locales.map((l, i) => {
					if (l === locale) {
                    return (
                        <span key={i} className={l === locale ? 'font-bold' : ''}>
                            {/* to uppercase locale*/}
							<Link href={"/posts/" + slug} locale={l}>
								{l === 'jp' ? '日本語' : 'EN'}
							</Link>
                        </span>
                    )
					} else {
						return (
							<span key={i} className={l === locale ? 'font-bold' : ''}>
								{/* to uppercase locale*/}
								<Link href={"/posts/" + twinSlug} locale={l}>
									{l === 'jp' ? '日本語' : 'EN'}
								</Link>
							</span>
						)
					}
                })}
            </div>
        </div>
    ) }