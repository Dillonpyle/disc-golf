import React, { Component } from 'react'

const Settings = (props) => {


    return (
        <div>
            <div>
                <h4>Edit Movie</h4>
                <form onSubmit={props.updateUsername}>
                    <label>
                        Edit User Name:
          <input type='text' name="title" onChange={props.handleEditFormInput} value={props.username} />
                    </label>
                    <input type='Submit' />
                </form>
            </div>

            <button onClick={props.deleteProfile}>Delete Profile</button>
        </div>
    )
}

export default Settings
