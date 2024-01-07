export default interface CelebrityData {
	id: number,
	image: string | import( 'next/dist/shared/lib/get-img-props' ).StaticImport,
	alt?: string,
	name: string,
	as?: string,
	birthDate: string,
	about: string,
};