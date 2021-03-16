import React from 'react'
import Modal from 'react-modal'

export default function UserDetails({user, open, setOpen}) {

    function closeModal(){
        setOpen(false)
    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          borderRadius          : 15
        }
      }

    return (
        <>
            {user ? 
                <Modal
                    isOpen={open}
                    onRequestClose={closeModal}
                    contentLabel="User Modal"
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <div style={{textAlign: 'center'}}>
                        <h1>User Details for {user.name.first}</h1>
                        <img src={user.picture.medium}></img>
                        <h4>{user.name.first} {user.name.last}</h4>
                         <p>{user.email}</p>
                        <p>{user.location.street.number} {user.location.street.name} {user.location.city}, {user.location.state} {user.location.country}</p>
                        <p>{user.phone}</p>
                        <p>{user.dob.date}</p>
                        <button style={{padding: '5px 15px', backgroundColor: "black", color: '#61dafb', fontSize: 17, cursor:"pointer"}}onClick={closeModal}>close</button>
                    </div>
                </Modal> 
                :
                <h2>loading user</h2>
            }
        </>
    )
}
