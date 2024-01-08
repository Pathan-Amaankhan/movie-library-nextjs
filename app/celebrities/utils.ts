import RobertDowneyJR from "@/public/assets/images/robert-downey-jr.png";
import ChrisEvans from "@/public/assets/images/chris-evans.png";


export const getCelebrities = () => {
	return [
		{
			'id': 1,
			'image': RobertDowneyJR,
			'alt': 'robert-downey-jr',
			'name': 'Robert Downey Jr.',
			'birthDate': '14 April 1965',
			'about': 'Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing...',
		},
		{
			'id': 2,
			'image': ChrisEvans,
			'alt': 'chris-evans',
			'name': 'Chris Evans',
			'birthDate': '13 June 1981',
			'about': 'Christopher Robert Evans is an American actor. He began his career with roles in television series such...',
		},
	];
}