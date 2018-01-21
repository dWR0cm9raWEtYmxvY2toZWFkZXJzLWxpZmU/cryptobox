

import React, { Component } from 'react'
import DrawerListModal from '../../components/drawer/drawerlist'
import { connect } from 'react-redux'

const selectCrypto = reddit =>{
    return({
	type: 'CRYPTO',
	reddit
    })
}


class DrawerList extends Component{

    render(){
	const { dispatch } = this.props
	const _selectCrypto = async type =>{
	    await dispatch(selectCrypto(type))
	}	
	return(
	    <DrawerListModal selectCrypto={_selectCrypto} />
	)
    }
}

const mapStateToProps = state =>({
    drawer : state.drawer
})

export default connect(mapStateToProps)(DrawerList)
