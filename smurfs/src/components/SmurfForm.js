import React, {useState} from 'react';
import { postData } from './actions/smurfActions';

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: 0, height: ''})

    const smurfHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNewSmurf({...newSmurf, [name]: value})
    }
    return(
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            props.postData(newSmurf)
            setNewSmurf({name: '', age: 0, height: ''})
        }}>
            <input type='text' name='name' value={newSmurf.name} onChange={(e) => smurfHandler(e)} placeholder='Name' />
            <input type='number' name='age' value={newSmurf.age} onChange={(e) => smurfHandler(e)} placeholder='Age' />
            <input type='text' name='height' value={newSmurf.height} onChange={(e) => smurfHandler(e)} placeholder='Height' />
            <button>Submit Smurf</button>
        </form>

        </>
    )
}

export default SmurfForm;