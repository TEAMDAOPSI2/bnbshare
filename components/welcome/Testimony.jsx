const Testimony = () => (
    <div className="p-6 bg-white rounded-md shadow">
        <div className="grid grid-cols-2 flex flex-row content-between">
            <h3 className="text-xl w-[150px] font-semibold">Very easy to understand</h3>
            <div className="rating">
                <div className="flex flex-row-reverse">
                    {[1, 2, 3, 4].map(() => (
                        <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] ml-3">
                            <path
                                className="fill-current fill-emerald-500"
                                fill="currentColor"
                                d="M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z"
                            />
                        </svg>
                    ))}
                </div>
                <p className="text-right pt-3 font-semibold text-gray-500">20 Jul 2021</p>
            </div>
        </div>
        <p className="py-6 text-gray-700 text-justify">
            Best platform to start investing in real estate and be familiar to it for those who are worried or
            having the fear of risking it all. The team are very friendly and supportive. This is a long-term
            road but it will have a great impact on the long run. Can’t wait to see the other features that will
            be added to their platform.
        </p>
        <div className="flex flex-row justify-between">
            <p className="font-normal">Wagore</p>
            <div className="rating">
                <img src="https://getstake.com/assets/home/testimonials/appstore.svg" alt="app store"/>
            </div>
        </div>
    </div>
)

export default Testimony;