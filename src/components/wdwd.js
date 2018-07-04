import React from 'react ;
 import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import withTheme from '@material-ui/core/styles/withTheme';

const styles = {
    card: {
        heigth: '30%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        marginBottom: 16,
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
};

class SimpleCard extends React.Component {

    componentDidMount() {
        const projectTest = [
            {
                id: 1,
                title: 'gardiennage',
                deadline_project: '2017-08-19 12:17:55 -0400',
                deadline_application: '2017-08-19 12:17:55 -0400',
                description: 'je suis mort je veux mourir',
                state: 1,
                created_at: '2017-08-19 12:17:55 -0400',
                updated: '2017-08-19 12:17:55 -0400',
                profile_id: 42
            }
        ]
        this.setState({project: projectTest})

        // axios .get('http://localhost:8080/projets/showProjet/:detail')
        // .then((response) => { console.log('--response--', response.data.results)
        // this.setState({ project: response.data.results })
        // console.log('this.state.project ', this.state.project) }) .catch((err) => {
        // // <CardContent> <Typography variant="title" /> { console.log('caught it!',
        // err) } })
    }
        render() 
        {
            // {     this         .state         .project         .map(e => e.description) {
            //             // const infoProject = this.state.project.map(e =>
            // e.description)
            return (
                <div className="carte">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="title" gutterBottom>
                                Description du Projet
                            </Typography>

                            <Typography>
                                <p>
                                    Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis
                                    amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia
                                    Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis
                                    erubesceret patris.</p>
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary"></Typography>
                        </CardContent>

                    </Card>
                </div>

            );
        }
    }

    SimpleCard.propTypes = {
        classes: PropTypes.object.isRequired
    };
}

export default withStyles(styles)(SimpleCard)