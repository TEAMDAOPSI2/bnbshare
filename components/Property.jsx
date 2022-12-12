const Property = () => (
    <div className="rounded-md bg-white shadow">
        <div className="relative">
            <div className="img-slider">
                <img
                    src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/71/images/1091/1280px_main_7esDt7B0glXroVvMNM4Bb7StDBgsVKyE4PF6Hf51.jpeg"
                    alt="listing 1"
                />
            </div>
            <div className="absolute top-2 left-2 flex flex-row">
                <div className="rounded-lg px-2 py-1  flex flex-row justify-between items-center bg-white">
                    <img src="https://getstake.com/assets/flags/ae.png" alt="dubai flag" className="w-5 h-5 rounded-full"/>
                    <span className="ml-1 text-sm font-medium">Dubai</span>
                </div>
                <div className="rounded-lg px-2 py-1  flex flex-row justify-between items-center bg-white ml-3">
                    <svg className="stroke-emerald-500 w-[20px]" viewBox="0 0 24 24" focusable="false" aria-label="user">
                        <circle cx="12" cy="12" r="10" fill="none" fillRule="nonzero" stroke="none" strokeWidth="1.5" />
                        <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="6"
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1.5"
                        />
                        <g
                            className="stroke-emerald-500"
                            fill="none"
                            fillRule="nonzero"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 20C5 17.5 7 15.6 9.4 15.6H14.5C17 15.6 18.9 17.6 18.9 20 M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 9.00001 11.2C7.40001 9.5 7.30001 6.8 9.00001 5.2C10.7 3.6 13.3 3.6 15 5.2" />
                        </g>
                    </svg>
                    <span className="ml-1 text-sm font-medium">Rented</span>
                </div>
            </div>
        </div>
        <div className="py-3 px-5">
            <h3 className="text-xl font-medium">1 Bed in Bay Central Dubai Marina</h3>
            <div className="flex flex-row items-center gap-2">
                <p className="text-emerald-500 text-xl font-semibold grow-1">
                    <span className="text-base">AED</span> 1,000,000
                </p>
                <div className="flex flex-row grow items-center justify-end py-3">
                    <div className="bg-gray-200 rounded-full h-2.5 bg-gray-300 w-[120px]">
                        <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '45%' }} />
                    </div>
                    <p className="text-sm ml-1">45% founded</p>
                </div>
            </div>
            <div className="grid gap-3 bg-gray-200 grid-cols-3 rounded-md p-2 my-3">
                <div className="p-1">
                    <p className="text-sm font-medium">56.82%</p>
                    <p className="text-sm text-gray-600">project return</p>
                </div>
                <div className="p-1">
                    <p className="text-sm font-medium">6.82%</p>
                    <p className="text-sm text-gray-600">gross yield</p>
                </div>
                <div className="p-1">
                    <p className="text-sm font-medium">30 Nov 2022</p>
                    <p className="text-sm text-gray-600">closed</p>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-5 mb-3">
                <p className="font-semibold">
                    <span className="font-light">Rent</span> AED 9,167.month
                </p>
                <p className="font-semibold">
                    <span className="font-light">Distributed</span> Monthly
                </p>
            </div>
        </div>
    </div>
)

export default Property;

