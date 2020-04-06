import React, { Component } from 'react';
import { NavMenu } from './Navbar/NavMenu'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Friends extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allInfo: []
        }
    }

    render() {

        const { allInfo } = this.state

        fetch('https://localhost:44314/api/Users')
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    allInfo: data.map((obj) => { prevState.allInfo.push(obj) })
                })
            })

    return (
        <div>
            <NavMenu />
            <div style={{ fontSize: 38, textAlign: "center", color: "white" }}>FRIENDS</div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Users</TableCell>
                            <TableCell align="right">Follow</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allInfo.map((row) => (
                            <TableRow key={row.username}>
                                <TableCell component="th" scope="row">
                                    console.log(row.username, row) 
                                </TableCell>
                                <TableCell align="right">Follow?</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
      </div>
    );
  }
}

export default Friends
