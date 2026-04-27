import { Icons } from '../../components/Icons';
import Mindset from '../../components/Mindset';
import History from '../../components/History';

const Introduce = () => { 
    return (
        <section className="section-step h-screen flex justify-center">
            <div className="inner">
                <div className="main-title p-[60px_0_80px] text-center">
                    <p className='text-sunrise-color lg:text-[25px]'>나의 뿌리와 걸어온 길</p>
                    <h2 className='text-[#F8FAFC] lg:text-[55px] font-bold'>Root & Route</h2>
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