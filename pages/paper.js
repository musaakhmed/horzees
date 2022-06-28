import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Art = () => {
    return (
        <div className='bg-page h-screen bg-contain bg-blend-darken bg-cyan-50 bg-opacity-100'>
            <Head>
                <title>Paper | Horzees of Indarados</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Navbar />
            <div className='flex flex-row p-7 text-[#A44A3F] '>
                <section className='flex flex-col w-2/3 xl:p-24'>
                    <span className='text-2xl lg:text-4xl xl:text-7xl font-extrabold font-avenir py-12'>
                        Whitepaper <br />
                        or Litepaper?
                    </span>
                    <span className='py-12 font-avenirstd text-xl sm:text-xl lg:text-3xl xl:text-4xl h2-shadow'>
                        On a scale from 1 to 10, how lazy are you?
                    </span>
                    <div className='w-[324px] md:w=[610px] xl:w-[648px]'>
                        <div className='flex flex-row justify-start items-start xl:gap-8 xl:pt-8 gap-4 pt-4'>
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                            <div className='w-9 h-1 md:w-9 md:h-2 xl:w-9 xl:h-3 bg-[#E29578] rounded-md shadow-lg' />
                        </div>
                        <div className='flex flex-row justify-between py-4'>
                            <span className='text-lg w-[130px] font-avenirnext h2-shadow leading-none'>
                                laziest person to ever walk the earth
                            </span>
                            <span className='text-lg w-[130px] font-avenirnext h2-shadow leading-none text-right'>
                                nope I want to read the whole thing!
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <img
                src='/images/thor.png'
                className='fixed md:right-0 lg:right-0 xl:right-0 bottom-0 h-[167px] w-[225px] lg:h-[447px] lg:w-[600px] xl:h-[671px] xl:w-[900px]'
            />
            <Footer />
        </div>
    )
}

export default Art
