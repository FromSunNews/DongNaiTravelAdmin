import  React,{ useState, memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Form, Button, Collapse } from "react-bootstrap";

// Components
import Card from "../../../../components/bootstrap/card";

// Signature pulgin
import SignaturePad from "react-signature-pad-wrapper";

//Flatpickr
import Flatpickr from "react-flatpickr";

//Img
import img1 from "../../../../assets/modules/appointment/images/signature/01.svg";
import img2 from "../../../../assets/modules/appointment/images/signature/02.svg";
import img3 from "../../../../assets/modules/appointment/images/signature/04.svg";
import img4 from "../../../../assets/modules/appointment/images/signature/03.svg";
import img5 from "../../../../assets/modules/appointment/images/signature/05.svg";
import DataTable from "../../../../components/DataTable";

const Doctorvisit = memo(() => {
  const [open, setOpen] = useState(true);

  const DoctorVisitTable = {
    data: [
      {
        name: "Anne Hathaway",
        department: "Gastroenterologists",
        intime: "02:00 PM",
        outtime: "06:00 PM",
        actions: {
          color: "danger",
          status: "Doctor Out",
        },
        signature: img1,
      },
      {
        name: "Ella Mai",
        department: "Hematologists",
        intime: "04:00 PM",
        outtime: "08:00 PM",
        actions: {
          color: "success",
          status: "Doctor In",
        },
        signature: img2,
      },
      {
        name: "Jhon Doe",
        department: "Anesthesiologists",
        intime: "--",
        outtime: "--",
        actions: {
          color: "danger",
          status: "Doctor Out",
        },
        signature: img3,
      },
      {
        name: "Marcelo Vieira",
        department: "Endocrinologists",
        intime: "08:00 AM",
        outtime: "--",
        actions: {
          color: "success",
          status: "Doctor In",
        },
        signature: img4,
      },
      {
        name: "Willow Smith",
        department: "Internists",
        intime: "08:00 AM",
        outtime: "12:00 PM",
        actions: {
          color: "success",
          status: "Doctor In",
        },
        signature: img5,
      },
    ],
    columns: [
      {
        title: "Name",
        data: "name",
        render: function (data) {
          return "<h6>" + data + "</h6>";
        },
      },
      {
        title: "Department",
        data: "department",
      },
      {
        title: "In Time",
        data: "intime",
      },
      {
        title: "Status",
        data: "actions",
        render: function (data, type) {
          return (
            '<div class="bg-' +
            data.color +
            ' text-white badge rounded-pill">' +
            data.status +
            "</div>"
          );
        },
      },
      {
        title: "Signature",
        data: "signature",
        render: function (data) {
          return '<img class="avatar-50" src=' + data + ' alt="sign" />';
        },
      },
    ],
  };
  return (
    <Fragment>
      <Row>
        <Col md="12">
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="card-title mb-0">
                <h4 className="mb-0">Doctor visit</h4>
              </div>
              <div className="card-action mt-2 mt-sm-0">
                <Button
                  className="btn-primary"
                  onClick={() => setOpen(!open)}
                  aria-controls="collapseExample"
                  aria-expanded={open}
                >
                  Close
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Collapse in={open}>
          <Col lg="12">
            <Card id="collapseExample">
              <Card.Body>
                <Row>
                  <Col lg="8">
                    <div className="form-group">
                      <Form.Label htmlFor="name">Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        aria-describedby="name"
                      />
                    </div>
                    <div className="form-group">
                      <Form.Label htmlFor="department">Department</Form.Label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="department"
                      >
                        <option defaultValue="0">select department</option>
                        <option defaultValue="1">Anesthesiologists</option>
                        <option defaultValue="2">Cardiologists</option>
                        <option defaultValue="3">Dermatologists</option>
                        <option defaultValue="4">Gastroenterologists</option>
                        <option defaultValue="5">Hematologists</option>
                        <option defaultValue="6">Internists</option>
                        <option defaultValue="7">Medical Geneticists</option>
                        <option defaultValue="8">Nephrologists</option>
                        <option defaultValue="9">Neurologists</option>
                        <option defaultValue="10">Ophthalmologists</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <Form.Label htmlFor="time">In Time</Form.Label>
                      <Flatpickr
                        className="form-control time_flatpicker"
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i",
                        }}
                        id="time"
                        placeholder="In Time"
                      />
                    </div>
                    <div className="form-group">
                      <Form.Label htmlFor="out">Out Time</Form.Label>
                      <Flatpickr
                        className="form-control time_flatpicker"
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i",
                        }}
                        id="out"
                        placeholder="Out Time"
                      />
                    </div>
                  </Col>
                  <Col lg="4">
                    <h5 className="text-center">Signature</h5>
                    <div
                      className="text-center"
                      style={{ background: "aliceblue" }}
                    >
                      <div>
                        <SignaturePad />
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <Button variant="primary">Save</Button>
                      <Button
                        variant="danger"
                        className="ms-3"
                        onClick={() => setOpen(!open)}
                        aria-controls="collapseExample"
                        aria-expanded={open}
                      >
                        Clear
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Collapse>
        <Col lg="12">
        <Card className="card-body px-0">
        <div className="fancy-table table-responsive">
        <DataTable
        data={DoctorVisitTable.data}
        columns={DoctorVisitTable.columns}
        iscolumnfilter='doctor-visit-filter'
        />
        </div>
        </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Doctorvisit.displayName = "Doctorvisit";
export default Doctorvisit;
