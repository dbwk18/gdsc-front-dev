import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import incomeData from '../../../data/BudgetIncomeToyData.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const IncomeTable = ({ addRow }) => {
  const [mergedData, setMergedData] = useState(incomeData);

  useEffect(() => {
    // todo: incomeData -> api get
    if (addRow.length > 0) {
      setMergedData(
        incomeData.map(dict => {
          if (dict.fund_source === addRow[0].fund_source) {
            dict.items.push(...addRow[0].items);
          }
          return dict;
        }),
      );
    }
  }, [addRow]);

  return (
    <TableContainer sx={{ maxHeight: 600, overflow: 'scroll' }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell fontType={TextType.BOLD} text={'재원'} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산분류'} />
            <StyledTableCell fontType={TextType.BOLD} text={'항목'} />
            <StyledTableCell fontType={TextType.BOLD} text={'코드'} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산'} />
            <StyledTableCell fontType={TextType.BOLD} text={'결산'} />
            <StyledTableCell fontType={TextType.BOLD} text={'집행률'} />
            <StyledTableCell fontType={TextType.BOLD} text={'비고'} />
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {mergedData.수입.map(
              fundSource =>
                fundSource.items.length !== 0 && (
                  <>
                    <TableRow>
                      <TableCell
                        rowSpan={
                          fundSource.items.reduce(
                            (accumulator, currentValue) => accumulator + currentValue.items.length + 1,
                            0,
                          ) + 2
                        }
                      >
                        {fundSource.재원}
                      </TableCell>
                    </TableRow>
                    {fundSource.items.map(item => (
                      <>
                        <TableRow>
                          <TableCell rowSpan={item.items.length + 1}>{item.예산분류}</TableCell>
                        </TableRow>
                        {item.items.map(subitem => (
                          <TableRow>
                            <StyledTableCell size={10} text={subitem.항목} />
                            <StyledTableCell size={13} text={subitem.코드} />
                            <StyledTableCell size={13} text={`₩${subitem.예산}`} />
                            <StyledTableCell size={13} text={`₩${subitem.결산}`} />
                            <StyledTableCell size={13} text={`${subitem.비율}%`} />
                            <StyledTableCell size={13} text={subitem.비고} />
                          </TableRow>
                        ))}
                      </>
                    ))}
                    <TableRow>
                      <StyledTableCell
                        size={10}
                        fontType={TextType.BOLD}
                        text={'계'}
                        colSpan={3}
                        backgroundColor={Colors.BLACK08}
                      />
                      <StyledTableCell
                        size={13}
                        fontType={TextType.BOLD}
                        text={`₩${fundSource.수입소계.예산}`}
                        backgroundColor={Colors.BLACK08}
                      />
                      <StyledTableCell
                        size={13}
                        fontType={TextType.BOLD}
                        text={`₩${fundSource.수입소계.결산}`}
                        backgroundColor={Colors.BLACK08}
                      />
                      <StyledTableCell
                        size={13}
                        fontType={TextType.BOLD}
                        text={`${fundSource.수입소계.비율}%`}
                        backgroundColor={Colors.BLACK08}
                      />
                      <TableCell sx={{ backgroundColor: Colors.BLACK08 }} />
                    </TableRow>
                  </>
                ),
            )}
          </>
        </TableBody>
        <TableRow>
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            text={'총계'}
            color={Colors.BLACK100}
            colSpan={4}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={`₩${mergedData.수입총계.예산}`}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={`₩${mergedData.수입총계.결산}`}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={`${mergedData.수입총계.비율}%`}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          {/* <TableCell sx={{ backgroundColor: Colors.BLUE_DEEP }} /> */}
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default IncomeTable;
