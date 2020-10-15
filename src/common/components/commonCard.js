import React, { useState } from 'react';

import { Icon, Header, HeaderWrapper, CardMain, InputTextareaStyled } from "./commonCardStyled";

const CommonCard = (props) => {

    const { title, onAddClick, data, cardColor, onTextChange } = props;

    const [textValue, setTextValue] = useState('');


    return (
        <>
            <HeaderWrapper inline>
                <Header>{title}</Header><Icon onClick={onAddClick} className="pi pi-plus-circle" />
            </HeaderWrapper>
            <CardMain>
                {data
                    && data.map((item, index) => (
                        <InputTextareaStyled cardColor={cardColor} key={index} rows={7} id={index} cols={30} value={item.value} onChange={onTextChange} autoResize={true} />
                    ))}

            </CardMain>

        </>
    );
}

export default CommonCard;
