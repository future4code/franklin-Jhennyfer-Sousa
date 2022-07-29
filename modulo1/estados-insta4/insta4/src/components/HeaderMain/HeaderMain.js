import React from 'react'
import styled from 'styled-components'

const HeaderContainerM = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5px;

`

 function HeaderMain(props) {
	return <HeaderContainerM>
		<h1>INSTA LABENU</h1>
        <input type="text" placeholder='Busca' id="campoDeBusca"/>
	</HeaderContainerM>
}


export default HeaderMain;