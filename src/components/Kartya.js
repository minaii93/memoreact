import { useContext } from 'react';
import { Kartyacontext } from '../context/KartyaContext';
import './Kartya.css';

function Kartya({ kartya }) {
    const { kartyaKivalaszt, megjelenitKartya } = useContext(Kartyacontext); 

    return (
        <div
            className="kartya"
            onClick={() => !kartya.felfedett && kartyaKivalaszt(kartya.id)}
        >
            <span>{megjelenitKartya(kartya)}</span>
        </div>
    );
}

export default Kartya;
