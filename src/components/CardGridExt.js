import React from 'react';
import Card from './GridLayoutForCard.js'
import MoreDeets from './SolarSelling.js';

export default function CardGridExt() {
    return (
        <div className='container-fluid d-flex.justify-content-center'>
            <div className="row">
            <div className="col-md-4">
             <MoreDeets />
            </div>
            <div className="col-md-4">
            <MoreDeets />
            </div>
            <div className="col-md-4">
            <MoreDeets />
            </div>
            </div>
        </div>
    )
}
