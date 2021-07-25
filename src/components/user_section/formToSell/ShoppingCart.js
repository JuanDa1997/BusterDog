import React from 'react'
import imgDelete from '../../../../assets/delete.png'

export const ShoppingCart = (props) => {
    return (
        <div className="containerShoppingCart">
            <div className="showDataBase">
            <table class="table table-dark" >
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Value</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Description</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                {/* {props.send.map((link) =>(

                    <tr key={link.id}>
                        <th scope="row">1</th>
                        <td>{link.Institution_headquarter}</td>
                        <td>{link.name}</td>
                        <td>{link.acronym}</td>
                        <td>{link.city}</td>
                        <td>{link.Country}</td>
                        <td>{link.Type}</td>
                        <td className='urls'>{link.theLinks}</td>
                        <td><img src={imgDelete} alt="delete" onClick={() => handleDelete(link.id)} /></td>
                    </tr>
                    ))} */}

                </tbody>
            </table>
        </div>
        </div>
    )
}


