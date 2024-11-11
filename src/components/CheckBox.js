import { useField } from "formik";


const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({...props, type:'checkbox'});
    
    return (
        <div className="control">
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default CheckBox;