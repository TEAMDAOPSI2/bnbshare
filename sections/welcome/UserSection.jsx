const UserSection = () => {
    return(
       <>
           <div className="container px-3 mx-auto mt-[-50px] relative used">
               <div className="bg-white absolute z-10 w-full py-8 text-center shadow rounded-md">
                   <div className="grid gap-4 grid-cols-4">
                       <div>
                           <h4 className="text-4xl font-bold">76K<span>+</span></h4>
                           <p>registered users</p>
                       </div>
                       <div>
                           <h4 className="text-4xl font-bold">AED 81M<span>+</span></h4>
                           <p>in properties funded</p>
                       </div>
                       <div>
                           <h4 className="text-4xl font-bold">166</h4>
                           <p>user nationalities</p>
                       </div>
                       <div>
                           <h4 className="text-4xl font-bold">AED 2.2M<span>+</span></h4>
                           <p>rental income paid</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="bg-slate-200 h-[250px] flex items-end justify-center">
               <a href="" className="pb-12">See our <b>27</b> reviews on <b>Trustpilot</b></a>
           </div>
       </>
    )
}

export default UserSection;