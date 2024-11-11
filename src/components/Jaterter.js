import { useContext } from 'react';
import { Kartyacontext } from '../context/KartyaContext';
import Kartya from './Kartya';

function Jatekter() {
    const { kartyak } = useContext(Kartyacontext); 
    return (
        <div className="jatekter">
            {kartyak.map((kartya) => (
                <Kartya kartya={kartya} key={kartya.id} />
            ))}
        </div>
    );
}

export default Jatekter;