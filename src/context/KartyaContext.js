import { createContext, useState } from "react";
import { lista as kezdoLista } from '../adat';

export const Kartyacontext = createContext();

export const KartyaProvider = ({ children }) => {

    const veletlenKeveres = (lista) => {
        return lista.sort(() => Math.random() - 0.5);
    };

    const [kartyak, setKartyak] = useState(veletlenKeveres([...kezdoLista])); 
    const [kivalasztottKartyak, setKivalasztottKartyak] = useState([]);

    
    const kartyaKivalaszt = (kartyaId) => {  // új fügv név
        if (kivalasztottKartyak.length === 2) return; 

        const ujKivalasztottKartyak = [...kivalasztottKartyak, kartyaId];
        setKivalasztottKartyak(ujKivalasztottKartyak);

        setKartyak((elozoKartyak) => {
            return elozoKartyak.map((kartya) => {
                if (kartya.id === kartyaId) {
                    return { ...kartya, felfedett: true };
                }
                return kartya;
            });
        });

        if (ujKivalasztottKartyak.length === 2) {
            setTimeout(() => ellenorizPar(ujKivalasztottKartyak), 1000);
        }
    };

    const ellenorizPar = ([id1, id2]) => {
        let kartya1 = 0;
        let kartya2 = 0;

        for (let i = 0; i < kartyak.length; i++) {
            if (kartyak[i].id === id1) {
                kartya1 = kartyak[i];
            } else if (kartyak[i].id === id2) {
                kartya2 = kartyak[i];
            }
        }

        if (kartya1 && kartya2 && kartya1.ertek === kartya2.ertek) {
            setKivalasztottKartyak([]); 
        } else {
            setKartyak((elozoKartyak) => {
                return elozoKartyak.map((kartya) => {
                    if (kartya.id === id1 || kartya.id === id2) {
                        return { ...kartya, felfedett: false }; 
                    }
                    return kartya;
                });
            });
            setKivalasztottKartyak([]);
        }
        
    };
    function megjelenitKartya(kartya){
        if (kartya.felfedett) {
            return kartya.src;
        } else {
            return "✨";
        }

    }

    return (
        <Kartyacontext.Provider value={{ kartyak, kartyaKivalaszt, megjelenitKartya }}>
            {children}
        </Kartyacontext.Provider>
    );
};

