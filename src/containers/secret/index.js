import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid'
import { connect }from 'react-redux'
import Hashes from 'jshashes'

const styles = theme => ({
    container: {
	display: 'flex',
	flexWrap: 'wrap',
    },
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit,
	width: 200,
    },
    menu: {
	width: 200,
    },
});



class TextFields extends React.Component {
    state = {
	hash:'123'
    };

    render() {
	const { classes, drawer, dispatch } = this.props;
	const { type, hash } = drawer
	const handleChange = name => event => {
	    const HASH = new Hashes[type]
	    const ihash = reddit =>{
		let ohash = HASH.hex(reddit)
		return({
		    type:'HASH',
		    ohash
		})
	    }
	    dispatch(ihash(event.target.value))
	};
	return (
	    <form className={classes.container} noValidate autoComplete="off">
		<Grid container>
		    <Grid item xs={12}>
			<TextField
			    id="with-placeholder"
			    label="prehash"
			    placeholder="input your words"
			    className={classes.textField}
			onChange={handleChange()}
			    margin="normal"
			/>
		    </Grid>
		    <Grid item xs={12}>
			<TextField
			id="textarea"
			value = {hash}
			multiline
			disabled	
			className={classes.textField}
			margin="normal"
			/>
		    </Grid>
		</Grid>
	    </form>
	);
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
    drawer: state.drawer
})

export default connect(mapStateToProps)(withStyles(styles)(TextFields))
