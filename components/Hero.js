import Link from 'next/link'

const Hero = () => {
    return (
        <>
            <section className='w-screen h-screen'>
                <nav className='absolute top-0 w-full z-20 font-avenir font-extrabold py-3'>
                    <div className='w-2/3 flex items-center justify-between mx-auto'>
                        {/*Primary Menu*/}
                        <div className=''>
                            <Link href='/'>
                                <a className='text-slate-300 text-2xl transition duration-500 ease-in-out px-3 py-2 rounded-md text-md hover:text-slate-400'>
                                    Home
                                </a>
                            </Link>
                            <Link href='/about'>
                                <a className='text-slate-300 text-2xl mx-4 transition duration-500 ease-in-out px-3 py-2 rounded-md text-md hover:text-slate-400'>
                                    About
                                </a>
                            </Link>
                            <Link href='/whitepaper'>
                                <a className='text-slate-300 text-2xl mx-4 transition duration-500 ease-in-out px-3 py-2 rounded-md text-md hover:text-slate-400'>
                                    Whitepaper
                                </a>
                            </Link>
                        </div>
                        {/*Call to Action Button*/}
                        {/* <button className='px-7 py-3 bg-gray-900 rounded-lg leading-none'>
                            <span className='text-purple-200 text-lg font-extrabold '>
                                Connect Wallet
                            </span>
                        </button> */}
                        <div className='flex justify-center items-center'>
                            <div className='relative group'>
                                <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                                <button className='relative px-7 py-3 bg-slate-900 rounded-lg leading-none'>
                                    <span className='text-purple-200 text-lg font-bold group-hover:text-violet-300 transition duration-200'>
                                        Connect Wallet
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='absolute mx-auto z-30 h-full'>
                    <div className='font-avenir w-2/3 mx-auto flex h-full'>
                        <div className=' inset-0 justify-between w-1/3 py-60'>
                            <h1 className='text-7xl my-5 font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-300 via-purple-500 to-blue-700'>
                                Horzees of Indarados
                            </h1>
                            <h5 className='text-2xl text-white font-semibold'>
                                Spread across the multiple climates of
                                Indarados, 12 different Horzee species have been
                                in a great rivalry for centuries.
                            </h5>
                        </div>

                        <div className='z-30 flex justify-end w-full'>
                            <img
                                className=''
                                src='images/horzees/epic/thor2.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full absolute h-full bg-gradient-to-br from-indigo-900 via-slate-700 to-purple-900 opacity-90'></div>
                <div className='hero inset-0 h-full w-full bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
            </section>
        </>
    )
}

export default Hero
