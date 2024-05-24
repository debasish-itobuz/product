import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Banner from "../Banner";
import AddCategoryForm from "./AddCategoryForm";
import { AiFillDashboard } from "react-icons/ai";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "abcd",
    selector: (row) => row.abcd,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    abcd: "asdasd",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    abcd: "dasdas",
  },
];

const AddCategory = () => {
    const [showModal, setshowModal] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 m-0 p-0">
            <Sidebar />
          </div>
          <div className="col-12 col-md-10 m-0 p-0 position-relative">
            <Banner />
            <AddCategoryForm showModal={showModal} closeModal={()=>setshowModal(false)}/>
            <div className="p-3 position-relative z-0">
              <div className="d-flex justify-content-end my-4">
              <span><AiFillDashboard id='icon' /> Dashboard</span><hr></hr>
                <button onClick={()=>setshowModal(true)} className="btn btn-primary">ADD CATEGORY</button>
              </div>
              <DataTable
                columns={columns}
                data={data}
                className=" "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
