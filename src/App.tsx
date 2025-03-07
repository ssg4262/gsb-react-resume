import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

const App = () =>{
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        switch (mode) {
            case 'dark':
                setMode('light');
                break
            case 'light' :
                setMode('dark');
                break
            default :
                setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            {/*<Project/>*/}
            {/*<Contact/>*/}
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;