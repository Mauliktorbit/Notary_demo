import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

export default function NotaryWriter() {
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    calculateDays(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    calculateDays(startDate, e.target.value);
  };

  const calculateDays = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      const differenceInTime = endDateObj - startDateObj;
      const differenceInDays = Math.ceil(
        differenceInTime / (1000 * 60 * 60 * 24)
      );
      setTotalDays(differenceInDays > 0 ? differenceInDays : 0);
    } else {
      setTotalDays(0);
    }
  };

  const modules = {
    toolbar: [
      ["bold", "italic"], // Bold and Italic buttons
      [{ list: "bullet" }], // Bullet list
    ],
  };

  const formats = ["bold", "italic", "list"];

  return (
    <>
      <div className="main-component">
        <div className="childe-component">
          <h3 className="childe-title">Description</h3>

          <div className="row mt-4">
            <div className="col-1">
              <div className="form-group">
                <p>Tenure Date</p>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={handleStartDateChange}
                  required
                />
              </div>
            </div>
            <div className="col-1">
              <div className="form-group">
                <p>To</p>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  value={endDate}
                  onChange={handleEndDateChange}
                  required
                />
              </div>
            </div>
            <div className="col-1">
              <div className="form-group">
                <p>- -</p>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  value={totalDays}
                  readOnly
                />
              </div>
            </div>
          </div>

          <label className="mb-2 mt-2">Notary Description</label>
          <div className="notary-writer-container">
            <ReactQuill
              value={content}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              className="custom-quill"
            />
          </div>

          <p className="my-4" style={{ textAlign: "center" }}>
            Or
          </p>

          <div className="col-12">
            <div className="uploadfile-notry">
              <i className="fa-regular fa-file-pdf"></i>
              Upload a PDF of Job Description
              <input type="file" />
            </div>
          </div>

          {/* <div className="col-12 mt-4">
            <div className="form-group">
              <label>Notary Id</label>
              <input
                type="number"
                name="notary_id"
                className="form-control"
                placeholder="Enter Notary Id"
                required
              />
            </div>
          </div> */}

          <div
            className="btn-path mt-5"
            style={{ justifyContent: "space-around" }}
          >
            <Link
              to={"/secondparty"}
              className="btn btn-cancel me-3 white-or small-long"
            >
              Back
            </Link>
            <Link
              to={"/PreviewNotary"}
              className="btn btn-cancel me-3 small-long"
            >
              Next
            </Link>
            <Link
              to={"/BusinessUserSelectLoyer"}
              className="btn btn-cancel me-3 small-long"
            >
              Document Lock
            </Link>
            <button type="submit" className="btn btn-submit small-long">
              Save
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}
