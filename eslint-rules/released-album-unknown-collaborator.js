/**
 * Warn when a credit of an already released album references an artist that is
 * missing from `_collaborators.json`.
 *
 * Such credits are rendered in red, without any link, by
 * `components/release/album/release-credits.js`.
 *
 * ESLint does not lint JSON, so this rule is attached to the component that
 * renders the credits and reads the data files from disk.
 *
 * An album is "released" when its `releaseDate` in
 * `public/assets/discography/albums.json` is in the past. Releases that are not
 * listed in `albums.json` are considered released, as they have a public page.
 */
const fs = require('fs');
const path = require('path');

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'disallow credits of released albums that reference an unknown collaborator',
		},
		schema: [],
	},
	create(context) {
		const root = context.getCwd ? context.getCwd() : process.cwd();

		return {
			Program(node) {
				const collaborators = readJson(
					path.join(root, '_collaborators.json')
				);
				const albums = readJson(
					path.join(
						root,
						'public',
						'assets',
						'discography',
						'albums.json'
					)
				);
				const releasesDirectory = path.join(root, '_releases');
				const now = Date.now();

				fs.readdirSync(releasesDirectory)
					.filter((file) => file.endsWith('.json'))
					.sort()
					.forEach((file) => {
						const slug = file.replace(/\.json$/, '');
						const releaseDate = albums[slug]?.releaseDate;

						if (releaseDate && new Date(releaseDate) > now) {
							return;
						}

						const { credits = {} } = readJson(
							path.join(releasesDirectory, file)
						);

						Object.values(credits)
							.filter(({ id }) => !(id in collaborators))
							.forEach(({ id }) => {
								context.report({
									node,
									message: `"${id}" is credited on the released album "${slug}" but is missing from _collaborators.json (displayed in red, without links).`,
								});
							});
					});
			},
		};
	},
};
