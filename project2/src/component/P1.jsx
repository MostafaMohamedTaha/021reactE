import React, { Component } from 'react'

export class P1 extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <div className="flex items-center">
                                <img src="https://picsum.photos/50" className="h-8 mr-3 rounded-xl" alt="logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">First Project</span>
                            </div>
                            <div className="flex md:order-2">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <section className='mt-[4rem]'>
                    <h1 className='p-1 text-3xl'>Lorem ipsum dolor sit amet.</h1>
                    <ul className='m-5 list-disc '>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam minima et soluta totam quo harum neque odio mollitia. Pariatur voluptate id repellendus repudiandae distinctio dignissimos accusamus vitae laudantium minus.</li>
                        <li>Repellat alias neque itaque! Commodi voluptate, eaque reprehenderit quaerat pariatur accusamus libero beatae! Deserunt totam, animi, non dolor soluta earum quam sed natus molestiae officiis ducimus quas quaerat hic inventore.</li>
                        <li>Illum quibusdam unde accusamus praesentium similique repellat, eos quam harum officia obcaecati quidem maiores id exercitationem debitis nam commodi eius, itaque eaque aperiam fugit perferendis reprehenderit laudantium blanditiis. Praesentium, nisi!</li>
                        <li>Nesciunt officia qui harum aliquam, beatae dolorem non nulla laboriosam ea doloribus repudiandae delectus eum, excepturi dolores est quis, aperiam dolore eveniet? Deserunt adipisci asperiores exercitationem molestiae alias, in illo!</li>

                    </ul>
                </section>
                <footer className='flex justify-center m-4 bg-slate-600 text-slate-100 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod optio dignissimos eveniet est dolor voluptatum qui cumque laborum. Laboriosam impedit doloremque libero repellat itaque dicta quis obcaecati nam at.</footer>
            </div>
        )
    }
}

export default P1