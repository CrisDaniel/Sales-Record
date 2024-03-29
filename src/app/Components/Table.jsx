"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#212e36",
    borderColor: "#2a3b47",
    color: "#c8cdd0",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  motiv,
  subMotiv,
  comision
) {
  return { name, calories, fat, carbs, protein, motiv, subMotiv, comision };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "Olvidado", "Reunion", 10),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    37,
    4.3,
    "Olvidado",
    "Reunion",
    10
  ),
  createData("Eclair", 262, 16.0, 24, 6.0, "Olvidado", "Reunion", 10),
  createData("Cupcake", 305, 3.7, 67, 4.3, "Olvidado", "Reunion", 10),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "Olvidado", "Reunion", 10),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: "2.5rem", backgroundColor: "#192229" }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDatePicker", "DesktopDatePicker"]}>
          <DemoItem label="Mobile variant">
            <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>FECHA</StyledTableCell>
            <StyledTableCell align="center">CRM</StyledTableCell>
            <StyledTableCell align="center">SERVICIO</StyledTableCell>
            <StyledTableCell align="center">NUMERO</StyledTableCell>
            <StyledTableCell align="center">ESTADO</StyledTableCell>
            <StyledTableCell align="center">MOTIVO</StyledTableCell>
            <StyledTableCell align="center">SUB-MOTIVO</StyledTableCell>
            <StyledTableCell align="center">COMISION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.motiv}</StyledTableCell>
              <StyledTableCell align="center">{row.subMotiv}</StyledTableCell>
              <StyledTableCell align="center">{row.comision}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
