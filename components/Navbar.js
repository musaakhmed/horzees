import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className='flex flex-col px-10 py-6 text-teal-100'>
            <div className='text-xl flex flex-wrap flex-1 flex-row justify-end items-center px-5 font-extralight font-avenirnext subtitle-shadow'>
                <Link href='/'>
                    <a className='px-2 xl:px-4 flex-shrink-0'>Home</a>
                </Link>
                <Link href='/paper'>
                    <a className='px-2 xl:px-4 flex-shrink-0'>Paper</a>
                </Link>
                <Link href='/vision'>
                    <a className='px-2 xl:px-4 flex-shrink-0'>Vision</a>
                </Link>
                <Link href='/team'>
                    <a className='px-2 xl:px-4 flex-shrink-0'>Team</a>
                </Link>
                <Link href='/races'>
                    <a className='px-2 xl:px-4 flex-shrink-0'>Races</a>
                </Link>
                <Link href='/'>
                    <a
                        className='px-2 flex-shrink-0 object-contain object-center</Link>
                    '
                    >
                        <img
                            src='/SVG/discord.webp'
                            height='25px'
                            width='25px'
                        />
                    </a>
                </Link>
                <Link href=''>
                    <a className='px-2 flex-shrink-0 object-contain object-center'>
                        <img
                            src='/SVG/twitter.webp'
                            height='25px'
                            width='25px'
                        />
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
