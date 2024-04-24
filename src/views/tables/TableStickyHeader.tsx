// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

// ** Icons Imports
import File from 'mdi-material-ui/File'
import Pencil from 'mdi-material-ui/Pencil'
import Delete from 'mdi-material-ui/Delete'
import { useRouter } from 'next/router'

export interface Column {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columnsDefault: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  }
]

interface Data {
  name: string
  code: string
  size: number
  density: number
  population: number
}

function createData(name: string, code: string, population: number, size: number): Data {
  const density = population / size

  return { name, code, population, size, density }
}

const rowsDefault = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

interface TableStickyHeaderProps {
  columns: readonly Column[]
  rows: any[]
  page: number
  count: number
  rowsPerPage: number
  isAction?: boolean,
  isViewFile?: boolean
  handleEdit?: (id: string) => void
  handleDelete?: (id: string) => void
  handleChangePage: (e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChangeRowsPerPage: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TableStickyHeader: React.FC<TableStickyHeaderProps> = ({
  columns, rows, page, count, rowsPerPage,
  isAction = true, isViewFile = false,
  handleEdit, handleDelete, handleChangeRowsPerPage, handleChangePage
}) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {(columns || columnsDefault).map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
              {isAction &&
                <TableCell>
                  Action
                </TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {(rows)
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {(columns || columnsDefault).map(column => {
                      const value = row[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                    {isAction &&
                      <TableCell>
                        <Box sx={{ display: 'flex' }}>
                          {isViewFile && row?.FileName_fake &&
                            <IconButton href={`https://sikd.arsip.unram.ac.id/FilesUploaded/${row?.NFileDir}/${row?.FileName_fake}`} target="_blank"
                              size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
                              <File />
                            </IconButton>
                          }
                          {handleEdit &&
                            <IconButton onClick={() => handleEdit(row?.NId)}
                              size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
                              <Pencil />
                            </IconButton>
                          }
                          {handleDelete &&
                            <IconButton onClick={() => handleDelete(row?.NId)} size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
                              <Delete />
                            </IconButton>
                          }
                        </Box>
                      </TableCell>
                    }
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={count || rowsDefault.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
