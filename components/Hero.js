import Link from 'next/link'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='bg-hero h-screen max-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-between '>
            <Navbar />

            <div className='flex flex-col max-w-[630px] justify-end items-center mx-auto mb-24 font-avenir'>
                <div className='flex flex-col max-w-[630px] justify-center items-center'>
                    <div className='text-4xl lg:text-5xl xl:text-7xl leading-[1/4] text-center text-teal-100 font-extrabold mb-4'>
                        <p className='title-shadow'>
                            HORZEES
                            <br />
                            OF INDARADOS
                        </p>
                    </div>
                    <p className='flex max-w-[500px] h-0 w-72 xl:w-[500px] my-2 xl:my-4 line-shadow border-teal-100 border-[1px] border-solid' />
                    <p className='font-avenirstd max-w-[310px] mt-2 xl:mt-4 subtitle-shadow text-teal-100 text-lg lg:text-xl xl:text-2xl text-center justify-center items-center'>
                        A new experience in Solana
                    </p>
                </div>
                <Link href='/art'>
                    <a>
                        <button className='flex max-w-5xl button-shadow justify-start mt-2 xl:mt-5 rounded-full py-2 px-5 xl:py-4 xl:px-10 bg-teal-100 hover:bg-teal-200 transition-all ease-in-out duration-300 xl:text-2xl lg:text-xl text-lg text-center text-teal-700 font-avenirstd'>
                            Explore the Art
                        </button>
                    </a>
                </Link>
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
