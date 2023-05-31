import React,{ memo, Fragment } from "react";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import Datatable from "../../../components/DataTable";
import { Link } from "react-router-dom";

const TableData = memo(() => {
  const DataTableOptions = {
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Age" },
      { title: "Startdate" },
      { title: "Salary" },
    ],
    data: [
      ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
      [
        "Angelica Ramos",
        "Chief Executive Officer (CEO)",
        "London",
        "47",
        "2009/10/09",
        "$1,200,000",
      ],
      [
        "Ashton Cox",
        "Junior Technical Author",
        "San Francisco",
        "66",
        "2009/01/12",
        "$86,000",
      ],
      [
        "Bradley Greer",
        "Software Engineer",
        "London",
        "41",
        "2012/10/13",
        "$132,000",
      ],
      [
        "Brenden Wagner",
        "Software Engineer",
        "San Francisco",
        "28",
        "2011/06/07",
        "$206,850",
      ],
      [
        "Brielle Williamson",
        "Integration Specialist",
        "New York",
        "61",
        "2012/12/02",
        "$372,000",
      ],
      [
        "Bruno Nash",
        "Software Engineer",
        "London",
        "38",
        "2011/05/03",
        "$163,500",
      ],
      [
        "Caesar Vance",
        "Pre-Sales Support",
        "New York",
        "21",
        "2011/12/12",
        "$106,450",
      ],
      [
        "Cara Stevens",
        "Sales Assistant",
        "New York",
        "46",
        "2011/12/06",
        "$145,600",
      ],
      [
        "Cedric Kelly",
        "Senior Javascript Developer",
        "Edinburgh",
        "22",
        "2012/03/29",
        "$433,060",
      ],
    ],
  };
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Bootstrap Datatables</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Images in Bootstrap are made responsive with{" "}
                <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                <code>height: auto;</code> are applied to the image so that it
                scales with the parent element.
              </p>
              <div className="table-responsive">
                <Datatable
                  className="table-striped"
                  data={DataTableOptions.data}
                  columns={DataTableOptions.columns}
                  iscolumnfooter="bootstrap-table"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Column Hidden Datatable</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Images in Bootstrap are made responsive with{" "}
                <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                <code>height: auto;</code> are applied to the image so that it
                scales with the parent element.
              </p>
              <div className="mb-3">
                Toggle column:{" "}
                <Link
                  className="toggle-vis btn btn-outline-primary"
                  data-column="0"
                >
                  Name
                </Link>{" "}
                -{" "}
                <Link
                  className="toggle-vis btn btn-outline-primary"
                  data-column="1"
                >
                  Position
                </Link>{" "}
                -{" "}
                <Link
                  className="toggle-vis btn btn-outline-primary"
                  data-column="2"
                >
                  Office
                </Link>{" "}
                -{" "}
                <Link
                  className="toggle-vis btn btn-outline-primary"
                  data-column="3"
                >
                  Age
                </Link>{" "}
                -{" "}
                <Link
                  className="toggle-vis btn btn-outline-primary"
                  data-column="4"
                >
                  Start date
                </Link>{" "}
                -
                <Link
                  className="toggle-vis btn btn-outline-primary"
                  data-column="5"
                >
                  Salary
                </Link>
              </div>
              <div className="table-responsive">
                <Datatable
                  className="table-striped"
                  data={DataTableOptions.data}
                  columns={DataTableOptions.columns}
                  iscolumnhidden="data-table-column-hidden"
                  iscolumnfooter="bootstrap-table"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Input Search Datatable</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Images in Bootstrap are made responsive with{" "}
                <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                <code>height: auto;</code> are applied to the image so that it
                scales with the parent element.
              </p>
              <div className="table-responsive">
                <Datatable
                  className="table-striped"
                  data={DataTableOptions.data}
                  columns={DataTableOptions.columns}
                  iscolumnfilter="input-search-filter"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Multi-language Datatable</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Images in Bootstrap are made responsive with{" "}
                <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                <code>height: auto;</code> are applied to the image so that it
                scales with the parent element.
              </p>
              <div className="table-responsive">
                <select
                  id="langSelector"
                  className="form-control mb-3"
                  defaultValue="eng"
                  islanguagefilter=""
                >
                  <option
                    value="german"
                    id="german"
                    data-path="//cdn.datatables.net/plug-ins/a5734b29083/i18n/German.json"
                  >
                    German
                  </option>
                  <option
                    value="french"
                    id="french"
                    data-path="//cdn.datatables.net/plug-ins/a5734b29083/i18n/French.json"
                  >
                    French
                  </option>
                  <option
                    value="hindi"
                    id="hindi"
                    data-path="//cdn.datatables.net/plug-ins/a5734b29083/i18n/Hindi.json"
                  >
                    Hindi
                  </option>
                  <option
                    value="japanase"
                    id="japanase"
                    data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
                  >
                    Japanese
                  </option>
                  <option
                    value="eng"
                    id="english"
                    data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json"
                  >
                    English
                  </option>
                </select>
                <Datatable
                  className="table-striped"
                  data={DataTableOptions.data}
                  columns={DataTableOptions.columns}
                  islanguagefilter="language-filter"
                  iscolumnfooter="bootstrap-table"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

TableData.displayName = "TableData";
export default TableData;
