import React from 'react'
import axios from 'axios'

export async function getServerSideProps(context) {

    const { name } = context.params
    
    const { data: { vehicle, error }} = await axios.get(`http://localhost:5000/api/v1/vehicle/${name}`)

    if(!vehicle) {
        return {
            redirect: {
                destination: '/starship',
                permanent: false,
            },
        }
    }

    return {
        props: { vehicle }
    }

}

const vehicle = ({ vehicle }) => {

    return (
        <div>
            {vehicle.name} / {vehicle.series}
        </div>
    )
}

export default vehicle
