import React, { Fragment } from "react";
// react-bootstrap
import { Row, Col, Button } from "react-bootstrap";
// components
import Card from "../../../../components/bootstrap/card";
// plugin
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { flattenTree } from "react-accessible-treeview";
import cx from "classnames";

const Treeview = () => {
  // define the array of data
  const folder = {
    name: "",
    children: [
      {
        name: "assets",
        children: [
          { name: "custom" ,
        children: [
          { name: "css" },
          { name: "font.json" },
          { name: "scss" },
        ]},
          { name: "images",
          children: [
            { name: "all images folder" },
            
          ] },
          { name: "modules",
          children: [
            { name: "appointment" },
            { name: "blog" },
            { name: "chat" },
            { name: "e-commerce" },
            { name: "file-manager" },
            { name: "mail" },
            { name: "social" },
          ]},
          { name: "scss",
          children: [
            { name: "css" },
            { name: "font.json" },
            { name: "scss" },
          ] },
          { name: "sortable",
          children: [
            { name: "css" },
            { name: "font.json" },
            { name: "scss" },
          ] },
        ],
      },
      {
        name: "views",
        children: [
          { name: "dashboard"},
          { name: "modules" },
          { name: "uikit" },
          { name: "index.js" },
        ],
      },
      {
        name: "layouts",
        children: [
          { name: "Dashboard" },
          { name: "Module" },
        ],
      },
      {
        name: "router",
        children: [
          { name: "Dashboard" },
          { name: "Layout" }
        ],
      },
    ],
  };

  const data = flattenTree(folder);

  const ArrowIcon = ({ isOpen, className }) => {
    const baseClass = "arrow";
    const classes = cx(
      baseClass,
      { [`${baseClass}--closed`]: !isOpen },
      { [`${baseClass}--open`]: isOpen },
      className
    );
    return <IoMdArrowDropright className={classes} />;
  };

  const CheckBoxIcon = ({ variant, ...rest }) => {
    switch (variant) {
      case "all":
        return <FaCheckSquare {...rest} />;
      case "none":
        return <FaSquare {...rest} />;
      case "some":
        return <FaMinusSquare {...rest} />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">TreeView</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Apexcharts Plugin refer
                  <Button
                    bsPrefix=" "
                    target="_blank"
                    href="https://dgreene1.github.io/react-accessible-treeview/docs/examples-MultiSelectCheckboxAsync"
                  >
                    Documentation
                  </Button>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4> Simple Treeview</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <TreeView
                className="list-unstyled"
                data={data}
                aria-label="Checkbox tree"
                multiSelect
                propagateSelect
                propagateSelectUpwards
                togglableSelect
                nodeRenderer={({
                  element,
                  isBranch,
                  isExpanded,
                  getNodeProps,
                  level,
                  handleExpand,
                  className
                }) => {
                  return (
                    <div
                      {...getNodeProps({ onClick: handleExpand })}
                      style={{ marginLeft: 5 * (level - 1) }}
                    >
                      {isBranch && <ArrowIcon isOpen={isExpanded} />}
                      <span>{element.name}</span>
                    </div>
                  );
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Checkbox Treeview</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <TreeView
                className="list-unstyled"
                data={data}
                aria-label="Checkbox tree"
                multiSelect
                propagateSelect
                propagateSelectUpwards
                togglableSelect
                nodeRenderer={({
                  element,
                  isBranch,
                  isExpanded,
                  isSelected,
                  isHalfSelected,
                  getNodeProps,
                  level,
                  handleSelect,
                  handleExpand,
                }) => {
                  return (
                    <div
                      {...getNodeProps({ onClick: handleExpand })}
                      style={{ marginLeft: 5 * (level - 1) }}
                    >
                      {isBranch && <ArrowIcon isOpen={isExpanded} />}
                      <CheckBoxIcon
                        className="form-check-input"
                        onClick={(e) => {
                          handleSelect(e);
                          e.stopPropagation();
                        }}
                        variant={
                          isHalfSelected ? "some" : isSelected ? "all" : "none"
                        }
                      />
                      <span className="name ms-2" >{element.name}</span>
                    </div>
                  );
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Treeview;
