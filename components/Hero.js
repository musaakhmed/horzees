import Link from 'next/link'

const Hero = () => {
    return (
        <>
            <div className='flex justify-center'>
                <nav className='absolute z-10 flex'>
                    <div className='pt-5 '>
                        <div className='flex justify-around items-center'>
                            {/*Primary Menu*/}
                            <div className='flex items-center space-x-10 text-3xl mr-72 pt-5'>
                                <Link href='/'>
                                    <a className='text-white transition duration-500 ease-in-out px-3 py-2 rounded-md text-md font-medium'>
                                        Home
                                    </a>
                                </Link>
                                <Link href='/about'>
                                    <a className='text-white transition duration-500 ease-in-out  px-3 py-2 rounded-md text-md font-medium'>
                                        About
                                    </a>
                                </Link>
                                <Link href='/whitepaper'>
                                    <a className='text-white transition duration-500 ease-in-out  px-3 py-2 rounded-md text-md font-medium'>
                                        Whitepaper
                                    </a>
                                </Link>
                            </div>

                            {/*Call to Action Button*/}
                            <div className='hidden lg:block'>
                                <div className='grid gap-8 items-start justify-center ml-72'>
                                    <div className='relative group'>
                                        <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                                        <button className='relative px-7 py-3 bg-black rounded-lg leading-none flex items-center'>
                                            <span className='text-white text-lg group-hover:text-gray-100 text-gradient-to-right transition duration-200'>
                                                Connect Wallet
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <section className='w-screen h-screen relative'>
                <div className='w-full absolute h-full bg-gradient-to-br from-blue-300 via-slate-500 to-purple-900 opacity-80'></div>
                <div className='hero inset-0 h-full w-full bg-hero-pattern bg-cover bg-no-repeat bg-fixed opacity-15'></div>

                <div className='font-body'>
                    <div className='absolute w-1/3 ml-72 mr-auto h-full inset-0 flex flex-col justify-center z-30'>
                        <h1 className='text-7xl text-white my-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-purple-500 to-pink-500'>
                            Horzees of Indarados
                        </h1>
                        <h5 className='text-2xl text-white'>
                            Spread across the multiple climates of Indarados, 12
                            different Horzee species have been in a great
                            rivalry for centuries.
                        </h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
