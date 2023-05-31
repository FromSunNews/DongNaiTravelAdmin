import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import React, { useCallback, useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";

export default function DataTable({
  data,
  columns,
  iscolumnfilter,
  islanguagefilter,
  iscolumnhidden,
  iscolumnfooter,
  className = "",
}) {
  const tableRef = useRef();

  const footerExits = () => {
    const tableExisted = tableRef.current;
    const footerExisted = tableExisted.querySelector("tfoot");

    // Check if footer already exists if exist then remove
    if (footerExisted) {
      $(footerExisted).remove();
    }
  };

  const footerCall = useCallback(() => {
    footerExits();
    const footerRow = document.createElement("tr");
    columns.forEach((column) => {
      const footerCell = document.createElement("th");
      const input = column.title;
      footerCell.append(input);
      footerRow.append(footerCell);
    });

    $(tableRef.current).append($("<tfoot>").append(footerRow));
  }, [columns]);
  const columnHidden = () => {
    if ($(tableRef.current).length) {
      if ($.fn.DataTable.isDataTable($(tableRef.current))) {
        // If it exists then destroy it first
        $(tableRef.current).DataTable().destroy();
      }
      const hiddentable = $(tableRef.current).DataTable({});
      $("a.toggle-vis").on("click", function (e) {
        e.preventDefault();
        const column = hiddentable.column($(this).attr("data-column"));
        column.visible(!column.visible());
      });
    }
  };

  const columnFilter = useCallback(() => {
    footerExits();

    const table = $(tableRef.current).DataTable();

    const footerRow = document.createElement("tr");
    columns.forEach((column) => {
      const footerCell = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.className = "form-control form-control-sm";
      input.placeholder = column.title;
      input.addEventListener("keyup", (event) => {
        const columnIndex = columns.findIndex((c) => c.title === column.title);
        table.columns(columnIndex).search(event.target.value).draw();
      });
      footerCell.append(input);
      footerRow.append(footerCell);
    });

    $(tableRef.current).append($("<tfoot>").append(footerRow));
  }, [columns]);

  const multiLanguage = () => {
    if ($(tableRef.current).length) {
      function languageSelect() {
        return Array.from(document.querySelector("#langSelector").options)
          .filter((option) => option.selected)
          .map((option) => option.getAttribute("data-path"));
      }
      function dataTableInit() {
        const langUrl = languageSelect();
        if (langUrl) {
          $(tableRef.current).DataTable({
            language: {
              url: langUrl,
            },
          });
        }
      }
      const langSelector = document.querySelector("#langSelector");

      if (langSelector) {
        langSelector.addEventListener("change", () => {
          $(tableRef.current).dataTable().fnDestroy();
          dataTableInit();
        });
      }
    }
  };

  useEffect(() => {
    if (tableRef.current) {
      const table = $(tableRef.current).DataTable({
        autoWidth: false,
        data: data,
        columns: columns,
        dom: '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
        destroy: true,

        initComplete: () => {
          // Footer
          if (iscolumnfooter) {
            footerCall();
          }
          // Column filter
          if (iscolumnfilter) {
            columnFilter();
          }
          // Column Hidden
          if (iscolumnhidden) {
            columnHidden();
          }
          // Multi language

          if (islanguagefilter) {
            multiLanguage();
          }
        },
      });

      return () => {
        table.destroy();
      };
    }
  }, [
    iscolumnfilter,
    iscolumnfooter,
    iscolumnhidden,
    islanguagefilter,
    columns,
    data,
    footerCall,
    columnFilter,
  ]);
  return (
    <>
      <table
        className={"table " + className}
        width="100%"
        ref={tableRef}
        iscolumnfilter={iscolumnfilter}
        islanguagefilter={islanguagefilter}
      ></table>
    </>
  );
}
