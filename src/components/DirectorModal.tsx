import React, { useState, useEffect } from 'react'
import { Empty, message, Modal, Skeleton } from 'antd'
import { fetchUserIDReq } from 'api/directors';
import Gravatar from 'react-gravatar';

interface PropTypes {
    directorID: number
    isVisible: boolean | undefined
    okHandler?: (event: React.MouseEvent<HTMLElement>) => void
    closeHandler: (event: React.MouseEvent<HTMLElement>) => void
}

const initialState = {
    id: null,
    name: "",
    email: "",
    username: "",
    phone: "",
    address: {
        street: "",
        city: ""
    }
}

function ModalComp({ directorID, isVisible, closeHandler }: PropTypes) {
    const [loading, setLoading] = useState(false);
    const [director, setDirector] = useState(initialState);

    async function fetchDirectorHandler() {
        setLoading(true);
        await fetchUserIDReq(directorID)
            .then(res => {
                setDirector(res);
                setLoading(false);
            })
            .catch(err => {
                message.error(err?.response?.message || "Could not get director");
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchDirectorHandler();
    }, [])

    return (
        <Modal title={director.name || "( Director )"} visible={isVisible} onOk={closeHandler} onCancel={closeHandler}>
            {renderDirectorDetails()}
        </Modal>
    )

    function renderDirectorDetails() {
        if (loading) return <Skeleton active />
        else if (!director.id) return <Empty description="Director not found" />
        else {
            return (
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Gravatar email={director.email} size={120} rating="pg" default="monsterid" />
                    </div>
                    <div className="col-md-6">
                        <h4>{director.name}</h4>
                        <small><cite title="San Francisco, USA">{director.address.street}, {director.address.city} <i className="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <i className="fa fa-envelope" />{" "}<a href={`mailto:${director.email}`}>{director.email}</a>
                            <br />
                            <i className="glyphicon glyphicon-gift" />June 02, 1988</p>
                    </div>
                </div>
            )
        }
    }
}

export default ModalComp
