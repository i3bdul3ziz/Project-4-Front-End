import React from 'react'
import EditTripForm from './EditTripForm'
import CreateEditHeader from "../Headers/CreateEditHeader.js";


export default function EditPage(props) {
    return (
        <div>
            <CreateEditHeader />
            <EditTripForm {...props}/>
        </div>
    )
}
