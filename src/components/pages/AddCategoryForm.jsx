import React, { useState, useRef } from "react";
import "./css/Category.css";
import { addCategory } from "../../service/api.js";
import { AiFillCloseCircle } from "react-icons/ai";

const AddCategoryForm = ({ showModal, closeModal }) => {
    const [value, setValue] = useState({
        cname: "",
        image: "",
    });

    const [error, setError] = useState("");

    const onValueChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const ImageFile = (e) => {
        const file = e.target.files[0];
        if (file && file.type !== "image/png") {
            setError("Please upload an image in PNG format!");
            setValue({ ...value, image: "" });
            e.target.value = ""; // Clear the file input
            return;
        }
        setError("");
        setValue({ ...value, image: file });
    };

    const nameRef = useRef(null);
    const imageRef = useRef(null);

    const submitData = async (e) => {
        e.preventDefault();
        const { cname, image } = value;

        if (!cname) {
            alert("Enter Your Name!");
            nameRef.current.focus();
            return;
        } else if (!image) {
            alert("Please Upload Image File!");
            imageRef.current.focus();
            return;
        } else if (image.size > 150 * 1000) {
            alert("Please Upload Image File within 150kb!");
            imageRef.current.focus();
            return;
        }

        const formData = new FormData();
        formData.append("image", image, image.name);
        formData.append("cname", cname);

        try {
            const res = await addCategory(formData);
            if (res.status === 201) {
                alert("Data Inserted");
            } else {
                alert("Something Went Wrong");
            }
        } catch (error) {
            console.error("Error while adding category:", error);
            alert("Something Went Wrong");
        }
    };

    return (
        <>
            {showModal && (
                <form className="position-absolute bg-white categoryform add-category-form">
                    <div className=" pl-3 pr-3">
                        <div className="d-flex justify-content-between ">
                            <h6 className="pb-0">Add Category Item</h6>
                            <div role="button" onClick={closeModal} h-100 w-100>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <hr></hr>

                        <div className="form-group">
                            <label htmlFor="cname">
                                Category Name <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="cname"
                                ref={nameRef}
                                className="form-control"
                                onChange={onValueChange}
                                id="cname"
                                placeholder="Enter Category Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">
                                Category Image <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                type="file"
                                ref={imageRef}
                                name="image"
                                onChange={ImageFile}
                                className="form-control"
                                id="image"
                            />
                            {error && <div className="text-danger mt-2">{error}</div>}
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="d-block float-right">
                                    <button
                                        type="button"
                                        className="btn btn-danger mr-3"
                                        onClick={() => setValue({ cname: "", image: "" })}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="button"
                                        onClick={submitData}
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default AddCategoryForm;
