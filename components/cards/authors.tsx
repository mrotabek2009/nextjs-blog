import { IAuthor } from '@/types'
import Image from 'next/image'

function AuthorsCard(authors: IAuthor) {
	return (
		<div>
			<div className='flex flex-col space-y-2 w-52 text-center'>
				<div className='w-full h-52 relative'>
					<Image
						src={authors.image}
						fill
						alt='author'
						className='object-cover rounded-md cursor-pointer grayscale hover:grayscale-0 transition-all'
					/>
				</div>
				<h2 className='text-2xl font-creteRound'>{authors.name}</h2>
				<p className='text-muted-foreground'>
					<span className='font-bold text-white'>04</span> Published posts
				</p>
			</div>
		</div>
	)
}

export default AuthorsCard