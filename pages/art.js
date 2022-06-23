import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Art = () => {
    return (
        <div className='bg-page bg-contain  bg-blend-darken bg-cyan-50 bg-opacity-100'>
            <Head>
                <title>The Art | Horzees of Indarados</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Navbar />

            <section className='flex flex-'>
                <div className='flex flex-col pt-24 pl-12 md:pl-24 lg:pl-36 xl:pl-48 w-2/3 items-start justify-start'>
                    <div className='text-[#A44A3F]'>
                        <h1 className='text-6xl font-extrabold h2-shadow font-avenir py-2 '>
                            The Art
                        </h1>
                        <h3 className='font-avenirstdlt pt-2 pb-8'>
                            Clean. Original. New.
                        </h3>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex gap-6 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2 py-4'>
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/1-a.jpg'
                    />
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/1-b.jpg'
                    />
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/2-a.jpg'
                    />
                </div>
                <h2 className='flex gap-6 flex-row mx-auto justify-center items-center text-semibold h2-shadow w-5/6 lg:w-1/2 font-avenirstdlt py-16 text-2xl text-[#A44A3F]'>
                    These were first Horzee concept drawings. They look okay,
                    but we knew we could do better. So we just kept working on
                    them.
                </h2>
                <div className='flex gap-6 flex-row mx-auto justify-end items-center w-5/6 lg:w-1/2 py-4'>
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/3-a.jpg'
                    />
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/3-b.jpg'
                    />
                </div>
                <h2 className='flex gap-6 flex-row mx-auto justify-center items-center text-semibold h2-shadow w-5/6 lg:w-1/2 font-avenirstdlt py-16 text-2xl text-[#A44A3F]'>
                    Our artist was definitely high on something, but she’s never
                    told us what. We’ll let you know if we EVER find out.
                </h2>
                <div className='flex gap-6 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2 py-4'>
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/4.jpg'
                    />
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/5.jpg'
                    />
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/6.jpg'
                    />
                </div>
                <h2 className='flex gap-6 flex-row mx-auto justify-center items-center text-semibold h2-shadow w-5/6 lg:w-1/2 font-avenirstdlt py-16 text-2xl text-[#A44A3F]'>
                    So, she played around the amphibian Horzee for a while, but
                    then decided she hated it. Right after that, stoned Horzee
                    happened. And then on a complete turn of events, we got a
                    cute baby Horzee. We’ll use that one in the future tho...
                </h2>
                <div className='flex gap-6 flex-row mx-auto justify-end items-center w-5/6 lg:w-1/2 py-4'>
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg -rotate-6 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/8.jpg'
                    />
                    <img
                        className='h-[250px] w-[250px] rounded-3xl border-3 border-solid border-slate-400 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-200 ease-in-out'
                        src='/images/art/sketches/7.jpg'
                    />
                </div>
                <h2 className='flex gap-6 flex-row mx-auto justify-center items-center text-semibold h2-shadow w-5/6 lg:w-1/2 font-avenirstdlt py-16 text-2xl text-[#A44A3F]'>
                    After weeks of going back and forth, the first, unanimously
                    approved Horzee was born! It was magestic, beautiful and
                    just what we needed! <br /> <br /> It looks beautiful facing
                    both ways, but if it is not facing right, it is not actually
                    right, right?
                </h2>
            </section>
            <section className='flex gap-2 flex-col mx-auto justify-center items-center w-5/6 lg:w-1/2 py-4'>
                <div className='flex gap-2 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2'>
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file1.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file12.png'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-lg transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file3.jpg'
                    />
                </div>
                <div className='flex gap-2 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2'>
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file4.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file11.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-lg transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file6.jpg'
                    />
                </div>
                <div className='flex gap-2 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2'>
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file7.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file8.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-lg transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file9.jpg'
                    />
                </div>
                <div className='flex gap-2 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2'>
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file10.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file13.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-lg transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file14.jpg'
                    />
                </div>
                <div className='flex gap-2 flex-row mx-auto justify-center items-center w-5/6 lg:w-1/2'>
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file15.jpg'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-md transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file5.png'
                    />
                    <img
                        className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 h-[250px] w-[250px] rounded-lg border-3 border-solid border-slate-400 shadow-lg transition-all duration-200 ease-in-out'
                        src='/images/art/bodies/file2.png'
                    />
                </div>
            </section>
        </div>
    )
}

export default Art
