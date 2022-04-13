import React from 'react'

class Addbutton extends React.Component {
    
    render() {
       
        const minusValue = (event) => {
            const inputbox = document.getElementById('box');
            event.preventDefault();
            const currentValue = Number(inputbox.value) || 0;
            inputbox.value = currentValue - 1;
            
        }

        const addValue = (event) => {
            const inputbox = document.getElementById('box');
            event.preventDefault();
            const currentValue = Number(inputbox.value) || 0;
            inputbox.value = currentValue + 1;
        }
    

    
        return (
            <>
             <div className = "item">
                <button className = 'Addbtn' id="minus" onClick={minusValue} > - </button>
                <input type="number" defaultValue="0" id='box' />
                <button className = 'Addbtn' id="add" onClick = {addValue}> + </button>
            </div>
            </>
        )
    }
};

export default Addbutton;

