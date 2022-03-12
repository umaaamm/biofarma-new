import React from 'react';
import './Empty.css';
const Empty = () => (
    <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container margin-empty">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <img src={require("../../asset/images/list-image-empty.png")} data-cy="list-image-empty" />
                    <div className='font-empty' data-cy="list-text-empty">Oops! Resep tidak ditemukan.</div>
                </div>
            </div>
        </div>
    </div>
)

export default Empty;

