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
    variant?: 'solid' | 'light' | 'flat' | 'faded' | 'shadow' | 'bordered' | 'faded-shadow' | 'flat-shadow';
    className?: string;
  }
  
  type TableAction = {
    label: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    tip?: string;
  }
  
  type TableColumn = {
    key: string;
    label: string;
    render?: (value: any) => React.ReactNode;
  };
  
  type DataGridProps = {
    title: string;
    description?: string;
    isLoading: boolean;
    error?: string;
    update?: () => void | null;
    data: any[];
    columns: TableColumn[];
    filters: Record<string, any>;
    filtersHandler: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    totalPages: number;
    className?: string;
    headerActions?: HeaderAction[];
    actions: TableAction[];
  };
  export const DataGrid  =  ({
    title,
    description,
    isLoading,
    update,
    data,
    columns,
    filters,
    filtersHandler,
    totalPages = 1,
    headerActions=[],
    actions=[],
    ...props
  }: DataGridProps) => {
  
    const getCells = (row) => {
      return columns.map(column => (
        <TableCell key={column.key}>{row[column.key]}</TableCell>
      ))
    }
    const getRows = (data) => {
      let rows = []
      for (const row of data) {
        let cells = getCells(row)
        if (actions.length > 0) {
          cells.push(
            <TableCell key={`action-${row.id}`}>
              {actions.map(action => (
                <Tooltip
                content={action.tip}
              isDisabled={!action.tip}
                >
                <Button key={action.label} 
                variant="light"
                size="sm"
                color="primary"
                startContent={action.startContent}
                icon={action.icon}
                onPress={action.onClick}></Button>
                </Tooltip>
              ))}
  
            </TableCell>
          )
        }
        rows.push(
          <TableRow key={row.id}>
            {cells}
          </TableRow>
        )
      }
  
      return rows
    }
  
    return (
      <Table
        {...props}
        className={cn("w-full", props.className)}
        topContent={
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
                  isLoading={action.isLoading}
                  className={cn(action.className)}
                  size="sm"
                >
                  {action.label}
                </Button> 
              ))}
              {update && (
                <Button
                  onClick={update}
                  variant="light"
                  size="sm"
                  color="primary"
                  startContent={<ArrowPathIcon className="w-5" />}
                ></Button>
              )}
            </div>
          </div>
        }
  
        bottomContent={
          <div className="flex justify-center">
            <Pagination
            showControls
            color="primary"
            isCompact
            total={totalPages}
            page={filters.page}
            onChange={(page) => {
              filtersHandler({
                ...filters,
                page,
              });
            }}
            />
          </div>
        }
      >
        <TableHeader>
          <>
          {columns.map(column => (
            
            <TableColumn key={column.key}>{column.label}</TableColumn>
      
          ))}
            {actions.length > 0 && <TableColumn>{""}</TableColumn>}
            </> 
        </TableHeader>
        <TableBody>
          {getRows(data)}
        </TableBody>
      </Table>
    );
  };
  
  
  