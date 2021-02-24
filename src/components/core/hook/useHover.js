import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

function useHover() {

    const [value,setValue] = useState(false);
    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    
    console.log(ref.current);

    useEffect(() => {
        const node = ref.current
            if (node) {
                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);
                return () => {
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
    }, [ref.current]);

    return [ref, value];
}

export default useHover;
