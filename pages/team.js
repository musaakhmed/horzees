import Navbar from '../components/Navbar'

const Team = () => {
    return (
        <div className='bg-page bg-contain bg-blend-darken bg-cyan-50 bg-opacity-100'>
            <Navbar />
            <div className='flex flex-row'>
                <div className='flex flex-col pt-24 pl-12 md:pl-24 lg:pl-36 xl:pl-48 w-2/3 items-start justify-start'>
                    <div className='text-[#A44A3F]'>
                        <h1 className='text-6xl font-extrabold h2-shadow font-avenir py-2 '>
                            The Team
                        </h1>
                        <h3 className='font-avenirstdlt py-2'>
                            Diverse. Functional. Hard-working.
                        </h3>
                        <p className='font-avenirstd py-2'>
                            We are all over the world, yet very close to each
                            other. Privetly doxxed and willing to be out there
                            working tight knit with the community. Let&apos;s
                            get to know each other.
                        </p>
                    </div>
                    <div className='text-[#006D77] py-3'>
                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            RustinC.
                        </h2>
                        <p className='font-avenirstd py-1'>
                            A true entrepreneur with a brain that never rests.
                            He came up with the idea, the name and the designs,
                            and put it out there for the rest of the team to
                            develop. And we did.
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Amy Pond
                        </h2>
                        <p className='font-avenirstd py-1'>
                            From Tokenomics to the UI of the website you are
                            scrolling through right now, it sometimens feels
                            like there is nothing she cannot do. Works hard,
                            parties harder.
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Arrogant
                        </h2>
                        <p className='font-avenirstd py-1'>
                            A team manager. Puches people, gets things done,
                            keeps everyone together. At all times. Wee bit of a
                            control freak. Not a texter.
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Callmedogperson
                        </h2>
                        <p className='font-avenirstd py-1'>
                            If she was born as an Italian guy in the 15th
                            century, we would have been buying tickets to Louvre
                            to see the Horzees. Also, a dog person with a cat,
                            can anything ever top that?
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Incantator
                        </h2>
                        <p className='font-avenirstd py-1'>
                            The dev that loves poems and film photography. A
                            sensitive soul with a big brain. True friend and an
                            even better teammate.
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Lapartas
                        </h2>
                        <p className='font-avenirstd py-1'>
                            Tasteful dev who is in love with Amy Pond
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Mbee
                        </h2>
                        <p className='font-avenirstd py-1'>
                            Loves diamonds. And horses. And Horzees. And Rust.
                        </p>

                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Eärandil
                        </h2>
                        <p className='font-avenirstd py-1'>
                            Always one step ahead of everything. Always
                            researching. Perfect alpha.
                        </p>
                    </div>
                    <div className='py-3 text-[#F07167]'>
                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            An honorary member
                        </h2>
                        <h2 className='font-avenir pt-3 font-extrabold text-2xl'>
                            Arturo Bris
                        </h2>
                        <p className='font-avenirstd py-1'>
                            Ranks among the top one hundred most read finance
                            academics in the world. Author of several books, a
                            frequent speaker at international conferences, and
                            appears regularly on international media outlets.
                            Leads the world-renowned IMD World Competitiveness
                            Center (WCC) and is an award-winning professor and
                            program director. As Director of the IMD WCC, works
                            with governments all over the world assessing,
                            measuring, and managing the competitiveness of
                            countries.
                        </p>
                        <p className='font-avenirstd py-1'>
                            Contributed to our Tokenomics, controlled, audited
                            and approved. We are forever grateful for his
                            insights, he truly took the project somewhere else
                            being the brilliant visionary he is.
                        </p>
                        <p className='font-avenirstd py-1'>
                            Read more about him:
                        </p>
                    </div>
                    <div className='pb-10'>
                        <button className='flex max-w-5xl button-shadow justify-start mt-2 xl:mt-5 rounded-full py-2 px-5 xl:py-4 xl:px-10 bg-teal-700 hover:bg-teal-500 transition-all ease-in-out duration-300 xl:text-2xl lg:text-xl text-lg text-center text-teal-100 font-avenirstd'>
                            Horzees of Indarados
                        </button>
                    </div>
                </div>
                <div className='w-1/3 bottom-0 right-0 fixed'>
                    <img src='/images/tanjiro.png' />
                </div>
            </div>
        </div>
    )
}

export default Team
