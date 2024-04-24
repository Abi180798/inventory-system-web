import { Fragment, useEffect, useState } from 'react';
// import { Table as BTable } from 'reactstrap';
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import {
  ColumnDef,
  ColumnSort,
  Row,
  SortingState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Updater,
} from '@tanstack/react-table';

// import Select from '@/components/Select';
// import Search from '@/components/Search';
// import Iconify from '@/components/Iconify';
// import EmptyData from '@/components/EmptyData';

// import Pagination from './Pagination';
// import styles from './Table.module.css';
// import { PagingParams } from '@/models';
// import { orderByPayloadWithDot, showEntryPage } from '@/helpers';
import TablePagination from '@mui/material/TablePagination'


type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
  filter?: any;
  handleChangePage?: (event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number) => void;
  handleChangeRowsPerPage?: (props: any) => void;
  // handleFilter?: (props: any) => void;
  handleSelection?: (selectedRows: any) => void;
  totalCount?: number;
  defSort?: ColumnSort;
  tableName?: string;
  hideSearch?: boolean;
  isEmptyHide?: boolean;
  hideColumns?: Record<string, boolean>;
};

export default function TableData<TData extends object>({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
  filter,
  handleChangePage,
  handleChangeRowsPerPage,
  // handleFilter,
  handleSelection,
  totalCount,
  defSort,
  tableName,
  hideSearch,
  isEmptyHide,
  hideColumns,
}: TableProps<TData>) {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>(defSort ? [defSort] : []);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [loading, setLoading] = useState(false);

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      rowSelection,
      sorting,
      expanded,
      columnVisibility: hideColumns && hideColumns,
    },
    enableRowSelection: true,
    manualPagination: true,
    manualSorting: filter ? true : false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: process.env.NODE_ENV !== 'production',
  });

  // const handlePageClick = (selectedItem: { selected: number }) => {
  //   if (handleFilter && filter) {
  //     handleFilter({ ...filter, PageNumber: selectedItem.selected + 1 });
  //     setExpanded({});
  //     setRowSelection({});
  //   }
  // };
  // const handleSort = () => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 1000);

  //   if (handleFilter && filter) {
  //     const orderByDot = orderByPayloadWithDot(sorting[0] && sorting[0].id);
  //     handleFilter({
  //       ...filter,
  //       OrderBy: sorting[0]
  //         ? sorting[0].id === 'isActive'
  //           ? `${sorting[0].id} ${sorting[0].desc ? 'asc' : 'desc'}`
  //           : orderByDot
  //           ? `${orderByDot} ${sorting[0].desc ? 'desc' : 'asc'}`
  //           : `${sorting[0].id} ${sorting[0].desc ? 'desc' : 'asc'}`
  //         : '',
  //     });
  //     setExpanded({});
  //   }
  // };

  // useEffect(() => {
  //   if (sorting[0]) handleSort();
  // }, [sorting]);

  useEffect(() => {
    if (handleSelection)
      handleSelection(
        Object.keys(rowSelection).map((r) => data?.find((f, i: number) => i === Number(r)))
      );
  }, [rowSelection]);
  return (
    <div style={{ overflow: 'auto' }}
    // className={styles.container}
    >
      {/* {filter && handleFilter && !hideSearch && (
        <div className={styles.searchBar}>
          <div className={styles.pageSizeContainer}>
            {data.length > 0 && (
              <>
                <p className={styles.pageSizeText}>Show</p>
                <Select
                  options={[10, 20, 50, 100]}
                  onChange={(e) => {
                    if (handleFilter && filter) {
                      handleFilter({
                        ...filter,
                        PageSize: parseInt(e.target.value),
                        PageNumber: 1,
                      });
                      setExpanded({});
                    }
                  }}
                  value={filter.PageSize}
                />
              </>
            )}
          </div>
          {!hideSearch && (
            <Search
              onChange={(e) => {
                if (handleFilter && filter) {
                  handleFilter({ ...filter, Search: e.target.value, PageNumber: 1 });
                  setExpanded({});
                }
              }}
            />
          )}
        </div>
      )} */}
      {data.length > 0 ? (
        <TableContainer sx={{ maxHeight: 440 }}
        // className={styles.tableContainer} 
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        // className={`p-xs ${styles.th}`}
                        style={{
                          width: header.getSize() !== 150 ? header.getSize() : undefined,
                        }}
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              style: {
                                cursor: header.column.getCanSort() ? 'pointer' : 'default',
                                userSelect: header.column.getCanSort() ? 'none' : 'inherit',
                                display: 'flex',
                                justifyContent: header.id === 'Action' ? 'center' : 'space-between',
                                alignItems: 'center',
                                margin: 5,
                                whiteSpace: 'nowrap',
                                width: header.getSize() !== 150 ? header.getSize() : undefined,
                              },
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              // asc: <Iconify icon="eva:chevron-up-outline" width={16} />,
                              // desc: <Iconify icon="eva:chevron-down-outline" width={16} />,
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <Fragment key={row.id}>
                    <tr>
                      {row.getVisibleCells().map((cell) => {
                        return loading ? (
                          <td key={cell.id}
                          // className={`p-xs ${styles.td}`}
                          >
                            <div
                            // className={`${styles.skeleton} ${styles.skeletonText}`} 
                            />
                          </td>
                        ) : (
                          <td key={cell.id}
                            style={{ padding: 5 }}
                          // className={`p-xs ${styles.td}`}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        );
                      })}
                    </tr>
                    {row.getIsExpanded() && (
                      <tr>
                        <td colSpan={row.getVisibleCells().length} style={{ padding: 0 }}>
                          {renderSubComponent ? renderSubComponent({ row }) : null}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        isEmptyHide ? '-' : <Box>
          <Box className='content-center'>
            <Box sx={{ height: 200, p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
                Data Not Found ⚠️
              </Typography>
              <Typography variant='body2'>We couldn&prime;t find the data you are looking for.</Typography>
            </Box>
          </Box>
        </Box>
        // <EmptyData title={tableName || ''} />
      )}
      {filter && data.length > 0 && (
        // <div className={styles.pagination}>
        //   <p className={`p-xs ${styles.paginationCaption}`}>
        //     {showEntryPage(filter.PageNumber, filter.PageSize, totalCount || 0)}
        //   </p>
        //   <Pagination
        //     totalPage={(totalCount || 0) / filter.PageSize}
        //     currentPage={filter.PageNumber - 1}
        //     handlePageClick={handlePageClick}
        //   />
        // </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={totalCount || 0}
          rowsPerPage={filter.limit}
          page={filter.page - 1}
          // @ts-ignore
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}
