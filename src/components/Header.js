import React, { useEffect, useRef } from 'react'

const Header = ({ location, setLocation, searchLocation }) => {
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    return ( 
        <div className="header">
            <input ref={textInput} type="text" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={searchLocation} />
        </div>
     );
}
 
export default Header;