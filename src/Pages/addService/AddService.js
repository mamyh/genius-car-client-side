import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post(`https://secret-plains-68733.herokuapp.com/services`, data).then(res => {
            if (res.data.insertedId) {
                alert('service added successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h1>Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="your Name"  {...register("name")} />
                <textarea placeholder="descrition" {...register("Description")}></textarea>
                <input type="number"   {...register("price")} />
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="image link"  {...register("img")} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddService;
