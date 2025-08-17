import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { ArrowPathIcon } from '@heroicons/react/16/solid';
import { Pagination, Tooltip } from '@heroui/react';
import { cn } from '@heroui/react';

type HeaderAction = {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  variant?: 'solid' | 'light' | 'flat' | 'faded' | 'shadow' | 'bordered' | 'ghost';
  className?: string;
};

type TableAction<T = any> = {
  label: string;
  onClick: (row: T) => void;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  tip?: string;
  
};

type TableColumnType = {
  key: string;
  label: string;
  render?: (value: any) => React.ReactNode;
};

type DataGridProps<T = any> = {
  title: string;
  description?: string;
  isLoading: boolean;
  error?: string;
  update?: () => void | null;
  data: T[];
  columns: TableColumnType[];
  filters: Record<string, any>;
  filtersHandler: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  totalPages: number;
  className?: string;
  headerActions?: HeaderAction[];
  actions: TableAction<T>[];
  filterContent?: React.ReactNode;
  topContent?: React.ReactNode;
  paginate?: boolean;
};
export const DataGrid = <T = any,>({
  title,
  description,
  isLoading,
  update,
  data,
  columns,
  filters={},
  filterContent,
  filtersHandler,
  totalPages = 1,
  headerActions = [],
  actions = [],
  topContent,
  paginate=true,
  ...props
}: DataGridProps<T>) => {

  const renderCell = (column: TableColumnType, row: T) => {    
    
    if (column.render) {
      return column.render(row);
    }
    return (row as any)[column.key]; 
  };
  const getCells = (row: T) => {
    return columns.map(column => (
      <TableCell key={column.key}>{renderCell(column, row)}</TableCell>
    ));
  };
  const getRows = (data: T[]) => {
    let rows = [];
    for (const row of data) {
      let cells = getCells(row);
      if (actions.length > 0) {
        cells.push(
          <TableCell key={`action-${(row as any).id}`}>
            {actions.map(action => (
              <Tooltip content={action.tip} isDisabled={!action.tip}>
                <Button
                  
                  key={action.label}
                  variant="light"
                  size="sm"
                  color={action.color}
                  style={{ width: '40px', minWidth: '40px' }}
                  startContent={action.startContent}
                  onPress={() => action.onClick(row)}
                ></Button>
              </Tooltip>
            ))}
          </TableCell>,
        );
      }
      rows.push(<TableRow key={(row as any).id}>{cells}</TableRow>);
    }

    return rows;
  };

  

  return (
    <Table
      {...props}
      className={cn('w-full', props.className)}
      topContent={
        <>
        <div className="flex items-center justify-between">

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{title}</h2>
              {isLoading && <Spinner size="sm" />}
            </div>
            {description && <p className="text-sm text-gray-500">{description}</p>}
          </div>

          <div>
            {headerActions?.map(action => (
              <Button
                key={action.label}
                onPress={action.onClick}
                variant={action.variant}
                color={action.color}
                startContent={action.startContent}
                endContent={action.endContent}
                isDisabled={action.isDisabled}
                isLoading={action.isLoading || false}
                className={cn(action.className)}
                size="sm"
              >
                {action.label}
              </Button>
            ))}
            {update && (
              <Button
                onPress={() => update?.()}
                variant="light"
                size="sm"
                color="primary"
                startContent={<ArrowPathIcon className="w-5" />}
              ></Button>
            )}
          </div>
        </div>
        {topContent && (
          <div>
            {topContent}
          </div>
        )}
        <div
        className='flex items-center justify-between gap-2'

        >
          
          {filterContent}
        </div>
        </>
      }
      bottomContent={
        paginate && (
        <div className="flex justify-center">
          <Pagination
            showControls
            color="primary"
            isCompact
            total={totalPages}
            page={filters['page']}
            onChange={page => {
              filtersHandler({
                ...filters,
                page,
              });
            }}
          />
        </div>
      )}
    >
      <TableHeader>
        <>
          {columns.map(column => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
          {actions.length > 0 && (
            <TableColumn style={{ width: `${actions.length * 60}px` }}>{''}</TableColumn>
          )}
        </>
      </TableHeader>
      <TableBody>{getRows(data)}</TableBody>
    </Table>
  );
};
