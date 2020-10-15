import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { HeaderWrapper, Header, Container } from "../common/components/commonCardStyled";
import CommonCard from "../common/components/commonCard";

const RetrospectiveContainer = () => {

    const [state, setState] = useState({
        card1: [{ value: "" }],
        card2: [{ value: "" }],
        card3: [{ value: "" }]
    })


    let drodpownOptions = [
        { title: "All sections", display: false },
        { title: "What went well", data: state.card1, cardColor: "#f5cdab", display: true },
        { title: "What can be improved", data: state.card2, cardColor: "#b8ffb8", display: true },
        { title: "Start doing", data: state.card3, cardColor: "#d2d2ef", display: true }
    ]

    const [dropdownArr, setDropdownArr] = useState(drodpownOptions)
    const [intialSortVaue, setInitialSortValue] = useState(drodpownOptions[0].title)
    const onAddClick = (title) => {
        switch (title) {
            case 'What went well':
                return setState({ ...state, card1: [...state.card1, { value: "" }] });
            case "What can be improved":
                return setState({ ...state, card2: [...state.card2, { value: "" }] })
            case 'Start doing':
                return setState({ ...state, card3: [...state.card3, { value: "" }] })
        }
    }
    useEffect(() => {
        setDropdownArr(drodpownOptions)
    }, [state])
    const onTextChange = (e, title) => {
        switch (title) {
            case 'What went well':
                state.card1[e.target.id] = { value: e.target.value };
                return setState({ ...state });
            case "What can be improved":
                state.card2[e.target.id] = { value: e.target.value };
                return setState({ ...state });
            case "Start doing":
                state.card3[e.target.id] = { value: e.target.value };
                return setState({ ...state });
        }

    }


    const onSortChange = (e) => {
        setInitialSortValue(e.value);

        const dropOptions = drodpownOptions.filter((option) => {
            return option.title === e.target.value
        })
        if (e.value !== "All sections") {
            setDropdownArr(dropOptions);
        } else {
            setDropdownArr(drodpownOptions);
        }

    }
    return (
        <Container>
            Select Sort:
            <Dropdown
                style={{ margin: "15px" }}
                optionLabel="title"
                value={intialSortVaue}
                options={drodpownOptions}
                onChange={onSortChange}
                optionValue="title"
                placeholder={intialSortVaue}
            />
            <HeaderWrapper>
                <Header mainHeader>Retrospective</Header>
            </HeaderWrapper>
            <div className="p-grid">
                {dropdownArr && dropdownArr.map((item, index) => {
                    if (item.display) {
                        return (<div className="p-col-6">
                            <CommonCard
                                onTextChange={(e) => onTextChange(e, item.title)}
                                title={item.title}
                                data={item.data}
                                onAddClick={() => onAddClick(item.title)}
                                cardColor={item.cardColor} />
                        </div>)
                    }
                })}
            </div>
        </Container>
    );
}

export default RetrospectiveContainer;
