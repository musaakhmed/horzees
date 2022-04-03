import Link from 'next/link'

const Hero = () => {
    return (
        <div className='font-avenir bg-hero bg-indigo-900 bg-blend-multiply h-screen w-screen bg-cover bg-no-repeat bg-center'>
            <nav className='flex flex-col xl:px-10 py-6 justify-center items-center xl:flex-row xl:justify-between text-slate-200'>
                <div className='uppercase text-xl xl:text-2xl font-extrabold flex-wrap flex-1'>
                    <a href='' className='px-2 xl:px-5 flex-shrink-0'>
                        Home
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        About
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Story
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Whitepaper
                    </a>
                    <a href='' className='px-2 xl:px-6 flex-shrink-0'>
                        Indarados
                    </a>
                </div>
                <div className='px-2 xl:px-5 mt-5 xl:mt-0'>
                    <div className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                        <button className='relative px-5 py-4 xl:px-7 xl:py-3 bg-slate-900 rounded-lg leading-none'>
                            <span className='text-purple-200 text:sm xl:text-lg font-bold group-hover:text-violet-300 transition duration-200'>
                                Connect Wallet
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            <section className='flex flex-col xl:flex-row xl:justify-around xl:items-center xl:px-16'>
                <div className='h-full content-center items-center w-3/4 mx-auto justify-center'>
                    <h1 className='text-4xl xl:text-7xl my-5 font-black text-center xl:text-left text-transparent bg-clip-text bg-gradient-to-br from-slate-300 via-purple-500 to-blue-700'>
                        Horzees of Indarados
                    </h1>
                    <span className='text-xl font-bold text-slate-200 '>
                        Spread across the multiple climates of Indarados, 12
                        different Horzee species have been in a great rivalry
                        for centuries.
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
                <div className='h-full items-end'>
                    <img
                        className=''
                        src='images/horzees/epic/thor2.png'
                        alt=''
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero
