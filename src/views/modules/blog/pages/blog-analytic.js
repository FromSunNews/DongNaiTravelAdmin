import React,{ memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Button, Dropdown, Image } from "react-bootstrap";

//Apexcharts
import Chart from "react-apexcharts";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//Component
import Card from "../../../../components/bootstrap/card";
import CustomToggle from "../../../../components/dropdowns";
import AnalyticsCard from "../components/analytics-card";
import Blogcard from "../components/blogcard";

//Img
import img1 from "../../../../assets/modules/blog/images/blog-avatar/06.png";
import img2 from "../../../../assets/modules/blog/images/blog-avatar/02.png";
import img3 from "../../../../assets/modules/blog/images/blog-avatar/03.png";
import img4 from "../../../../assets/modules/blog/images/blog-avatar/04.png";
import img5 from "../../../../assets/modules/blog/images/blog-avatar/05.png";
import img6 from "../../../../assets/modules/blog/images/blog-analytic/24.png";
import img7 from "../../../../assets/modules/blog/images/blog-analytic/27.png";
import img8 from "../../../../assets/modules/blog/images/blog-avatar/02.png";
import img9 from "../../../../assets/modules/blog/images/blog-avatar/03.png";
import img10 from "../../../../assets/modules/blog/images/blog-avatar/04.png";
import img11 from "../../../../assets/modules/blog/images/blog-avatar/05.png";
import img12 from "../../../../assets/modules/blog/images/blog-avatar/06.png";
import img13 from "../../../../assets/modules/blog/images/blog-avatar/07.png";
import DataTable from "../../../../components/DataTable";

const bloganalytic = memo(() => {
  const chart1 = {
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "25 Jan",
          "8 Feb",
          "22 Feb",
          "8 Mar",
          "22 Mar",
          "5 Apr",
          "2 May",
          "26 May",
          "1 June",
        ],
      },
    },
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41, 70, 60],
      },
    ],
  };
  const chart2 = {
    options: {
      chart: {
        fontFamily:
          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      colors: ["#3a57e8", "#4bc7d2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false,
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 50, 80],
          colors: ["#3a57e8", "#4bc7d2"],
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "total",
        data: [94, 80, 94, 80, 94, 80, 94],
      },
      {
        name: "pipline",
        data: [72, 60, 84, 60, 74, 60, 78],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {},
      colors: ["#ff6600", "#f16a1b"],
      labels: ["Storage"],
    },
    series: [70],
  };

  const chart4 = {
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        labels: {
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "Successful deals",
        data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35],
      },
      {
        name: "Failed deals",
        data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55],
      },
    ],
  };
  const chart5 = {
    options: {
      chart: {},
      colors: ["#3A57E8", "#F16A1B", "#9A18FF"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "15px",
              show: true,
            },
            value: {
              fontSize: "15px",
              show: true,
            },
          },
        },
      },
      labels: ["Informative Blogs", "Food Blogs", "Lifestyle Blogs"],
    },
    series: [75, 80, 85],
  };

  const BlogTable = {
    data: [
      {
        user: {
          img: img1,
          name: "Oscar Phelps",
        },
        email: "oscarp@example.com",
        number: "(307) 555-0133",
        detail:'25'
      },
      {
        user: {
          img: img2,
          name: "Joy Mason",
        },
        email: "joy_mason@example.com",
        number: "(319) 555-0115",
        detail:'65'
      },
      {
        user: {
          img: img3,
          name: "Clinette Mark",
        },
        email: "Clinette64@example.com",
        number: "(603) 555-0123",
        detail:'48'
      },
      {
        user: {
          img: img4,
          name: "Marie Clark",
        },
        email: "clark.marie@example.com",
        number: "(629) 555-0129",
        detail:'45'
      },
      {
        user: {
          img: img5,
          name: "Jamie Park",
        },
        email: "jamie6545@example.com",
        number: "(270) 555-0117",
        detail:'25'
      },
    ],
    columns: [
      {
        title: "User",
        data: "user",
        render: function (data, type) {
          return (
            ' <div class="d-flex align-items-center"><a href=""><div class="d-flex align-items-center gap-3"><img class="img-fluid avatar-50 rounded-circle" src="' +
            data.img +
            '" alt="profile" loading="lazy" /><div><span class="fw-bold">' +
            data.name +
            '</span><p class="text-body mb-0">' +
            data.name +
            "</p></div></div></a></div>"
          );
        },
      },
      {
        title: "Email",
        data: "email",
      },
      {
        title: "Contac No:",
        data: "number",
      },
      {
        title:'More Detail',
        data:'detail'
      }
    ],
  };
  return (
    <Fragment>
      <div className="mb-5">
        <div className="d-flex flex-wrap justify-content-between mb-4">
          <h3 className="mb-0">Analytics Overview</h3>
          <Dropdown>
            Last 30 Days
            <Dropdown.Toggle as={CustomToggle}>
              <svg
                width="14"
                className="ms-1 text-muted"
                id="dropdownMenuLink1"
                role="button"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.5L5 5.5L1 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu aria-labelledby="dropdownMenuButton1">
              <li>
                <Dropdown.Item href="#">Action</Dropdown.Item>
              </li>
              <li>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
              </li>
              <li>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Row>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="862.2k"
              content="Last 7 Days Follower Growth"
              number="10%"
              textColor="text-danger"
              content1="Decrease from last week"
            />
          </Col>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="4.1M"
              content="Last 30 Days Follower Growth"
              number="24%"
              textColor="text-danger"
              content1="Decrease from last week"
            />
          </Col>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="143.7k"
              content="Average Daily Growth"
              number="10%"
              textColor="text-success"
              content1="change"
            />
          </Col>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="4.2M"
              content="Average Monthly Growth"
              number="10%"
              textColor="text-danger"
              content1="Change"
            />
          </Col>
          <Col lg="8">
            <Card>
              <Card.Header className="flex-wrap d-flex justify-content-between align-items-center">
                <Card.Header.Title>
                  <h4 className="card-title">Followers</h4>
                </Card.Header.Title>
                <ul
                  className="nav nav-tabs nav-tunnel nav-slider mb-0"
                  data-toggle="slider-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Button
                      bsPrefix="nav-link active d-flex align-items-center"
                      data-bs-toggle="tab"
                      data-bs-target="#blog-chart-1"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Growth
                    </Button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Button
                      bsPrefix="nav-link d-flex align-items-center"
                      data-bs-toggle="tab"
                      data-bs-target="#blog-chart-2"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Fall
                    </Button>
                  </li>
                </ul>
              </Card.Header>
              <Card.Body>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="blog-chart-1"
                    role="tabpanel"
                  >
                    <Chart
                      options={chart1.options}
                      series={chart1.series}
                      type="line"
                      height="245"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="blog-chart-2"
                    role="tabpanel"
                  >
                    <Chart
                      options={chart2.options}
                      series={chart2.series}
                      type="line"
                      height="245"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <h4 className="mb-0 card-title">Users </h4>
                <Button className="btn btn-sm btn-primary">View All</Button>
              </Card.Header>
              <Card.Body className="card-body px-0 pb-0">
                <div className="table-responsive custom-table-2">
                  <DataTable
                    data={BlogTable.data}
                    columns={BlogTable.columns}
                    iscolumnfilter = 'data-table-filter'
                  />
                </div>
              </Card.Body>
            </Card>
            <div>
              <div className="mb-4">
                <h4 className="mb-0">Trending Blogs</h4>
              </div>
              <div className="overflow-hidden d-slider1 ">
                <Swiper
                  className="p-0 m-0 mb-2 list-inline "
                  slidesPerView={2}
                  spaceBetween={32}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                >
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img7}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Expierience: Travel Tales From India and Abroad."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img6}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Ultimate Travel Guide: What To Do, See & Eat."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img7}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Expierience: Travel Tales From India and Abroad."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img6}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Ultimate Travel Guide: What To Do, See & Eat."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt-0 mt-sm-md-0">
            <Card>
              <Card.Header>
                <h4 className="mb-0">New Visitors </h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="7" xl="6" md="6">
                    <Chart
                      options={chart3.options}
                      series={chart3.series}
                      type="radialBar"
                      height="250"
                    />
                  </Col>
                  <Col
                    lg="5"
                    xl="6"
                    md="6"
                    className="p-0 d-flex align-items-center justify-content-center flex-column"
                  >
                    <div className="d-flex align-items-center">
                      <h4 className="text-primary">1,293</h4>
                      <p className="mb-0 ms-3">Daily</p>
                    </div>
                    <div className="d-flex align-items-center my-4">
                      <h4 className="text-primary">10,237</h4>
                      <p className="mb-0 ms-3">Monthly</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="text-primary">11,293</h4>
                      <p className="mb-0 ms-3">Yearly</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-5">
              <Card.Header>
                <h5 className="mb-0">Top Social Media Shared</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-fluid me-3 avatar-50 rounded-circle"
                      src={img8}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Jane Cooper</h6>
                      <small className="para-ellipsis">
                        Lorem ipsum dolor consectetur sit amet.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      className="me-2"
                      width="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                        fill="#FFD329"
                      />
                    </svg>{" "}
                    3.5
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-fluid me-3 avatar-50 rounded-circle"
                      src={img9}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Wade Warren</h6>
                      <small className="para-ellipsis">
                        Lorem ipsum dolor consectetur sit amet.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      className="me-2"
                      width="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                        fill="#FFD329"
                      />
                    </svg>{" "}
                    3.5
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-fluid me-3 avatar-50 rounded-circle"
                      src={img10}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Jacob Jones</h6>
                      <small className="para-ellipsis">
                        Lorem ipsum dolor consectetur sit amet.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      className="me-2"
                      width="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                        fill="#FFD329"
                      />
                    </svg>{" "}
                    3.5
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-fluid me-3 avatar-50 rounded-circle"
                      src={img11}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Cody Fisher</h6>
                      <small className="para-ellipsis">
                        Lorem ipsum dolor consectetur sit amet.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      className="me-2"
                      width="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                        fill="#FFD329"
                      />
                    </svg>{" "}
                    3.5
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-fluid me-3 avatar-50 rounded-circle"
                      src={img12}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Cody Fisher</h6>
                      <small className="para-ellipsis">
                        Lorem ipsum dolor consectetur sit amet.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      className="me-2"
                      width="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                        fill="#FFD329"
                      />
                    </svg>{" "}
                    3.5
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-fluid me-3 avatar-50 rounded-circle"
                      src={img13}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Cody Fisher</h6>
                      <small className="para-ellipsis">
                        Lorem ipsum dolor consectetur sit amet.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      className="me-2"
                      width="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                        fill="#FFD329"
                      />
                    </svg>{" "}
                    3.5
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Most Viewed Blogs</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="12" xl="6" md="6">
                    <Chart
                      options={chart5.options}
                      series={chart5.series}
                      type="radialBar"
                      height="250"
                    />
                  </Col>
                  <Col
                    lg="12"
                    xl="6"
                    md="6"
                    className="p-0 d-flex align-items-center justify-content-center"
                  >
                    <div className="">
                      <p>
                        <svg
                          width="8"
                          className="me-2"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="#3A57E8" />
                        </svg>
                        Informative Blogs - 75%
                      </p>

                      <p>
                        <svg
                          width="8"
                          className="me-2"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="#F16A1B" />
                        </svg>
                        Food Blogs - 80%
                      </p>

                      <p>
                        <svg
                          width="8"
                          className="me-2"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="#9A18FF" />
                        </svg>
                        Lifestyle Blogs - 85%
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="align-items-center">
                <h5 className="card-title mb-0">Devices</h5>
                <Dropdown>
                  <Dropdown.Toggle
                    as="svg"
                    width="4"
                    id="news-dropdown"
                    viewBox="0 0 5 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="3" r="2.5" fill="currentcolor" />
                    <circle cx="2.5" cy="14" r="2.5" fill="currentcolor" />
                    <circle cx="2.5" cy="25" r="2.5" fill="currentcolor" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className=" dropdown-menu-end"
                    aria-labelledby="news-dropdown"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body>
                <Chart
                  className="d-activity"
                  options={chart4.options}
                  series={chart4.series}
                  type="bar"
                  height="280"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
});

bloganalytic.displayName = "bloganalytic";
export default bloganalytic;
