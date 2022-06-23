import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import { getTracts } from "../utils/api";
import { Button, CircularProgress } from "@mui/material";

export default function Home() {
  const { isLoading, error, data } = useQuery<any, Error>("tracts", getTracts);

  if (isLoading) return <CircularProgress />;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>fid</TableCell>
            <TableCell>Options</TableCell>
            <TableCell align="right">ALAND</TableCell>
            <TableCell align="right">AWATER</TableCell>
            <TableCell align="right">COUNTYFP</TableCell>
            <TableCell align="right">FUNCSTAT</TableCell>
            <TableCell align="right">GEOID</TableCell>
            <TableCell align="right">INTPTLAT</TableCell>
            <TableCell align="right">INTPTLON</TableCell>
            <TableCell align="right">MTFCC</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">NAMELSAD</TableCell>
            <TableCell align="right">STATEFP</TableCell>
            <TableCell align="right">TRACTCE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data!.objects.map((row: any) => (
            <TableRow
              key={row.NAME}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fid}
              </TableCell>
              <TableCell>
                <Button href={`/tracts/${row.fid}`}>See</Button>
              </TableCell>
              <TableCell align="right">{row.ALAND}</TableCell>
              <TableCell align="right">{row.AWATER}</TableCell>
              <TableCell align="right">{row.COUNTYFP}</TableCell>
              <TableCell align="right">{row.FUNCSTAT}</TableCell>
              <TableCell align="right">{row.GEOID}</TableCell>
              <TableCell align="right">{row.INTPTLAT}</TableCell>
              <TableCell align="right">{row.INTPTLON}</TableCell>
              <TableCell align="right">{row.MTFCC}</TableCell>
              <TableCell align="right">{row.NAME}</TableCell>
              <TableCell align="right">{row.NAMELSAD}</TableCell>
              <TableCell align="right">{row.STATEFP}</TableCell>
              <TableCell align="right">{row.TRACTCE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
