import EtcWork from '../../components/EtcWork';

const EtcProject = () => { 
    return (
        <section className="section-step relative min-h-screen flex justify-center">
            <div className="inner">
                <div className="main-title p-[0_0_40px] lg:p-[100px_0_80px] text-center">
                    <p className='text-field-color text-[16px] lg:text-[25px] font-medium'>지속적인 기록들</p>
                    <h2 className='text-[#064E3B] text-[25px] lg:text-[55px] font-bold'>Continuous Records</h2>
                </div>
                <EtcWork/>
            </div>
        </section>
        
    )
}

export default EtcProject;