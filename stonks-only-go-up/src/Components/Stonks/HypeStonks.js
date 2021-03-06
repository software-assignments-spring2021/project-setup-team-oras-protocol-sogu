import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import StonkPreview from './StonkPreview'
import StonksHeader from './StonksHeader'
import Navbar from '../Navbar'
import './HypeStonks.css'
import { Authentication } from '../../AuthContext'

import MustBeSignedAction from "./MustBeSignedAction"
require('dotenv').config()

const HypeStonks = (props) => {

    const [data, setData] = useState([])
    const { authData } = useContext(Authentication)


    useEffect(() => {
        async function fetchData() {
            let response = await axios(`${process.env.REACT_APP_SERVER}/hype/stonks`)
            setData(response.data)
        }
        fetchData()

    }, [])

    console.log('you in hype')
    if (!authData.token) {
        return (
            <MustBeSignedAction {...props} />
        )
    } else {
        return (
            <div className="hype-div">
                <div className="hype-content">
                <h1 className="list-hype-view-header">Hype Stonks</h1>
                    <div id="table-wrapper">
                        <StonksHeader />
                        {data.map((item) => (
                            <StonkPreview key={item.symbol} details={item} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default HypeStonks