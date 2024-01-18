interface RTMovieTaxonomy {
	term_id: number,
	name: string,
	slug: string,
	term_group: number,
	term_taxonomy_id: number,
	taxonomy: string,
	description: string,
	parent: number,
	count: number,
	filter: string
}

interface RTMovieMeta {
	'rt-movie-meta-basic-rating'?: Array<String>,
	'rt-movie-meta-basic-runtime'?: Array<String>,
	'rt-movie-meta-basic-release-date'?: Array<String>,
	'rt-movie-meta-basic-content-rating'?: Array<String>,
	'rt-movie-meta-crew-director'?: Array<String>,
	'_thumbnail_id'?: Array<String>,
	'rt-media-meta-img'?: Array<String>,
	'rt-media-meta-video'?: {
		[key:string]: string
	},
}

export default interface MovieData {
	id: number,
	title: string,
	name: string,
	description: string,
	excerpt: string,
	status: string,
	date: string,
	comment: string,
	comment_count: string,
	author: string,
	thumbnail: string,
	taxonomies: {
		'rt-movie-genre': boolean|Array<RTMovieTaxonomy>,
		'rt-movie-label': boolean|Array<RTMovieTaxonomy>,
		'rt-movie-language': boolean|Array<RTMovieTaxonomy>,
		'rt-movie-production-company': boolean|Array<RTMovieTaxonomy>,
		'rt-movie-tag': boolean|Array<RTMovieTaxonomy>,
	},
	metadata: string|boolean|RTMovieMeta,
};
