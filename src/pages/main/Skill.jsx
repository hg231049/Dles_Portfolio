import Stack from '../../components/Stack';
import Competencies from '../../components/Competencies';

const Skill = () => { 
    return (
        <section className="section-step min-h-screen flex justify-center">
            <div className="inner">
                <div className="main-title p-[50px_0_40px] lg:p-[100px_0_80px] text-center">
                    <p className='text-day-color text-[16px] lg:text-[25px] font-medium'>02.기술 스택과 핵심역량</p>
                    <h2 className='text-[#1E293B] text-[25px] lg:text-[55px] font-bold'>Skill & Core Competencies</h2>
                </div>
                <Stack/>
                <Competencies/>
            </div>
        </section>
        
    )
}

export default Skill;