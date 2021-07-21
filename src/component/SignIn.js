import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "./CopyRight";

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    naver: {
        margin: theme.spacing(1, 0, 0),
        backgroundColor: "#1EC800"
    },
    kakao: {
        margin: theme.spacing(1, 0, 0),
        backgroundColor: "#FEE500"
    },
    google: {
        margin: theme.spacing(1, 0, 0),
        backgroundColor: "#FFFFFF"
    },

})

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snsCollection: [
                {
                    key: "naver",
                    name: "네이버"
                },
                {
                    key: "kakao",
                    name: "카카오"
                },
                {
                    key: "google",
                    name: "구글"
                }
            ],
        }
        this.renderSns = this.renderSns.bind(this)
    }

    renderSns = (classes) => {
        return this.state.snsCollection.map(sns => {
            const className = classes[sns.key]
            return (
                <Grid
                    item
                    key={sns.key}
                >
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        className={className}
                    >
                        {sns.name} 로그인
                    </Button>
                </Grid>
            )
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인이 필요합니다.
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            로그인
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#sign-up" variant="body2">
                                    {"회원 가입"}
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link href="#forget-password" variant="body2">
                                    {"비밀번호를 잊으셨나요?"}
                                </Link>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                            <Grid item xs={12}>
                                {this.renderSns(classes)}
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default withStyles(styles)(SignIn)
