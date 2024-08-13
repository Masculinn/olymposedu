import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Table as NextUITable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  User,
  Pagination,
} from "@nextui-org/react";
import { ChevronDownIcon } from "../UI/icons/ChevronDownIcon";
import { SearchIcon } from "../UI/icons/SearchIcon";
import { capitalize } from "@/utils/capitalize";
import { useMediaQuery } from "react-responsive";
import { Trailed } from "../animated-components/Trailed";

const INITIAL_VISIBLE_COLUMNS = ["uni", "program", "type", "price"];

export const Table = (props) => {
  const { universities, columns, programs, headerProps } = props;
  const [isRes, setIsRes] = useState(null);

  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "program",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const hasSearchFilter = Boolean(filterValue);

  useEffect(() => {
    setIsRes(isResponsive);
  }, [isResponsive]);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredPrograms = [...programs];

    if (hasSearchFilter) {
      filteredPrograms = filteredPrograms.filter(
        (program) =>
          program.program.toLowerCase().includes(filterValue.toLowerCase()) ||
          program.uni.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredPrograms;
  }, [programs, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((program, columnKey) => {
    const cellVal = program[columnKey];

    switch (columnKey) {
      case "uni":
        const university = universities?.find(
          (val) => val.name === program?.uni
        );
        const avatarImg = university?.img || "/edu-logo.png";
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: avatarImg,
              alt: `Polonya'da üniversite okumak ${cellVal}`,
            }}
            description={"Varşova"}
            name={cellVal}
          />
        );
      case "type":
        const uniLanguages =
          universities?.find((val) => val.name === cellVal)?.data?.languages ||
          [];
        return (
          <div className="flex flex-col items-start">
            <p className="text-bold text-small capitalize">{cellVal}</p>
            <p className="text-bold text-tiny capitalize text-default-400 items-center justify-center flex gap-1">
              {uniLanguages.map((val, idx) => (
                <span key={idx}>{val}</span>
              ))}
            </p>
          </div>
        );

      default:
        return cellVal;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="'İngilizce Hazırlık' Yazmayı deneyin..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                  className="bg-blue-600 text-white"
                >
                  Özellik Seç
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Toplam {programs.length} Üniversite Programı
          </span>
          <label className="flex items-center text-default-400 text-small">
            Sayfa satır sayısı:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onRowsPerPageChange,
    programs.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    const selectedKeyArray = Array.from(selectedKeys);
    const selectedKey = selectedKeyArray.length ? selectedKeyArray[0] : null;
    const selectedProgram = selectedKey !== null ? programs[selectedKey] : null;

    return (
      <div className="py-2 px-2 mx-auto gap-8 lg:max-w-7xl flex justify-between items-center ">
        {/* {!isRes && (
          <span className="lg:w-[30%] w-[100%] text-small text-default-400">
            {selectedProgram && `${selectedProgram.program} seçildi`}
          </span>
        )} */}
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          className=""
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex max-w-[40%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Önceki
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Sonraki
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter, isRes]);

  return (
    <section className="lg:w-full lg:h-screen h-auto w-full items-center justify-center flex flex-col gap-2">
      <Trailed
        isOpen
        wrapperStyle="lg:w-full text-start lg:px-0  lg:max-w-7xl max-w-md lg:mx-0 mx-auto h-auto flex justify-start items-start flex-col gap-2 px-4 mt-12 mb-2"
      >
        {headerProps?.map((val, idx) => (
          <React.Fragment key={idx}>{val}</React.Fragment>
        ))}
      </Trailed>
      <NextUITable
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
        className="lg:max-w-7xl lg:px-0 px-4 my-8 lg:my-4"
        selectedKeys={selectedKeys}
        selectionMode="single"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={(keys) => setSelectedKeys(new Set(keys))}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"Aradığınız program bulunamadı."}
          items={sortedItems}
        >
          {(program) => (
            <TableRow key={program.uid} className="cursor-pointer">
              {(columnKey) => (
                <TableCell>{renderCell(program, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </NextUITable>
    </section>
  );
};
