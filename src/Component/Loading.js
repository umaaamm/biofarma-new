import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';


const Loading = ({ type = '', color='' }) => (
    <div className="Loading">
	<ReactLoading type='spinningBubbles' color='#EF5734' height={'10%'} width={'10%'} />

    </div>
);

export default Loading;