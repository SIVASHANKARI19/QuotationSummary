import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import TableHead from "@mui/material/TableHead";
import { useSelector } from "react-redux";

const QuotationSummary = () => {
  const count = useSelector((state) => state.units.count);
  const TotalAmt = useSelector((state) => state.units.totalAmt);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "380px",
        height: "62vh",
        bgcolor: "white",
        borderRadius: "4px",
        padding: "16px",
        backgroundColor: "#f5f7fa",
      }}
    >
      {/* Table for Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer>
          <Table size="small" aria-label="quotation details" padding="12px">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "10px",
                    color: "#98A0AC",
                    fontWeight: "500",
                    padding: "8px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  DESCRIPTION
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "10px",
                    color: "#98A0AC",
                    fontWeight: "500",
                    padding: "8px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  QTY
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "10px",
                    color: "#98A0AC",
                    fontWeight: "500",
                    padding: "8px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  AMOUNT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Total Amount Row */}
              <TableRow padding="12px">
                <TableCell
                  sx={{
                    fontSize: "12px",
                    color: "#4E5A6B",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Total Amount
                </TableCell>
                <TableCell
                  align="left" // Left align
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  {count}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  ${TotalAmt}
                </TableCell>
              </TableRow>

              {/* Total Discount Row */}
              <TableRow padding="12px">
                <TableCell
                  sx={{
                    fontSize: "12px",
                    color: "#4E5A6B",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Total Discount
                </TableCell>
                <TableCell
                  align="left" // Left align
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  10%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "12px",
                    borderBottom: "none",
                    padding: "8px 0",

                    fontFamily: "Nunito Sans",
                  }}
                >
                  $ 0
                </TableCell>
              </TableRow>
              {/* Divider below Total Discount */}
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: 0, height: "0.01px" }}>
                  <Divider height="0.5px" />
                </TableCell>
              </TableRow>

              {/* Total Refundable Row */}
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "12px",
                    color: "#4E5A6B",
                    borderBottom: "none",
                    padding: "12px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Total Refundable
                </TableCell>
                <TableCell
                  align="left" // Left align
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  0%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "12px",
                    color: "#1F2937",
                    borderBottom: "none",
                    padding: "12px 0",
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  $ 0
                </TableCell>
              </TableRow>
              {/* Divider below Total Refundable */}
              <TableRow>
                {/* <TableCell colSpan={3} sx={{ padding: 0,  }}>
                  <Divider />
                </TableCell> */}

                <TableCell colSpan={3} sx={{ padding: "0", height: "0.01px" }}>
                  <Divider height="0.5px" />
                </TableCell>
              </TableRow>

              {/* Total Tax Row */}
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "12px",
                    color: "#4E5A6B",
                    borderBottom: "none",
                    padding: "12px 0",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Total Tax
                </TableCell>
                <TableCell
                  align="left" // Left align
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  18%
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "12px",
                    color: "#1F2937",
                    borderBottom: "none",
                    padding: "8px 0",
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  $ 648.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: 0 }}>
                  <Divider height={"0.5px"} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        {/* Divider */}
        <Divider sx={{ marginY: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#1F2937",
            alignItems: "center",
            fontFamily: "Nunito Sans", // Darker shade for the final amount
          }}
        >
          <Box>Quote Amount</Box>
          <Box>$ {TotalAmt + 648}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotationSummary;
