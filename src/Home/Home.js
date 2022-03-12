import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionHome, actionHomeCategory, actionShort, actionSearch } from '../Action/ActionHome';
import './Home.css';
import { Row } from "react-bootstrap";
import HomeAction from "../Redux/Reducer/Home/HomeAction";


import CardList from "../Component/CardList/CardList";
import Empty from "../Component/Empty/Empty";

const Home = () => {
    const dispatch = useDispatch();
    const [dataCategory, setDataCategory] = useState([]);
    const [value, setValue] = useState('all');
    const [dataShort, setDataShort] = useState([]);
    const { isLoading, dataHome, errorMessage } = useSelector((state) => state.Home)
    const [isShort, setIsShort] = useState();
    const [inputValue, setInputValue] = useState('');
    const [dataSearch, setDataSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const getDataCategory = async () => {
        let data = await actionHomeCategory();
        setDataCategory(data?.data);
    }

    const shortData = async (param) => {
        let data = await actionShort(param, value);

        if (!data?.success) {
            setDataShort([])
            return
        }
        setDataShort(data?.data?.recipes);
    }

    const search = async (e) => {
        setIsSearch(true);
        e.preventDefault();

        let data = await actionSearch(inputValue)
        if (!data?.success) {
            setDataSearch([])
            return
        }
        setDataSearch(data?.data?.recipes);
    }

    useEffect(() => {
        dispatch(actionHome())
        getDataCategory()
    }, []);

    const rendertShort = () => {
        return (
            <>
                {dataShort ? (
                    <Row xs={1} md={2} className="g-4">
                        {dataShort && dataShort.map((item, key) =>
                            <CardList Title={item.name} image={item.image} deskripsi={item.name} key={key} happy={item.nReactionLike} natural={item.nReactionNeutral} sad={item.nReactionDislike} keylist={key} />
                        )}
                    </Row>
                ) : (
                    <Empty />
                )}
            </>
        )
    }


    const renderFilter = () => {
        var dataAwalrender;
        if (isSearch) {
            dataAwalrender = dataSearch
        } else {
            dataAwalrender = dataHome?.data.recipes
        }

        console.log('datatt', dataAwalrender);
        if (value === 'all') {
            return (
                <>
                    {dataAwalrender && dataAwalrender.length != 0 ? (
                        <Row xs={1} md={2} className="g-4">
                            {dataAwalrender && dataAwalrender.map((item, key) =>
                                <CardList Title={item.name} image={item.image} deskripsi={item.name} key={key} happy={item.nReactionLike} natural={item.nReactionNeutral} sad={item.nReactionDislike} keylist={key} />
                            )}

                        </Row>
                    ) : (
                        <Empty />
                    )}
                </>
            )
        } else {
            return (
                <>
                    {dataAwalrender && dataAwalrender.length != 0 ? (
                        <Row xs={1} md={2} className="g-4">
                            {dataAwalrender && dataAwalrender.filter(item => item.recipeCategoryId === value).map((item, key) =>
                                <CardList Title={item.name} image={item.image} deskripsi={item.name} key={key} happy={item.nReactionLike} natural={item.nReactionNeutral} sad={item.nReactionDislike} keylist={key} />
                            )}
                        </Row>
                    ) : (
                        <Empty />
                    )}
                </>
            )
        }

    }

    console.log('list category ', dataHome?.data);
    console.log('list view ', dataHome?.data.recipes);
    return (
        <>

            <nav className="navbar navbar-dashboard navbar-light sticky-top" styles="background-color: #ffffff;">
                <div className="navbar-container navbar-container-top">
                    <a className="navbar-brand" href="#">
                        <img src={require("../asset/images/header-logo.png")} alt="" className="d-inline-block align-text-top navbar-logo" data-cy="header-logo" />
                    </a>
                    <form className="search-bar d-flex" onSubmit={search}>
                        <input className="form-control search-input" type="search" placeholder="Cari Resep" name="searchRecipe" aria-label="Cari Resep" data-cy="header-input-search" onInput={(e) => setInputValue(e.target.value)} />
                        <button className="btn search-btn" type="submit" data-cy="header-button-search">Cari</button>
                    </form>
                    <button className="btn history" type="button" onClick={() => { }}><img src={require("../asset/images/header-button-history.png")} alt="" data-cy="header-button-history" /></button>
                </div>
                <div className="navbar-container-bottom">
                    <button className="btn filter-all" onClick={() => { setValue('all'); setIsSearch(false) }} data-cy="category-button-0">Semua</button>
                    {dataCategory && dataCategory.map((item, key) =>
                        <button className="btn" key={key} onClick={() => { setValue(item.id); setIsSearch(false) }} data-cy={"category-button-" + key + 1}>{item.name}</button>
                    )}
                </div>
            </nav>

            <div className="content-container container-fluid">
                <div className="sort-button">
                    <div className="urutkan-label">Urutkan:</div>
                    <button className="btn" onClick={() => { setIsShort(false) }} data-cy="button-sort-latest">Terbaru</button>
                    <button className="btn" onClick={() => { shortData('name_asc'); setIsShort(true); setIsSearch(false) }} data-cy="button-sort-az">Urutkan A-Z</button>
                    <button className="btn" onClick={() => { shortData('name_desc'); setIsShort(true); setIsSearch(false) }} data-cy="button-sort-za">Urutkan Z-A</button>
                    <button className="btn" onClick={() => { shortData('like_desc'); setIsShort(true); setIsSearch(false) }} data-cy="button-sort-favorite">Urutkan Dari Paling Disukai</button>
                </div>
                <div className="card-container recipe-container row">

                    {isShort ? (
                        rendertShort()
                    ) : (
                        renderFilter()
                    )}
                </div>

            </div>
        </>
    )
}

export default Home;