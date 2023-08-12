import { useState } from "react"
import { getCategories } from "../../AsyncMock";
import { NavDropdown } from "react-bootstrap";
import { useEffect } from "react";

export const DropdownItem = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(response => setCategories(response))
            .catch(error => console.error(error))
    }, [])

    return (<>
        {categories.map(cat => <NavDropdown.Item  key={cat} href={`#/category/${cat}`}>{cat}</NavDropdown.Item>)
        }
    </>
    )

}