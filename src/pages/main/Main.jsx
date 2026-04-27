import MainVisual from './MainVisual';
import Introduce from './Introduce';
import Skill from './Skill';
import Work from './Work';
import EtcProject from './EtcProject';
import Contact from './Contact';

const Main = () => { 
    return (
        <main>
            <div className="main-wrap relative z-10">
                <MainVisual/>

                <Introduce/>
                
                <Skill/>

                <Work/>

                <EtcProject />

                <Contact />
            </div>
        </main>
    );
}

export default Main;