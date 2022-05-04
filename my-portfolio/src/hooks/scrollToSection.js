import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';

export default function useScrollTo() {
    const context = useContext(AppContext);
    const [value, setValue] = useState(context.store);
    let myObject = ['home', 'about', 'projects', 'contact'];
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        let index = myObject.indexOf(newValue);
        document.querySelector('#' + myObject[index]).scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    return {
        handleChange,
        myObject
    }
}
