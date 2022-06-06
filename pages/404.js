import Navbar from '../components/Navbar'

const Custom404 = () => {
    return (
        <div>
            <div className='bg-hero h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-between '>
                <Navbar />

                <div className='flex flex-col max-w-1/2 justify-start items-center mx-auto mb-24 font-avenir'>
                    <div className='flex flex-col max-w-1/2 justify-start items-center'>
                        <div className='text-3xl lg:text-4xl xl:text-6xl leading-[1/5] text-center text-teal-100 font-extrabold mb-4'>
                            <p className='title-shadow'>
                                Your journey to Indarados
                                <br />
                                is about to start soon!
                            </p>
                        </div>
                        <p className='flex max-w-[500px] h-0 w-72 xl:w-[500px] my-2 xl:my-4 line-shadow border-teal-100 border-[1px] border-solid' />
                        <p className='font-avenirstd max-w-[310px] mt-2 xl:mt-4 subtitle-shadow text-teal-100 text-lg lg:text-xl xl:text-2xl text-center justify-center items-center'>
                            Stay tuned for more amazing things to come!
                        </p>
                    </div>
                    {/* <Link href='/art'>
                        <a>
                            <button className='flex max-w-5xl button-shadow justify-start mt-2 xl:mt-5 rounded-full py-2 px-5 xl:py-4 xl:px-10 bg-teal-100 hover:bg-teal-200 transition-all ease-in-out duration-300 xl:text-2xl lg:text-xl text-lg text-center text-teal-700 font-avenirstd'>
                                Explore the Art
                            </button>
                        </a>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Custom404
