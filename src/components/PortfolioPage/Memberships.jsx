import React, {useState} from 'react';
import ReactSwitch from 'react-switch';

const MembershipsLoggedIn = () => {
  const [annually, setAnnually] = useState(false);
  return(
    <div className='text-white grid grid-cols-2'>
      <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className='flex justify-center '>
                <h1 className='px-3 font-semibold'>Monthly</h1>
                  <ReactSwitch
                    checkedIcon	={false}
                    uncheckedIcon={false}
                    onColor={"#00bf63"}
                    checked={annually}
                    onChange={() => setAnnually(!annually)}
                  />
                <h1 className='px-3 font-semibold'>Yearly</h1>
              </div>
              <div className='text-center font-medium hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'> investors<span className='text-[#00bf63]'>+</span></h2>
                  {annually &&(             
                    <p className='text-center text-4xl font-bold'>$24.99</p>)}
                  {!annually &&(             
                    <p className='text-center text-4xl font-bold'>$2.99</p>)}
                  {annually &&(  
                  <p className='text-center font-semibold'>Yearly <span className='text-[#00bf63]'>(Save 30%)</span></p>)}
                  {!annually &&(  
                  <p className='text-center font-semibold'>Monthly</p>)}
                  <p className='py-2 mx-8 mt-8 border-b'>Advertise Videos and Images</p>
                  <p className='py-2 mx-8 border-b'>Unlimited Daily Views</p>
                  <p className='py-2 mx-8 border-b'>YouTube (Get Featured in 'Product/Company of the Day')</p>
                  <p className='py-2 mx-8 border-b'>Free Online Newsletter (GoInvestorNewsletter)</p>
                  <p className='py-2 mx-8 border-b'>No Ads</p>
                  <p className='py-2 mx-8 border-b'>Advanced Analytics (Coming Soon)</p>
                  <p className='py-2 mx-8'>Verified Account Badge</p>
              </div>
              <div className="form-control mt-2">
                <button className='bg-black text-[#00bf63] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Subscribe</button>
              </div>
            </div>
            
        </div>
      </div>
      <div>
        <p className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6 text-[#00bf63] p-6 text-center flex flex-col justify-center'>Premium Membership</p>
      </div>
    </div>
  )
}

export default MembershipsLoggedIn;