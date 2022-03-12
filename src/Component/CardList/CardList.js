import React from 'react';
import './CardList.css';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

const CardList = ({ image = '', Title = '', happy = '', sad = '', natural = '', deskripsi = '', keylist=0 }) => (
    <Card style={{ width: '256px', margin: '24px' }} data-cy={"list-item-" + keylist}>
        <Card.Img variant="top" src={image} className="image-size" />
        <Card.Body>
            <Card.Title className='font-card'>{Title}</Card.Title>
            <Card.Text className='font-card-des'>
                {deskripsi}
            </Card.Text>
            <div className='contain'>
                <div className='xxx' data-cy="list-item-like">
                    <img src={require("../../asset/images/Vector.png")} data-cy="header-logo" className='vector' />
                    <label>{happy}</label>
                </div>
                <div className='xxx' data-cy="list-item-neutral">
                    <img src={require("../../asset/images/Vector-kuning.png")} data-cy="header-logo" className='vector' />
                    <label>{natural}</label>
                </div>
                <div className='xxx' data-cy="list-item-dislike">
                    <img src={require("../../asset/images/Vector-merah.png")} data-cy="header-logo" className='vector' />
                    <label>{sad}</label>
                </div>
            </div>
        </Card.Body>
    </Card>
);

export default CardList;