import useColId from './useColId';
import useTable from './useTable';
import { Col } from '../types';
import { TableMeta } from '../contexts/Table';

export default function useTableCol(
  offset = 0
): [Col | null, (col: Col) => any] {
  const [table, setTable] = useTable();
  let columnId = useColId();
  if (typeof columnId !== 'undefined') columnId += offset;
  const tableCol =
    typeof columnId !== 'undefined' ? table?.cols[columnId] || null : null;

  function setTableCol(col: Col) {
    setTable((table: TableMeta | null) => {
      const newTable: TableMeta = { ...table, cols: [...(table?.cols || [])] };
      if (typeof columnId !== 'undefined') {
        if (!(newTable.cols.length > columnId)) {
          newTable.cols = Array.from(new Array<Col>(columnId + 1)).map(
            (_value: any, i: number) => {
              if (newTable.cols[i]) return newTable.cols[i];
              return { width: 0, id: columnId || 0 };
            }
          );
        }
        newTable.cols[columnId] = col;
      }
      return newTable;
    });
  }

  return [tableCol, setTableCol];
}
