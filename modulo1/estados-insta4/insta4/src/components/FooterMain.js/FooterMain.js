import React from 'react'
import styled from 'styled-components'

const FooterContainerM = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

`
const Social = styled.div`
    text-align:center;
    padding-bottom:25px;

`
const Lista = styled.ul`
    padding:0;
    list-style:none;
    text-align:center;
    font-size:18px;
    line-height:1.6;
    margin-bottom:0;
`
const ItensLista = styled.li`
    padding:0 10px;
`
const CopyRight = styled.p`
    margin-top:14px;
    margin-bottom:0;
    font-size:13px;
    opacity:0.6;
`

 function FooterMain(props) {
	return <FooterContainerM>
	
            <Social><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></Social>
            <Lista>
                <ItensLista><a href="#">Services</a></ItensLista>
                <ItensLista><a href="#">About</a></ItensLista>
                <ItensLista><a href="#">Privacy Policy</a></ItensLista>
            </Lista>
            <CopyRight>Jhennyfer Sousa © 2022</CopyRight>
       
	</FooterContainerM>
}


export default FooterMain;