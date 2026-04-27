import { Icons } from '../../components/Icons';
import Mindset from '../../components/Mindset';
import History from '../../components/History';

const Introduce = () => { 
    return (
        <section className="section-step min-h- flex justify-center">
            <div className="inner">
                <div className="main-title p-[50px_0_40px] text-left lg:p-[100px_0_80px] lg:text-center">
                    <p className='text-sunrise-color text-[16px] lg:text-[25px] font-medium'>01. 나의 뿌리와 걸어온 길</p>
                    <h2 className='text-[#F8FAFC] text-[25px] lg:text-[55px] font-bold'>Root & Route</h2>
                </div>
                <div className="grid grid-cols-1 items-baseline lg:grid-cols-2 gap-10">
                    <Mindset/>
                    <History/>
                </div>
            </div>
        </section>
        
    )
}

export default Introduce;