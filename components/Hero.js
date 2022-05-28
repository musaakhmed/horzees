import Link from 'next/link'

const Hero = () => {
    return (
        <div className='bg-hero h-screen w-screen bg-cover bg-no-repeat bg-center'>
            <nav className='flex flex-col px-10 py-6 text-teal-100'>
                <div className='text-xl xl:text-2xl flex flex-wrap flex-1 flex-row justify-end items-center px-5 font-extralight'>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Home
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Paper
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Vision
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Team
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Races
                    </a>
                    <a
                        href=''
                        className='px-2 flex-shrink-0 object-contain object-center'
                    >
                        <img
                            src='/SVG/discord.webp'
                            height='25px'
                            width='25px'
                        />
                    </a>
                    <a
                        href=''
                        className='px-2 flex-shrink-0 object-contain object-center'
                    >
                        <img
                            src='/SVG/twitter.webp'
                            height='25px'
                            width='25px'
                        />
                    </a>
                </div>
                {/* <div className='px-2 xl:px-5 mt-5 xl:mt-0'>
                    <div className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                        <button className='relative px-5 py-4 xl:px-7 xl:py-3 bg-slate-900 rounded-lg leading-none'>
                            <span className='text-purple-200 text:sm xl:text-lg font-bold group-hover:text-violet-300 transition duration-200'>
                                Connect Wallet
                            </span>
                        </button>
                    </div> 
                </div> */}
            </nav>

            <div className='flex flex-col max-w-[630px] justify-center items-center mt-[440px] mx-auto'>
                <div className=' flex flex-col max-w-[630px] justify-center items-center'>
                    <div className=' shadow-2xl text-7xl leading-[1/4] text-center text-teal-100 font-extrabold'>
                        HORZEES
                        <br />
                        OF INDARADOS
                    </div>
                    <div className='flex max-w-[500px] h-0 w-[500px] mt-4 text-shadow-2xl border-[rgba(218, 255, 251, 1)] border-2 border-solid' />
                    <div className='max-w-[310px] mt-2 shadow-2xl text-teal-100 text-2xl text-center justify-center items-center font-semibold'>
                        A new experience in Solana
                    </div>
                </div>
                <div className=' flex flex-row max-w-5xl justify-start mt-5 rounded-full py-4 px-10 bg-teal-100 text-2xl text-center text-teal-700 font-semibold'>
                    Explore the Art
                </div>
            </div>

            {/* <section className='flex flex-col max-w-[630px] justify-start mt-[450px]'>
                <div className='flex flex-col max-w-[630px] justify-center'>
                    <h1 className='max-w-[630px] shadow-[0_4px_20px_0px_rgba(0,0,0,1)] text-8xl leading-[1/4] text-center '>
                        Horzees of Indarados
                    </h1>
                    <div className='flex max-w-[500px] h-0 w-[500px] mt-4 shadow-[0_2px_7px_0px_rgba(0,0,0,1)] border-[rgba(218, 255, 251, 1)] border-2 border-solid'></div>
                    <span className='text-xl font-bold text-slate-200 '>
                        A new experience in Solana
                    </span>
                    <div className='mt-5 flex justify-center items-center'>
                        <div className='relative group'>
                            <div className='absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 ease-in-out group-hover:duration-200 animate-tilt'></div>
                            <button className='relative px-5 py-4 xl:px-7 xl:py-3 bg-slate-300 rounded-lg leading-none'>
                                <span className='text-indigo-800 text-lg font-bold group-hover:text-purple-900 transition duration-400 group-hover:duration-400 ease-in-out'>
                                    Enter Indarados
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Hero
