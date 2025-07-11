import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NouvelleCandidature from './pages/NouvelleCandidature';
import DetailsCandidature from './pages/DetailsCandidature';
import About from './pages/About';
import ModifierCandidature from './pages/ModifierCandidature';

function RouterConfig(){
    return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/nouvelle-candidature" element={<NouvelleCandidature/>}/>
        <Route path="/details-candidature/:id" element={<DetailsCandidature/>}/>
        <Route path="/modifier-candidature/:id" element={<ModifierCandidature/>}/>
        <Route path="/about" element={<About/>} />
    </Routes>
    );
}

export default RouterConfig;