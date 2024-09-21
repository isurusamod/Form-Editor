import React, { useState } from 'react';

const FormEditor = () => {
    const [fields, setFields] = useState([{ id: Date.now(), label: '', type: 'text', value: '' }]);

    const handleFieldChange = (id, key, value) => {
        setFields(prevFields =>
            prevFields.map(field =>
                field.id === id ? { ...field, [key]: value } : field
            )
        );
    };

    const addField = () => {
        setFields([...fields, { id: Date.now(), label: '', type: 'text', value: '' }]);
    };

    const removeField = id => {
        setFields(prevFields => prevFields.filter(field => field.id !== id));
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert('Form submitted!'); // Check if this is displayed
        console.log('Form data:', fields);
    };

    return (
        <div className="container mt-5">
            <h2>Form Editor</h2>
            <form onSubmit={handleSubmit}>
                {fields.map(field => (
                    <div key={field.id} className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Label"
                            value={field.label}
                            onChange={e => handleFieldChange(field.id, 'label', e.target.value)}
                        />
                        <select
                            className="form-control mt-2"
                            value={field.type}
                            onChange={e => handleFieldChange(field.id, 'type', e.target.value)}
                        >
                            <option value="text">Text</option>
                            <option value="email">Email</option>
                            <option value="number">Number</option>
                        </select>
                        <input
                            type={field.type}
                            className="form-control mt-2"
                            placeholder="Value"
                            value={field.value}
                            onChange={e => handleFieldChange(field.id, 'value', e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-danger mt-2"
                            onClick={() => removeField(field.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" className="btn btn-primary" onClick={addField}>
                    Add Field
                </button>
                <button type="submit" className="btn btn-success mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormEditor;
