import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post(`https://secret-plains-68733.herokuapp.com/services`, data).then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h2>Add a serviec</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="Description" {...register("Description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Image url" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    )
}

export default AddService
