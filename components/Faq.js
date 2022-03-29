import React from 'react'

const Faq = () => {
    return (
        <div className='h-screen flex items-center bg-bg-image bg-cover bg-center bg-purple-900 bg-blend-overlay'>
            <div className='carousel flex-col carousel-center w-3/4 mx-auto p-4 space-x-4 rounded-box'>
                <div
                    tabIndex='0'
                    className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-3'
                >
                    <div className='collapse-title text-xl font-medium'>
                        Focus me to see content
                    </div>
                    <div className='collapse-content'>
                        <p>attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                <div
                    tabIndex='0'
                    className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3'
                >
                    <div className='collapse-title text-xl font-medium'>
                        Focus me to see content
                    </div>
                    <div className='collapse-content'>
                        <p>attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div
                    tabIndex='0'
                    className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3'
                >
                    <div className='collapse-title text-xl font-medium'>
                        Focus me to see content
                    </div>
                    <div className='collapse-content'>
                        <p>attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
