import React, { Component } from 'react';

import { NavMenu } from '../Navbar/NavMenu'
import { FriendsChange } from './FriendsChange'
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import { TableFooter } from '@material-ui/core';


class Friends extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allInfo: [],
            follow: [],
            page: 0,
            rowsPerPage: 5
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
    }

    componentDidMount() {
        fetch('https://localhost:44314/api/Users')
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    allInfo: data,
                    follow: data.map((obj) => { prevState.follow.push("false") })
                }))
            })
    }

    handleButton = (usernameFollow, currentUsername) => {
        console.log("hahahaha: " + currentUsername);
        fetch('https://localhost:44314/api/Users/UserName/' + usernameFollow + "/" + currentUsername);
        this.setState(prevState => ({
            follow: !prevState.follow
        }))
        
        console.log(this.state)
    }

    render() {

        const { allInfo, page, follow, rowsPerPage } = this.state

        const emptyRows = rowsPerPage - Math.min(rowsPerPage, allInfo.length - page * rowsPerPage);

    return (
        <div>
            <NavMenu />
            <div style={{ fontSize: 38, textAlign: "center", color: "white" }}>FRIENDS</div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold", fontSize: 24 }}>Users</TableCell>
                            <TableCell align="right" style={{ fontWeight:"bold", fontSize: 24 }}>Follow</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? allInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : allInfo
                        ).map((row) => (
                            <TableRow key={row.username}>
                                <TableCell component="th" scope="row">
                                    {row.username}
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" onClick={() => this.handleButton(row.username, this.props.location.state.username.username)} >
                                        {this.state.follow ? "FOLLOW": "UNFOLLOW"}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={allInfo.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
      </div>
    );
  }
}

export default Friends
