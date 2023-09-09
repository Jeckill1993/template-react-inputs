import React from 'react';
import { IMaskInput } from "react-imask";


const SSN = () => {

    const changeHandler = (value, mask) => {
        console.log(value);
        console.log(mask);
    }

    return (
        <>
            <IMaskInput
                mask={'XXX-XX-XXXX'}
                definitions={{
                    'X': {
                        mask: '0',
                        displayChar: '*',
                        placeholderChar: '_',
                    }
                }}
                lazy={false}
                overwrite={'shift'}
                onAccept={changeHandler}
            />
        </>
    )
}

export default SSN;
