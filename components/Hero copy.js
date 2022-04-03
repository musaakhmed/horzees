import Link from 'next/link'

const Hero = () => {
    return (
        <>
            <section className=' w-screen h-screen'>
                <div className='absolute h-full w-full bg-slate-900 bg-hero bg-cover bg-no-repeat bg-center bg-blend-overlay'>
                    <nav className='absolute top-0 w-full font-avenir font-extrabold z-30'>
                        <div className='xl:w-2/3 flex flex-col lg:flex-row items-center justify-between mx-auto'>
                            {/*Primary Menu*/}

                            <div className='text-slate-300 text-lg xl:text-2xl transition duration-500 ease-in-out  py-2 rounded-md text-md hover:text-slate-400'>
                                <Link href='/'>
                                    <a className='px-3'>Home</a>
                                </Link>
                                <Link href='/about'>
                                    <a className='px-3'>About</a>
                                </Link>
                                <Link href='/whitepaper'>
                                    <a className='px-3'>Whitepaper</a>
                                </Link>
                            </div>

                            {/*Call to Action Button*/}

                            <div className='flex justify-center items-center py-8 xl:py-3'>
                                <div className='relative group'>
                                    <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                                    <button className='relative px-5 py-4 xl:px-7 xl:py-3 bg-slate-900 rounded-lg leading-none'>
                                        <span className='text-purple-200 text:sm xl:text-lg font-bold group-hover:text-violet-300 transition duration-200'>
                                            Connect Wallet
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Hero text */}

                    <div className='absolute mx-auto z-30 h-full'>
                        <div className='font-avenir w-2/3 mx-auto flex flex-col xl:flex-row h-full'>
                            <div className=' inset-0 justify-between xl:w-1/3 py-60'>
                                <h1 className='text-3xl xl:text-7xl my-5 font-black text-center xl:text-left text-transparent bg-clip-text bg-gradient-to-br from-slate-300 via-purple-500 to-blue-700'>
                                    Horzees of Indarados
                                </h1>
                                <h5 className='text-2xl text-white text-center xl:text-left font-semibold'>
                                    Spread across the multiple climates of
                                    Indarados, 12 different Horzee species have
                                    been in a great rivalry for centuries.
                                </h5>
                            </div>

                            <div className='flex justify-between flex-1 w-screen h-full'>
                                <img
                                    className=''
                                    src='images/horzees/epic/thor2.png'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
