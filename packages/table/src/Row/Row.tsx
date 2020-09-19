import React, { ReactNode, useState, LegacyRef, forwardRef } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { NativeMethods } from 'react-native';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import ColumnContext from '../contexts/Column';
import RowContext, { RowMeta } from '../contexts/Row';
import usePulling from '../hooks/usePulling';
import { RowProps, DetailedHTMLRowProps, splitProps } from './rowProps';

const HTMLRow: StyledComponent<
  DetailedHTMLRowProps,
  RowProps,
  object
> = styled.tr(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const Row = forwardRef(
  (props: RowProps, rowRef: LegacyRef<NativeMethods | HTMLDivElement>) => {
    const [pulling] = usePulling();
    const { customRowProps, styledRowProps } = splitProps({ ...props });
    const [row, setRow] = useState<RowMeta | null>({
      colCount: (customRowProps?.children as any[])?.length || 0,
      cols: [],
      resizable: props.resizable
    });

    function renderCells() {
      let { children } = customRowProps;
      if (!Array.isArray(children)) children = [children];
      return ((children as unknown) as ReactNode[]).map(
        (tableCell: ReactNode, key: number) => (
          <ColumnContext.Provider value={{ id: key }} key={key}>
            {tableCell}
          </ColumnContext.Provider>
        )
      );
    }

    return (
      <HTMLRow
        ref={rowRef}
        borderWidth={styledRowProps.borderWidth || 0}
        overflow="hidden"
        {...((styledRowProps as unknown) as any)}
        verticalAlign="top"
        style={{
          ...(pulling ? { userSelect: 'none' } : {}),
          whiteSpace: 'nowrap'
        }}
      >
        <RowContext.Provider value={[row, setRow]}>
          {renderCells()}
        </RowContext.Provider>
      </HTMLRow>
    );
  }
);

Row.defaultProps = {
  borderStyle: 'solid'
};

export default Row;
