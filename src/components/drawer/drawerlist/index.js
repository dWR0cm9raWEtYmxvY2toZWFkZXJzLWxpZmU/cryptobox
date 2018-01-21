import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
    root: {
	width: '100%',
	maxWidth: 360,
	backgroundColor: theme.palette.background.paper,
    },
});

function SimpleList(props) {
    const { classes, selectCrypto } = props;
    
    return (
	<div className={classes.root}>
	    <List>
		<ListItem button onClick={()=>selectCrypto('SHA256')}><ListItemText primary="SHA256" /></ListItem>
		<ListItem button onClick={()=>selectCrypto('SHA512')}><ListItemText primary="SHA512" /></ListItem>
		<ListItem button onClick={()=>selectCrypto('RMD160')}><ListItemText primary="RMD160" /></ListItem>		
	    </List>
	</div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
