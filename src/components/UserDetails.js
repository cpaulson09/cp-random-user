import React from 'react'
import Modal from 'react-modal'

export default function UserDetails({user, open, setOpen}) {

    function closeModal(){
        setOpen(false)
      }

    return (
        <>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                contentLabel="User Modal"
            >
                {/* <h1>User Details for {user.name.first}</h1> */}
                <p>{user.phone}</p>
                <button onClick={closeModal}>close</button>
            </Modal> 
        </>
    )
}
