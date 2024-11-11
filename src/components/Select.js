import { useField } from "formik"

const Select = ({label, ...props}) => {
    const [field, meta] = useField(props)

    // console.log({field, meta})
    return(
        <div className="control">
            <label className="label">{label}</label>
            <select className="input" {...field} {...props}/>    
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
    )
}

export default Select