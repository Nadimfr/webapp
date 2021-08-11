import {GrInstagram} from 'react-icons/gr'
import {GrFacebookOption} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import Link from 'next/link'

function Navbar() {
    return (
        <div className=' fixed flex justify-evenly items-center h-14 lg:h-16 w-full shadow-lg border-gray-900 border-b-2 bg-gradient-to-r from-red-400 via-purple-300 to-purple-500 top-0 hover:shadow-2xl'>

            <h1 className='md:pr-28 lg:pr-96 text-xl lg:text-4xl font-semibold text-transparent bg-clip-text font-bold bg-gradient-to-br from-white to-gray-200'>Cartoon Characters</h1>

            <div className='grid grid-cols-3 gap-3 lg:gap-10 pl-52 md:pl-96 lg:pl-96'>

                <Link href='https://instagram.com'>
                    <GrInstagram className='cursor-pointer h-8 w-8 text-black hover:text-white'/>
                </Link>
                <Link href='https://facebook.com'>
                    <GrFacebookOption className='cursor-pointer h-8 w-8 text-black hover:text-white'/>
                </Link>
                <Link href='https://twitter.com'>
                    <GrTwitter className='cursor-pointer h-8 w-8 text-black hover:text-white'/>
                </Link>
            </div>

            
        </div>
    )
}

export default Navbar
